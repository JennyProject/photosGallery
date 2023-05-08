<template>
  <div id="container" class="flex-grow">
    <header>
      <div class="left">
        <h3>图片预览</h3>
        <p>当前版本：V1.0</p>
      </div>
    </header>
    <div class="content-wrap">
      <div class="nav-wrap">
        <nav>
          <Nav :isCollapse="isCollapse" @toggleCollapse="toggleCollapse"></Nav>
        </nav>
      </div>
      <main>
        <div class="content">
          <RouterView></RouterView>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import Nav from './nav.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>
<style scope lang="scss">
#container > header {
  grid-column-start: span 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: $theme;
  color: $white;
  height: 60px;
  .nav-btn{display: none;}
  .left p {
    @apply ml-6 text-sm;
    line-height: normal;
  }
  .left {
    display: -ms-inline-grid;
    display: inline-grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
#container {
  // height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .nav-wrap{
    nav {
      background-color: #263238;
      height: 100%;
    }
    .toggle-nav{
      text-align: right;
      padding: 10px;
      .toggle-btn {
        display: inline-block;
        width: 36px;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        text-align: center;
        border: 1px solid;
        border-radius: 5px;
        color: #eee;
        font-weight: bold;
        cursor: pointer;
      }
    }
    .el-menu{border-right: none;}
  }
  .content-wrap{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    top: 60px;
    bottom: 0;
    width: 100%;
    min-height: 800px !important;
  }
}
main {
  position: relative;
  background-color: #eee;
  height: 100%;
  width: 100%;;
  flex-grow: 1;
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 1rem;
    overflow: scroll;
  }
}
@media screen and (max-width: 800px) {
  #container{
    header {
      padding: .5rem;
      .left{
        display: block;
        text-align: left;
        p{margin-left: 0;}
      }
    }
  }
}

</style>
