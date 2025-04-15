<template>
    <div class="btn-group">
        <button
            v-for="filter in filters"
            type="button"
            class="btn"
            :class="{
                'btn-light': filter.value === currentFilter.value,
                'btn-outline-light': filter.value !== currentFilter.value
            }"
            @click="() => switchFilter(filter)"
        >
            {{ filter.text }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Filter } from '../types/Filters'

interface Props {
    currentFilter: Filter
}

const filters = ref<Filter[]>([
    { value: 'All', text: 'Все сотрудники' },
    { value: 'Rise', text: 'На повышение' },
    { value: 'Over', text: 'З/П больше 1000$' }
])

const emit = defineEmits<{
    (e: 'switch-filter', filter: Filter): void
}>()

const switchFilter = (filter: Filter) => {
    emit('switch-filter', filter)
}

defineProps<Props>()
</script>

<style scoped>
.btn-group {
    margin-top: 20px;
}
</style>
