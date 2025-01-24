<template>                <nav class="nav">
    <div :class="deger" class="navName" style="display: flex; align-items: center;">
        <b :class="deger" class="navL" >Yunus Aksu</b>
    </div>
    <div class="links" :class="deger" style="align-items: center; justify-content: center;">
        <RouterLink to="/" class="navL">Home</RouterLink>
        <select class="languageChange navL" name="navyOp" @change="changeLanguage($event)">
            <option   class="option navL" :class="deger" value="english">English</option>
            <option class="option navL" value="turkish">Türkçe</option>
        </select>
        <a :class="deger" href="#" class="navL"  id="navProjects">Projects</a>
        <RouterLink to="/contact" class="navL">Contact</RouterLink>
    </div>
    <div class="theme">
        <a :class="deger"  style="cursor: pointer;" class="change" @click="rotateIcon">
            <i id="a1"   :class="backgroundIsDark?'fa-solid fa-sun ':'fa-solid fa-moon'"></i>
        </a>
    </div>
</nav>

</template>
<script>
import { RouterLink } from "vue-router";
export default{

    data(){
        return{
            backgroundIsDark:true,
            deger:true
        }
    },
    methods:{
        rotateIcon() {
            const icon = document.getElementById("a1");
            this.deger = this.backgroundIsDark === true ? 'whiteMode' : '';

            icon.style.transition = "all 0.7s ease-in-out";
            icon.style.transform = "rotate(360deg)";
            this.backgroundIsDark = !this.backgroundIsDark;
            setTimeout(() => {
                icon.style.transition = "";
                icon.style.transform = "";
            }, 500);
            this.$emit('degerim',this.deger)
        }
    }
}
</script>