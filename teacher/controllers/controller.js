// Input and Output
window.addEventListener('load', init);
function init(){
    bindEvents();
    printCount();
}
function bindEvents(){
    document.getElementById('add').addEventListener('click', addQuestion);
    document.getElementById('score').addEventListener('click',scorerange);
    document.getElementById('delete').addEventListener('click', deletePerm);
    document.getElementById('score').value= 0;
}

function deletePerm(){
    questionOperations.remove();
    printTable();
    printCount();
    
    
}

function printTable(){
    document.getElementById('questions').innerHTML='';
    questionOperations.questions.forEach(printQuestion);
}

function addQuestion(){
    // read all fields
    const fields = ["id", "name", "optiona","optionb","optionc","optiond","score","rightans"];
    const questionObject = {}; // Create Object
    for(let  i= 0 ; i<fields.length;i++){
        questionObject[fields[i]] = document.getElementById(fields[i]).value ;
    }
    questionObject.isMarked = false;
    questionOperations.add(questionObject);
    document.getElementById('score').value= 0;
    scorerange();
    printQuestion(questionObject);
    
    
    clearall(fields);
    printCount();
    
    
}

function printCount(){
    const total = questionOperations.getLength();
    const mark = questionOperations.countMark();
    const unMark = questionOperations.countUnMark();
    document.getElementById('total').innerText = total;
    document.getElementById('mark').innerText = mark;
    document.getElementById('unmark').innerText = unMark;
}

function markDelete(){
    // where i click (On Which Row)
    const icon = this;
    const qid = icon.getAttribute('qid');
    questionOperations.toggleMark(qid);
    const tr = this.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    printCount();
 // css  (toggle)
}
function createIcon(fn, id){
    // <i class="fa-solid fa-trash-can"></i>
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-trash-can';
    icon.addEventListener('click',fn);
    icon.setAttribute("qid",id); // Custom Attribute
    return icon;
}

function printQuestion(questionObject){
// Row, Cells, Fill Data (Object)
const tbody = document.getElementById('questions');
const tr = tbody.insertRow();
var index = 0;
for(let key in questionObject){
    if(key == 'isMarked'){
        continue;
    }
    tr.insertCell(index).innerText = questionObject[key];
    index++;
}
tr.insertCell(index).appendChild(createIcon(markDelete, questionObject.id));
}

function clearall(arr){
    for(let i=0;i<arr.length;i++){
      if(arr[i] === 'score'){
          continue;
      }
      document.getElementById(arr[i]).value='';
    }
}

function scorerange(){
    document.getElementById('scorerange').innerText = document.getElementById('score').value;
}