alert("WELCOME!"); //JavaScript statement
alert("This is my To do List.");

(function(){
  //variables
var list= document.getElementById('list'),
 workInput=document.getElementById("workInput"),
 btnNewWork=document.getElementById("btn-add");

 //function
 var addwork = function(){
   var work = workInput.value,

   newWork = document.createElement("li"),
   labl = document.createElement("label"),
   content = document.createTextNode (work);

   if (work === "") {
   workInput.setAttribute("placeholder", "Add valid work");
   workInput.ClassName= "error";
   return false;
   }

   //to place content inside the labl
    labl.appendChild(content);


    //add label to newWork
    newWork.appendChild (labl);

    //add new work
    list.appendChild(newWork);

    //to clean the add work after we add a new work
    workInput.value= "";

    //to delete the element, this means the element that is in function
    for (var i = 0; i <= list.children.length -1; i++) {
      list.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
      });
    }
 }

// para que despues de a;adir algo a mi lista regrese a Add Work
 var proveInput = function(){
  workInput.ClassName = "";
  workInput.setAttribute("placeholder", "Add Work");
 };

var deleteWork = function(){
  this.parentNode.removeChild(this);

};
 // event to execute functions
 //AddWork
 btnNewWork.addEventListener("click",addwork);

 //prove input (make sure is not empty)
 workInput.addEventListener("click", proveInput);

// to make the changes to id list even if we add more childrens
//delete elements from the list
 for (var i = 0; i <= list.children.length -1; i++) {
   list.children[i].addEventListener("click", deleteWork)
 }

// to save the info


}());
