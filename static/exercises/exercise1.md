# Exercise 1

### Location

`components > Exercise1.vue`

### Introduction

We start with a simple basic setup of a `Nuxt3` counter.

### Assessment

Transform the current Javascipt file to a Typescript file. Thy to add the Types where needed.

```vue
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
```
