<template>
    <div  class="footer__container">
        <div class="footer__content">
            <div class="footer__logo">
                <img src="@/assets/image/header-logo.png" alt="logo">
            </div>
            <div class="footer__contacts">
                <div class="footer__contacts--title">Контакти</div>
                <div class="footer__contacts--list">
                    <a :target="con.target" v-for="con in contacts" :key="con.href" :href="con.href" class="foooter__contacts--item"><img :src="getIcon(con.icon)" :alt="con.alt"></a>
                </div>
            </div>
            <div class="footer__navigation">
                <div class="footer__navigation--title">Для покупців</div>
                <div class="footer__navigation--list">
                    <a v-for="nav in navigation" :key="nav.href" :href="nav.href" class="footer__navigation--item">{{nav.name}}</a> 
                </div>
            </div>
            <div class="footer__info">
                <div class="footer__info--text">Дізнавайтесь першими про новини та акції!</div>
                <div class="footer__info--subtext">Підписуйтесь на наш телеграм канал</div>
                <a target="_blank" href="https://t.me/smoky_wizard_vape" class="footer__button">Телеграм</a>
            </div>
        </div>
    </div>
    <div id="contacts"></div>
</template>

<script>
    export default {
        name:"FooterComponent",
        data(){
            return{
                contacts:[
                    {href:"https://www.instagram.com/smoky_w1zard_/", icon:"image/inst.svg", alt:"instagram", target:"_blank"},
                    {href:"https://t.me/smoky_wizard_vape", icon:"image/tg.svg", alt:"telegram", target:"_blank"},
                    {href:"tel:380738448577", icon:"image/phone.svg", alt:"number", target:"_top"},
                ],
                navigation:[
                    {href:"/Home", name:"Головна"},
                    {href:"/Catalog", name:"Каталог"},
                    {href:"/#geo", name:"Геолокація"},
                    {href:"/#contacts", name:"Контакти"},
                ]
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
.footer{
    &__container{
        width: 100%;
        height: 100%;
        background-color: #1F1F1F;
    }
    &__content{
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        
    }
    &__logo{
        max-width: 300px;
        width: 100%;
    }
    &__contacts{
        margin-top: 100px;
        height: 100%;
        text-align: center;
        &--title{
            font-size: 20px;
            color: #fff;
            margin-bottom: 30px;
        }
        &--list{
            width: auto;
            height: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
    &__navigation{
        margin-top: 100px;
        height: 100%;
        text-align: center;
        &--title{
            font-size: 20px;
            color: #fff;
            margin-bottom: 10px;
        }
        &--list{
            height: 100%;
            width: 100px;
            
        }
        &--item{
            display: block;
            text-decoration: none;
            color: #fff;
            font-size: 18px;
        }
    }
    &__info{
        margin-top: 100px;
        height: 100%;
        text-align: center;
        max-width: 350px;
        width: 100%;
        color: #fff;
        font-size: 18px;
        &--subtext{
            margin-bottom: 20px;
        }
    }
    &__button{
        padding: 10px 100px;
        border-radius: 10px;
        background: #269edc;
        color: #fff;
        text-decoration: none;
    }
}
</style>