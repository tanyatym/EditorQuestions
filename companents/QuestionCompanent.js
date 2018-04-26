Vue.component('question', {
	template: '#question',
	
	props: ['questionData', 'index'],
	
	data:  function(){
		return {
			answerTypeLables: {
				list:"Список",
				range:"Шкала",
				number:"Число",
				text:"Текст"
			},
			answerType: this.questionData.answerForm ? this.questionData.answerForm.type : "text",
			answerForm: this.questionData.answerForm ? answerFormByType(this.answerType, this.questionData.answerForm) : new AnswerFormText()
		}
	},

	computed:{
		text: function(){
			return this.questionData.text || ""
		},
		
		
		currentAnswerComponent: function(){
			return 'answer-' + this.answerType
		}
	},

	methods: {
		addAnswer: function(){
			this.collection.push('answer')
		},
		
		askDelMyself: function(){
			this.$emit('delqustion', this.index)

		},

		deleteAnswer: function( index ){
			this.answers.splice(index, 1)
		},
		updateAnswerForm: function(){
			this.answerForm = answerFormByType(this.answerType) 
		},
	},

	// watch: {
	// 	questionData: function() {
	// 		this.text = this.questionData.text
	// 		this.answerType = this.questionData.answerForm.type
	// 		this.answerForm = this.questionData.answerForm
	// 	}
		
	// }
})
