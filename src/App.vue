<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppContent/>
  </main>
</template>

<script>
import AppContent from './components/AppContent.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components:{
    AppHeader,
    AppContent
  }
}
</script>

<style>
body{
  background: rgba(174, 151, 232, 1);
}
</style>