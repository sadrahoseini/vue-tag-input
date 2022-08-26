<template>
  <input
    :value="value"
    type="text"
    class="text-input-component"
    :name="name"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="input"
    @keydown="keydown"
    @keyup="keyup"
    @blue="blur"
    @focus="focus"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["changed", "input", "keydown", "keyup", "focus", "blur"],
  methods: {
    input(event) {
      let val = event.target.value;
      this.$emit("changed", val);
      this.$emit("input", val);
    },
    keydown(event) {
      this.$emit("keydown", event, this.name);
    },
    keyup(event) {
      this.$emit("keyup", event, this.name);
    },
    focus(event) {
      this.$emit("focus", event, this.name);
    },
    blur(event) {
      this.$emit("blur", event, this.name);
    },
  },
};
</script>

<style lang="scss">
.text-input-component {
  padding: 8px;
  background-color: #fff;
  outline: none;
  border: 1px solid #f8f8f8;
  border-radius: 8px;
  line-height: 20px;

  &::placeholder {
    color: #babfc7;
  }

  &:focus {
    border: 1px solid #f1f2f3;
  }
}
</style>