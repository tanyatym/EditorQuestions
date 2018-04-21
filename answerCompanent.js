Vue.component('answer', {
		props: ['origName', 'origCollection', 'gIndex', 'id'],

		data: function(){
			return {
				name: this.origName,
				collection: this.origCollection,
				open: true
			}
		},

		template: '#answer',

		methods: {
			addAnswer: function(){
				this.collection.push(new QGroup())
			},
			askDelMyself: function(){
				this.$emit('delanswer', this.gIndex)

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