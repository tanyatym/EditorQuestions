Vue.component('answer-text', {
	template: '#answer-type-text',

	props: ['data'],

	data: function(){
		return {
			structObj: new AnswerStructText( this.data ),
	    }
	},

	computed: {
		value () { return this.structObj.struct.value },
	},

	methods: {
		updateValue (newValue){
			this.structObj.struct.value = newValue
			this.$emit('update', this.structObj.struct)
		}
	},

	watch: {
		data (){ this.structObj = new AnswerStructText( this.data ) },
	}
})
