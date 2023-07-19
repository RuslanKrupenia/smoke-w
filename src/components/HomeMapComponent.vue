<template>
    <div id="geo" class="map__container">
    <div class="map__content">
        <div class="map__title">Геолокація</div>
            <a title="Натисніть, щоб прокласти маршрут" target="blank" href="https://www.google.com.ua/maps/dir//51.6812601,33.9250054/@51.6813009,33.9249361,21z/data=!4m2!4m1!3e0?hl=ru" class="map__link"><div class="map__image"></div></a>
            <div class="map__info">*Мітки немає через військовий стан в регіоні</div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"HomeMapComponent"
    }
</script>

<style lang="scss" scoped>
.map{
    &__container{
        background-image: url(@/assets/image/categories-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    &__content{
        margin: 0 auto;
        max-width: 1200px;
        width: 100%;
        padding-bottom: 40px;
        
    }
    &__title{
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-bottom: 55px;
    }
    &__link{
        text-decoration: none;
        max-width: 1200px;
        width: 100%;
        height: 100%;
    }
    &__image{
        margin-bottom: 20px;
        background-image: url(../assets/image/Map.png);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        max-width: 1200px;
        width: 100%;
        height: 800px;
        border-radius: 20px;
        
        transition: background-image 1s ease-in-out;
        &:hover{
            background-image: url(../assets/image/map-bg2.jpg);
        }
    }
    &__info{
        color: #FFFFFF;
        
    }
}
</style>