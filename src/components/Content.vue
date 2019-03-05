<template>
  <div>
    <h2>{{list.title}}</h2>
    <div v-html="list.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是详情页啦',
      list:[]
    };
  },
  mounted() {
    // console.log(this.$route.params);
    var aid = this.$route.params.aid;
    this.requestData(aid)

  },
  methods: {
    requestData(aid) {
      var api ='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
        
      this.$http.jsonp(api).then(Response => {
        //   console.log(Response.body.result);
          
           this.list =Response.body.result[0]
      }, err => {
          console.log(err);
          
      });
    }
  }
};
</script>

