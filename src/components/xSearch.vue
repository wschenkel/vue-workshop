<template>
  <div class="content-search">
    <div class="row">
      <div class="input-field col s12">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-search'
}
</script>

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
