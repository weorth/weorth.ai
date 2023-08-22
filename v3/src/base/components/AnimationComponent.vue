
<script setup>
defineProps({ src: String })
</script>

<template>
  <lottie-player
    autoplay
    background="transparent"
    class="animation"
    loop
    speed="1"
    :src="src"></lottie-player>
</template>

<style lang="scss" scoped>
.animation {
  height: 100%;
  width: 100%;
}
</style>
