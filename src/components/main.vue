

<script>
export default{
    props:["deger"],
    data() {
        return {
            backgroundIsDark: true,
            deger: true,

            work:[],
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


        workIndexFunc(index){
            console.log(index)
            this.work=this.works[index];
        }
    }
}
</script>
<template>

    <div :class="deger" class="topDivs">
        <img src="../assets/catgif_no_bg.gif" class="img1" alt="">
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
</template>

