<template>
  <div class="container-fluid" id="blog">
    <div class="blog">
      <div class="blog-main">
        <div class="blog-position">
          <div class="blog-points">
            <img src="/src/assets/image/points.png" alt="" />
          </div>
          <div class="blog-title">блог</div>
        </div>
        <div class="blog-pages">
          0{{ currentPage.current }} ⸺ 0{{ currentPage.total }}
        </div>
      </div>
      <div class="blog-content">
        <swiper
          :slides-per-view="slidesToShow"
          :space-between="30"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
        >
          <swiper-slide
            class="swiper-slide"
            v-for="post in blogs"
            :key="post.id"
            :style="{ width: `${slideWidth}px` }"
          >
            <div class="post">
              <img
                class="post-shape"
                src="/src/assets/image/shape.png"
                alt=""
              />
              <div class="box-content">
                <div class="box-text">
                  <div class="post-author">
                    <div class="post-number">{{ post.numderPost }}</div>
                    <div class="author-name">{{ post.nameAuthor }}</div>
                  </div>
                  <div class="post-title">{{ post.titlePost }}</div>
                  <div class="post-data">{{ post.dataPost }}</div>
                </div>
                <div class="box-image">
                  <img class="post-image" :src="post.imageBlog" alt="" />
                </div>
              </div>
              <button class="post-time"><span class="time">3</span> мин</button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import postimage1 from "/src/assets/image/post-image1.png";
import postimage2 from "/src/assets/image/post-image2.png";
import postimage3 from "/src/assets/image/post-image3.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          numderPost: "01",
          imageBlog: postimage1,
          titlePost: "новая коллекция кресел",
          nameAuthor: "Laura Busche",
          dataPost: "14 Января 2023",
        },
        {
          id: 2,
          numderPost: "02",
          imageBlog: postimage2,
          titlePost: "Световой дизайн в интерьере",
          nameAuthor: "Laura Busche",
          dataPost: "14 Января 2023",
        },
        {
          id: 3,
          numderPost: "03",
          imageBlog: postimage3,
          titlePost: "как выбрать шкаф в спальню",
          nameAuthor: "Laura Busche",
          dataPost: "14 Января 2023",
        },
        {
          id: 4,
          numderPost: "04",
          imageBlog: postimage2,
          titlePost: "Световой дизайн в интерьере",
          nameAuthor: "Laura Busche",
          dataPost: "14 Января 2023",
        },
      ],
      slidesToShow: 1,
    };
  },
  computed: {
    currentPage() {
      return {
        current: this.swiper?.activeIndex + 1 || 1,
        total: this.blogs.length,
      };
    },
  },

  methods: {
    checkScreenWidth() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 2560) {
        this.slidesToShow = 4;
      } else if (screenWidth >= 2305) {
        this.slidesToShow = 3;
      } else if (screenWidth >= 1877) {
        this.slidesToShow = 2;
      } else if (screenWidth >= 1441) {
        this.slidesToShow = 2;
      } else if (screenWidth <= 1024) {
        this.slidesToShow = 1;
      }
    },
    onSlideChange(swiper) {
      this.swiper = swiper;
    },
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 0 60px 0 60px;
  margin-top: 170px;
  margin-bottom: 170px;
  height: 550px;
  width: 100%;
  cursor: grab;
  /* overflow: hidden; */
}
.blog-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 70px;
}
.blog-position {
  display: flex;
  align-items: center;
  gap: 45px;
}
.blog-title {
  font-size: 60px;
  font-family: "Euclid Circular A", sans-serif;
  text-transform: uppercase;
}
.blog-pages {
  font-family: "Floreste Wavy", sans-serif;
  font-size: 40px;
}

.blog-content {
  display: flex;
  justify-content: left;
  gap: 30px;
  height: 376px;
  width: 100%;
}
.post {
  width: 576px;
  height: 376px;
  position: relative;
}
.post-shape {
  position: absolute;
}
.box-content {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 576px;
  height: 376px;
}
.box-image {
  padding: 15px;
}
.box-text {
  display: grid;
  justify-content: space-between;
  padding: 25px;
  width: 342px;
  height: 342px;
}
.post-author {
  width: 240px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.post-image {
  margin-right: -5px;
  margin-top: -4px;
}
.post-number {
  font-family: "Euclid Circular A", sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  text-align: center;
}
.author-name {
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: "Euclid Circular A", sans-serif;
  text-align: right;
  width: 90px;
}
.post-title {
  font-family: "Euclid Circular A", sans-serif;
  font-size: 28px;
  width: 206px;
  line-height: 35px;
  text-align: left;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
}
.post-data {
  display: grid;
  align-items: end;
  font-family: "Euclid Circular A", sans-serif;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  width: 82px;
}
.post-time {
  display: grid;
  justify-content: center;
  border: 2px solid rgba(217, 255, 90, 1);
  background: rgba(255, 255, 255, 0.19);
  transform: rotate(-15deg);
  width: 96px;
  height: 81px;
  border-radius: 50%;
  bottom: 0;
  left: 130px;
  position: absolute;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.post-time:active {
  background: rgba(217, 255, 90, 1);
  color: rgba(174, 151, 232, 1);
}
.time {
  font-size: 40px;
  font-family: "Floreste Wavy", sans-serif;
  font-weight: 400;
  text-align: center;
  height: 20px;
}
/* @media (max-width: 1450px) {
  .container-fluid {
    overflow: hidden;
  }
} */
@media (max-width: 1030px) {
  .container-fluid {
    padding: 0 50px 0 50px;
  }
  .post {
    width: 580px;
    height: 376px;
    position: relative;
  }
}
@media (max-width: 430px) {
  .container-fluid {
    padding: 0 8px 0 15px;
    margin-top: 120px;
    margin-bottom: 120px;
    height: 333px;
    width: 100%;
  }
  .blog {
    height: 333px;
  }
  .blog-main {
    margin-bottom: 35px;
  }
  .blog-title {
    font-size: 23px;
    width: 63px;
    height: 29px;
  }
  .blog-pages {
    font-size: 25px;
    height: 29px;
  }
  .post-shape {
    width: 360px;
    height: 243px;
  }
  .post {
    width: 360px;
    height: 269px;
    position: relative;
  }
  .post-image {
    width: 156px;
    height: 223px;
  }
  .post-image {
    margin-right: 0;
    margin-top: 0;
  }
  .box-text {
    width: 360px;
    height: 243px;
    padding: 15px;
  }
  .post-author {
    width: 150px;
  }
  .box-image {
    padding: 10px;
  }
  .post-data {
    font-size: 12px;
  }
  .post-title {
    font-size: 15px;
    width: 115px;
    line-height: 19px;
  }
  .box-content {
    width: 360px;
    height: 243px;
  }
  .author-name {
    font-size: 13px;
    width: 56px;
  }
  .post-time {
    width: 63px;
    height: 56px;
    bottom: 3px;
    left: 80px;
    transform: rotate(-15deg);
    border: 1px solid rgba(217, 255, 90, 1);
    font-size: 15px;
  }
  .time {
    font-size: 25px;
    height: 15px;
    font-weight: 400;
  }
}
@media (max-width: 380px) {
  .container-fluid {
    padding: 0 8px 0 8px;
    margin-top: 120px;
    margin-bottom: 120px;
    height: 333px;
    width: 100%;
  }
}
@media (max-width: 321px) {
  .container-fluid {
    padding: 0 8px 0 8px;
    margin-top: 100px;
    margin-bottom: 100px;
    height: 333px;
    width: 100%;
    overflow: hidden;
  }
  .blog {
    height: 333px;
  }
  .blog-main {
    margin-bottom: 35px;
  }
  .blog-position {
    gap: 15px;
  }
  .blog-title {
    font-size: 23px;
    width: 63px;
    height: 29px;
  }
  .blog-pages {
    font-size: 25px;
    height: 29px;
  }
  .post-shape {
    width: 304px;
    height: 223px;
  }
  .post {
    width: 310px;
    position: relative;
    overflow: hidden;
  }
  .post-image {
    width: 133px;
    height: 205px;
  }
  .post-image {
    margin-right: 3px;
    margin-top: 0;
  }
  .box-text {
    width: 360px;
    height: 223px;
    padding: 15px;
  }
  .post-author {
    width: 120px;
  }
  .box-image {
    padding: 10px;
  }
  .post-data {
    font-size: 10px;
    width: 60px;
  }
  .post-title {
    font-size: 13px;
    width: 115px;
    height: 60px;
    line-height: 19px;
  }
  .box-content {
    width: 310px;
    height: 223px;
  }
  .author-name {
    font-size: 13px;
    width: 56px;
  }
  .post-time {
    width: 50px;
    height: 50px;
    bottom: 26px;
    left: 69px;
    transform: rotate(-15deg);
    border: 1px solid rgba(217, 255, 90, 1);
    font-size: 15px;
  }
  .time {
    font-size: 25px;
    height: 15px;
    font-weight: 400;
  }
}
</style>
