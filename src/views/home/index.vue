<script setup lang="ts">
import { yesOrNo } from '../../api/index'
import IndexedDB from '../../utils/indexDB'

defineProps({
  id: String,
})

const indexedDB = new IndexedDB('test')

indexedDB.openStore('todoList', 'id', ['title', 'completed'])

const input = ref('')

const open = () => {
  ElMessage({
    message: () => h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const date1 = ref('')
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
    <el-date-picker v-model="date1" type="week" format="[Week] ww" placeholder="Pick a week" />
  </div>
</template>

<style>

</style>
