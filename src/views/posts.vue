<template>
    <div :class="deger" class="posts">
        <h1>Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['deger'],
    name: 'Posts',
    data() {
        return {
            posts: []
        };
    },
    created() {
         this.fetchPosts();
    },
    methods: {
         async fetchPosts() {
             try {
                 const response = await fetch('https://my-posts-1982f-default-rtdb.firebaseio.com/posts.json');
                 const data = await response.json();
                 this.posts = data;
            } catch (error) {
                 console.error('Error fetching posts:', error);
             }
         }
    }
};
</script>

<style scoped>

</style>