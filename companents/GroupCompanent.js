Vue.component('q-group', {
	props: ['origName', 'origCollection', 'gIndex', 'id'],

	data: function(){
		return {
			name: this.origName,
			collection: this.origCollection,
			open: true,
			activeNames: Array.from(this.origCollection.keys())
		}
	},

	template: '#group',

	methods: {
		addGroup: function(){
			this.collection.push(new QGroup())
		},
		
		addQuestion: function(){
			this.collection.push(new Question())
		},

		askDelMyself: function(){
			this.$emit('delgroup', this.gIndex)
		},

		deleteFromCollection: function( index ){
			this.collection.splice(index, 1)
		},

		updateQuestion (index, newData) {
			this.collection[index] = newData
			console.log("\nGROUP updateQuestion -> collection:")
			console.log(this.collection)
		}
	},

	watch: {
		origCollection: function() {
			this.collection = this.origCollection
			this.activeNames = Array.from(this.origCollection.keys())
		},
		
		origName: function() {
			this.name = this.origName
		}
	}
})