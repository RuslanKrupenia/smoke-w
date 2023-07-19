<template>
        <div class="menu__content">
            <ul class="menu__list">
                <router-link class="menu__link" to="/Home"><li class="menu__item"><img src="@/assets/image/SW.svg" alt="logo"></li></router-link>
                <router-link @click="onClick(header.href)" v-for="header in menu" :key="header.href" class="menu__link menu__border" :to="header.href"><li class="menu__item">{{header.name}}</li></router-link>
                <div class="menu__link"><li class="menu__item" ><img class="menu__busket" src="@/assets/image/busket.svg" alt="busket"></li></div>
            </ul>
        </div>
</template>

<script>
    export default {
        name:"MenuComponent",
        data(){
            return{
                menu:[
                    {name:"Головна",href:"/"},
                    {name:"Каталог",href:"/catalog",},
                    {name:"Геолокація",href:"/#geo",},
                    {name:"Контакти",href:"/#contacts",},
                ],
            }
        },
        methods:{
            onClick(route){
                if(route!="/catalog"){
                    return
                }
                this.$emit(
                    "menuclicked", null
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu{
    &__content{
        position: fixed;
        z-index: 100;
        background-image: url(../assets/image/header-bg.png);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        background-color: #1f1f1f;
        width: 100%;
        height: 100px;
    }
    &__list{
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
    }
    &__link{
        height: auto;
        font-family: 'AlegreyaNormal';
        text-decoration: none;
        cursor: pointer;
        
        height: 26px;
        margin: auto;
        font-size: 20px;
        line-height: 24px;
        color: #fff;
        :hover{
            border-bottom: solid 2px linear-gradient(to bottom, #FF26BA, #7267C3);
        }
    
    }
    &__border{
        &:hover {
            border-bottom: solid 3px;
            border-image: linear-gradient(to right, #ff26ba, #7267c3);
            -moz-border-image: -moz-linear-gradient(left, #ff26ba, #7267c3);
            -webkit-border-image: -webkit-linear-gradient(left, #ff26ba, #7267c3);
            border-image-slice: 1;
          }
    }
    &__busket{
        width: 30px;
        height: 30px;
    }
}

</style>