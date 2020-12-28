<template>
    <div class="py-10">
          <div class="w-screen flex">
      <h1 class="text-3xl xl:text-5xl mx-auto font-semibold">Contact Me</h1>
    </div>
      <div class="flex w-full pt-8" >
          <div class="mx-auto w-5/6 xl:w-3/5">
              <form action="https://formspree.io/xpzyjvbd" method="POST" class="p-2 text-2xl formW">
                  <label class="p-2">Name</label> <br>
                  <input class="p-2 rounded border-2 bg-transparent text-lg w-full my-4" type="text" placeholder="Name" name="name" required><br>

                  <label class="p-2">Email Address </label> <br>
                  <input class="p-2 rounded border-2 bg-transparent text-lg w-full my-4" type="email" placeholder="Email address" name="email" required><br>

                  <label class="p-2">Message</label> <br>
                  <textarea class="p-2 rounded border-2 bg-transparent text-lg form w-full my-4" rows="5"  placeholder="Message" name="message" required></textarea><br>
                  <div class="w-full flex">
                      <button class="p-2 rounded w-full mx-auto mt-4 text-xl hover:bg-transparent border-2 transition duration-200 ease-in-out" :class="{'text-black bg-white hover:text-white': !light, 'text-white bg-black hover:text-black': light}" type="submit">Send</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: "ContactForm",
    props:['light']
}
</script>