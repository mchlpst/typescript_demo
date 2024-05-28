<template>
  <main>
    <section>
      <h1>number information</h1>
    </section>
    <section>
      <label>Your number</label>
      <input v-model="initNumber" type="number" min="0" />
    </section>
    <section v-if="initNumber > 0">
      <h2>All the information</h2>
      <div>
        <h3>Times table</h3>
        <table>
          <tr v-for="item in timeTables">
            <td>{{ item.sum }}</td>
            <td>{{ item.solution }}</td>
          </tr>
        </table>
      </div>
      <div>
        <h3>Wiki link</h3>
        <a :href="wikiLink" target="_blank">Link to wikipedia</a>
      </div>
    </section>
  </main>
</template>
<script setup>
let initNumber = ref(0);

const calculateTimesTableRows = (baseNumber) => {
  let timesTableArray = [];
  if (baseNumber <= 0) {
    return timesTableArray;
  }
  for (let i = 1; i <= 10; i++) {
    timesTableArray.push({
      sum: `${i} x ${baseNumber}`,
      solution: i * baseNumber,
    });
  }
  return timesTableArray;
};
const generateWikiLink = (baseNumber) =>
  `https://en.wikipedia.org/wiki/${baseNumber}_(number)`;

const timeTables = computed(() => calculateTimesTableRows(initNumber.value));
const wikiLink = computed(() => generateWikiLink(initNumber.value));
</script>
<style scoped lang="scss">
$component: "exercise-5-page";

.#{$component} {
}
</style>
