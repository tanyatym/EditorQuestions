Vue.component('question', {
		props: ['questionData', 'index'],
		data:  function(){
			return {
				text: this.questionData.text,
				answers: [],
				answerTypes: {
					list:"Список",
					range:"Шкала",
					number:"Число",
					text:"Текст"
				},
				answerType: null
			}
		},
		template: '#question',

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
		watch: {
			questionData: function() {
				this.text = this.questionData.text
            },
			
        }
	})
