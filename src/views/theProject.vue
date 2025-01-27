
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
    <h2>{{workValue.title}}</h2>
    <p>{{workValue.description}}</p>

   </div>


</template>
