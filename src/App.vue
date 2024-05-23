<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    document.title = '点石科技';
  } 
}
</script>

<style>
#app,body {
  margin: 0;
  padding: 0;
}
</style>
