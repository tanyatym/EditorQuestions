Vue.component('answer-list', {
	template: '#answer-type-list',

	props: ['data'],

	data: function(){
		return {
			list: this.data ? this.data.list : [],
			multyple: this.data ? this.data.multyple : false,
			contentType: this.data ? this.data.contentType : "text"
	    }
	},
	computed: {
		itemForm:function(){
			return anserFormByType(this.contentType)
		},
		currentAnswerComponent: function(){
			return 'answer-' + this.contentType
		}
	},

	methods: {
	},
	watch: {
		data: function() {
			this.list = this.data.list
			this.multyple = this.data.multyple
		},
	}
})