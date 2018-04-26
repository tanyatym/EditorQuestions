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
			return answerFormByType(this.contentType)
		},
		currentAnswerComponent: function(){
			return 'answer-' + this.contentType
		}
	},

	methods: {
		addToList: function(){
			this.list.push(answerFormByType(this.contentType))
		},
		deleteAnswer: function( index ){
			this.list.splice(index, 1)
			console.log(this.list)
		},
		updateAnswer:function(newData, index){
			this.list[index]
		}
	},
	watch: {
		data: function() {
			this.list = this.data.list
			this.multyple = this.data.multyple
		},
	}
})