<template>
    <div id="appbar" class="appbar">
      <mu-appbar title="Title">
          <mu-icon-button icon="menu" slot="left"/>
          <mu-icon-menu icon="more_vert" slot="right">
              <mu-menu-item title="首页"/>
              <mu-menu-item title="专栏"/>
              <mu-menu-item title="收藏集"/>
              <mu-menu-item title="发现"/>
              <mu-menu-item title="标签"/>
          </mu-icon-menu>
      </mu-appbar>
    </div>
</template>

<script>

export default {
  name: 'appbar',
  data () {
    return {
      msg: 'appbar'
    }
  }
}

</script>
