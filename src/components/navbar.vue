  <template>
    <nav class="nav">
      <div
        :class="deger"
        class="navName"
        style="display: flex; align-items: center"
      >
        <b :class="deger" class="navL">Yunus Aksu</b>
      </div>
      <div
        class="links"
        :class="deger"
        style="align-items: center; justify-content: center"
      >
        <RouterLink to="/" class="navL">Home</RouterLink>
        <RouterLink to="/posts" class="navL">Posts</RouterLink>

        <a :class="deger" href="#" class="navL" id="navProjects">Projects</a>
        <RouterLink to="/contact" class="navL">Contact</RouterLink>
      </div>
      <div :class="deger" class="source">
        <i  class="githubLink fab fa-github"></i>
        <a :class="deger,deger2" class="githubLinkText" href="https://github.com/RounenRais/Portfolio-new"
          >Source</a
        >
      </div>

      <div class="theme">
        <a
          :class="deger"
          style="cursor: pointer"
          class="change"
          @click="rotateIcon"
        >
          <i
            id="a1"
            :class="backgroundIsDark ? 'fa-solid fa-sun ' : 'fa-solid fa-moon'"
          ></i>
        </a>
      </div>
    </nav>
  </template>
  <script>
  import { onMounted ,watch,ref} from "vue";
  import { RouterLink } from "vue-router";
  import { useRoute } from "vue-router";
  const route = useRoute();

  export default {
    props: ["deger2"],
    data() {
      watch(route, () => {
        this.deger=this.deger2;
      emit("degerim", deger.value);
    });
      return {
        backgroundIsDark: false,
        deger: "",
      };
    },
    mounted() {
      if(this.deger==""){
        this.deger= "whiteMode"
      }      this.$emit("degerim", this.deger);
    

  },
    methods: {
      rotateIcon() {
        const icon = document.getElementById("a1");
        this.deger = this.backgroundIsDark === true ? "whiteMode" : "";

        icon.style.transition = "all 0.7s ease-in-out";
        icon.style.transform = "rotate(360deg)";
        if (this.backgroundIsDark==true) {
            this.deger = "whiteMode";
          
        } else {
            this.deger = "";
               }
        this.backgroundIsDark = !this.backgroundIsDark;
        setTimeout(() => {
          icon.style.transition = "";
          icon.style.transform = "";
        }, 500);
        this.$emit("degerim", this.deger);
        
      },
      
      
    },
   
  };
  </script>
  <style>
  .languageButton {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .switch {
    position: relative;
    display: flex;
    width: 60px;
    border-radius: 34px;

    height: 34px;
  }

  .switch input {
    opacity: 0;
    border-radius: 34px;

    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    border-radius: 14px;

    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }

  .slider {
    place-items: center;
  }

  .slider:before {
    position: absolute;
    border-radius: 14px;

    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #606676;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
  </style>
