function testNoteListView() {
  var noteList = new BookNote();
  var noteListView = new NoteListView(noteList);
  noteList.add('Favourite food: pesto');
  noteList.add('Favourite drink: seltzer');
  var result = noteListView.getHTML();
  let expected = '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>';
  assert.isTrue(result === expected);
};
testNoteListView();