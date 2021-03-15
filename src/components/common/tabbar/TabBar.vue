<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    nam: 'TabBar'
}
</script>

<style>
  #tab-bar {
    display: flex;
    background: rgb(8, 9, 82);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .2);
    color: white;
  }
</style>