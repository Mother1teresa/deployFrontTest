<template>
   <div class="item" v-for="product in products" :key="product.id" >
          <img :src="product.imageUrl" :alt="Image"/>
          <div class="item-info">
            <div class="item-content">
              <div class="item-titles">
                <div class="item-title_lamp">
                    <div class="color"></div>
                    <div class="item-title">{{ product.title }}</div>
                </div>
                <div class="item-content_text">{{ product.text }}</div>
              </div>
              <a class="nav-link" href="#">
                <span><img src="/src/assets/image/basket-lime.png" alt="" /></span>
              </a>
            </div>
            <div class="border"></div>
            <div class="item-quantity">
                <div class="amount-result">
                    150 000 <span class="currency">₽</span>
                </div>
                <div class="item-button">
                    <div class="minus-btn"></div>
                    <span class="figure"></span>
                    <div class="plus-btn"></div>
                </div>
            </div>
          </div>
          <!-- <p>Product {{ index + 1 }}</p> -->
          <!-- Здесь можно поместить информацию о товаре -->
        </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      products: [
        {
            id: 1,
            imageUrl:`/src/assets/image/sophi.png`,
            Image:'fd',
            color:'',
            title:'coppelia',
            text:'Лампа настольная',
        },
        {
            id: 2,
            imageUrl:"/src/assets/image/redLamp.jpg",
            color:'',
            title:'coppelia',
            text:'Лампа настольная',
        },
    ], // Здесь можно разместить реальные данные о товарах
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>

</style>