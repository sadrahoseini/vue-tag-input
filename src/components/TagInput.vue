<template>
  <div class="tag-input-component">
    <p
      v-if="label"
      class="label"
    >
      {{ label }}
    </p>

    <TextInput
      v-model="query"
      :placeholder="placeholder"
      @focus="loadSuggestions()"
      @click="inputClick"
      @keydown="keyDown"
    />

    <div class="tags">
      <span
        v-for="(item, i) in selected"
        :key="item.id"
        class="tag"
        @click="removeTag(i)"
      >{{ item.label }}</span>
    </div>

    <transition>
      <DropDown
        v-if="show"
        :items="matches"
        :active-index="index"
        @hover="changeSuggestionHover"
        @select="addSelectedTag"
      />
    </transition>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import DropDown from "./DropDown.vue";
import Utils from "../mixins/utils";

export default {
  components: { TextInput, DropDown },
  mixins: [Utils],
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Add Tags...",
    },
    fetchUrl: {
      type: String,
      required: true,
    },
    identifier: {
      type: String,
      required: true,
    },
    maxSuggestionsCount: {
      type: Number,
      default: 10,
    },
  },
  emits: [
    "change",
  ],
  data() {
    return {
      query: "",
      index: -1,
      show: false,
      items: [],
      matches: [],
      selected: [],
      on_loading: false,
      loaded: false,
      failed: false,
      timer: null,
      delay: 100,
    };
  },
  mounted() {
    window.addEventListener("click", () => {
      if (this.show) this.hideSuggestionsList();
    });
  },
  methods: {
    loadSuggestions() {
      if (this.loaded || this.failed || this.on_loading) return;

      this.on_loading = true;
      this.$axios
        .get(this.fetchUrl)
        .then(({ data }) => {
          this.items = data[this.identifier];
          this.loaded = true;
          this.failed = false;
          this.on_loading = false;
          this.updateSuggestionsList();
        })
        .catch(() => {
          this.failed = true;
          this.on_loading = false;
          console.error(
            "Something goes wrong when app want to fetch brands list...!",
            "Check if your fetch url is valid or not: " + this.fetchUrl
          );
        });
    },
    keyDown(e) {
      const code = e.keyCode;
      // if user press enter
      if (code === 13) {
        if (this.matches.length > 0) {
          const item = this.matches[this.index];
          this.addSelectedTag(item);
        } else this.addTag();
        e.preventDefault();
      }

      // if user press comma key
      else if (code === 188) {
        this.addTag();
        e.preventDefault();
      }

      // hide suggestions list if user press escape
      else if (code === 27) {
        this.hideSuggestionsList();
        e.preventDefault();
      }

      // change active suggestion if user press up key
      else if (code === 38) {
        this.suggestionsUp();
        e.preventDefault();
      }

      // change active suggestion if user press down key
      else if (code === 40) {
        this.suggestionsDown();
        e.preventDefault();
      } else this.updateSuggestionsList();
    },
    changeSuggestionHover(index) {
      this.index = index;
    },
    updateSuggestionsList() {
      if (this.loaded) {
        // reset type timer
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }

        // call find suggestions method
        this.timer = setTimeout(() => {
          let query = this.query.trim();
          if (query) query = query.toLowerCase();
          this.findSuggestions(query);
        }, this.delay);
      }
    },
    findSuggestions(query) {
      if (!this.items || this.items.length < 1) return;

      if (query.length > 0) {
        let matched = [];

        // loop throw tags items
        this.items.map((item) => {
          if (this.selected.findIndex((i) => i.id === item.id) > -1) return;
          const label = item.label.toLowerCase();
          if (
            label.includes(query) &&
            matched.length < this.maxSuggestionsCount
          )
            matched.push(item);
        });
        this.matches = matched;

        this.matches.length > 0
          ? this.showSuggestionsList()
          : this.hideSuggestionsList();
      } else this.hideSuggestionsList();
    },
    showSuggestionsList() {
      if (this.matches.length > 0) {
        this.show = true;
        this.index = 0;
      } else this.hideSuggestionsList();
    },
    hideSuggestionsList() {
      this.show = false;
      this.index = -1;
    },
    addTag() {
      // check query is new tag or could select from suggestions
      const query = this.query.trim();
      const slug = this.$slugify(query);
      let item = {
        id: slug,
        label: query,
      };
      let is_new = true;

      // check types query syting match with any exist tags or not
      let check_label = this.items.find(
        (i) => i.label.toLowerCase() === query.toLowerCase()
      );
      if (check_label) {
        item = check_label;
        is_new = false;
      } else {
        let check_id = this.items.find((i) => i.id === slug);
        if (check_id) {
          item = check_id;
          is_new = false;
        }
      }
      if (is_new) this.items.push(item);
      this.addSelectedTag(item);
    },
    addSelectedTag(item, event) {
      if (event) event.preventDefault();
      if (item && this.selected.findIndex((i) => i.id === item.id) < 0)
        this.selected.push(item);
      this.query = "";
      this.$emit('change', this.selected)
      this.hideSuggestionsList();
    },
    removeTag(index) {
      this.selected.splice(index, 1);
    },
    suggestionsDown() {
      let length = this.matches.length;
      let index = this.index;
      if (this.show && length > 0) {
        if (index < length - 1) this.index++;
        else this.index = 0;
      }
    },
    suggestionsUp() {
      let length = this.matches.length;
      let index = this.index;
      if (this.show && length > 0) {
        if (index > 0) this.index--;
        else this.index = length - 1;
      }
    },
    inputClick(e) {
      e.stopPropagation();
    },
  },
};
</script>

<style lang="scss">
.tag-input-component {
  position: relative;

  .label {
    margin-bottom: 5px;
  }

  .drop-down-component {
    position: absolute;
    top: 75px;
    left: 0;
  }

  .tags {
    .tag {
      display: inline-block;
      margin: 8px 8px 0 0;
      padding: 2px 8px;
      line-height: 16px;
      font-size: 14px;
      background-color: #dde1ee;
      color: #3e5bc4;
      cursor: pointer;
      border-radius: 10px;

      &:hover {
        background-color: #f2e1e1;
        color: #ca3b57;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>