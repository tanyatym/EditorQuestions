Vue.component('answer-text', {
	template: '#answer-type-text',

	props: ['data'],

	data: function(){update
		return {
			value: this.data.value,
	    }
	},

	methods: {
		reportChange: function(){
			thid.$emit("update", this.value)
		}
	},
	watch: {
		data: function() {this.value = this.data.value},
	}
})