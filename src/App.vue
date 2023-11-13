<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
//路由对象
const router = useRouter()
//路由参数
const route = useRoute()
console.log(router, route, userStore)

const userStore = useUserStore()
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
