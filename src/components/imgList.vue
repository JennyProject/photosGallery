<script>
import {  ref, defineComponent } from 'vue'
export default defineComponent({
  props: {
    imgNames: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    let imgNames= ref(props.imgNames)
    console.log('父亲传过来的参数', imgNames)
    const baseUrl = 'https://raw.githubusercontent.com/mojiaying/hexo_images/master/picgo/'
    const imgUrls = []
    const imgList = imgNames.value.map(item => {
      const obj = {}
      if(Array.isArray(item)) {
        obj.url =  baseUrl + item[0] + '.webp'
        obj.name = item[1]
        obj.num = item[0]
      } else {
        obj.url =  baseUrl + item + '.webp'
      }
      imgUrls.push(obj.url)
      return obj
    })
    return {
      imgList,
      imgUrls
    }
  },
})
</script>

<template>
  <div class="img_items img_cell">
    <div v-for="(item, index) in imgList" class="img_wrap">
      <el-image
      :src="item.url"
      :zoom-rate="1.2"
      :preview-src-list="imgUrls"
      :initial-index="index"
      fit="contain"
    />
    <div v-if="item.name" class="des">
      <div>图片名称：{{ item.name }}</div>
      <div>图片编号：{{ item.num }}</div>
    </div>
    <el-button v-copy="item.url"  type="primary" class="copy">复制链接</el-button>
    </div>
  </div>
 
</template>

<style scoped>

</style>
