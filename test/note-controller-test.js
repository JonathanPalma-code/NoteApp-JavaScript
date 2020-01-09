function testNoteController(){
  var noteList = new BookNote();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteList.list[0] === 'Favourite drink: Seltzer')
};

testNoteController();

function testHtmlConversion(){
    console.log('hello');
    var noteList = new BookNote();
    var noteController = new NoteController(noteList);
    var elem = { innerHTML: 'unchanged' };
    noteController.updateElement(elem);
    assert.isTrue(elem.innerHTML === '<ul><li><div>Favourite drink: seltzer</div></li></ul>')

}

testNoteController();
testHtmlConversion();