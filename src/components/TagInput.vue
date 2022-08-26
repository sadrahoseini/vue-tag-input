<template>
  <div class="tag-input-component">
    <p class="label" v-if="label">{{ label }}</p>
    <TextInput
      v-model="query"
      placeholder="Add brand..."
      @focus="loadSuggestions()"
    />
    <transition>
      <List v-if="show" :items="matches" :active-index="index" />
    </transition>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import List from "./List.vue";

export default {
  components: { TextInput, List },
  data() {
    return {
      query: "",
      index: -1,
      show: false,
      items: [],
      matches: [],
      on_loading: false,
      loaded: false,
      failed: false,
    };
  },
  props: {
    label: {
      type: String,
    },
    fetchUrl: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: true,
    },
  },
  methods: {
    loadSuggestions() {
      if (this.loaded || this.failed) return;

      axios
        .get(this.fetchUrl)
        .then(({ data }) => {
          console.log(data);
          // this.items = data[this.identifier];
          this.loaded = true;
          this.failed = false;
        })
        .catch((error) => {
          this.failed = true;
          console.log(error);
          console.error(
            "Something goes wrong when app want to fetch brands list...!",
            "Check if your fetch url is valid or not: " + this.fetchUrl
          );
        });
    },
  },
};
</script>

<style lang="scss">
.tag-input-component {
  .label {
    margin-bottom: 5px;
  }
}
</style>