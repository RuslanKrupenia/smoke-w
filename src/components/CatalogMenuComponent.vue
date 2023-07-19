<template>
    <div class="menu__content">
        <div class="menu__list">
            <div v-for="item in menu" @click="onCategorySelected(item.name)" :key="item.href" :href="item.href" class="menu__link"><div class="menu__item">{{item.name}}</div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CatalogMenuComponent",

            
        data(){
            return{
                menu:[
                    {name:"Одноразки", href:"", category:"Одноразки"},
                    {name:"Рідини", href:"", category:"Рідини"},
                    {name:"Девайси", href:"", category:"Девайси"},
                    {name:"Комплектуючі", href:"", category:"Комплектуючі"},
                    {name:"Цигарки", href:"", category:"Цигарки"},
                    {name:"Стіки", href:"", category:"Стіки"},
                    {name:"Кальяни", href:"", category:"Кальяни"},
                    {name:"Табаки", href:"", category:"Табаки"},
                ]
            }
        },
        methods:{
            onCategorySelected(category){
                console.log(category);
                this.$emit("categoryChanged",category)
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu{
    &__content{
        width: 100%;
        height: 100%;
        background-color: #1F1F1F;
    }
    &__list{
        height: 100%;
        
    }
    &__link{

        width: 100%;
        height: 70px;
        color: #fff;
        font-size: 18px;
        display: block;
        text-decoration: none;
        text-align: center;
        
    }
    &__item{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover{
            background-color: #fff;
            color: blueviolet;
        }
    }
}
</style>