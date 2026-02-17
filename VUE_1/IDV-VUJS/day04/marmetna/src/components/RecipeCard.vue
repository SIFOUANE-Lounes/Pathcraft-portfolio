<template>
  <div class="recipe-card">
    <img :src="image" :alt="title" />
    <h2>{{ title }}</h2>
    <p>Préparation : {{ prepTime }}</p>
    <p>Cuisson : {{ cookTime }}</p>
    <p>Difficulté : {{ difficulty }}/5</p>
  </div>
</template>

<script>
export default {
  name: "MyRecipeCard",
  props: {
    image: String,
    title: String,
    prepTime: String,
    cookTime: String,
    difficulty: Number,
  },
};
</script>

<style scoped>
.recipe-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  text-align: center;
  margin: 10px;
  font-size: 14px;
}
.recipe-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
