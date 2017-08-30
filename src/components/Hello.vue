<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>其他路由</h2>
    <ul>
      <br>
      <br>
      <li><a href="#/Better">Better</a></li>
      <br>
      <br>
    </ul>
    <button class="rex-btn primary large" @click="doSomething()">点击</button>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '路由'
    }
  },
  methods: {
    doSomething: function () {
      alert('This is a button')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
