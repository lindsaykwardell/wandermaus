<template>
  <!-- <header>
    <h1 class="font-medieval text-2xl font-bold">Wandermaus</h1>
  </header> -->
  <main>
    <NuxtPage />
  </main>
  <footer></footer>
</template>

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      // crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Gochi+Hand&family=MedievalSharp&display=swap",
      rel: "stylesheet",
    },
  ],
});
</script>
