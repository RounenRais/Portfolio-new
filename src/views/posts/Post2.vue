<template>
    <div class="post-container">
        <header class="post-header">
            <h1 class="post-h1">My Portfolio</h1>
        </header>
        <section class="post-content">
            <p>
                Welcome to my portfolio! asdsdaHere, you will find a collection of my work, projects, and accomplishments. I am passionate about web development and design, and I strive to create beautiful and functional websites.
            </p>
            <p>
                Feel free to explore my projects and get in touch if you have any questions or would like to collaborate.
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Post1',
};
</script>

<style scoped>
.post-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.post-header {
    text-align: center;
    margin-bottom: 20px;
}

.post-header h1 {
    font-size: 2.5em;
    color: #333;
}

.post-content {
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
}

@media (max-width: 600px) {
    .post-container {
        padding: 10px;
    }

    .post-header h1 {
        font-size: 2em;
    }

    .post-content {
        font-size: 1em;
    }
}
</style>