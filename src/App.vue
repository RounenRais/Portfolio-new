
<script setup>
import NavBar from "./components/navbar.vue"
import { RouterView } from "vue-router";
import Projects from "./components/projects.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
    
    <div id="app"  :class="{ 'bodyDark': backgroundIsDark, 'bodyLight': !backgroundIsDark }" class="animated-background">
        <div class="mainSection ">
            <header class="cd-header" data-type="slider-item">
              <NavBar @degerim="degerF"></NavBar>      
            </header>
            <div v-if="route.name!='contact'" class="home">

            
            <div :class="deger" class="topDivs">
                <img src="./assets/catgif_no_bg.gif" class="img1" alt="">
                 <div class="me  ">
                        <h1>Hi, I'm <span class="name">Yunus</span></h1>
                        <p>Frontend Developer</p>
                        <p>UI/UX Designer</p>
                        <p>Backend Developer</p>
                    
                 </div>          
            </div>
            <!-- <img :class="deger" class="img1" :src="backgroundIsDark ? imgDark : imgLight" loading="lazy"
                 alt="Header Image" :key="backgroundIsDark ? 'dark' : 'light' + Date.now()" /> -->

            <h1 class="header" :class="deger" id="welcome">Welcome!</h1>

            <div class="mainDShadow projects " :class=deger>     
                 <transition name="fade-slide" mode="out-in">
                <RouterView @workIndex="workIndexFunc" :workValue="this.work" :deger="deger" />
              </transition>            
            </div>       


            <div class="frame" style="display: flex; width: 100%; justify-content: center; margin-top: 30px; gap: 5px;">
                <a :class="deger" href="#" class="btn">
                    <i class="fab fa-github" style="color: #ffffff;"></i>
                </a>
                <a :class="deger" href="#" class="btn">
                    <i class="fab fa-twitter" style="color: #00acee;"></i>
                </a>
                <a :class="deger" href="#" class="btn">
                    <i class="fab fa-whatsapp" style="color: #22d17a;"></i>
                </a>
                <a :class="deger" href="#" class="btn">
                    <i class="fab fa-linkedin-in" style="color: #0e76a8;"></i>
                </a>
                <a :class="deger" href="#" class="btn">
                    <i class="fab fa-instagram" style="color: #df398c;"></i>
                </a>
                <a :class="deger" href="#" class="btn">
                    <i class="far fa-envelope" style="color: #ff0000;"></i>
                </a>
            </div>
        </div>
        <div v-else>
            <transition name="page" mode="out-in">
                <router-view v-slot="{ Component }">
                    <component :is="Component" :key="$route.path" />
                </router-view>
            </transition>
        </div>
        </div>
        <a :class="deger" id="back-to-top" href="#">👆🏼</a>
    </div>

</template>

<script>
import imgDark from '@/assets/1.png';
import imgLight from '@/assets/2.png';

export default {
    data() {
        return {
            backgroundIsDark: true,
            deger: true,
            imgDark,
            imgLight,
            work:[],
            name: "AnimatedBackground",
            works: [
                {
                    title: "Aksu CSS",
                    description: "A CSS framework that I created for my personal use. It is a lightweight and easy-to-use framework.",
                },
                {
                    title: "Accounting Base",
                    description: "An accounting software that I developed for a company. It is a web-based software.",
                },
                {
                    title: "Kurs Yanımda",
                    description: "An education web site for software languages.",
                }
            ]

        };
    },
    methods: {
        changeLanguage(event) {
            console.log("Language changed to", event.target.value);
        },
        degerF(new_deger){
            this.deger=new_deger
            this.backgroundIsDark=!this.backgroundIsDark;
        },

        workIndexFunc(index){
            console.log(index)
            this.work=this.works[index];
        }
    }
};
</script>

<style>
@keyframes slideImage {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

.img {
    animation: slideImage 1s ease-out;
}

#app {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: white;
}

.mainSection {
    display: flex;
    width: 60%;
    flex-direction: column;
}
.page-enter-active, .page-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-enter-from, .page-leave-to {
    opacity: 0;
    transform: translateY(20px); /* Sayfa aşağıdan yukarı çıkacak */
}

.page-leave-from, .page-enter-to {
    opacity: 1;
    transform: translateY(0); /* Normal konuma gelir */
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navlink {
    margin: 0 10px;
    text-decoration: none;
    color: white;
}

.frame .btn {
    font-size: 20px;
}

.bodyDark {
    background-color: black;
    color: white;
}

.bodyLight {
    background-color: white;
    color: black;
}
/* Tema değişikliği için animasyonlar */
@keyframes backgroundFadeIn {
    0% {
        background-color: rgba(0, 0, 0, 0);
    }
    100% {
        background-color: var(--color-background);
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.theme-transition {
    animation: backgroundFadeIn 1.5s ease-in-out;
}

.navlink, .header, .bottomP, .frame .btn {
    animation: fadeOut 0.5s ease-in-out, fadeIn 1s ease-in-out 0.5s;
}

/* Icon rotation for smooth transition */
@keyframes rotateIcon {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.themeButton {
    animation: rotateIcon 1s ease-in-out;
}
.animated-background {

    background-color: #f5f5f5; /* Background color, change as needed */
  }
  
  .sliding-animation {
    
    animation: slide 10s linear infinite;
  }
  
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
