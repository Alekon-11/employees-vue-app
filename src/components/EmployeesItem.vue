<template>
    <li
        class="list-group-item d-flex justify-content-between"
        :class="{ increase: employee.increase, reward: employee.reward }"
    >
        <span class="list-group-item-label" @click="toggleIncrease">{{ employee.name }}</span>
        <input type="text" class="list-group-item-input" :value="`${employee.salary}$`" />
        <div class="d-flex justify-content-center align-items-center">
            <button type="button" class="btn-cookie btn-sm" @click="toggleReward">
                <i class="fas fa-cookie"></i>
            </button>

            <button type="button" class="btn-trash btn-sm" @click="removeEmployee">
                <i class="fas fa-trash"></i>
            </button>
            <i class="fas fa-star"></i>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { Employee } from '../interfaces/Employee'

interface Props {
    employee: Employee
}

const emit = defineEmits<{
    (e: 'toggle-increase', id: number): void
    (e: 'toggle-reward', id: number): void
    (e: 'remove-employee', id: number): void
}>()

const prop = defineProps<Props>()

const toggleIncrease = () => {
    emit('toggle-increase', prop.employee.id)
}
const toggleReward = () => {
    emit('toggle-reward', prop.employee.id)
}
const removeEmployee = () => {
    emit('remove-employee', prop.employee.id)
}
</script>

<style scoped>
.list-group-item {
    padding: 15px 20px;
    border-bottom: 1px solid #3d5a80;
}

.list-group-item:last-child {
    border-bottom: none;
}

.list-group-item span {
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    min-width: 550px;
}

.list-group-item input {
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
}

.list-group-item button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
}

.list-group-item .btn-cookie {
    color: #e09f3e;
}

.list-group-item .btn-trash {
    color: #e5383b;
}

.list-group-item .fa-star {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #ffd700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
}

.list-group-item.increase .fa-star {
    opacity: 1;
    transform: translateX(0px);
}

.list-group-item.reward .list-group-item-label,
.list-group-item.reward .list-group-item-input {
    color: #e09f3e;
}

.list-group-item.reward .btn-star {
    color: #aeaeae;
}
</style>
