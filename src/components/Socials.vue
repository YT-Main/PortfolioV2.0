<template>
  <div class="flex">
    <div v-for="social in info" :key="social">
      <a :href="social.link" target="_blank" rel="noopener noreferrer" :title="social.text">
        <img class="w-7 mx-1 mt-6 mb-7" :src="'/images/icons/' + social.text + '.svg'" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      info: [
        {
          text : "twitter",
          link : "https://twitter.com/YashTrivediMain"
        },
        {
          text : "instagram",
          link : "https://www.instagram.com/yashtrivedimain/"
        },
        {
          text : "github",
          link : "https://github.com/YT-Main"
        },
        {
          text : "linkedin",
          link : "https://www.linkedin.com/in/yashtrivedimain/"
        }
      ]
    }
  },
}
</script>