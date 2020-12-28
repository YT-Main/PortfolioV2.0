<template>
  <div>
    <div class="xl:flex hidden">
      <div class="mx-auto flex">
        <div id="left" class="mx-auto px-32">
          <h1 class="text-6xl xl:text-7xl">Hey I'm Yash!</h1>
          <Socials />
          <p class="text-xl text-justify">
            I'm <span class="font-semibold">Yash Trivedi</span>, I am a
            <span class="font-semibold">developer</span> and student in
            Oakville, Ontario. I started coding 5 years ago with
            <span class="font-semibold">Python</span> and then found my love for
            <span class="font-semibold">web development</span>. Having won and
            organized hackathons in the past I pride myself on my ability to
            learn quickly and adapt to the needs of whatever project I am
            working on. Let's get in touch and talk about your company's needs.
          </p>
        </div>
        <div class="relative px-32 mt-8 mt-0">
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
            I'm <span class="font-semibold">Yash Trivedi</span>, I am a
            <span class="font-semibold">developer</span> and student in
            Oakville, Ontario. I started coding 5 years ago with
            <span class="font-semibold">Python</span> and then found my love for
            <span class="font-semibold">web development</span>. Having won and
            organized hackathons in the past I pride myself on my ability to
            learn quickly and adapt to the needs of whatever project I am
            working on. Let's get in touch and talk about your company's needs.
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
