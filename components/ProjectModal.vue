<template>
  <div class="modal" v-if="isVisible" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2> CV </h2>
      <img :src="project.image" alt="Screenshot of {{ project.title}}" class="project-image" />
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank" class="btn">Voir le projet</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.modal-content {
  background: linear-gradient(135deg, #6e7f80, #c9d6d5);
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

.project-image {
  width: 100%;
  border-radius: 8px;
}

.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>