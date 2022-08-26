<template>
  <div id="page" class="container">
    <header>
      <h3><a class="bold" href="https://alibaba.ir"><i class="ip-brands-alibaba-shawl"></i> Alibaba.ir</a></h3>
      <p>Tag input component code challenge</p>
    </header>

    <main>
      <TagInput 
        label="Select your favorite brands"/>
    </main>

    <footer>
      developed by <a class="bold" href="https://sadrahoseini.ir">Sadra Hoseini</a>
    </footer>
  </div>
</template>

<script setup>
import TagInput from './components/TagInput.vue'
</script>

<style scoped lang="scss">
#page {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  min-height: 100vh;
}

header {
  padding: 20px 0;

  p {
    font-family: 'thin';
    margin-top: 5px;
  }
}

footer {
  padding: 20px 0
}
</style>
