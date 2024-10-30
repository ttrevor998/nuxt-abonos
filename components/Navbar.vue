<template>
    <nav class="navbar navbar-expand-lg w-100 position-fixed">
        <div class="container-fluid">
            <NuxtLink to="/" class="navbar-brand">
                <NuxtImg src="/logo2.png" width="auto" height="50" />
            </NuxtLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <NuxtLink class="nav-link  text-decoration-none" to="/blog">Blog</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/store" class="nav-link  text-decoration-none">Tienda</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>

</script>

<style>
.router-link-active {
    color: greenyellow
}

.nav-link {
    font-family: "Fira Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
}

nav{
    position:sticky !important;
    background: rgb(140, 202, 47) !important;
    margin: 0;
}
</style>