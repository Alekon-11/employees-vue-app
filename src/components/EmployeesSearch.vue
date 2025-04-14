<template>
    <input
        :value="modelValue"
        type="text"
        class="form-control search-input"
        placeholder="Найти сотрудника"
        @input="searchEmployee"
    />
</template>

<script setup lang="ts">
interface Props {
    modelValue: string
}

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
defineProps<Props>()

const searchEmployee = (e: Event) => {
    const event = e.target as HTMLInputElement
    emit('update:modelValue', event.value)
}
</script>

<style scoped></style>
