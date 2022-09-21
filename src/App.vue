<script setup lang="ts">
// element-plus 组件 国际化
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
// vue-i18n 国际化
import { useI18n } from 'vue-i18n'
const { t, locale: i18nLocale } = useI18n()

let lang = $ref('zh-cn')
const toggleLang = () => {
  i18nLocale.value = lang === 'zh-cn' ? 'en' : 'zh-CN'
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
        {{ t('message.changeLanguage') }}
      </el-button>

      <router-link to="/home/1">
        {{ t('message.home') }}
      </router-link>
      <router-link to="/mine">
        {{ t('message.mine') }}
      </router-link>
      <router-view />
    </div>
  </el-config-provider>
</template>

<style>

</style>
