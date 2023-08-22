
<script setup>
defineProps({
  name: { required: true, type: String },
})
</script>

<template>
  <w-card>
    <w-row between>
      <w-col full>
        <h3 :class="name"><w-i18n :t="`${name}.title`" /></h3>
        <p><w-i18n :t="`${name}.description`" /></p>
        <w-button
          :href="name === 'simplesia' ? 'https://simplesia.com' : `/products/${name}`"
          secondary>
          <w-i18n t="more" />
        </w-button>
      </w-col>
      <img :src="`/images/${name}.jpg`" />
    </w-row>
  </w-card>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
  width: 100%;

  @media (max-width: $sm) {
    width: 70vw;
  }

  button {
    width: max-content;
  }

  h3 {
    font-size: 6rem;
    margin: 0;
    padding: 0;
    width: min-content;

    @media (max-width: $sm) {
      font-size: 4rem;
    }
  }

  img {
    height: auto;
    margin: 1rem;
    width: 22rem;

    @media (max-width: $sm) {
      width: 60vw;
    }
  }
}
</style>
