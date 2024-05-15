<template>
  <section>
    <div>
      <h1>Create TypeScript vue file</h1>
    </div>
    <div>
      <div>the count is: {{ count }}</div>
      <div>
        <button @click="counter">add 1</button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
let count = ref(0);

const counter = () => {
  count.value++;
};
</script>
