Vue.component('q-group', {
		props: ['origName', 'origCollection', 'gIndex', 'id'],

		data: function(){
			return {
				name: this.origName,
				collection: this.origCollection,
				open: true
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
			}
		},
		watch: {
			origCollection: function() {
				this.collection = this.origCollection
            },
			origName: function() {
				this.name = this.origName
            }
        }
	})