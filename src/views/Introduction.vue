<template>
  <div>
    <div class="xl:flex hidden">
      <div class="mx-auto flex">
        <div id="left" class="mx-auto px-32">
          <h1 class="text-6xl xl:text-7xl">Hey I'm Yash!</h1>
          <Socials />
          <p class="text-xl text-justify">
            I'm <span class="font-semibold">Yash Trivedi</span> a Toronto-based software
            engineer with 8 years of coding experience. I specialize in 
            <span class="font-semibold">Python, Fullstack Development</span> utilizing
            <span class="font-semibold">JavaScript</span>. proficiently architecting
            <span class="font-semibold">Node JS backends</span>, and crafting polished 
            <span class="font-semibold">Flutter</span> mobile applications. As a skilled
            problem solver and rapid learner, I seamlessly adapt to meet the unique 
            demands of each organization, offering effective solutions and contributing
            to continuous progress!
          </p>
        </div>
        <div class="relative px-32 mt-0">
          <img
            class="mr-0 rounded-lg"
            src="/images/profile.png"
            style="width: 17.5rem; height: 17.5rem"
          />
        </div>
      </div>
    </div>
    <div class="flex xl:hidden">
      <div class="mx-auto">
        <div id="left" class="mx-auto">
          <h1 class="text-4xl">Hey I'm Yash!</h1>
        </div>
        <div class="w-screen flex">
          <Socials class="mx-auto" />
        </div>
        <div class="flex w-screen lg:relative mt-8">
          <img
            class="mx-auto rounded-lg"
            src="/images/profile.png"
            style="width: 15rem; height: 15rem"
          />
        </div>
        <div id="left" class="mx-auto pt-12">
          <p class="text-md text-justify">
            I'm <span class="font-semibold">Yash Trivedi</span>a Toronto-based software
            engineer with 8 years of coding experience. I specialize in 
            <span class="font-semibold">Python, Fullstack Development</span> utilizing
            <span class="font-semibold">JavaScript</span>. proficiently architecting
            <span class="font-semibold">Node JS backends</span>, and crafting polished 
            <span class="font-semibold">Flutter</span> mobile applications. As a skilled
            problem solver and rapid learner, I seamlessly adapt to meet the unique 
            demands of each organization, offering effective solutions and contributing
            to continuous progress!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Socials from "@/components/Socials.vue";
export default {
  components: {
    Socials,
  },
};
</script>

<style scoped>
#left {
  width: 65rem;
}
@media (max-width: 1100px) {
  #left {
    width: 20rem;
    text-align: center;
  }
}
</style>
