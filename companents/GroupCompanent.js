Vue.component('q-group', {
	template: '#group',

	props: [ 'structData' ],
	
	data: function(){
		return {
			groupObj: new QGroup( this.structData ),
			open: true,
			labels: {
				question: 'Вопрос',
				group: 'Группа',
			}
		}
	},

	computed: {
		name (){ return this.groupObj.struct.name }, 
		collection (){ return this.groupObj.struct.collection },
		activeNames:{ 
			get (){ return Array.from(this.groupObj.struct.collection.keys()) },
			set (newValue){ }
		}
	},

	methods: {
		updateName (event){
			this.$emit( 'update', this.groupObj.update({ name: event.target.value }))
		},

		addGroup: function(){
			const updated = this.groupObj.addToCollection( 'group' )
			if( updated ) this.$emit( 'update', updated )
		},
		
		addQuestion: function(){
			const updated = this.groupObj.addToCollection( 'question' )
			if( updated ) this.$emit( 'update', updated )
		},

		deleteFromCollection: function( index ){
			this.$emit( 'update', this.groupObj.deleteFromCollection( index ))
		},

		updateItem (index, newData) {
			this.$emit( 'update', this.groupObj.updateItem( index, newData ))
		},
	}
})