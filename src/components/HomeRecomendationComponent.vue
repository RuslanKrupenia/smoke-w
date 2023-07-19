<template>
    <div class="recomendation__container">
        <div class="recomendation__content">
            <div class="recomendation__title">РЕКОМЕНДАЦІЇ</div>
            <div class="recomendation__list">
                <div v-for="rec in recomendation" :key="rec.href" class="recomendation__item">
                    <div class="recomendation__icon">
                        <img :src="getIcon(rec.icon)" :alt="rec.name">
                    </div>
                    <div class="recomendation__name">{{rec.name}}</div>
                    <div class="recomendation__bottom">
                        <div class="recomendation__price">{{rec.price}} грн</div>
                        <a href="#" class="recomendation__add">У кошик <img src="@/assets/image/Basket-add.svg" alt=""></a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HomeRecomendationComponent",
        data(){
            return{
                recomendation:[
                    {name:"Elf Bar 282",href:"#", price:"1221", icon:"image/Rectangle40.png"},
                    {name:"Smok novo 228",href:"#", price:"1231", icon:"image/Rectangle40.png"},
                    {name:"Дудка 283",href:"#", price:"1231", icon:"image/Rectangle40.png"},
                    {name:"Дудка 283",href:"#", price:"1231", icon:"image/Rectangle40.png"},
                ],
            }
        },
        methods:{
            getIcon(iconPath)
            {
                return require('../assets/'+ iconPath)
            }
        }
    }
</script>

<style lang="scss" scoped>
.recomendation{
    &__container{
        background-color: #1F1F1F;
        width: 100%;
        height: 100%;
    }
    &__content{
        max-width: 1200px;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        padding: 100px 20px 155px;
        
    }
    &__title{
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        margin-bottom: 55px;
        margin-top: 100px;
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
    }
    &__item{
        width: 300px;
        height: 450px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(156.04deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
        opacity: 0.8;
        backdrop-filter: blur(25px);
        border-radius: 30px;
        border: 2px solid #7267c3;
        margin-bottom: 20px;
        &:first-child{
            display: none;
        }
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
@media only screen and (max-width: 940px) {
    .recomendation{
        &__item{

            &:first-child{
                display: block;
            }
        }
    }
}
</style>