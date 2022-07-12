<script setup lang="ts">
defineProps({
  id: String,
})
const input = ref('')
</script>

<template>
  <div>
    Home
    <div>来自 params {{ $route.params.id }}</div>
    <div>来自props {{ $route.params.id }}</div>
    <el-button>Default</el-button>
    <el-input v-model="input" placeholder="Please input" />
    <div>Your Input {{ input }}</div>
  </div>
</template>

<style>
</style>
