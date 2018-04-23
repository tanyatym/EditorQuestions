function Question(){
	this.type = "question"
	this.text = ""
	this.answerForm = null
	this.hasUserAnswer = false

}
function anserFormByType(type){
	switch (type){
		case "number": return new AnswerFormNumber()
		case "range": return new AnswerFormRange()
		case "list": return new AnswerFormList()
		default: return new AnswerFormText()
	}
}

function AnswerFormList() {
	this.type = "list"
	this.contentType = "text"
	this.list = []
	this.multyple = false
}
function AnswerFormRange() {
	this.type = "range"
	this.min = 0
	this.max = 100
	this.step = 1
}
function AnswerFormNumber(){
	this.type = "number"
	this.value = 0
}
function AnswerFormText(){
	this.type = "text"
	this.value = ""
}
 
function QGroup(title){
	this.name = "Новая группа"
	this.type = 'group'
	this.collection = []
}
