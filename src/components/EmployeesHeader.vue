<template>
    <div class="app-info">
        <h1>Учет сотрудников в компании "Z[H]ero"</h1>
        <h2>Общее число сотрудников: {{ totalEmployees }}</h2>
        <h2>Премию получат: {{ totalRewards }}</h2>
    </div>
</template>

<script setup lang="ts">
interface Props {
    totalEmployees: number
    totalRewards: number
}

defineProps<Props>()
</script>

<style scoped>
.app-info {
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.15);
    color: #fff;
}
</style>
