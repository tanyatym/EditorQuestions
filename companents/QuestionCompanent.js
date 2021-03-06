Vue.component('question', {
	template: '#question',
	
	props: [ 'structData' ],
	
	data:  function(){
		return {
			questionObj: new Question( this.structData ),
			answerTypeLables: {
				list: "Список",
				range: "Шкала",
				number: "Число",
				text: "Текст"
			},
		}
	},

	computed:{
		text (){ return this.questionObj.struct.text },
		answerType (){ return this.questionObj.struct.answerType },
		answerStruct (){ return this.questionObj.struct.answerStruct },
		componentNameOfContent (){ return 'answer-' + this.answerType },
	},

	methods: {
		resetAnswerStruct: function( type ){
			this.$emit( 'update', this.questionObj.resetAnswerStruct( type ))
		},
		
		updateText ( event ){
			this.update({ text: event.target.value })
		},

		updateAnswerStruct ( newData ){
			this.$emit( 'update', this.questionObj.updateAnswerStruct( newData ))
		},

		update ( newData ){
			this.$emit( 'update', this.questionObj.update( newData ))
		}
	}
})
