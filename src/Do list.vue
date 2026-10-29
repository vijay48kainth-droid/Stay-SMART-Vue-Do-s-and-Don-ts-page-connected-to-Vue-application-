<template>
    <Transition name="list">
        <p class="do-font" > 
            <img class="do-shield-image" src="Do and Dont images/Do-shield-image.svg">{{ DoListExp }}</p>
    </Transition>
</template>
<script>
export default {
    name: 'DoList',
    props: {
        DoListExp: String,
        visible:{
            type:Boolean,
            default:true
        }
    }
    
}
</script>
<style>



.do-font{

    background: green;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: black;
    width:330px;
    font-size: 17.5px;
}


@media screen and (max-width: 900px) {
    .do-font{
        width:100%;

    }

}

@media screen and (max-width: 600px){
    .header p{
        width:none;
        font-size: 17.5px;
        padding-top:4px;
    }
}


</style>