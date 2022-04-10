<template>
  <div id="app">
    <table v-resizable>
      <thead>
        <tr>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
          <th>Fourth</th>
          <th>Fifth</th>
          <th>Sixth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    alarm(el) {
      console.dir(el);
    },
  },
};
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
}
</style>
