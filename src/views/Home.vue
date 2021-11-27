<template>
  <section class="home">
    <img
      alt="logo_accueil"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Groupomania - Le réseau social" />
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home", 
  components: {
    HelloWorld
  },
  computed : {
    test(){
      console.log(this.$store);
      return this.$store;
    }
  },
  created(){
    //this.getLastsPosts();
  }
};
</script>

<style lang="scss" scoped>

</style>
