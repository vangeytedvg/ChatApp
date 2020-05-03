<template>
	<div id="q-app">
		<router-view />
	</div>
	</template>
<script>
	import { mapActions } from 'vuex'
	export default {
		methods: {
			...mapActions('store', ['handleAuthStateChanged'])
		},
		// Lifecycle methods
		mounted() {
			console.log("Inside App.vue/Mounted")
			this.handleAuthStateChanged()
		}
	}
</script>