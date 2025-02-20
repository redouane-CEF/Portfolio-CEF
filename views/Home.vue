<template>
  <div class="home">
    <main>
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Découvrez mes projets et compétences en développement web.</p>
      <div class="projects-grid">
        <project-card
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @open-modal="openProjectModal(project)"
        />
      </div>
    </main>
    <project-modal
      v-if="selectedProject"
      :project="selectedProject"
      @close-modal="closeProjectModal"
    />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ProjectCard,
    ProjectModal,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'CV en ligne',
          description: 'Développement d un CV en ligne avec HTML et CSS',
          image: require ('@/assets/images/project1.png'),
        },
        {
          id: 2,
          title: 'Cahier des charges',
          description: 'Rédaction d un cahier des charges pour un site web',
          image: require ('@/assets/images/project2.png'),
        },
        {
          id: 3,
          title: 'Dynamiser un commentaire',
          description: 'Dynamiser un commentaire avec JavaScript',
          image: require ('@/assets/images/project3.png'),
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    openProjectModal(project) {
      this.selectedProject = project;
    },
    closeProjectModal() {
      this.selectedProject = null;
    },
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(135deg, #000, #c8c8df 100%);
  color: white;
  text-align: center;
  padding: 20px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>