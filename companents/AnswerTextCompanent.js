Vue.component('answer-text', {
	template: '#answer-type-text',

	props: ['data'],

	data: function(){
		return {
			value: this.data.value,
	    }
	},

	methods: {
	},
	watch: {
		data: function() {this.value = this.data},
	}
})