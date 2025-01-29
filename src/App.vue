<script setup>
import NavBar from "./components/navbar.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
const route = useRoute();
</script>

<template>
  <div
    id="app"
    :class="{ bodyDark: backgroundIsDark, bodyLight: !backgroundIsDark }"
    class="animated-background"
  >
    <div class="mainSection">
      <header class="cd-header" data-type="slider-item">
        <NavBar @degerim="degerF" />
      </header>

      <!-- Home Section -->
      <div v-if="route.name != 'contact' && route.name != 'posts'" class="home">
        <div :class="deger" class="topDivs fade-in">
          <img src="./assets/catgif_no_bg.gif" class="img1 fade-in" alt="" />
          <div class="me ">
            <h1>Hi, I'm Yunus</h1>
            <p>Frontend Developer</p>
            <p>UI/UX Designer</p>
            <p>Backend Developeaar</p>
            <div class="fade-container">

            </div>
          </div>
        </div>

        <h1 class="header fade-in" :class="deger" id="welcome">Welcome!</h1>

        <div class="mainDShadow projects fade-in" :class="deger">
          <router-view
            @workIndex="workIndexFunc"
            :workValue="work"
            :deger="deger"
          />
        </div>

        <div
          class="frame fade-in"
          style="
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 30px;
            gap: 5px;
          "
        >
          <a
            :class="deger"
            href="https://github.com/RounenRais"
            class="btn fade-in"
          >
            <i class="fab fa-github" style="color: #ffffff"></i>
          </a>

          <a
            :class="deger"
            href="https://www.linkedin.com/in/yunus-aksu-0a8176327/"
            class="btn fade-in"
          >
            <i class="fab fa-linkedin-in" style="color: #0e76a8"></i>
          </a>
          <a :class="deger" href="#" class="btn fade-in">
            <i class="fab fa-instagram" style="color: #df398c"></i>
          </a>
          <a :class="deger" href="#" class="btn fade-in">
            <i class="far fa-envelope" style="color: #ff0000"></i>
          </a>
        </div>
      </div>

      <!-- Router-view Section -->
      <div v-else-if="route.name == 'contact'">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition || 'slide-fade'">
            <component :key="$route.path" :is="Component" />
          </transition>
        </router-view>
      </div>
      <div v-else-if="route.name == 'posts'">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition || 'slide-fade'">
            <component :key="$route.path" :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
    
    <transition name="fade">
      <a
        :class="deger"
        id="back-to-top"
        v-if="isVisible"
        href="#"
      >
        👆🏼
      </a>
    </transition>
  </div>
</template>

<script>
import imgDark from "@/assets/1.png";
import imgLight from "@/assets/2.png";
import { defineComponent } from "vue";

export default {
  data() {
    return {
      backgroundIsDark: true,
      deger: true,
      imgDark,
      imgLight,
      work: {},
      name: "AnimatedBackground",
      works: [
        {
          title: "Aksu CSS",
          description:
            "A CSS framework that I created for my personal use. It is a lightweight and easy-to-use framework.",
            startingDate: "2022",
            progress: "in progress",
            github:"https://github.com/RounenRais"

        },
        {
          title: "Accounting Base",
          description:
            "An accounting software that I developed for a company. It is a web-based software.",
            startingDate: "2022",
            progress: "in progress",
            github:"https://github.com/RounenRais"


        },
        {
          title: "Kurs Yanımda",
          description: "An education web site for software languages.",
          startingDate: "2023",
          progress: "in progress",
          github:"https://github.com/RounenRais"


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
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

/* Back-to-top button transition */
#back-to-top.fade-enter-active, #back-to-top.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

#back-to-top.fade-enter, #back-to-top.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
