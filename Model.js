function Question(){
	this.type = "question"
	this.text = ""
	this.answerForm = null
	this.hasUserAnswer = false

}
function answerFormByType(type, data){
	console.log(data)
	switch (type){
		case "number": return new AnswerFormNumber(data)
		case "range": return new AnswerFormRange(data)
		case "list": return new AnswerFormList(data)
		default: return new AnswerFormText(data)
	}
}

function AnswerFormList(data) {
	this.type = "list"
	this.contentType = "text"
	this.list = []
	this.multyple = false

	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.type) return
		if(data.hasOwnProperty("multyple")) this.multyple = data.multyple 
		if(data.hasOwnProperty("contentType")) this.stcontentTypeep = data.contentType
		if(data.hasOwnProperty("list") && Array.isArray(data.list)) {
			this.list = []
			data.list.forEach(function(item){
				this.list.push(answerFormByType(this.type, item))
			})
		}  
	}
	if(data) this.setFromData(data)
}
function AnswerFormRange(data) {
	this.type = "range"
	this.min = 0
	this.max = 100
	this.step = 1
	
	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.type) return
		if(data.hasOwnProperty("min")) this.min = data.min 
		if(data.hasOwnProperty("max")) this.max = data.max 
		if(data.hasOwnProperty("step")) this.step = data.step 
	}
	if(data) this.setFromData(data)
}
function AnswerFormNumber(data){
	this.type = "number"
	this.value = 0
	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.type) return
		if(data.hasOwnProperty("value")){
			this.value = data.value
		} 
	}
	if(data) this.setFromData(data)
}
function AnswerFormText(data){
	this.type = "text"
	this.value = ""
	
	this.setFromData = function(data){
		if(typeof data !== "object" || data.type !== this.type) return
		if(data.hasOwnProperty("value")){
			this.value = data.value
		} 
	}
	if(data) this.setFromData(data)
}
 
function QGroup(title){
	this.name = "Новая группа"
	this.type = 'group'
	this.collection = []
}
