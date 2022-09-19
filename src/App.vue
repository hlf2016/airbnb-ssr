<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

let lang = $ref('zh-cn')
const toggleLang = () => {
  lang = lang === 'zh-cn' ? 'en' : 'zh-cn'
}

const locale = computed(() => {
  return lang === 'zh-cn' ? zhCn : en
})
</script>

<template>
  <el-config-provider :locale="locale">
    <div>
      <el-button @click="toggleLang()">
        切换语言
      </el-button>

      <router-link to="/home/1">
        首页
      </router-link>
      <router-link to="/mine">
        我的
      </router-link>
      <router-view />
    </div>
  </el-config-provider>
</template>

<style>

</style>
