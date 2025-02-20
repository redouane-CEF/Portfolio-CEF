<template>
  <div class="project-card">
    <img :src="project.image" alt="Screenshot of {{ project.title }}" class="project-image" @click="openModal" />
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-description">{{ project.description }}</p>
    <button class="view-details" @click="openModal">Voir le devoir</button>
    
    <ProjectModal v-if="isModalOpen" :project="project" @close="closeModal" />
  </div>
</template>

<script>
import ProjectModal from './ProjectModal.vue';

export default {
  components: {
    ProjectModal
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    }
  }
};
</script>

<style scoped>
.project-card {
  background: linear-gradient(135deg, #000, #c8c8df 100%);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.project-title {
  font-size: 1.5em;
  margin: 10px 0;
}

.project-description {
  font-size: 1em;
  background: linear-gradient(135deg, #000, #c8c8df 100%);
}

.view-details {
  background: linear-gradient(135deg, #000, #c8c8df 100%);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.view-details:hover {
  background: linear-gradient(135deg, #000, #c8c8df 100%);
}
</style>