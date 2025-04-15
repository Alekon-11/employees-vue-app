<template>
    <div class="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form class="add-form d-flex" @submit.prevent="addEmployee">
            <input v-model="name" type="text" class="form-control new-post-label" placeholder="Как его зовут?" />
            <input v-model="salary" type="number" class="form-control new-post-label" placeholder="З/П в $?" />

            <button type="submit" class="btn btn-outline-light">Добавить</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Employee } from '../interfaces/Employee'

const name = ref<string>('')
const salary = ref<null | number>(null)
const emit = defineEmits<{
    (e: 'add-employee', employee: Employee): void
}>()

const addEmployee = () => {
    const newEmployee = {
        name: name.value,
        salary: salary.value,
        id: Date.now(),
        increase: false,
        reward: false
    }

    if (name.value && salary.value) {
        emit('add-employee', newEmployee)

        name.value = ''
        salary.value = null
    }
}
</script>

<style scoped>
.app-add-form {
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    color: #fff;
}

.add-form {
    margin-top: 20px;
}

.add-form input {
    width: 350px;
    margin-right: 20px;
}
</style>
