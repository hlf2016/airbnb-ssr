<script setup lang="ts">
import { yesOrNo } from '../../api/index'

defineProps({
  id: String,
})
const input = ref('')

const open = () => {
  ElMessage({
    message: () => h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>

<template>
  <div>
    Home
    <div text-red>
      <div i-carbon-home />
      来自 params {{ $route.params.id }}
    </div>
    <div>来自props {{ id }}</div>
    <el-button @click="yesOrNo()">
      加载数据
    </el-button>
    <el-button @click="open">
      Default
    </el-button>
    <el-input v-model="input" placeholder="Please input" />
    <div>Your Input {{ input }}</div>
  </div>
</template>

<style>

</style>
