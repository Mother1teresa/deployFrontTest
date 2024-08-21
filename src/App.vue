<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppCatalog />
  </main>
  <footer>
    <AppFooter/>
  </footer>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppCatalog from "./components/AppCatalog.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCatalog,
  },
};
</script>

<style>
body {
  background: rgba(174, 151, 232, 1);
}

</style>
