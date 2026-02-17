<template>
  <div id="app">
    <MyHeader />

    <div class="cards-container">
      <MyRecipeCard
        title="Cookies maison"
        :image="cookiesImg"
        prepTime="15 min"
        cookTime="10 min"
        :difficulty="1"
      />
      <MyRecipeCard
        title="Brownie au chocolat"
        :image="borImg"
        prepTime="20 min"
        cookTime="25 min"
        :difficulty="4"
      />
    </div>

    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/Header.vue";
import MyFooter from "./components/Footer.vue";
import MyRecipeCard from "./components/RecipeCard.vue";

// on importe les images depuis le dossier assets
import cookiesImg from "@/assets/cookie.webp";
import borImg from "@/assets/Bro.webp";

export default {
  name: "App",
  components: { MyHeader, MyFooter, MyRecipeCard },
  data() {
    return {
      cookiesImg,
      borImg,
    };
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}
</style>
