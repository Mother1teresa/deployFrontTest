<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppCatalog />
    <AppImageStripes/>
    <AppBlog/>
  </main>
  <footer>
    <AppFooter/>
  </footer>
</template>

<script>

import AppFooter from "./components/AppFooter.vue";
import AppCatalog from "./components/AppCatalog.vue";
import AppHeader from "./components/AppHeader.vue";
import AppImageStripes from "./components/AppImageStripes.vue";
import AppBlog from "./components/AppBlog.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCatalog,
    AppImageStripes,
    AppBlog
  },
};
</script>

<style>
body {
  background: rgba(174, 151, 232, 1);
}

</style>
