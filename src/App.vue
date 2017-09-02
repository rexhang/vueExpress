<template>
  <div id="app">
    <Topbar v-if="showme"></Topbar>
    <Appbar v-if="!showme"></Appbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './components/Topbar/Topbar';
import Appbar from './components/Appbar/Appbar';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    this.init()
  },
  methods: {
    init: function(){
        if(sys.isAndroid || sys.isIos){
            this.showme = false;
            console.log('use mobile bar')
        } else{
            this.showme = true;
            console.log('use pc bar')
        }
    }
  },
  components: {
    Topbar,
    Appbar
  }
}
</script>

<style lang="scss">
  @import './scss/core.scss';
</style>
