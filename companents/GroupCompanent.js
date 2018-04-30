Vue.component('q-group', {
	template: '#group',

	props: [ 'groupData', 'origName', 'origCollection', 'gIndex', 'id'],
	
	data: function(){
		return {
			groupObj: new QGroup( this.groupData ),
			open: true,
			labels: {
				question: 'Вопрос',
				group: 'Группа',
			}
		}
	},

	computed: {
		name (){ return this.groupObj.struct.name }, 
		collection (){ 
			console.log("\n GROUp COLLECTION")
			console.log(this.groupObj.struct.collection)
			return this.groupObj.struct.collection },
		activeNames (){ return Array.from(this.groupObj.struct.collection.keys()) }
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

		askDelMyself: function(){
			this.$emit('delgroup', this.gIndex)
		},

		deleteFromCollection: function( index ){
			this.$emit( 'update', this.groupObj.deleteFromCollection( index ))
		},

		updateQuestion (index, newData) {
			this.$emit( 'update', this.groupObj.updateItem( index, newData ))
			console.log("\nGROUP updateQuestion -> collection:")
			console.log(this.collection)
		},
	},

	// watch: {
	// 	origCollection: function() {
	// 		this.collection = this.origCollection
	// 		this.activeNames = Array.from(this.origCollection.keys())
	// 	},
		
	// 	origName: function() {
	// 		this.name = this.origName
	// 	}
	// }
})