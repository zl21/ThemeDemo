<script setup>
import { ref, onMounted } from 'vue'
import Color from 'color'

/** -------------------- data: -------------------- */
let color1 = ref('#409EFF')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
])
/** -------------------- mounted: -------------------- */
onMounted(() => {
  console.log('mounted');
})
/** -------------------- methods: -------------------- */
const colorPick = (val) => {
  color1 = val
  changeColor(val)
}
const changeColor = (val) => {
  // document.documentElement 代表相关的容器如：#box
  //js中获取--base-color的值
  var value = getComputedStyle(document.documentElement).getPropertyValue("--base-color");
  //js中更改--base-color的值
  document.documentElement.style.setProperty("--base-color", val);
  // 颜色深度处理
  const color = Color(val)
  const q1 = color.lighten(0.5).hex()
  const d1 = color.darken(0.5).hex()
  document.documentElement.style.setProperty("--base2-color", q1);
  document.documentElement.style.setProperty("--base3-color", d1);
  console.log('base::', val, 'q1::', q1, 'd1::', d1);
}
</script>

<template>
  <div>
    <el-button type="primary" @click="visible = true">Button</el-button>
    <div class="themeT">
      <el-color-picker
        v-model="color1"
        @change="colorPick"
        :predefine="predefineColors"
      ></el-color-picker>
    </div>
    <ul class="colorFade">
      <li>base</li>
      <li>浅</li>
      <li>深</li>
    </ul>
  </div>
</template>

<style>
:root {
  --base-color: #ccc;
  --base2-color: #cc0;
  --base3-color: #c0c;
}
</style>
<style lang="less">
.colorFade {
  position: absolute;
  right: 100px;
  top: 300px;
  li {
    color: #fff;
    margin: 20px;
    height: 50px;
    width: 100px;
    border: 1px solid;
    &:first-child {
      background-color: var(--base-color);
    }
    &:nth-child(2) {
      background-color: var(--base2-color);
    }
    &:nth-child(3) {
      background-color: var(--base3-color);
    }
  }
}
.themeT {
  z-index: 999;
  position: fixed;
  top: 100px;
  right: 100px;
  button {
    width: 60px;
    height: 30px;
    border: 1px solid red;
    background: #fff;
    color: var(--base-color);
  }
}
</style>
