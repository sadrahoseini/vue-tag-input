<template>
  <div id="page" class="container">
    <header>
      <h2><a class="bold" href="https://alibaba.ir" target="_blank"><i class="ip-brands-alibaba-shawl"></i> Alibaba.ir</a></h2>
      <p><b>Tag input component</b> code challenge</p>
    </header>

    <main>
      <TagInput 
        label="Brands selector"
        fetch-url="/api/brands"
        identifier="brands"/>
    </main>

    <footer>
      developed by <a class="bold" href="https://sadrahoseini.ir" target="_blank">Sadra Hoseini</a>
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
    font-family: 'light';
    margin-top: 5px;
  }
}

main {
  padding: 20px 0;

  .tag-input-component {
    width: 100%;
    max-width: 300px;
  }
}

footer {
  padding: 20px 0
}
</style>
