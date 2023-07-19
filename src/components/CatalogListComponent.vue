<template>
    <div class="catalog__content">
        <div class="catalog__list">
            <div v-for="item in products" :key="item.href" class="catalog__item">
                <div  class="catalog__icon">
                    <img :src="getIcon(item.icon)" :alt="item.name">
                </div>
                <div class="catalog__name">{{item.name}}</div>
                <div class="catalog__bottom">
                    <div class="catalog__price">{{item.price}} грн</div>
                    <a href="#" class="catalog__add">У кошик <img src="@/assets/image/Basket-add.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CatalogListComponent",
        props:{products:Array},
        methods:{
            getIcon(iconPath)
            {
                return require('../assets/'+ iconPath)
            }
        }
    }
</script>

<style lang="scss" scoped>
.catalog{
    &__content{
        margin: 0 auto;
    }
    &__list{
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        max-width: 1200px;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 40px;
    }
    &__item{
        margin-right: 20px;
        margin-bottom: 80px;
        width: 300px;
        height: 450px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(156.04deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
        opacity: 0.8;
        backdrop-filter: blur(25px);
        border-radius: 30px;
        border: 2px solid #7267c3;
    }
    &__icon{
        width: 250px;
        height: 270px;
        margin: 40px auto 20px;
    }
    &__name{
        text-align: center;
        color: #fff;
        letter-spacing: 0.1em;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 36px;
    }
    &__bottom{
        max-width: 270px;
        width: 100%;
        height: 36px;
        display: flex;
        margin-left: 25px;
    }
    &__price{
        height: 100%;
        display: flex;
        align-items: center;
        white-space:nowrap;
        margin-right: 15px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        font-size: 24px;
        line-height: 29px;
    }
    &__add{
        display: flex;
        height: 36px;
        align-items: center;
        width: 150px;
        height: 35px;
        background-color: #fff;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        color: #1F1F1F;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1em;
        justify-content: center;
    }
}
</style>