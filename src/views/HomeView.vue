<template>
  <div>
    <image-text-component @scroll="scrollToDiv('textComponent1')" :direction="false" imageSrc="./img/alma5-medium.jpg">
      <template v-slot:header>{{ $t('imageText1.header') }}</template>
      <template v-slot:text>{{ $t('imageText1.text') }}</template>
    </image-text-component>

    <div ref="textComponent1">
      <text-component>
        <template v-slot:header>{{ $t('textComponent1.header') }}</template>
        <template v-slot:text>{{ $t('textComponent1.text') }}</template>
      </text-component>
    </div>

    <guarantee-msg-component></guarantee-msg-component>

    <image-text-component @scroll="scrollToDiv('textComponent2')" :direction="true" imageSrc="./img/alma2-medium.jpg">
      <template v-slot:header>{{ $t('imageText2.header') }}</template>
      <template v-slot:text>{{ $t('imageText2.text') }}</template>
    </image-text-component>

    <div ref="textComponent2">
      <text-component>
        <template v-slot:header>{{ $t('textComponent2.header') }}</template>
        <template v-slot:text>{{ $t('textComponent2.text') }}</template>
      </text-component>
    </div>

    <image-text-component @scroll="scrollToDiv('textComponent3')" :direction="false" imageSrc="./img/alma3-medium.jpg">
      <template v-slot:header>{{ $t('imageText3.header') }}</template>
      <template v-slot:text>{{ $t('imageText3.text') }}</template>
    </image-text-component>

    <div ref="textComponent3">
      <text-component>
        <template v-slot:header>{{ $t('textComponent3.header') }}</template>
        <template v-slot:text>{{ $t('textComponent3.text') }}</template>
      </text-component>
    </div>
  </div>
</template>

<script>
import ImageTextComponent from "../components/ImageTextComponent.vue";
import GuaranteeMsgComponent from "../components/GuaranteeMsgComponent.vue";
import TextComponent from "../components/TextComponent.vue";

export default {
  components: {
    GuaranteeMsgComponent,
    ImageTextComponent,
    TextComponent
  },
  methods: {
    scrollToDiv(div) {
      this.$refs[div].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }
}
</script>