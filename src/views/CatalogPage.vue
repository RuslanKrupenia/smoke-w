<template>
    <HeaderMenuComponent v-on:menuclicked="onCategoryChange"/>
    <div class="catalog__container">
        <div class="catalog__fix">
    <div class="catalog__left">
            <CatalogMenuComponent v-on:categoryChanged="onCategoryChange"/>
        </div>
    </div>
    <div class="catalog__list">
        <CatalogListComponent :products="filteredProducts"/>
    </div>
    </div>
</template>

<script>
    import HeaderMenuComponent from '../components/HeaderMenuComponent.vue'
    import CatalogMenuComponent from '../components/CatalogMenuComponent.vue';
    import CatalogListComponent from '@/components/CatalogListComponent.vue';
    export default {
        name:"CatalogPage",
        components: {HeaderMenuComponent, CatalogMenuComponent,CatalogListComponent},
        
        data(){
           
            return{
                product:[
                    {name:"Девайси",href:"#", price:"1221", icon:"image/Rectangle40.png", category:"Одноразки"},

                    
                    
                    {name:"White Noise Salt Tobacco",href:"#", price:"270", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Vegas Salt Tobacco 45 мг",href:"#", price:"260", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"WES Silver 30 мл",href:"#", price:"260", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Liquid Lab Flip Salt 15 мл",href:"#", price:"140", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Hype Salt 30мл",href:"#", price:"269", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Hype 10мл",href:"#", price:"159", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Balon Salt ",href:"#", price:"260", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Chaser 30мл",href:"#", price:"320", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Chaser 10мл",href:"#", price:"160", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Flavorlab 10мл",href:"#", price:"140", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Nova 30ml ",href:"#", price:"300", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Nova 15мл Berry&Mint 65mg",href:"#", price:"160", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Black Factory Salt 25 мг",href:"#", price:"269", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Fvcked Lab Salt 30 мл",href:"#", price:"269", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Fvcked Lab Salt 10 мл",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"Wicn Wire black 30ml",href:"#", price:"260", icon:"image/Rectangle40.png", category:"Рідини"},
                    {name:"NOMAD",href:"#", price:"260", icon:"image/Rectangle40.png", category:"Рідини"},


                    
                    {name:"Elf bar rf 500",href:"#", price:"500", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Elf bar rf 350",href:"#", price:"399", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Eleaf IORE Lite 350 мАч",href:"#", price:"450", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"OVNS W01 ",href:"#", price:"450", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Fich",href:"#", price:"299", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Suorin air mini",href:"#", price:"660", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Suorin air PRO",href:"#", price:"850", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Suorin ace",href:"#", price:"820", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok novo 4 mini",href:"#", price:"999", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok novo 4 ",href:"#", price:"1099", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok novo 3",href:"#", price:"850", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok Novo 2X Pod Kit ",href:"#", price:"850", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok Novo 2s Pod Kit ",href:"#", price:"850", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok Solus 2 700 мАч ",href:"#", price:"600", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok Nord 50W 1800 мАч ",href:"#", price:"1250", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Smok PROPOD 800mah",href:"#", price:"850", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Innokin Glim 500 мАч ",href:"#", price:"670", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Innokin Sceptre",href:"#", price:"999", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Innokin I.O 310 мАч ",href:"#", price:"500", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Innokin MVP 500 MA",href:"#", price:"729", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Vinci Voopoo SE 900 мАч",href:"#", price:"699", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Voopoo drag nano 2",href:"#", price:"1099", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Voopoo vinci royal edition",href:"#", price:"999", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Voopoo Vinci Q 900 ",href:"#", price:"525", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Voopoo Doric Q 800 MAy",href:"#", price:"525", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Voopoo VMATE",href:"#", price:"700", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Voopoo ARGUS Z 900 ma",href:"#", price:"800", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Jovetech eGo Pod Kit",href:"#", price:"500", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Joyetech Evio Box 1000 мАч ",href:"#", price:"730", icon:"image/Rectangle40.png", category:"Девайси"},
                    {name:"Joytech Evio C",href:"#", price:"650", icon:"image/Rectangle40.png", category:"Девайси"},



                    {name:"Elf bar RF 350 1.2 om",href:"#", price:"110", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Fich 17mg 0.8ml",href:"#", price:"100", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Suorin air mini 1.0 om",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Suorin air plus 1.0 om",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Suorin ace 1.0 om",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Suorin air pro 1.0 om",href:"#", price:"169", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Innokin Glim Pod 1.2 om",href:"#", price:"140", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Випаровувач Innokin 0.5 Om",href:"#", price:"110", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Innokin Ceramik pod",href:"#", price:"100", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Innokin io pod kanthal",href:"#", price:"100", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Innokin MVP 0.65 om",href:"#", price:"140", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Eleaf IORE",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Eleaf IORE Lite 2",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Justfog Qpod 1.9ml",href:"#", price:"180", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Minifit 0.8om",href:"#", price:"160", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Lost vape prana 1.4om",href:"#", price:"125", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Eleaf IWu 1.3 om",href:"#", price:"80", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Nolomit Bro pod 1.8ml",href:"#", price:"165", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"OVNS saber 2 1.4 om",href:"#", price:"129", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Smok novo 4",href:"#", price:"120", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"SMOK nord4 rpm 4.5ml",href:"#", price:"139", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"SMOK nord4 rpm 2 4.5ml",href:"#", price:"139", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Smok nord2 nord",href:"#", price:"99", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"SMOK nord2 rmp 4.5ml",href:"#", price:"99", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"SMOK novo 3 0.8om",href:"#", price:"159", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Випаровувач Smok Nord",href:"#", price:"150", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Smok novo 2 1.4om",href:"#", price:"169", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Smok novo X 0.8om",href:"#", price:"159", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Випаровувач Smok Novo 4",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"картридж  Smok SOLUS 0/9 Om",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Smok novo 2x 0.9om",href:"#", price:"169", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Voopoo Pro 1.2 Ом",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Voopoo Pro 0.7 Ом",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Voopoo vmate ",href:"#", price:"159", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Voopoo agrus air 3.8ml",href:"#", price:"149", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Voopoo Doric Q",href:"#", price:"160", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"voopoo agrus pod ",href:"#", price:"159", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Voopoo Vinci ",href:"#", price:"150", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Joyetech Evio C 2 мл",href:"#", price:"135,00", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Joytech eGip Mini 0.5 om",href:"#", price:"99", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Випаровувач joytech",href:"#", price:"140", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    {name:"Joyetech eGo Pod Kit 1.2 Om",href:"#", price:"120", icon:"image/Rectangle40.png", category:"Комплектуючі"},
                    


                    {name:"Цигарки",href:"#", price:"1221", icon:"image/Rectangle40.png", category:"Цигарки"},



                    {name:"Cтіки",href:"#", price:"1221", icon:"image/Rectangle40.png", category:"Стіки"},



                    {name:"Кальяни",href:"#", price:"1221", icon:"image/Rectangle40.png", category:"Кальяни"},



                    {name:"Табаки",href:"#", price:"1221", icon:"image/Rectangle40.png", category:"Табаки"},



                ],
                activeCategory:null
            }
        },
        computed:{
            filteredProducts(){
                if(this.activeCategory===null){
                    return this.product
                }
                return this.product.filter(item=>item.category==this.activeCategory)
            }
        },
        methods:{
            onCategoryChange(value){
                console.log("asdasd")
                this.activeCategory=value
            }
        },
    }
</script>

<style lang="scss" scoped>
.catalog{
    &__container{
        position: relative;
        top: 100px;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: #1F1F1F;
        display: flex;
    }
    &__fix{
        max-width: 300px;
        width: 100%;
        height: 100%;
    }
    &__left{
        position: fixed;
        max-width: 300px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid #fff;
    }
    &__list{
        max-width: 1400px;
        margin-top: 200px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        
    }
}
</style>