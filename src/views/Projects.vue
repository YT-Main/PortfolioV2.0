<template>
  <div class="mt-32">
    <div class="w-screen flex">
      <h1 class="text-3xl xl:text-5xl mx-auto font-semibold">Projects</h1>
    </div>
    <div class="w-screen mt-4 xl:mt-8 flex">
      <div
        class="mx-auto hidden xl:block border-l-4"
        :class="{ 'border-white': !light, 'border-black': light }"
      >
        <div
          v-for="(projects, index) in info"
          :key="projects"
          class="p-4 group hover:shadow-md transition duration-200 ease-in-out"
        >
          <router-link :to="'/projects/' + index + '/' + light">
            <div class="inline-block" style="width: 70rem">
              <h2 class="text-3xl font-semibold">{{ projects.text }}</h2>
              <p class="text-xl">
                <span class="font-medium">Description:</span>
                {{ projects.description.short }}
              </p>
              <div class="flex">
                <div class="flex">
                  <p class="text-xl font-medium content-center py-2">
                    Technologies Used:
                  </p>
                  <div
                    v-for="tech in projects.TechnologiesUsed"
                    :key="tech"
                    class="py-2"
                  >
                    <div
                      class="my-auto py-1 px-2 text-md rounded-full bg-gray-800 mx-2 inline-block text-white"
                      :class="{
                        'bg-green-500': tech === 'Vue.js',
                        'bg-blue-800': tech === 'Tailwind.CSS',
                        'bg-red-700': tech === 'Axios',
                        'bg-yellow-500': tech === 'JavaScript',
                        'bg-red-300': tech === 'Chart.js',
                        'bg-green-800': tech === 'MongoDB',
                      }"
                    >
                      <span class="mx-auto">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <div
            class="group-hover:bg-transparent transition duration-200 ease-in-out text-lg font-semibold px-3 py-1 inline-block rounded-full"
            :class="{
              'group-hover:text-white bg-white text-black': !light,
              'group-hover:text-black bg-black text-white': light,
            }"
          >
            <p>Learn More</p>
          </div>
        </div>
      </div>
      <div class="mx-auto block xl:hidden px-4">
        <div
          v-for="(projects, index) in info"
          :key="projects"
          class="py-2 group"
        >
          <router-link :to="'/projects/' + index + '/' + light">
            <div
              class="border rounded-lg px-2"
              :class="{ 'border-black': !light, 'border-gray-300': light }"
            >
              <h2 class="text-2xl font-semibold">{{ projects.text }}</h2>
              <p class="text-lg">{{ projects.description.short }}</p>
              <div class="block flex flex-wrap">
                <div
                  v-for="tech in projects.TechnologiesUsed"
                  :key="tech"
                  class="py-2"
                >
                  <div
                    class="my-auto py-1 px-2 text-md rounded-full bg-gray-800 mx-2 text-white"
                    :class="{
                      'bg-green-500': tech === 'Vue.js',
                      'bg-teal-300': tech === 'Tailwind.CSS',
                      'bg-red-700': tech === 'Axios',
                      'bg-yellow-500': tech === 'JavaScript',
                      'bg-red-300': tech === 'Chart.js',
                      'bg-green-800': tech === 'MongoDB',
                    }"
                  >
                    <span class="mx-auto">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },
  props: ["light"],

  created() {
    axios
      .get("/projects.json")
      .then((response) => (this.info = response.data.projects));
  },
};
</script>
