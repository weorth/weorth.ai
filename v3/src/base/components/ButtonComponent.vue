
<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  click: Function,
  disabled: Boolean,
  href: String,
  primary: Boolean,
  secondary: Boolean,
})
const router = useRouter()

function handleClick() {
  if (props.click) props.click()
  if (props.href) {
    if (props.href.includes('://')) {
      window.open(props.href, '_blank')
    } else {
      router.push(props.href)
    }
  }
}
</script>

<template>
  <button
    :class="{ disabled, primary, secondary }"
    @click.prevent.stop="handleClick"
    :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  @include button($dark, $light);

  background: none;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  &.disabled {
    @include button($muted, $dark);

    cursor: not-allowed;
  }

  &.primary {
    @include button($primary, $light);
  }

  &.secondary {
    @include button($secondary, $light);
  }
}
</style>
