<template>
<div class="lost-wrap">
  <div class="txt1">～对不起～，我迷路了～～</div>
  <Icon svgName="lost" class="icon"></Icon>
  <div class="txt2">你访问的地址有误，或者该页面不存在</div>
  <div class="btns">
    <el-button @click="$router.push('/')">返回首页</el-button>
    <el-button @click="$router.go(-1)">返回上一页</el-button>
  </div>
</div>
</template>
<style lang="scss" scope>
.lost-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
.txt1{
  color: #213547;
    font-size: 24px;
    font-weight: bold;
}
.txt2{
  font-size: 20px;
  color: #999;
  padding: 30px 0;
}
.icon{
  font-size: 500px;
}
}
</style>