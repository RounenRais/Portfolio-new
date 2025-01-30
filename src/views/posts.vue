<template>
    <h1 :class="[deger, deger2]">Posts</h1>

    <div :class="[deger, deger2]" class="posts">
        <div class="postsList" v-for="post in posts" :key="post.id">
            <div class="post">
                <router-link :to="post.link">
                    <img class="postImage shadow" :src="post.img" />
                </router-link>
                <p class="navL" :class="[deger, deger2]">{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import image from '../assets/1.png'
import image1 from '../assets/1.png'
import image2 from '../assets/1.png'

export default {
    props: ['deger', 'deger2'],
    name: 'Posts',
    data() {
        return {
            posts: [
                { id: 1, img: image, body: 'About My Portfolio', link: "/posts/1" },
                { id: 2, img: image1, body: 'My Css framework', link: "/posts/2" },
                { id: 3, img: image2, body: 'This is the body of post 4', link: "/default" },
            ]
        };
    }
};
</script>

<style scoped>
.posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Otomatik sütun */
    gap: 20px; /* Boşluklar */
    padding: 20px;
    justify-content: center;
}

.post {
    text-align: center;
}

.postImage {
    width: 100%; /* Responsive resim */
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
}

/* Mobilde 1 sütun, tablette 2 sütun, büyük ekranda 3 sütun */
@media (max-width: 640px) {
    .posts {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 641px) and (max-width: 1024px) {
    .posts {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1025px) {
    .posts {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
