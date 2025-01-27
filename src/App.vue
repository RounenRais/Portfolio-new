<script setup>
import NavBar from "./components/navbar.vue";
import { useRoute } from "vue-router";
import { FadeInOut } from "vue3-transitions";

const route = useRoute();
</script>

<template>
  <div
    id="app"
    :class="{ 'bodyDark': backgroundIsDark, 'bodyLight': !backgroundIsDark }"
    class="animated-background"
  >
    <div class="mainSection">
      <header class="cd-header" data-type="slider-item">
        <NavBar @degerim="degerF" />
      </header>

      <!-- Home Section -->
      <div v-if="route.name != 'contact'&&route.name != 'posts'" class="home">
        <div :class="deger" class="topDivs fade-in">
          <img src="./assets/catgif_no_bg.gif" class="img1 fade-in" alt="" />
          <div class="me fade-in">
            <h1>Hi, I'm <span class="name">Yunussss</span></h1>
            <p>Frontend Developer</p>
            <p>UI/UX Designersadassasa</p>
            <p>Backend Developer</p>
          </div>
        </div>

        <h1 class="header fade-in" :class="deger" id="welcome">Welcome!</h1>

        <div class="mainDShadow projects fade-in" :class="deger">
          <transition name="fade-slide" mode="out-in">
            <router-view @workIndex="workIndexFunc" :workValue="this.work" :deger="deger" />
          </transition>
        </div>

        <div
          class="frame fade-in"
          style="display: flex; width: 100%; justify-content: center; margin-top: 30px; gap: 5px;"
        >
          <a :class="deger" href="https://github.com/RounenRais" class="btn fade-in">
            <i class="fab fa-github" style="color: #ffffff;"></i>
          </a>

          <a :class="deger" href="https://www.linkedin.com/in/yunus-aksu-0a8176327/" class="btn fade-in">
            <i class="fab fa-linkedin-in" style="color: #0e76a8;"></i>
          </a>
          <a :class="deger" href="#" class="btn fade-in">
            <i class="fab fa-instagram" style="color: #df398c;"></i>
          </a>
          <a :class="deger" href="#" class="btn fade-in">
            <i class="far fa-envelope" style="color: #ff0000;"></i>
          </a>
        </div>
      </div>

      <!-- Router-view Section -->
      <div v-else-if="route.name == 'contact'" >
        <router-view :deger="deger" v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <Component :is="Component" />
          </transition>
        </router-view>
      </div>
      <div v-else-if="route.name == 'posts'" >
        <router-view :deger="deger" v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <Component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    <a :class="deger" id="back-to-top" href="#">👆🏼</a>
  </div>
  
</template>

<script>
import imgDark from "@/assets/1.png";
import imgLight from "@/assets/2.png";
import { defineComponent } from 'vue'


export default  {
  components: { FadeInOut },
  data() {
    return {
      backgroundIsDark: true,
      deger: true,
      imgDark,
      imgLight,
      work: [],
      name: "AnimatedBackground",
      works: [
        {
          title: "Aksu CSS",
          description:
            "A CSS framework that I created for my personal use. It is a lightweight and easy-to-use framework.",
        },
        {
          title: "Accounting Base",
          description:
            "An accounting software that I developed for a company. It is a web-based software.",
        },
        {
          title:this.$t('navAbout'),
          description: "An education web site for software languages.",
        },
      ],
    };
  },
  
  methods: {
    changeLanguage(event) {
      console.log("Language changed to", event.target.value);
    },
    degerF(new_deger) {
      this.deger = new_deger;
      this.backgroundIsDark = !this.backgroundIsDark;
    },
    workIndexFunc(index) {
      console.log(index);
      this.work = this.works[index];
    },
  },
};
</script>

<style>
.grow-out-enter-from,
.grow-out-leave-to {
  opacity: 0;
	transform: translateY(-100%);
}
.grow-out-enter-active,
.grow-out-leave-active {
	transition: 0.5s ease-out;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
	transition: 0.7s ease-out;
}
</style>
