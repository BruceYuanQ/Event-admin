<script setup>
import { artGetChannelService } from '@/api/article'
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelService()
  channelList.value = res.data.data
}
getChannelList()
</script>
<!-- label展示给用户看的，value收集起来提交给后台的 -->
<!-- v-model拆解为modelValue和update -->
<template>
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :style="{ width }"
  >
    <el-option
      :key="channel.id"
      v-for="channel in channelList"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>
