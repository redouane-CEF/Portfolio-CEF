<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Mon Portfolio CEF. Tous droits réservés.</p>
      <div class="footer-links">
        <router-link to="/about">À propos</router-link>
        <router-link to="/projects">Projets</router-link>
        <a href="tel:0618889248" class="footer-links">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #000, #c8c8df 100%);
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #f0a500;
}
</style>