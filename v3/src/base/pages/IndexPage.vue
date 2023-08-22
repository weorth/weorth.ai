
<script setup>
import { ref } from 'vue'

const currentQ = ref(1)
const qa = ref(14)
const research = ref(['edge', 'distributed', 'serverless'])

function handleQ(Q) {
  currentQ.value = Q
}
</script>

<template>
  <w-col>
    <w-hero>
      <w-row around>
        <div class="slogan">
          <p><w-i18n t="hero.title" /></p>
          <p class="bold"><w-i18n t="hero.subtitle" /></p>
        </div>
        <div class="graphic">
          <w-animation src="/animations/arm.json" />
        </div>
      </w-row>
    </w-hero>
    <w-container>
      <w-row center>
        <w-title><w-i18n t="research" /></w-title>
      </w-row>
      <w-row evenly>
        <w-card v-for="r in research" :key="r">
          <w-col between full>
            <h3><w-i18n :t="`${r}.title`" /></h3>
            <w-animation class="animation" :src="`/animations/${r}.json`" />
            <p><w-i18n :t="`${r}.description`" /></p>
          </w-col>
        </w-card>
      </w-row>
    </w-container>
    <w-shout>
      <w-col center>
        <h2>&quot;<w-i18n t="thanks.message" />&quot;</h2>
        <h4>- <w-i18n t="thanks.from" /></h4>
      </w-col>
    </w-shout>
    <w-container>
      <w-row center>
        <w-title><w-i18n t="qa.title" /></w-title>
      </w-row>
      <w-col full>
        <div v-for="idx in qa" :key="idx" class="qa">
          <div class="q" @click="handleQ(idx)">
            <w-i18n :t="`qa.${idx}.q`" />
          </div>
          <div :class="['a', idx === currentQ ? 'active' : '']">
            <w-i18n :t="`qa.${idx}.a`" />
          </div>
        </div>
      </w-col>
    </w-container>
    <w-action>
      <w-row around>
        <w-col around>
          <p><w-i18n t="build.slogan" /></p>
          <w-button href="/contact"><w-i18n t="build.button" /></w-button>
        </w-col>
      </w-row>
    </w-action>
  </w-col>
</template>

<style lang="scss" scoped>
.card {
  font-size: 1.25rem;
  width: 30vw;

  @media (max-width: $sm) {
    width: auto;
  }

  .animation {
    height: 20rem;
    width: 20rem;
  }
}

.container {
  padding: 2rem 0;
}

.graphic {
  flex: 1;
}

.qa {
  @include flex(column, begin, begin);

  font-size: 1.25rem;

  .a {
    display: none;

    &.active {
      display: flex;
    }
  }

  .q {
    cursor: pointer;
    font-weight: bold;
    margin-top: 2rem;
  }
}

.shout {
  h2, h4 {
    font-weight: 400;
  }

  h4 {
    margin-top: 0;
  }
}

.slogan {
  color: $light;
  flex: 1;
  text-align: center;

  p {
    &:first-child {
      font-size: 2rem;
    }

    &:last-child {
      font-size: 3rem;
    }

    &.bold {
      font-weight: bold;
    }
  }
}
</style>
