<template>
  <AppContent />

  <div class="container-fluid">
    <ul class="nav nav-control delet">
      <div class="nav-main">
        <li class="nav-item">
          <a class="logo-text" href="#">Elfen lied</a>
        </li>
        <li class="nav-item delet-400">
          <a class="nav-link" href="#">
            <span>
              <img
                src="/src/assets/image/catalog.png"
                class="icon catalog"
                alt=""
              />
              Каталог</span
            ></a
          >
        </li>
      </div>
      <div class="nav-interesting">
        <li class="nav-item">
          <a class="nav-link" href="#"> Блог</a>
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
                  class="icon search-image"
                  alt=""
                /> </span
              >Поиск
            </a>
          </li>
        </div>
        <ModalPersonal />
      </div>
    </ul>

    <div class="open">
      <ul>
        <li class="nav-item">
          <a class=" logo-text" href="#">Elfen lied</a>
        </li>
        <div class="open-box">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                <img class="open-icon" src="/src/assets/image/search.png" alt=""/>
              </span>
            </a>
          </li>
          <ModalPersonal />
          <li class="nav-item">
            <ModelContacts/>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import ModelContacts from "./items/ModelContacts.vue";
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
@media (max-width: 400px) {
  .container-fluid {
    padding: 25px 15px 25px 15px;
  }
  .delet {
    display: none;
  }
  .open ul {
    display: flex;
    justify-content: space-between;
  }
  .nav-item {
    display: grid;
    align-content: center;
  }
  li {
    list-style-type: none;
  }
  ul {
    margin-left: 0;
    padding-left: 0;
  }
  .open-box {
    display: flex;
    gap: 18px;
  }
  /* .open-icon{
    width: 21px;
    height: 22px;
  } */
}
</style>
