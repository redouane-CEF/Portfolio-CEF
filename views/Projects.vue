<template>
  <div class="projects">
    <h1>Mes Projets</h1>
    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @open-modal="openModal(project)"
      />
    </div>
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import ProjectModal from '../components/ProjectModal.vue';

export default {
  components: {
    ProjectCard,
    ProjectModal,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'CV en ligne',
          description: 'Développement d un CV en ligne avec HTML et CSS.',
          image: require('../assets/images/project1.png'),
        },
        {
          id: 2,
          title: 'Rédaction cahier des charges',
          description: 'Rédaction d un cahier des charges pour une boutique en ligne de chaussettes',
          image: require('../assets/images/project2.png'),
        },
        {
          id: 3,
          title: 'Dynamiser un espace commentaire',
          description: 'Utilisation de Javascript pour dynamiser un espace commentaire',
          image: require('../assets/images/project3.png'),
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
    },
    closeModal() {
      this.selectedProject = null;
    },
  },
};
</script>

<style scoped>
.projects {
  padding: 20px;
  background: linear-gradient(135deg, #000, #c8c8df 100%);
  color: white;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>