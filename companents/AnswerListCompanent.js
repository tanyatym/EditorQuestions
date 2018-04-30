Vue.component('answer-list', {
	template: '#answer-type-list',

	props: ['data'],

	data (){
		return {
			answerList: new AnswerStructList(this.data)
	    }
	},
	computed: {
		componentNameOfContent (){ return 'answer-' + this.answerList.struct.contentType },
		
		list (){ return this.answerList.struct.list }
	},

	methods: {
		addToList (){
			this.$emit('update', this.answerList.addNewItem())
		},

		deleteAnswer ( index ){
			this.$emit('update', this.answerList.deleteItem( index ))
		},
		
		updateAnswer ( index, value ){
			this.$emit('update', this.answerList.updateItem( index, value ))
		}
	}
})