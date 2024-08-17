<template>
<div class="container-fluid">
    <ul class="nav nav-control">
      <div class="nav-main">
        <li class="nav-item">
          <a class="logo-text" href="#">Elfen lied</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><span><img src="/src/assets/image/catalog.png" class="icon catalog" alt=""></span>Каталог</a>
        </li>
      </div>
      <div class="nav-interesting">
        <li class="nav-item">
          <a class="nav-link" href="#">Блог</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Контакты</a>
        </li>
      </div>
      <div class="nav-links-right">
        <div class="search">
          <li class="nav-item">
            <a class="nav-link" href="#"><span><img src="/src/assets/image/search.png" class="icon search" alt=""></span>Поиск</a>
          </li>
        </div>
         <ModalBasket />
      </div>
    </ul>
    
  </div>
</template>

<script>
import ModalBasket from './items/ModalBasket.vue';

export default {
  components:{
    ModalBasket,
  },
};
</script>

<style scoped>
.container-fluid{
  padding: 0 60px 0 60px;
}
.nav-control{
  justify-content: space-between;
  margin-top: 53px;
}
.nav-control li, .search{
  align-content: center;
}
.nav-interesting,
.personal {
  display: flex;
}
.logo-text{
  font-size: 45px;
  font-family: 'Le Murmure', sans-serif;
  font-weight: 600; 
  padding: 0; 
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
}
.icon{
  margin-right: 12px;
  margin-bottom: 5px;
}
.nav-main{
  display: flex;
  gap: 133px;
}
.nav-links-right{
  display: flex;
  gap: 247px;
}
.nav-link{
  color: rgba(255, 255, 255, 1);
  font-family: 'Euclid Circular A', sans-serif;
  font-size: 18px;
}
.catalog{
  width: 15px;
  height: 15px;
}
</style>
