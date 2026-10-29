<template>
    <h2 :style="{padding:padding,
                marginLeft:marginLeft
    }"><u>Think SMART before you tap, type or click.</u></h2>

</template>

<script>
    export default{
        name: 'MainHeader',
        props:{
            padding:String,
            marginLeft:String
        }
    }
</script>

