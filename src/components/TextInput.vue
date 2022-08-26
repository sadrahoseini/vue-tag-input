<template>
  <input
    :value="modelValue"
    type="text"
    class="text-input-component"
    :name="name"
    :disabled="disabled"
    :placeholder="placeholder"
    @click="click"
    @input="input"
    @keydown="keydown"
    @keyup="keyup"
    @blur="blur"
    @focus="focus"
  >
</template>

<script>
export default {
  props: {
    modelValue: {
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
  emits: [
    "changed",
    "input",
    "keydown",
    "keyup",
    "focus",
    "blur",
    "update:modelValue",
		"click"
  ],
  methods: {
    input(event) {
      let val = event.target.value;
      this.$emit("changed", val);
      this.$emit("input", val);
      this.$emit("update:modelValue", val);
    },
    click(event) {
      this.$emit("click", event, this.name);
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
	display: block;
	width: 100%;

  &::placeholder {
    color: #babfc7;
  }

  &:focus {
    border: 1px solid #f1f2f3;
  }
}
</style>