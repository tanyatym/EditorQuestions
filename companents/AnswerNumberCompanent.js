Vue.component('answer-number', {
	template: '#answer-type-number',

	props: ['data'],

	data (){
		return {
			value: this.data.value || 0,
	    }
	},

	computed: {
		storableObject (){ 
			return { type: "number", value: this.value }
		}
	},

	methods: {
		updateValue (){
			this.$emit('update', this.storableObject )
		}
	},

	watch: {
		data (){ this.value = this.data.value },
	}
})