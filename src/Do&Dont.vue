<template>


    <Header 
      title=" before you click." 
      :image="top" 
      imageWidth="20%"  
      
    /> <!--This image is from this file, but is for the header component-->

<div>
    <Navigation
    :emailImage="sub" 
    backgroundColour="linear-gradient(to right, green 50%, red 50%)"
    emailTextColour="white"
    emailImageWidth="3.5%"
    saveLocation="/save-report-email"
    /> <!--The image is from this file, but is for the navigation component-->

</div>
    <Do 
    DoSubheading="This is the Do section which will contain all the actions you should follow when you are online."
    DoParagraph="When you are online and you notice anything strange about the way your device behaves,
    it maybe infected with malware.   
    To check what form of malware you are dealing with, run a security scan on the infected device. What ever threat the scan 
    has detected you can search for it through our website. If it is not on our website then report it to us and we will contact you."
     />
    <Dont
    DontSubheading="This page will also Contain the Dont section and will teach you all the things that you should not do online."
    DontParagraph="When you are online you may do things that you are not meant to do. If you have done something that you feel was a mistake online or with 
    a device, you should not do the following things like: "
        :dontItems="[
            'Dont share your data between the infected device and another,',
            'Dont send any responses to suspiscious messages,',
            'Dont agree to meet with a stranger you have only seen online.'
        ]"
    />
    <DosAndDonts 
    />
    <Footer />
</template>
<script>
import Header from './Header.vue'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'
import Do from './Do.vue'
import Dont from './Dont.vue'
import DosAndDonts from './Dos and Donts list.vue'

export default {
    name: 'DoAndDont',
    components:{
        Header,
        Navigation,
        Footer,
        Do,
        Dont,
        DosAndDonts
           

    },
        data () {
        return {
            sub: './Do and Dont images/jackson_nguyen-phone-2690222.svg',
            top:'./Do and Dont images/schmidsi-mouse-1412284.svg'
        }
    },

}

</script>

<style>


</style>