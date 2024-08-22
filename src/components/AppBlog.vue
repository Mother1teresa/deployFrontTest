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
        <div class="blog-pages">02 ⸺ 04</div>
      </div>
      <div class="blog-content">
        <div class="post" v-for="post in blogs" :key="post.id">
          <img class="post-shape" src="/src/assets/image/shape.png" alt="" />
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
      </div>
    </div>
  </div>
</template>

<script>
import postimage1 from "/src/assets/image/post-image1.png";
import postimage2 from "/src/assets/image/post-image2.png";
import postimage3 from "/src/assets/image/post-image3.png";
export default {
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
      ],
    };
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 0 60px 0 60px;
  margin-top: 170px;
  margin-bottom: 170px;
  height:  530px;
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
  gap: 30px;
  height: 376px;
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
@media (max-width: 400px) {
  .container-fluid {
    padding: 0 8px 0 15px;
    margin-top: 120px;
    margin-bottom: 120px;
    height: 333px;
  }
  .blog{
    height: 333px;
    overflow: hidden;
  }
  .blog-main{
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
  .time{
    font-size: 25px;
    height: 15px;
    font-weight: 400;
  }
}
</style>
