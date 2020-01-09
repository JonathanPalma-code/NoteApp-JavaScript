function testNoteListView() {
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList);
  noteList.add('pesto');
  noteList.add('seltzer');
  var result = noteListView.getHTML();
  let note1 = "<li><div><a href='#notes/0'>pesto</a></div></li>"
  let note2 = "<li><div><a href='#notes/1'>seltzer</a></div></li>"
  let expected = `<ul>${note1 + note2}</ul>`
  assert.isTrue(result === expected);
}

function shortensLongNote(){
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList);
  noteList.add('Hello I very long note');
  var result = noteListView.getHTML();
  let expected = "<ul><li><div><a href='#notes/0'>Hello I very long no...</a></div></li></ul>";
  assert.isTrue(result === expected);
}
testNoteListView();
shortensLongNote();
