<template>
  <div class="overflow-hidden transition duration-200 ease-in-out" :class="{'dark text-white': !light, 'bg-white text-black': light}">
    <div class="relative h-screen" :class="{'darkBack': !light, 'lightBack': light}">
      <div>
        <div>
          <div class="lg:px-12 flex flex-wrap items-center lg:py-0 py-2">
            <div class="flex-1 flex justify-between items-center" title="Yash Trivedi">
              <svg class="w-8 mt-2 mx-5 lg:mx-0 fill-current" :class="{'text-black': light, 'text-white': !light}" width="50" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.08579 1.59999L0.295696 5.39009L20.5328 25.6272L24.3229 21.8371L4.08579 1.59999Z"/>
                <path d="M48.2944 5.39011L44.5043 1.60001L0 46.1044L3.79009 49.8944L48.2944 5.39011Z"/>
                <path d="M0.295648 0V5.36H48.2957V0H0.295648Z"/>
                <path d="M26.8557 5.36003H21.4957V49.92H26.8557V5.36003Z"/>
              </svg>

            </div>

            <div for="menu-toggle" class="pointer-cursor lg:hidden block mx-5 lg:mx-0">
              <svg @click="open = !open" class="fill-current" :class="{'text-black': light, 'text-white': !light}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
            </div>

            <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
              <nav>
                <ul class="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                  <li><a class="lg:p-4 py-3 px-0 block hover:text-gray-400" @click="scroll('projects')">Projects</a></li>
                  <li><a class="lg:p-4 py-3 px-0 block hover:text-gray-400" @click="scroll('contact')">Contact Me</a></li>

                  <li>
                    <img class="lg:p-4 py-3 px-0 block" :src="'/images/icons/light_' + light + '.svg'" @click="light = !light"/>  
                  </li>
                </ul>
              </nav>
            </div>

            <div class="w-full lg:hidden absolute mt-64">
              <div class="w-full bg-opacity-50 bg-black" :class="{'hidden': !open}" id="menu">
                <nav>
                  <ul class="items-center justify-between text-base text-white font-semibold pt-4 px-6">
                    <li><a class="lg:p-4 py-3 px-0 block hover:text-gray-400" @click="scroll('projects')">Projects</a></li>
                    <li><a class="lg:p-4 py-3 px-0 block hover:text-gray-400" @click="scroll('contact')">Contact Me</a></li>

                    <li>
                      <img class="lg:p-4 py-3 px-0 block mx-auto" :src="'/images/icons/light_' + light + '.svg'" @click="light = !light"/>  
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="h-screen w-screen flex">
        <div class="xl:my-auto mx-auto">
          <Introduction class="xl:mt-16" />

          <div class="hidden xl:flex w-full">
            <div class="mx-auto w-12 h-20 flex cursor-pointer animate-bounce" @click="scroll('projects')" style="margin-top: 22rem">
              <svg width="30" height="17" class="mx-auto my-auto fill-current" :class="{'text-black': light, 'text-white': !light}" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5858 16.4142C14.3668 17.1953 15.6332 17.1953 16.4142 16.4142L29.1421 3.68629C29.9232 2.90524 29.9232 1.63891 29.1421 0.857864C28.3611 0.0768156 27.0948 0.0768156 26.3137 0.857864L15 12.1716L3.68629 0.857864C2.90524 0.0768156 1.63891 0.0768156 0.857864 0.857864C0.0768156 1.63891 0.0768156 2.90524 0.857864 3.68629L13.5858 16.4142ZM13 14V15H17V14H13Z"/>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <Projects id="projects" :light="light"/>

    <ContactForm  class="mt-32" id="contact" :light="light"/>

    <Footer class="mt-32"/>

  </div>
</template>

<script>
import Introduction from '@/views/Introduction.vue'
import Projects from '@/views/Projects.vue'
import ContactForm from '@/views/ContactForm.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'Home',
  components: {
    Introduction,
    Projects,
    ContactForm,
    Footer
  },
  data(){
    return{
      open: false,
      light: false
    }
  },
  props: ['lightRoute'],
  mounted(){
    this.light = 'true'
  },
  methods:{
    animate: function(elem, style, unit, from, to, time, prop) {
        if (!elem) {
            return;
        }
        var start = new Date().getTime(),
            timer = setInterval(function () {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    elem[style] = (from + step * (to - from))+unit;
                } else {
                    elem.style[style] = (from + step * (to - from))+unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
            elem[style] = from+unit;
        } else {
            elem.style[style] = from+unit;
        }
    },
    scroll:function(to) {
        var target = document.getElementById(to);
        this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 300, true);
    }
  }
}
</script>

<style scoped>
.dark{
  background: #252829;
}

.darkBack{
  background: url('/images/splash.svg'); 
  background-size: cover; 
  background-repeat: no-repeat;
}

.lightBack{
  background: url('/images/splash_light.svg'); 
  background-size: cover; 
  background-repeat: no-repeat;
}
</style>