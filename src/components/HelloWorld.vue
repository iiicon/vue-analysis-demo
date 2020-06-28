<template>
  <div v-if="flag" class="hello">
    <h1>{{nested.msg}}</h1>
    <h2>Essential Links</h2>
    <h2>Wonderful</h2>
    <ul>
      <li>78978809890</li>
      <li>78978809890</li>
      <li>78978809890</li>
      <li>78978809890</li>
      <li>78978809890</li>
    </ul>
  </div>
  <ul v-else>
    <li>12121</li>
    <li>12121</li>
    <li>12121</li>
    <li>12121</li>
    <li>12121</li>
    <li>12121</li>
  </ul>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["flag"],
  data() {
    return {
      nested: {
        msg: "welcome to your vue.js app"
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
