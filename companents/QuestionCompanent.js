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
			answerType: this.questionData.answerForm ? this.questionData.answerForm.type : "text"
		}


	computed:{
		text: function(){
			return this.questionData.text || ""
		},
		
		answerForm: function(){
			if (!this.questionData.answerForm) this.questionData.answerForm = new AnswerFormText()
			if (this.questionData.answerForm.type == this.answerType) {
				return this.questionData.answerForm 
			}else {
				console.log(anserFormByType(this.answerType)) 
				return anserFormByType(this.answerType) 
			}
			return this.questionData.answerForm || null
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
		}
	},

	// watch: {
	// 	questionData: function() {
	// 		this.text = this.questionData.text
	// 		this.answerType = this.questionData.answerForm.type
	// 		this.answerForm = this.questionData.answerForm
	// 	}
		
	// }
})
