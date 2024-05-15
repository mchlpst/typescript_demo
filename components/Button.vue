<template>
  <div>
    <button>
      <a :href="data.link" :target="data.target">{{ data.label }}</a>
    </button>
  </div>
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
$component: "button";

.#{$component} {
}
</style>
