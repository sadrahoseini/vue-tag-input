<template>
  <ul class="list">
    <ListItem 
      v-for="(item, index) in items" 
      :key="item.id"
      :item="item"
      :active="activeIndex == index"
      @hover="hover"
      @click="select"
      />
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  components: [ListItem],
  props: {
    items: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  methods: {
    hover(item) {
      this.$emit('hover', t)
    }
  }
};
</script>