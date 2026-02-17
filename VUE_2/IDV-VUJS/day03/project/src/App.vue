<template>
  <div>
  <img src="https://i.pravatar.cc/150?img=50%22"  >
<p>Profil de {{ username }}</p>
<a href="https://github.com/SIFOUANE-Lounes">
   Voir le profil GitHub
</a>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const avatarUrl = ref('https://i.pravatar.cc/150?img=50')
const username = ref('SIFOUANE_Lounes') 
const githubUrl = ref('https://github.com/TonNomUtilisateur') 
</script>

