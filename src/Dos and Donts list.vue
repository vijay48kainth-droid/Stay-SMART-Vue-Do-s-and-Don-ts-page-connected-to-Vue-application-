<template>


<section>

    <!--Threats intro-->

    <h2 id="header-intro" class="shared-font-style" >
        This section will cover the main threats you are likely to encounter in a 
        cyber-attack incident. It contains the different threat terms and the actions you should & shouldn't take.
        To see only either the Do's or the Don'ts click on either at the top, or hover over them in the list.
    </h2>
        <div id="threat-rows">
            <div id="threat-rows" class="header" style="width:320px;">
                <h2>Threat-term</h2>
            </div>

            <div id="threat-rows" class="header" style="width:330px;">
                <h2 >Term-description</h2>
            </div>
            
            <div id="threat-rows" class="header" style="width:400px;">
                <button  @click="displayDoList()" class="do-list" style="text-align: center; font-size: 32px; 
                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"><b>Do's</b></button>
                <button @click="displayDontList()" class="dont-list" style="text-align: center; font-size: 30px; 
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"><b>Don'ts</b></button>
            </div>
        </div>
       
    <!--First row-->
    
        <div id="threat-rows" key="adware">
                <div id="r" class="threat-shape">
                    <h1>Adware</h1>
                    <img id="threat-image-wide" ref src="Do and Dont images/Adware-image.jpg">
                </div>
                <div id="r" class="wide-description">
                        <p>Adware is any software package that shows adverts, such as pop-ups.
                        It generates revenue for its author and are harmful when clicked.</p>
                </div>
                <div id="threat-list" class="header" >
                    <DoList v-show="DoList" :class="{'hide-on-hover': activeHoveredDoRow === 1}"
                        @mouseenter="activeHoveredDontRow = 1"
                        @mouseleave="activeHoveredDontRow = null"
                    DoListExp="Do close adverts you don't recognise.
                        Keep your device and apps updated.
                        If lots of pop-ups suddenly appear, tell a parent, teacher or trusted adult. 
                        "/>
                    <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDontRow === 1}"
                        @mouseenter="activeHoveredDoRow = 1"
                        @mouseleave="activeHoveredDoRow = null"
                    DontListExp="Don't click adverts you don't recognise or download anything they offer. 
                    Don't ignore repeated pop-ups or strange adverts."/>
                </div>
        </div>

    <!--Second row-->
    
    <div id="threat-rows">
            <div id="a" class="threat-shape">
                <h1>Ransomware</h1>
                <img id="threat-image" ref src="Do and Dont images/padlock-ransomware-image.jpg">
            </div>
            <div id="a" class="wide-description">
                <p> Ransomware restricts user access to their files or device system by encrypting them or locking them down. it keeps this captive and demands a ransom to release it.</p>
            </div>
            <div id="threat-list" class="header" >
                <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDontRow === 2}"
                @mouseenter="activeHoveredDoRow = 2"
                @mouseleave="activeHoveredDoRow = null"
                DontListExp="Don't pay a ransom without speaking to a trusted adult or IT support. 
                Don't ignore warnings about locked or encrypted files."/>
                <DoList v-show="DoList" :class="{'hide-on-hover': activeHoveredDoRow === 2}"
                @mouseenter="activeHoveredDontRow = 2"
                @mouseleave="activeHoveredDontRow = null"
                DoListExp="Do back up important files and keep your device updated.
                    If your files become locked, tell a trusted adult or IT support."/>                        
            </div>
    </div> 

        <!--Third row-->
    <div id="threat-rows">
            <div id="i" class="threat-shape">
                <h1>Spyware</h1>
                <img ref id="threat-image-wide"src="Do and Dont images/Spyware-image.jpg">
            </div>
            <div id="i" class="wide-description">
                <p>Spyware is usually hidden from a user and is used to collect data from a users device, including their information like websites visited, user logins and personal info.</p>
            </div>
            <div id="threat-list" class="header" >
                <DoList v-show="DoList":class="{'hide-on-hover': activeHoveredDoRow === 3}"
                @mouseenter="activeHoveredDontRow = 3"
                @mouseleave="activeHoveredDontRow = null"
                DoListExp="Do check app permissions and only install trusted apps.
                    Tell a trusted adult if you think someone is secretly watching you."/>

                <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDontRow === 3}"
                @mouseenter="activeHoveredDoRow = 3"
                @mouseleave="activeHoveredDoRow = null"
                DontListExp="Don't give apps unnecessary permissions or install apps from unknown sources.
                    Don't ignore signs that your information is being watched."/>      
            </div>
    </div> 
    
        <!--Fourth row-->
    <div id="threat-rows">
            <div id="n" class="threat-shape">
                <h1>Trojan</h1>
                <img id="threat-image" ref src="Do and Dont images/gdj-trojan-horse-3163481.svg">
            </div>
            <div id="n" class="wide-description">
                <p>Trojan is disguised as something which the user wanted or needed. It gives control of a users device to a cyber-criminal. </p>
            </div>
            <div id="threat-list" class="header" >
                <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDontRow === 4}"
                @mouseenter="activeHoveredDoRow = 4"
                @mouseleave="activeHoveredDoRow = null"
                DontListExp="Don't download unknown files, games or apps. 
                    Don't open attachments or downloads if you don't know where they came from."/>

                <DoList v-show="DoList" :class="{'hide-on-hover': activeHoveredDoRow === 4}"
                @mouseenter="activeHoveredDontRow = 4"
                @mouseleave="activeHoveredDontRow = null"
                DoListExp="Do only download apps and files from trusted sources.
                    Keep your security software turned on and updated."/>
            </div>
    </div> 
    
        <!--Fifth row-->
    <div id="threat-rows">
            <div id="b" class="threat-shape">
                <h1>Phishing</h1>
                <img ref id="threat-image-wide"src="Do and Dont images/phishing-threat-image.jpg">
            </div>
            <div id="b" class="wide-description">
                <p>Phishing is when a fake entity inpersonates one that a user trusts. And is used by Cyber-criminals to trick users to reveal information.</p>
            </div>
            <div id="threat-list" class="header" >
                <DoList v-show="DoList" :class="{'hide-on-hover': activeHoveredDoRow === 5}"
                @mouseenter="activeHoveredDontRow = 5"
                @mouseleave="activeHoveredDontRow = null"
                DoListExp="Do check messages before clicking links.
                    Never give away passwords or personal information without checking first."/>
                
                <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDontRow === 5}"
                @mouseenter="activeHoveredDoRow = 5"
                @mouseleave="activeHoveredDoRow = null"
                DontListExp="Don't click suspicious links or reply to strange messages. 
                    Don't share passwords, bank details or personal information."/>
            </div>
    </div> 

    <!--Sixth row-->
    <div id="threat-rows">
            <div id="o" class="threat-rat">
                <!-- Group your text headers together -->
                <div class="rat-text">
                    <h1>R.A.T</h1>
                    <h4>Remote Access Trojan</h4>
                </div>
                <img src="Do and Dont images/rat-image-RAT.jpg" class="threat-rat-img" alt="rat">
            </div>

            <div id="o" class="wide-description">
                <p>RATs are installed without the user knowing and are hidden to avoid detection. They allow a hacker to control a users device remotely, and access the stored files or upload a virus.</p>
            </div>
            <div id="threat-list" class="header" >
                <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDoRow === 6}"
                @mouseenter="activeHoveredDontRow = 6"
                @mouseleave="activeHoveredDontRow = null"
                DontListExp="Don't allow strangers to control your device or install unknown software. 
                    Don't ignore unusual activity on your device."/>

                <DoList v-show="DoList" :class="{'hide-on-hover': activeHoveredDontRow === 6}"
                @mouseenter="activeHoveredDoRow = 6"
                @mouseleave="activeHoveredDoRow = null"
                DoListExp=" Do only install trusted software.
                    If someone seems to control your device,
                    disconnect it from the internet and tell an adult."/>  
            </div>
    </div> 
    
        <!--Seventh row-->
    <div id="threat-rows" >
            <div id="w" class="threat-shape" >
                <h1>Key-logger</h1>
                <img ref id="threat-image-wide"src="Do and Dont images/key-logger-image.jpg">
            </div>
            <div id="w" class="wide-description">
                <p>Key-loggers collect users keyboard use with algorithms that monitor the keys they 
                    type. This occurs on websites/applications that a user visits, or every key 
                    typed on their device. 
                </p>
            </div>
            <div id="threat-list" class="header" >
                <DoList v-show="DoList" :class="{'hide-on-hover': activeHoveredDontRow === 7}"
                    @mouseenter="activeHoveredDoRow = 7"
                    @mouseleave="activeHoveredDoRow = null"
                DoListExp="Do keep your device protected and avoid suspicious websites.
                    If you think your password was stolen, tell an adult and change it."/>
                <DontList v-show="DontList" :class="{'hide-on-hover': activeHoveredDoRow === 7}"
                    @mouseenter="activeHoveredDontRow = 7"
                    @mouseleave="activeHoveredDontRow = null"
                DontListExp="Don't type passwords or personal information into suspicious websites. 
                Don't download unknown software that could record what you type."/>
            </div>
    </div> 
   
<div id="space">

    <img class="dont-space-image" src="Do and Dont images/Dont-space-image.jpg">
     
</div>

</section>



</template>

<script>
import DoList from './Do list.vue'
import DontList from './Dont list.vue'


export default {
   name: 'DosAndDonts',
   props: {
    Dos:String,
    Donts:String,

   },
   
   components:{
    DoList,
    DontList
    },
    data() {
        return{
            DoList:true,
            DontList:true,
            activeHoveredDoRow: null,
            activeHoveredDontRow: null
        }

    },
    methods: { 
        displayDoList(){
            if (this.Dolist = true && !this.DontList){ // Do's is already the only visible component                                                           // Show both components
                this.DontList = true;                 // Show both components
                } else { // Show only Do's
                this.DoList = true;
                this.DontList = false;
                }                                 
      
        },
        displayDontList() {
            if (this.DontList = true && !this.DoList){ // Don's is already the only visible component
                this.DoList = true                    // show both components
            } else{ // show only Don'ts
                this.DoList = false;
                this.DontList = true;
            }

        }

    }
} 

</script>
<style>

#threat-list{
    height:100%;
    width:max-content;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.hide-on-hover {
    display:none;
}


</style>