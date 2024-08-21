<template>
  <AppContent/>

  <div class="container-fluid">
    <ul class="nav nav-control">
      <div class="nav-main">
        <li class="nav-item">
          <a class="logo-text" href="#">Elfen lied</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span>
              <img
                src="/src/assets/image/catalog.png"
                class="icon catalog"
                alt="" />
              </span>Каталог</a>
        </li>
      </div>
      <div class="nav-interesting">
        <li class="nav-item">
          <a class="nav-link" href="#">Блог</a>
        </li>
        <li class="nav-item">
          <ModelContacts />
        </li>
      </div>
      <div class="nav-links-right">
        <div class="search">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                <img
                  src="/src/assets/image/search.png"
                  class="icon search"
                  alt=""/> 
                  </span>Поиск
            </a>
          </li>
        </div>
        <ModalPersonal />
      </div>
    </ul>
  </div>
</template>

<script>

import ModelContacts from "./items/ModelContacts.vue"
import ModalPersonal from "./items/ModalPersonal.vue";
import AppContent from "@/components/AppContent.vue";
export default {
  components: {
    ModalPersonal,
    AppContent,
    ModelContacts,
  },
  
};
</script>

<style scoped>


.container-fluid {
  position: absolute;
  top: 0;
  padding: 0 60px 0 60px;
  z-index: 2;
}
.nav-control {
  justify-content: space-between;
  margin-top: 53px;
  position: relative;
  height: 54px;
  z-index: 1;
}
.nav-control li,
.search {
  align-content: center;
}
.nav-interesting,
.personal {
  display: flex;
}
.logo-text {
  font-size: 45px;
  font-family: "Le Murmure", sans-serif;
  font-weight: 600;
  padding: 0;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
}
.icon {
  margin-right: 12px;
  margin-bottom: 5px;
}
.nav-main {
  display: flex;
  gap: 133px;
}
.nav-links-right {
  display: flex;
  gap: 180px;
}
.nav-link {
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
}
.catalog {
  width: 15px;
  height: 15px;
}
@media (max-width: 1600px) {
  .nav-links-right {
    gap: 140px;
  }
}



</style>
