<template>
  <section>
    <h1>{{ props.data.title }}</h1>
    <div>
      <h2>{{ props.data.subTitle }}</h2>
      <div>
        <ul>
          <li v-for="quote in props.data.quotes">
            <div>{{ quote.quote }}</div>
            <div>{{ quote.firstName }}{{ quote.lastName }}</div>
          </li>
        </ul>
      </div>
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
$component: "exercise-4";

.#{$component} {
}
</style>
