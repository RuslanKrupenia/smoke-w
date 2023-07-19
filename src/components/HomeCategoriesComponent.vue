<template>
    <div class="categories__container">
        <div class="categories__content">
            <div class="categories__list">
                <a class="categories__link" v-for="categ in categories" :key="categ.name" :href="categ.href"><div class="categories__item">
                    <div class="categories__name">{{categ.name}}</div>
                    <div class="categories__more">Детальніше <span>></span></div>
                </div>
                </a>
                
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"HomeCategoriesComponent",
        data(){
            return{
                categories:[
                    {name:"Одноразки",href:"#",},
                    {name:"Рідини",href:"#",},
                    {name:"Девайси",href:"#",},
                    {name:"Комплектуючі",href:"#",},
                    {name:"Цигарки",href:"#",},
                    {name:"Стіки",href:"#",},
                    {name:"Кальяни",href:"#",},
                    {name:"Табак",href:"#",},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
.categories{
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
        max-width: 1200px;
        width: 100%;
        height: 100%;
        margin: 200px auto;
        
    }
    &__list{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        margin: 0 auto;
        align-items: center;
        margin-top: 40px;
        
    }
    &__link{
        max-width: 250px;
        min-width: 230px;
        width: 100%;
        height: 200px;
        text-decoration: none;
        margin-right: 10px;
        margin-bottom: 80px;
    }
    &__item{
        max-width: 250px;
        min-width: 200px;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          97.53deg,
          rgba(255, 255, 255, 0.019) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
        backdrop-filter: blur(2px);
        border: 1px solid #7267c3;
        border-radius: 20px;
        transition: margin-left 0.5s ease;
        transition: font-size 1s ease;
        &:hover span{
            margin-left: 20px;
        }
        &:hover .categories__more{
            color: #952371;
            font-weight: 500;
            font-family: 'AlegreyaNormal';
        }
        &:hover .categories__name{
            font-size: 24px;
        }
    }
    &__name{
        font-size: 20px;
        line-height: 24px;
        color: #fff;
        letter-spacing: 0.1em;
        margin-left: 40px;
        margin-top: 20px;
        margin-bottom: 100px;
    }
    &__more{
        margin-left: 20px;
        max-width: 150px;
        width: 100%;
        height: 35px;
        background-color: #fff;
        justify-content: center;
        border-radius: 10px;
        display: flex;
        align-items: center;
        
    }
}
@media only screen and (max-width: 1040px) {
.categories{
    &__content{
        max-width: 702px;
    }
}
}
</style>