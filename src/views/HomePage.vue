<template>
<HeaderMenuComponent/>
<HomeContentComponent/>
<HomeCategoriesComponent/>
<HomeRecomendationComponent/>
<HomeMapComponent/>
<FooterComponent/>
</template>

<script>
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue';
import HomeContentComponent from '@/components/HomeContentComponent.vue';
import HomeCategoriesComponent from '@/components/HomeCategoriesComponent.vue';
import HomeRecomendationComponent from '@/components/HomeRecomendationComponent.vue';
import HomeMapComponent from '@/components/HomeMapComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        name:"HomePage",
        components:{ HeaderMenuComponent, HomeContentComponent, HomeCategoriesComponent, HomeRecomendationComponent, HomeMapComponent, FooterComponent, },
    }
</script>

<style lang="scss" scoped>

</style>