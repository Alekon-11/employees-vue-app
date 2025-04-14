<template>
    <ul class="app-list list-group">
        <EmployeesItem
            @toggle-increase="toggleIncrease"
            @remove-employee="removeEmployee"
            @toggle-reward="toggleReward"
            v-for="employee in employees"
            :employee="employee"
            :key="employee.id"
        />
    </ul>
</template>

<script setup lang="ts">
import EmployeesItem from './EmployeesItem.vue'
import type { Employee } from '../interfaces/Employee'

interface Props {
    employees: Employee[]
}

defineProps<Props>()

const emit = defineEmits<{
    (e: 'toggle-increase', id: number): void
    (e: 'toggle-reward', id: number): void
    (e: 'remove-employee', id: number): void
}>()

const toggleIncrease = (id: number) => {
    emit('toggle-increase', id)
}
const toggleReward = (id: number) => {
    emit('toggle-reward', id)
}
const removeEmployee = (id: number) => {
    emit('remove-employee', id)
}
</script>

<style scoped>
.app-list {
    margin-top: 30px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    color: #fff;
}
</style>
