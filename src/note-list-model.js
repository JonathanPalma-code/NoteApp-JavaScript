// (function (exports){
//   var List = function(){
//     emptylist = [];
//   }
//   List.prototype.add = function(text){
//     emptylist.push(text);
//   } 
//   List.prototype.showList = function(){
//     return emptylist; 
//   }
//   exports.List = List;
// })(this);

function BookNote(){
  this.list = [];
}
BookNote.prototype = (function(){
  function add(text){
    this.list.push(text);
  }
  function displayNotes(){
    return this.list;
  }
  return{
    add: add,
    displayNotes: displayNotes
  }
})()
