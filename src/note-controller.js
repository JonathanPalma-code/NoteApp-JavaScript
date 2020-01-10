function NoteController(noteList){
  noteList.add('note 1');
  noteList.add('note 2');
  noteList.add('note 3');
  this.noteList = noteList
  this.noteListView = new NoteListView(noteList);
}
NoteController.prototype = (function(){
  function updateElement(){
    var elem = document.getElementById('app');
    elem.innerHTML = this.noteListView.getHTML();
  }

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  };

  function showNote(id) {
    var div = document.getElementById("note")
    console.log(note.noteList.list)
    var selectedNote = note.noteList.list.find(note => note.id == id)
    console.log(selectedNote)
    div.innerHTML = selectedNote.text;
  };

  return{
    updateElement: updateElement,
    makeUrlChangeShowNoteForCurrentPage: makeUrlChangeShowNoteForCurrentPage
  }
})();
