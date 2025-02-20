<template>
  <div class="about">
    <h1>À propos de moi</h1>
    <p>
      Je suis Rédouane MOUJAHID et j'ai l'ambition de devenir un développeur web passionné par la création d'applications modernes et interactives. 
      <br>Avec des compétences solides en HTML, CSS et JavaScript, je m'efforce de produire un code propre et efficace.
    </p>
    <h2>Compétences</h2>
    <ul>
      <li>Développement Frontend avec HTML, CSS, et Vue.js</li>
      <li>Conception de sites responsives avec CSS et frameworks comme Vue.Js</li>
      <li>Intégration d'APIs et gestion de l'état avec Vue.Js</li>
      <li>Optimisation des performances et accessibilité</li>
    </ul>
    <h2>Mon parcours</h2>
    <p>
      J'ai commencé ma carrière en tant que développeur frontend, travaillant sur divers projets allant des sites vitrines aux applications web complexes. 
      Mon objectif est de continuer à apprendre et à m'améliorer dans le domaine du développement web.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.about {
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

h2 {
  color: #333;
}

p {
  color: #333;
}

ul {
  list-style-type: none;
  margin-left: 20px;
}
</style>