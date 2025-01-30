
<script >
import { RouterLink } from "vue-router";
export default{
    props:["workValue","deger"],
    data(){
        return{
            
        }
    },
    computed:{
        workIndex(){


alert(this.workValue.title)
        }        
    },
}
</script>   
<template>
    <router-link class="txtS" :class="deger" to="/">Back</router-link>
    <div :class="deger" class="clickedWork">
    <h3><router-link to="/">works</router-link> > {{workValue.title}}</h3>
    <p>{{workValue.description}}</p>
    <div class="worksListDiv">
        <p class="workQ">PLATFORM</p> <span>{{workValue.platform}}</span>
    </div>
    <div class="worksListDiv"><p class="workQ">WEBSITE</p> <a :href=workValue.webSitelink>{{workValue.webSitelink}}</a>
    </div>

   </div>


</template>
