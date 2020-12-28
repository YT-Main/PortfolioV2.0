<template>
  <div class="xl:flex w-screen h-screen" :class="{'text-white dark': !light}">
    <div class="w-screen xl:w-1/2 h-1/3 xl:h-screen flex" :class="{'bg-black': !light, 'bg-gray-200': light}">
      <router-link :to="'/' + light">
        <svg fill="currentColor" viewBox="0 0 20 20" class="absolute ml-4 mt-4 hidden lg:block w-16" :class="{'text-black': light, 'text-white': !light}">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </router-link>
      <div class="mx-auto my-auto">
        <div v-if="info.Media.type === 'NA'" class="bg-gray-300 mx-auto mt-8 flex text-xl hover:text-6xl rounded-lg w-64 h-48 xl:w-96 xl:h-64">
            <span class="my-auto mx-auto xl:text-black"> Media Demo Comming Soon </span>
        </div>
        <img v-if="info.Media.type ==='img'" :src="'/images/' + info.Media.link" class="rounded-lg mx-auto mt-8 w-4/5" style=""/>
      </div>
    </div>
    <div class="w-screen xl:w-1/2 flex" :class="{'dark': !light}">
      <div class="mx-auto my-auto w-3/4">
        <h1 class="text-7xl font-semibold text-center">{{info.text}}</h1>
        <p class="text-xl xl:text-2xl mt-8 text-justify">{{info.description.full}}</p>
        <div class="flex mt-8" >
          <p class="hidden xl:block text-xl font-medium content-center py-2">Technologies Used: </p>
          <div class="flex flex-wrap" >
            <div v-for="tech in info.TechnologiesUsed" :key="tech" class="py-2">
                <div class="my-auto py-1 px-2 text-md rounded-full bg-gray-800 mx-2 text-white" :class="{'bg-green-500': tech==='Vue.js', 'bg-teal-300': tech==='Tailwind.CSS', 'bg-red-700': tech==='Axios', 'bg-yellow-500': tech==='JavaScript', 'bg-red-300': tech==='Chart.js', 'bg-green-800': tech==='MongoDB',}"><span class="mx-auto">{{tech}}</span></div>
            </div>
          </div>
        </div>
        <div class="pb-32 xl:pb-0">
          <div v-for="links in info.link" :key="links" class="w-full">
            <a :href="links.link" target="_blank" rel="noopener noreferrer">
              <div class="p-2 lg:p-4 mt-4 rounded-lg text-xl transition duration-200 ease-in-out border-2 text-center" :class="{'bg-black text-white hover:bg-white hover:text-black border-black': light, 'bg-white text-black hover:bg-transparent hover:text-white border-white': !light}">
                {{links.text}}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      info: null,
      light:null
    }
  },
  props:['id', 'lightMode'],
  created(){
    this.light = this.lightMode === 'true'

    axios.get("/projects.json").then(response => (this.info = response.data.projects[this.id]));
  }
}
</script>

<style scoped>
.dark{
  background: #252829;
}
</style>