<template>
    <div class="app">
        <EmployeesHeader />

        <div class="search-panel">
            <EmployeesSearch />
            <EmployeesFilter />
        </div>

        <EmployeesList
            @remove-employee="removeEmployee"
            @toggle-increase="toggleIncrease"
            @toggle-reward="toggleReward"
            :employees="employees"
        />
        <EmployeesAddForm />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EmployeesAddForm from './components/EmployeesAddForm.vue'
import EmployeesFilter from './components/EmployeesFilter.vue'
import EmployeesHeader from './components/EmployeesHeader.vue'
import EmployeesList from './components/EmployeesList.vue'
import EmployeesSearch from './components/EmployeesSearch.vue'

import type { Employee } from './interfaces/Employee'

const employees = ref<Employee[]>([
    { name: 'Jhon Smith', salary: 1000, id: 0, increase: true, reward: false },
    { name: 'Alton Jhon', salary: 500, id: 1, increase: false, reward: true },
    { name: 'Tisha Katava', salary: 7000, id: 2, increase: false, reward: false }
])

const toggleIncrease = (id: number) => {
    const targetEmployee = employees.value.find(item => item.id === id)

    if (targetEmployee) {
        targetEmployee.increase = !targetEmployee.increase
    }
}
const toggleReward = (id: number) => {
    const targetEmployee = employees.value.find(item => item.id === id)

    if (targetEmployee) {
        targetEmployee.reward = !targetEmployee.reward
    }
}
const removeEmployee = (id: number) => {
    const newList = employees.value.filter(item => item.id !== id)
    employees.value = newList
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
