<template>
  <section>
    <div>{{ props.data.title }}</div>
    <div v-html="props.data.text" />
    <div>
      <Button :data="props.data.button" />
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
