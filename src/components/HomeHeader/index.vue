<template>
  <div class="HomeHeader">
    <el-icon class="icon">
      <component :is="isFold ? 'fold' : 'expand'" @click="handleFold" />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HomeHeader',
  emits: ['handleCollapse'],
  setup(_, { emit }) {
    const isFold = ref(false)
    const handleFold = () => {
      isFold.value = !isFold.value
      emit('handleCollapse', isFold.value)
    }
    return {
      isFold,
      handleFold
    }
  }
})
</script>

<style scoped lang='less'>
.icon {
  font-size: 24px;
  cursor: pointer;
}
</style>
