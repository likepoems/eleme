<template>
  <div>
    <el-rate
    v-model="value"
    disabled
    text-color="#ff9900"
    :max="max"
    score-template="{value}">
  </el-rate>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
</style>
