<template>
  <section class="body-warp">
    <transition name="fade" mode="out-in">
      <router-view name="fullView" style="z-index: 200"></router-view>
    </transition>
    <left-slide style="z-index: 150"></left-slide>
    <top style="z-index: 150"></top>
    <main-content style="z-index: 100">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main-content>
  </section>
</template>

<script type="text/javascript">
  import {mainContent, top, leftSlide} from 'components'

  export default {
    name: 'app',
    components: {
      mainContent, top, leftSlide
    }
  }
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import '~assets/scss/main';

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
