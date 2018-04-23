Vue.component('answer-number', {
	template: '#answer-type-number',

	props: ['data'],

	data: function(){
		return {
			value: this.data.value,
	    }
	},

	methods: {
	},
	created: function(){
		console.log(this.data)
	},
	watch: {
		data: function() {this.value = this.data.value},
	}
})