
<script setup>
</script>

<template>
  <w-col full>
    <w-shout>
      <w-title class="videns">VIDENS</w-title>
      <h2><w-i18n t="videns.slogan" /></h2>
    </w-shout>
    <w-action>
      <w-col around>
        VIDENS promises to transform the way businesses and industries approach monitoring, analysis, and optimization of their operations.
      </w-col>
    </w-action>
    <w-container>
      <w-card>
        <w-row between>
          <div class="subtitle">Alpha</div>
          <w-col>
            <w-i18n locale="en_us">
              Alpha is a cutting-edge AI computer vision product that combines advanced hardware and intelligent software to provide unparalleled image capturing and analysis capabilities. Designed to meet the demands of a wide range of applications, from surveillance and security to industrial automation and augmented reality, Alpha empowers businesses and individuals with the ability to perceive the world around them like never before.
            </w-i18n>
            <w-i18n locale="pt_br">
              Alpha is a cutting-edge AI computer vision product that combines advanced hardware and intelligent software to provide unparalleled image capturing and analysis capabilities. Designed to meet the demands of a wide range of applications, from surveillance and security to industrial automation and augmented reality, Alpha empowers businesses and individuals with the ability to perceive the world around them like never before.
            </w-i18n>
          </w-col>
        </w-row>
        <w-row around class="block">
          <img src="/images/videns-alpha.jpg" />
        </w-row>
        <w-row evenly wrap>
          <div class="tip">
            <w-i18n locale="en_us">
              Equipped with a state-of-the-art high-definition camera, Alpha ensures crystal-clear image capture, enabling accurate analysis and interpretation of visual data. Whether it's capturing intricate details or monitoring dynamic scenes, Alpha delivers superior imaging quality.
            </w-i18n>
            <w-i18n locale="pt_br">
              Equipped with a state-of-the-art high-definition camera, Alpha ensures crystal-clear image capture, enabling accurate analysis and interpretation of visual data. Whether it's capturing intricate details or monitoring dynamic scenes, Alpha delivers superior imaging quality.
            </w-i18n>
          </div>
          <div class="tip">
            <w-i18n locale="en_us">
              This processing powerhouse guarantees swift data handling, seamless multitasking, and efficient execution of complex algorithms, making Alpha an AI vision product that performs flawlessly under demanding scenarios.
            </w-i18n>
            <w-i18n locale="pt_br">
              This processing powerhouse guarantees swift data handling, seamless multitasking, and efficient execution of complex algorithms, making Alpha an AI vision product that performs flawlessly under demanding scenarios.
            </w-i18n>
          </div>
          <div class="tip">
            <w-i18n locale="en_us">
              Alpha is armed with powerful GPU, delivering immense parallel processing capabilities. This GPU prowess empowers Alpha to accelerate image processing, real-time object detection, and deep learning tasks, ensuring rapid and accurate analysis of visual data.
            </w-i18n>
            <w-i18n locale="pt_br">
              Alpha is armed with powerful GPU, delivering immense parallel processing capabilities. This GPU prowess empowers Alpha to accelerate image processing, real-time object detection, and deep learning tasks, ensuring rapid and accurate analysis of visual data.
            </w-i18n>
          </div>
          <div class="tip">
            <w-i18n locale="en_us">
              Alpha serves as a WiFi access point, providing seamless connectivity for remote monitoring and control. The integrated Captive Portal UI simplifies setup and management, allowing users to effortlessly access and interact with the device using their preferred devices.
            </w-i18n>
            <w-i18n locale="pt_br">
              Alpha serves as a WiFi access point, providing seamless connectivity for remote monitoring and control. The integrated Captive Portal UI simplifies setup and management, allowing users to effortlessly access and interact with the device using their preferred devices.
            </w-i18n>
          </div>
          <div class="tip">
            <w-i18n locale="en_us">
              Alpha boasts 32 GB of storage space, providing ample room for storing captured images, processed data, and applications. Additionally, the storage capacity can be upgraded to 64 GB, ensuring that Alpha can accommodate growing data demands over time.
            </w-i18n>
            <w-i18n locale="pt_br">
              Alpha boasts 32 GB of storage space, providing ample room for storing captured images, processed data, and applications. Additionally, the storage capacity can be upgraded to 64 GB, ensuring that Alpha can accommodate growing data demands over time.
            </w-i18n>
          </div>
          <div class="tip">
            <w-i18n locale="en_us">
              Alpha comes with a versatile power adapter that supports a wide range of input voltages (AC 100-240V) and delivers a stable DC 5V/4A 20W output. This ensures reliable and consistent power supply, allowing Alpha to operate smoothly in various environments.
            </w-i18n>
            <w-i18n locale="pt_br">
              Alpha comes with a versatile power adapter that supports a wide range of input voltages (AC 100-240V) and delivers a stable DC 5V/4A 20W output. This ensures reliable and consistent power supply, allowing Alpha to operate smoothly in various environments.
            </w-i18n>
          </div>
        </w-row>
        <w-row around class="signup">
          <w-button href="/contact" primary>
            <w-i18n locale="en_us">
              Contact us about purchasing VIDENS Alpha!
            </w-i18n>
            <w-i18n locale="pt_br">
              Contact us about purchasing VIDENS Alpha!
            </w-i18n>
          </w-button>
        </w-row>
        <w-col class="block">
          <w-i18n locale="en_us">
            Alpha is not just a product; it's a gateway to a new dimension of visual perception and understanding. Whether you're enhancing security measures, optimizing industrial processes, or delving into immersive augmented reality experiences, Alpha is your trusted partner in unlocking the true potential of AI-driven computer vision. Welcome to a future where vision knows no bounds – welcome to Alpha.
          </w-i18n>
          <w-i18n locale="pt_br">
            Alpha is not just a product; it's a gateway to a new dimension of visual perception and understanding. Whether you're enhancing security measures, optimizing industrial processes, or delving into immersive augmented reality experiences, Alpha is your trusted partner in unlocking the true potential of AI-driven computer vision. Welcome to a future where vision knows no bounds – welcome to Alpha.
          </w-i18n>
        </w-col>
      </w-card>
    </w-container>
    <w-shout>
      <h3>
        <w-i18n locale="en_us">
          By offering real-time monitoring, anomaly detection, optimization insights, and user-friendly interaction, VIDENS empowers organizations to gain a comprehensive understanding of their processes, make informed decisions, and drive operational excellence.
        </w-i18n>
        <w-i18n locale="pt_br">
          By offering real-time monitoring, anomaly detection, optimization insights, and user-friendly interaction, VIDENS empowers organizations to gain a comprehensive understanding of their processes, make informed decisions, and drive operational excellence.
        </w-i18n>
      </h3>
    </w-shout>
  </w-col>
</template>

<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
}

.block {
  padding: 3rem 0;

  &.dark {
    background-color: $dark;
    color: $light;
  }
}

.signup {
  font-size: 3rem;
  margin: 3rem 0 0 0;
}

.shout {
  h2 {
    color: $light;
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
  }

  h3 {
    color: $light;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
  }

  .title {
    @include fg-gradient(to right, $light, $info);

    font-size: 4rem;
  }
}

.subtitle {
  font-size: 3rem;
  font-style: italic;
  margin: 0 3rem 0 0;
}

.tip {
  margin: 1rem;
  width: 25%;

  @media (max-width: $sm) {
    width: auto;
  }
}
</style>
