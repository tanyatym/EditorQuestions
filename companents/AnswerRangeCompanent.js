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

	methods: {
	},
	watch: {
		data: function() {
			this.min = this.data.min
			this.max = this.data.max
			this.step = this.data.step
		}
	}	
})