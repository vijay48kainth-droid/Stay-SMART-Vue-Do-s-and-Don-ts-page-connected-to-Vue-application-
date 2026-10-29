<template>
    <div class="main-content-dos">
          <MainHeader
          padding="10px"
          marginLeft="40px"/>
        <div id="dos-intro">

            <div class="do-side-header">
                <img
                    class="do-phone"
                    src="Do and Dont images/privecstasy-CXlqHmQy3MY-unsplash.jpg"
                >
            </div>

            <div class="dos-header-side">

                <div class="dos-title">
                    <h1>Do</h1>
                </div>
                <div class="dos-subheading">
                    {{DoSubheading}}

                </div>
                <p class="dos-paragraph">
                    {{DoParagraph}}
                </p>
            </div>
        </div>

        <p class="dos-paragraph">

        </p>
    
    </div>

</template>
<script>
import MainHeader from './MainHeader.vue'

export default {
    name:'Do',
    props: {
    DoSubheading: String,
    DoParagraph: String
    },
    components:{
        MainHeader
    }
}



</script>

<style>
.main-content-dos{
    padding-top:4px;
}
.dos-paragraph{
    padding-bottom:20px;
    background-color: antiquewhite;
}
</style>