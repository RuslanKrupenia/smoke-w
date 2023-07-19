<template>
    <div class="header__container">
        <div class="header__content">
            <div class="header__logo"><img src="@/assets/image/header-logo.png" alt="logo"></div>
            <div class="header__info">
                <div class="header__title">Крамничка смачного диму </div>
                <div class="header__list">
                    <div class="header__item">великий вибір смаків </div>
                    <div class="header__item">доставка по Україні</div>
                    <div class="header__item">магазин у м. Глухів</div>
                </div>
                <a href="/Catalog" class="header__catalog">КАТАЛОГ ТОВАРУ</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HeaderContentComponent",
    }
</script>

<style lang="scss" scoped>
.header{
    &__container{
        background-color: #1f1f1f;
        max-height: 100vh;
    }
    &__content{
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        height: 100vh;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        align-items: center;
    }
    &__logo{
        max-width: 666px;
    }
    &__info{
        max-width: 450px;
        height: 400px;
    }
    &__title{
        text-align: center;
        font-size: 32px;
        line-height: 40px;
        color: #fff;
        margin-bottom: 60px;
    }
    &__list{
        max-width: 193px;
        height: 150px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 60px;
    }
    &__item{
        font-size: 20px;
        margin-bottom: 15px;
        color: #fff;
        width: auto;
        &:nth-child(odd) {
            border-bottom: solid 2px;
            border-image: linear-gradient(to right, #1f1f1f, #7267c3);
            -moz-border-image: -moz-linear-gradient(left, #1f1f1f, #7267c3);
            -webkit-border-image: -webkit-linear-gradient(left, #1f1f1f, #7267c3);
            border-image-slice: 1;
          }
          &:nth-child(2n) {
            border-bottom: solid 2px;
            border-image: linear-gradient(to left, #ff26ba, #ff26ba00);
            -moz-border-image: -moz-linear-gradient(right, #ff26ba, #ff26ba00);
            -webkit-border-image: -webkit-linear-gradient(left, #ff26ba, #ff26ba00);
            border-image-slice: 1;
          }
        &:last-child{
            margin-bottom: 0;
        }
    }
    &__catalog{
        background: linear-gradient(to left, #575757, #363636);
        width: 300px;
        height: 80px;
        align-items: center;
        border-radius: 20px;
        font-size: 24px;
        line-height: 40px;
        text-decoration: none;
        color: #fff;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
}
</style>