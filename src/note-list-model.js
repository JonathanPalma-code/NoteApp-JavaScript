function BookNote(){
  this.list = [];
  this.id = 0;
}
BookNote.prototype = (function(){
  function add(text){
    this.list.push(new NoteBook(text, this.id));
    this.id ++;
  }
  function displayNotes(){
    return this.list;
  }
  return{
    add: add,
    displayNotes: displayNotes
  }
})()
