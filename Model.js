// QUESTION
function Question( data ){
	this.struct = {
		type: 'question',
		text: '',
		answerType: 'text',
		answerStruct: new AnswerStructList().struct,
		hasUserAnswer: false,
	}

	this.update = function( newData ){
		if( typeof newData !== "object" ) return
		newData.type = this.struct.type
		this.setFromData( newData )
		return this.struct
	}

	/**
	 * @param {string} type 
	 */
	this.resetAnswerStruct = function( type ){
		this.struct.answerStruct = answerStructByType( type ).struct
		this.struct.answerType = this.struct.answerStruct.type
		return this.struct
	}

	/**
	 * @param {object} newData 
	 */
	this.updateAnswerStruct = function( newData ){
		if( typeof newData === 'object' && newData.type === this.struct.answerType ){
			this.struct.answerStruct = answerStructByType( this.struct.answerType, newData ).struct
		}else{
			console.error( 'Question.updateAnswerStruct ERROR: newData is invalid' )
			console.error( newData )
		}
		return this.struct
	}

	this.setFromData = function( data ){
		console.log( "\nQUESTION.setFromData -> data" )
		console.log( data )
		if(typeof data !== "object" || data.type !== this.struct.type) return
		Object.keys( this.struct ).forEach( key => {
			if(data.hasOwnProperty( key )) this.struct[key] = data[key]
		})
	}

	if(data) this.setFromData( data )
}

// GROUP
function QGroup( data ){
	this.struct = {
		name: '',
		type: 'group',
		collection: [],
	}

	this.update = function( newData ){
		if( typeof newData !== "object" ) return
		newData.type = this.struct.type
		this.setFromData( newData )
		return this.struct
	}
	
	this.addQuestion = function(){
		this.struct.collection.push( new Question().struct )
		return this.struct
	}

	this.addToCollection = function( type ){
		var newItem = null
		switch( type ){
			case 'group': 
				newItem = new QGroup().struct
				break
			case 'question':
				newItem = new Question().struct
		}
		if( newItem ){
			this.struct.collection.push( newItem )
			return this.struct
		}
		return null
	}

	this.deleteFromCollection = function( index ){
		this.struct.collection.splice(index, 1)
		return this.struct
	}

	this.updateItem = function( index, newData ){
		const curType = this.struct.collection[index].type
		if( typeof newData === 'object' && newData.type === curType ){
			this.struct.collection[index] = newData
		}else{
			console.error( 'QGroup.updateItem ERROR: newData is invalid:' )
			console.error( newData )
		}
		return this.struct
	}

	this.setFromData = function( data ){
		if(typeof data !== "object" || data.type !== this.struct.type) return
		Object.keys( this.struct ).forEach( key => {
			if(data.hasOwnProperty( key )) this.struct[key] = data[key]
		})
	}

	if(data) this.setFromData( data )
}

// ANSWER STRUCTs

function answerStructByType( type, data ){
	switch (type){
		case "number": return new AnswerStructNumber( data )
		case "range": return new AnswerStructRange( data )
		case "list": return new AnswerStructList( data )
		default: return new AnswerStructText( data )
	}
}

// LIST
function AnswerStructList(data) {
	this.struct = {
		type: "list",
		contentType: "text",
		list: [],
		multyple: false,
	}

	this.addNewItem = function (){
		this.struct.list.push( answerStructByType(this.contentType).struct )
		return this.struct
	}
	
	this.deleteItem = function( index ){
		this.struct.list.splice(index, 1)
		return this.struct
	}

	this.updateItem = function( index, value ){
		if( typeof value === 'object' && value.type === this.struct.contentType ){
			this.struct.list[index] = value
		}else{
			console.error('AnswerStructList.updateItem ERROR: value is invalid')
			console.error(value)
		}
		return this.struct
	}

	this.setFromData = function( data ){
		if(typeof data !== "object" || data.type !== this.struct.type) return
		Object.keys( this.struct ).forEach( key => {
			if(data.hasOwnProperty( key )) this.struct[key] = data[key]
		})
	}

	if(data) this.setFromData(data)
}

// TEXT
function AnswerStructText(data){
	this.struct = {
		type: "text",
		value: "",
	}

	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.struct.type) return
		Object.keys( this.struct ).forEach( key => {
			if(data.hasOwnProperty( key )) this.struct[key] = data[key]
		})
	}

	if(data) this.setFromData(data)
}

// NUMBER
function AnswerStructNumber(data){
	this.struct = {
		type: "number",
		value: 0,
		min: 0,
		max: 100,
		step: 1,
	}

	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.struct.type) return
		Object.keys( this.struct ).forEach( key => {
			if(data.hasOwnProperty( key )) this.struct[key] = data[key]
		})
	}

	if(data) this.setFromData(data)
}

// RANGE
function AnswerStructRange(data) {
	this.struct = {
		type: "range",
		min: 0,
		max: 100,
		step: 1,
	}

	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.struct.type) return
		Object.keys( this.struct ).forEach( key => {
			if(data.hasOwnProperty( key )) this.struct[key] = data[key]
		})
	}

	if(data) this.setFromData(data)
}
