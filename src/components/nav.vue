<template>
  <el-menu :collapse="isCollapse" :default-active="activeIndex" class="el-menu-vertical-demo" background-color="#263238" text-color="#fff" active-text-color="#ffd04b">
    <template v-for="(item, index) in menuList">
      <template v-if="!item.hide">
        <el-sub-menu :index="`${item.path}`" v-if="item.dropdown && item.children?.length" :key="item.name">
        <template #title>
          <Icon :svgName="item.iconName" class="el-icon"></Icon>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="`${item.path || ''}${i.path || ''}`" v-for="i in item.children" :key="i.name" @click="$router.push(`${item.path || ''}${i.path || ''}`)">
          <Icon :svgName="i.iconName" class="el-icon"></Icon><span>{{i.name}}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item  :index="item.path" v-else :key="index" @click="$router.push(item.path || '/')">
        <Icon :svgName="item.iconName" class="el-icon"></Icon>
        <template #title>{{item.name}}</template>
      </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
const props = defineProps({
  isCollapse:Boolean,
})
const role = 'admin'
const router = useRouter()
// 监听路由变化，点亮对应菜单
const curPath = router.currentRoute.value.path.split('/')[1]
const activeIndex = ref('/')
activeIndex.value = `/${curPath}`
onBeforeRouteUpdate((to) => {
  activeIndex.value = `/${to.path.split('/')[1]}`
})
// 菜单数据对象
interface List {
  path?: string
  name: string
  dropdown?: boolean
  iconName?: string
  children?: List[]
  hide?: boolean
}
const menuList: List[] = [
  {
    name: 'AI背景',
    path: '/aibg',
  },
  {
    name: '佛像',
    path: '/buddha',
    dropdown: true,
    children: [
      {
        name: '普贤菩萨',
        iconName: '',
      },
    ],
  },
]
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  color: #fff;
}
.el-menu-item .el-icon {
  vertical-align: middle;
  margin-right: 5px;
  width: var(--el-menu-icon-width);
  text-align: center;
  font-size: 18px;
}
</style>
