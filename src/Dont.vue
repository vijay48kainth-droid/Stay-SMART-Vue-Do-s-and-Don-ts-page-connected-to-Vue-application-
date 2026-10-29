<template>
    <div class="main-content-donts">

        <div id="donts-intro">
            <div id="donts-side-header">
            <img class="dont-image" src="Do and Dont images/error-phone.png">
            </div>
            <div class="donts-header-side">
                <div class="donts-title">
                    <h1>Dont</h1>
                </div>
                <div class="donts-subheading">
                    {{ DontSubheading }}
                </div>
                    <p class="donts-paragraph"> {{DontParagraph}}
                    </p>
                    <ul>
                        <li id="dont-list" v-for="(item, index) in dontItems" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>
        </div>
            <p class="dos-paragraph"> 
                This page will highlight common mistakes that you should not make and how to recognise the warning signs and make safer choices online.
            </p>
    
    <img class="do-space-image"  src="Do and Dont images/wiredsmartio-mobile-4923639.jpg">

    </div>
</template>
<script>

export default {
    name:'Dont',
    props: {
        DontSubheading:String,
        DontParagraph: String,
        dontItems: Array
    }
}

</script>
<style>
#dont-list{
    font-size: 180%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding:0;
    margin:0;
}


@media screen and (max-width: 600px) {
    #dont-list{
        font-size:100%;
    }
}
</style>