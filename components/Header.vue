<template>
  <header class="header">
    <div class="logo">
      <h1>Mon Portfolio CEF</h1>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/about">À Propos</router-link></li>
        <li><router-link to="/projects"> Mes Projets</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #000, #c8c8df 100%);
  color: white;
}

.logo h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>