Vue.component('answer-range', {
	template: '#answer-type-range',

	props: ['data'],

	data: function(){
		return {
			min: this.data.min,
			max: this.data.max,
			step: this.data.step
		}
	},

	computed: {
		storableObject (){ 
			return { 
				type: "number", 
				value: this.value 
			}
		}
	},

	methods: {
		updateValue (){
			this.$emit('update', this.storableObject )
		}
	}
})