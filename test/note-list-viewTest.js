function testNoteListView() {
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList);
  noteList.add('pesto');
  noteList.add('seltzer');
  var result = noteListView.getHTML();
  let expected = '<ul><li><div>pesto</div></li><li><div>seltzer</div></li></ul>';
  assert.isTrue(result === expected);
}

function shortensLongNote(){
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList);
  noteList.add('Hello I very long note');
  var result = noteListView.getHTML();
  let expected = '<ul><li><div>Hello I very long no...</div></li></ul>';
  assert.isTrue(result === expected);
}
testNoteListView();
shortensLongNote();
