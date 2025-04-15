<template>
    <div class="app">
        <EmployeesHeader />

        <div class="search-panel">
            <EmployeesSearch v-model="search" />
            <EmployeesFilter :current-filter="activeFilter" @switch-filter="switchFilter" />
        </div>

        <EmployeesList
            @remove-employee="removeEmployee"
            @toggle-increase="toggleIncrease"
            @toggle-reward="toggleReward"
            @update-salary="updateSalary"
            :employees="filteredEmployees"
        />
        <EmployeesAddForm @add-employee="addEmployee" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import EmployeesAddForm from './components/EmployeesAddForm.vue'
import EmployeesFilter from './components/EmployeesFilter.vue'
import EmployeesHeader from './components/EmployeesHeader.vue'
import EmployeesList from './components/EmployeesList.vue'
import EmployeesSearch from './components/EmployeesSearch.vue'

import type { Employee } from './interfaces/Employee'
import type { Filter } from './types/Filters'

const activeFilter = ref<Filter>({ value: 'All', text: 'Все сотрудники' })
const search = ref<string>('')

const employees = ref<Employee[]>([
    { name: 'Jhon Smith', salary: 1000, id: 0, increase: true, reward: false },
    { name: 'Alton Jhon', salary: 500, id: 1, increase: false, reward: true },
    { name: 'Tisha Katava', salary: 7000, id: 2, increase: false, reward: false }
])

const searchedEmployees = computed(() => {
    return employees.value.filter((item: Employee) => item.name.toLowerCase().includes(search.value.toLowerCase()))
})

const filteredEmployees = computed(() => {
    let filtered = employees.value

    if (search.value.trim()) {
        filtered = searchedEmployees.value
    }

    switch (activeFilter.value.value) {
        case 'Rise':
            filtered = employees.value.filter((item: Employee) => item.increase)
            break
        case 'Over':
            filtered = employees.value.filter((item: Employee) => item.salary !== null && item.salary >= 1000)
            break
        case 'All':
        default:
            return filtered
    }

    return filtered
})

const toggleIncrease = (id: number) => {
    const targetEmployee = employees.value.find((item: Employee) => item.id === id)

    if (targetEmployee) {
        targetEmployee.increase = !targetEmployee.increase
    }
}
const toggleReward = (id: number) => {
    const targetEmployee = employees.value.find((item: Employee) => item.id === id)

    if (targetEmployee) {
        targetEmployee.reward = !targetEmployee.reward
    }
}
const removeEmployee = (id: number) => {
    const newList = employees.value.filter((item: Employee) => item.id !== id)
    employees.value = newList
}
const addEmployee = (employee: Employee) => {
    employees.value.push(employee)
}
const switchFilter = (filter: Filter) => {
    activeFilter.value = filter
}
const updateSalary = (id: number, salary: number) => {
    const targetEmployee = employees.value.find((item: Employee) => item.id === id)

    if (targetEmployee) {
        targetEmployee.salary = salary
    }
}
</script>

<style scoped>
.app {
    margin: 0 auto;
    max-width: 1000px;
}

.search-panel {
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    color: #fff;
}
</style>
