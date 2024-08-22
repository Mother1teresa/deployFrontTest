<template>
  <AppContent />

  <div class="container-fluid">
    <ul class="nav nav-control delet">
      <div class="nav-main">
        <li class="nav-item">
          <a class="logo-text" href="#">Elfen lied</a>
        </li>
        <li class="nav-item delet-400">
          <a class="nav-link" href="#catalog">
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
          <a class="nav-link" href="#blog"> Блог</a>
        </li>
        <li class="nav-item">
          <ModelContacts />
        </li>
      </div>
      <div class="nav-links-right">
        <div class="search">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="toggleSearch">
              <span>
                <img
                  src="/src/assets/image/search.png"
                  class="icon search-image"
                  alt=""
                />Поиск</span
              >
            </a>
          </li>
        </div>
        <ModalPersonal />
      </div>
    </ul>

    <div class="open">
      <ul class="open-ul">
        <li class="nav-item">
          <a class="logo-text" href="#">Elfen lied</a>
        </li>
        <div class="open-box">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span>
                <img
                  class="open-icon"
                  src="/src/assets/image/search.png"
                  alt=""
                />
              </span>
            </a>
          </li>
          <ModalPersonal />
          <li class="nav-item">
            <ModelContacts />
          </li>
        </div>
      </ul>
    </div>

    <div v-if="showSearchBar" class="search-bar">
      <div class="search-box">
        <img
          src="/src/assets/image/search-lime.png"
          alt="Search Icon"
          class="search-icon"
        />
      </div>
      <input
        type="text"
        v-show="searchActive"
        v-model="searchQuery"
        placeholder="Поиск..."
        class="search-input"
      />
      <button class="close-button" @click="closeModal">
        <img src="/src/assets/image/close.png" alt="" />
      </button>
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
  data() {
    return {
      showSearchBar: false,
      searchActive: true,
      searchQuery: "",
    };
  },
  methods: {
    toggleSearch() {
      this.showSearchBar = !this.showSearchBar;
    },
    closeModal() {
      this.showSearchBar = false;
    },
  },
};
</script>

<style scoped>
.open {
  display: none;
}
.open-ul {
  display: none;
}
.search-bar {
  margin-top: 48px;
  width: 100%;
  padding: 0 60px;
  height: 70px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  border-radius: 50px;
  position: relative;
}
.search-input {
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  margin-left: 13px;
  font-family: "Euclid Circular A", sans-serif;
}
.search-input:focus {
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
}
.search-input::placeholder {
  color: rgba(255, 255, 255, 1);
  opacity: 1;
}
.form-control {
  width: 100%;
  padding: 5px;
  font-size: 16px;
}
.search-box {
  display: grid;
  align-content: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 1);
  background: rgba(174, 151, 232, 1);
  border-radius: 50px;
  width: 54px;
  height: 54px;
  margin-left: -50px;
}
.search-icon {
  width: 24px;
  height: 24px;
}
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

.close-button {
  position: absolute;
  width: 65px;
  height: 65px;
  top: -12px;
  right: 7px;
  color: rgba(255, 255, 255, 0.826);
  background-color: transparent;
  border: none;
  font-size: 52px;
  cursor: pointer;
  transition: opacity 0.3s ease;
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
  .open {
    display: grid;
  }
  .open-ul {
    display: grid;
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
  .search-bar {
    height: 58px;
    margin-top: 3px;
    width: 360px;
  }
}
</style>
