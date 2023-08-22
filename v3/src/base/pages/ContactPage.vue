
<script setup>
</script>

<template>
  <w-container>
    <w-card>
      <w-col>
        <w-title><w-i18n t="contact" /></w-title>
        <p><w-i18n t="contacts.intro" /></p>
        <w-row between>
          <w-col center full>
            <div class="icon"><w-animation src="/src/assets/animations/email.json" /></div>
            <h2><a href="mailto:info@weorth.ai" target="_blank"><w-i18n t="email" /></a></h2>
          </w-col>
          <w-col center full>
            <div class="icon"><w-animation src="/src/assets/animations/facebook.json" /></div>
            <h2><a href="https://facebook.com/weorthllc" target="_blank"><w-i18n t="facebook" /></a></h2>
          </w-col>
          <w-col center full>
            <div class="icon"><w-animation src="/src/assets/animations/linkedin.json" /></div>
            <h2><a href="https://linkedin.com/in/weorthllc" target="_blank"><w-i18n t="linkedin" /></a></h2>
          </w-col>
          <w-col center full>
            <div class="icon"><w-animation src="/src/assets/animations/x.json" /></div>
            <h2><a href="https://x.com/weorthllc" target="_blank"><w-i18n t="x" /></a></h2>
          </w-col>
        </w-row>
        <p><w-i18n t="contacts.outro" /></p>
        <p><w-i18n t="contacts.thanks" /></p>
      </w-col>
    </w-card>
  </w-container>
</template>

<style lang="scss" scoped>
p {
  &:last-child {
    font-weight: bold;
    text-align: center;
  }
}

.icon {
  height: 6rem;
  width: 6rem;
}
</style>
