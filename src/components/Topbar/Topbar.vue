<template>
    <div class="topbar" id="topbar">
      <ul id="nav" class="rex-cf">
        <li class="rex-fl"><a class="logo" href="http://www.rexhang.com/blog/"><img src="http://test.rexhang.com/blog/wp-content/themes/D8_4.0/img/logo.png" alt="" height="50"></a></li>
        <li class="rex-fl"><a href="#/">首页</a></li>
        <li class="rex-fl"><a href="javascript:;">专栏</a></li>
        <li class="rex-fl"><a href="javascript:;">收藏集</a></li>
        <li class="rex-fl"><a href="javascript:;">发现</a></li>
        <li class="rex-fl"><a href="javascript:;">标签</a></li>
        <li class="rex-fl search">
          <input type="text" placeholder="搜索内容">
          <img src="//gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="搜索" class="search-icon">
        </li>
        <li class="rex-fl">
          <a href="javascript:;" class="login">登录 or 注册</a>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'topbar',
  data () {
    return {
      msg: 'topbar'
    }
  }
}

</script>
