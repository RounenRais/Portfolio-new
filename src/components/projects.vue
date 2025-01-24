<script>
import { onMounted } from "vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";
export default {
  props: ["deger"],
  data() {
    return {};
  },
  setup() {
    onMounted(() => {});
  },
  methods: {
    project(project_value) {
      this.$emit("workIndex", project_value);
    },
  },
};
</script>

<template>
  <h1 :class="deger" class="workT">Work</h1>
  <div :class="deger" class="works">
    <div :class="deger" class="project">
      <router-link @click="project(0)" to="project"
        ><img class="workImage shadow" src="../assets/css.png" alt=""
      /></router-link>
    </div>
    <div class="project ">
      <router-link @click="project(1)" to="project"
        ><img class="workImage shadow" src="../assets/bill.png" alt=""
      /></router-link>
    </div>
    
    <div class="project ">
      <router-link @click="project(2)" to="project"
      ><img class="workImage shadow" src="../assets/kurs.png" alt=""
    /></router-link>
    </div>
  </div>
</template>
