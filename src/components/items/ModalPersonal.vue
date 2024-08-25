<template>
  <div class="personal">
    <li class="nav-item">
      <ModalFavorite />
    </li>
    <li class="nav-item">
      <ModelProfile />
    </li>
    <li class="nav-item">
      <ModelBaslet />
    </li>
  </div>
</template>

<script>
import ModelBaslet from "./ModelBaslet.vue";
import ModalFavorite from "./ModalFavorite.vue";
import ModelProfile from "./ModalProfile.vue";
export default {
  components: {
    ModalFavorite,
    ModelProfile,
    ModelBaslet,
  },
};
</script>

<style scoped>
.nav-item {
  display: grid;
  align-content: center;
}
.nav-interesting,
.personal {
  align-content: center;
  display: flex;
}
.personal {
  gap: 36px;
  margin-right: 15px;
}
@media (max-width: 1200px) {
  .personal {
    gap: 38px;
    margin-right: 0;
  }
}
@media (max-width: 430px) {
  .personal {
    gap: 18px;
    margin-right: 0;
  }
}
</style>
