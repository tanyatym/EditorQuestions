function Question(){
	this.text = "Новый вопрос"
	this.answers = []
	this.anwersType = ""
	this.type = 'question'
	this.hasUserAnswer = false
	
}

function Answer(){
	this.text = "Новый ответ"
	
	
}

function QGroup(title){
	this.name = "Новая группа"
	this.type = 'group'
	this.collection = []
}
