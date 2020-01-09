function NoteController(noteList){
  noteList = new BookNote();
  noteList.add('note 1');
  noteList.add('note 2');
  noteList.add('note 3');
  this.noteListView = new NoteListView(noteList);

}
NoteController.prototype = (function(){
  function updateElement(){
    var elem = document.getElementById('app');
    elem.innerHTML = this.noteListView.getHTML();
  }
  return{
    updateElement: updateElement
  }
})();