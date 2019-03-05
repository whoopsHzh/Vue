<template>    
    <div id="news">    
       我是新闻组件   

       <ul>
           <li v-for="(item,key) in list">
              <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
           </li>
       </ul>
          
    </div>

</template>


<script>

    export default{
        data(){
            return {               
               msg:'我是一个新闻组件',
               list:[]              
            }
        },
        methods:{
            requestDate(){
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
                this.$http.jsonp(api).then((response)=> {

                    this.list = response.body.result
                    // console.log(response)
                    
                },(err)=>{
                    console.log(err);

                })
            }
        },
        mounted(){
            this.requestDate();
        }
    }

</script>

<style lang="scss" scoped>
    
</style>