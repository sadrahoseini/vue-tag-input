<template>
	<p v-if="label">{{ label }}</p>
</template>

<script setup>
defineProps({
	label: {
		type: String,
	}
})
</script>