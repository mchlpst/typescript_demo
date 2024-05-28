<template>
  <section>
    <div>
      <div>{{ props.data.title }}</div>
      <div v-html="props.data.text" />
      <div>
        <Button :data="props.data.button" />
      </div>
    </div>
    <div>
      <img :src="props.data.image.src" :alt="props.data.image.alt" />
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped lang="scss">
$component: "exercise-3";

.#{$component} {
}
</style>
