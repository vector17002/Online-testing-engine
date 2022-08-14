// CRUD Logic
const questionOperations = {
    questions:[],
    getLength(){
        return this.questions.length;
    },
    add(questionObject){
        this.questions.push(questionObject);
    },
    countMark(){
        return this.questions.filter(question=>question.isMarked).length;
            // Marked Count (true)
    },
    countUnMark(){
        return this.questions.length - this.countMark();
    },
    
    toggleMark(id){
        //Flag Toggle (Inside the QuestionObject)
        const questionObject = this.searchById(id);
        if(questionObject){ // Truthy 
            questionObject.isMarked = !questionObject.isMarked;
        }
    },
    remove(){
        this.questions = this.questions.filter(question=>!question.isMarked)
    },
    searchById(id){
        return this.questions.find(question=>question.id == id);
    },
    sort(){

    },
    get(){

    }
}