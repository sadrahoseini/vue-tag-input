<template>
  <ul class="drop-down-component">
    <li
      v-for="(item, index) in items"
      :key="item.id"
      :class="{ active: activeIndex === index }"
      @mouseenter="hover(index, $event)"
      @click="select(item, $event)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: -1,
    },
  },
  emits: ["hover", "select"],
  methods: {
    hover(index, e) {
      this.$emit("hover", index, e);
    },
    select(item, e) {
      this.$emit("select", item, e);
    },
  },
};
</script>

<style lang="scss">
.drop-down-component {
  min-width: 150px;
  max-width: 200px;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  display: grid;
  list-style: none;

  li {
    padding: 8px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    border-radius: 8px;

    &.active {
      background-color: #f8f8f8;
    }
  }
}
</style>