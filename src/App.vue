<template>
  <div class="container">
    <div class="page-content">
      <md-theme md-name="black">
        <md-toolbar>
          <h1 class="md-title">Barista Fiddle</h1>
        </md-toolbar>
      </md-theme>
      <router-view class="main-content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="vue-material/dist/vue-material.css"></style>
<style>
.container {
  flex-flow: column nowrap;
  flex: 1;
  transition: all .4s cubic-bezier(.25, .8, .25, 1);
}

.container,
body {
  display: flex;
}

.page-content {
  max-height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column;
}

.main-content {
  flex: 1;
  overflow: auto;
  background-color: #fff;
  transform: translate3D(0, 0, 0);
  transition: all .4s cubic-bezier(.25, .8, .25, 1);
  transition-delay: .2s;
}
</style>
