<template>
    <div class="better" id="better">
      <div class="wrapper">
        <ul class="content">
          <li @click="showThisNum($event)">1</li>
          <li @click="showThisNum($event)">2</li>
          <li @click="showThisNum($event)">3</li>
          <li @click="showThisNum($event)">4</li>
          <li @click="showThisNum($event)">5</li>
        </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
      </div>
      <br>
      <br>
      <button class="rex-btn success large" @click="getData()">请求数据(get)</button>
      <button class="rex-btn success large" @click="postData()">发送数据(post)</button>
      <br>
      <br>
    </div>
</template>

<script>

export default {
  name: 'better',
  data () {
    return {
      msg: 'better'
    }
  },
  created() {
    let vm = this;
    setTimeout(function(){
      vm.init()
    }, 0)
  },
  methods: {
    init: function(){
      console.log(jQuery(window))
      let wrapper = document.querySelector('.wrapper')
      let scrollConfig = {
        scrollY: true,
        click: true,
        scrollbar: true
      }
      let scroll = new window.BScroll(wrapper, scrollConfig)
    },
    showThisNum: function(e){
      console.log($(e.target).text())
    },
    getData: function(){
      let getParams = {user: 'admin', pass: '123456'}
      axios.get( 'https://rexhang.com/api/get.php', {params: getParams} )
      .then(function (response) {
          console.info(response.data)
      })
      .catch(function (error) {
        console.error('error：' + error)
      })
    },
    postData: function(){
      let postDATA = {user: 'admin', pass: '123456'};
      let urlParams = {token: 'admin'};
      axios.post( 'https://rexhang.com/api/post.php', postDATA, {params: urlParams, transformRequest: function(data){return jQuery.param(data)}} )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error('error：' + error);
        });
    }
  }
}

</script>

<style lang="scss" scoped>
    .better{
        color: #ff0033;
        cursor: pointer;
        width: 100%;
        height: auto;
    }
    .wrapper{
      width: 100%;
      height: 150px;
      box-sizing: border-box;
      border: 1px solid red;
      overflow: hidden;
      position: relative;
    }
    .content{
      width: 100%;
      display: block;
      height: auto;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        list-style: none;
        font-size: 24px;
        box-sizing: border-box;
        &:hover{
          color: blue;
        }
      }
    }
</style>