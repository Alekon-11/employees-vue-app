<template>
    <div class="app">
        <EmployeesHeader />

        <div class="search-panel">
            <EmployeesSearch />
            <EmployeesFIlter />
        </div>

        <EmployeesList />
        <EmployeesAddForm />
    </div>
</template>

<script setup lang="ts">
import EmployeesAddForm from './components/EmployeesAddForm.vue'
import EmployeesFIlter from './components/EmployeesFIlter.vue'
import EmployeesHeader from './components/EmployeesHeader.vue'
import EmployeesList from './components/EmployeesList.vue'
import EmployeesSearch from './components/EmployeesSearch.vue'
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
