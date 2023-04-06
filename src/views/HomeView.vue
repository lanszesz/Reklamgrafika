<template>
  <div>
    <image-text-component :direction="false" imageSrc="src/assets/img/alma-medium.jpg">
      <template v-slot:header>{{ $t('imageText1.header') }}</template>
      <template v-slot:text>{{ $t('imageText1.text') }}</template>
    </image-text-component>

    <text-component>
      <template v-slot:header>{{ $t('textComponent1.header') }}</template>
      <template v-slot:text>{{ $t('textComponent1.text') }}</template>
    </text-component>

    <guarantee-msg-component></guarantee-msg-component>

    <image-text-component :direction="true" imageSrc="src/assets/img/alma2-medium.jpg">
      <template v-slot:header>{{ $t('imageText2.header') }}</template>
      <template v-slot:text>{{ $t('imageText2.text') }}</template>
    </image-text-component>

    <text-component>
      <template v-slot:header>{{ $t('textComponent2.header') }}</template>
      <template v-slot:text>{{ $t('textComponent2.text') }}</template>
    </text-component>

    <image-text-component :direction="false" imageSrc="src/assets/img/alma3-medium.jpg">
      <template v-slot:header>{{ $t('imageText3.header') }}</template>
      <template v-slot:text>{{ $t('imageText3.text') }}</template>
    </image-text-component>

    <text-component>
      <template v-slot:header>{{ $t('textComponent3.header') }}</template>
      <template v-slot:text>{{ $t('textComponent3.text') }}</template>
    </text-component>
  </div>
</template>

<script>
import ImageTextComponent from "../components/ImageTextComponent.vue";
import GuaranteeMsgComponent from "../components/GuaranteeMsgComponent.vue";
import TextComponent from "../components/TextComponent.vue";

export default {
  name: "HomeView",
  components: {
    GuaranteeMsgComponent,
    ImageTextComponent,
    TextComponent
  }
}
</script>