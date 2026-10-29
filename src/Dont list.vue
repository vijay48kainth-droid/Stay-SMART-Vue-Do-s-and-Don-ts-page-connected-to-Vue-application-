<template>
    <Transition name="list">
        <p class="dont-font">
        <img class="dont-shield-image" src="Do and Dont images/Dont-shield-image.svg">{{ DontListExp }}</p>
    </Transition>
</template>
<script>
export default {
    name: 'DontList',
    props: {
        DontListExp: String,
                visible:{
            type:Boolean,
            default:true
        }
    }
    
}
</script>
<style>




.dont-font{
    background:red;
    display:flex;
    border-radius: 10px;
    color:black;
    font-weight:500;
    width:330px;
    font-size:18px;
    
}

@media screen and (max-width: 900px) {
    .dont-font{
        width:100%;

    }

}

@media screen and (max-width: 600px){
    .header p{
        width:none;
        font-size: 17.5px;
        
    }
}
</style>