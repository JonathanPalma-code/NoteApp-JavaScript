function testSingleNote(){
  var noteBook = new NoteBook('Favourite drink: seltzer', 0);
  var singleNoteView = new SingleNoteView(noteBook);
  var result = singleNoteView.getHTML();
  let expected = '<div>Favourite drink: seltzer</div>'
  assert.isTrue(result === expected);
}
testSingleNote();