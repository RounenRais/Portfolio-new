<template>
    <div class="full-page">
        <img :src="post?.img" alt="Post Image" class="postImage">
        <p>{{ post?.body }}</p>
        <router-link to="/" class="back-btn">Geri Dön</router-link>
    </div>
</template>

<script>
import image from '../assets/catgif.gif';
import image2 from '../assets/turkey.jpg';
import { RouterLink,RouterView } from 'vue-router';
export default {
    data() {
        return {
            posts: [
                { id: 1, img: image, body: 'About My Portfolio' },
                { id: 2, img: image2, body: 'This is the body of post 2' },
                { id: 3, img: '../assets/turkey.jpg', body: 'This is the body of post 3' },
                { id: 4, img: '../assets/turkey.jpg', body: 'This is the body of post 4' },
            ],
            post: null
        };
    },
    created() {
        const postId = this.$route.params.id;
        this.post = this.posts.find(p => p.id == postId);
    }
};
</script>

<style scoped>
.full-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.postImage {
    width: 80%;
    max-width: 500px;
}

.back-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}
</style>
