function Editor(){
	this.questionnaire = new GroupQuestions()

	function  addGroup(parentEl){
		if (!parentEl) parentEl = document.body

		var title = "";
		var template = document.querySelector('#group');

		var clone = template.content.cloneNode(true);

		parentEl.appendChild(clone);
	}

	function  addQuestion(parentEl){
		if (!parentEl) parentEl = document.body

		var title = "";
		var template = document.querySelector('#question');

		var clone = template.content.cloneNode(true);

		parentEl.appendChild(clone);
	}
}