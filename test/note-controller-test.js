function testNoteController(){
  var noteList = new BookNote();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteList.list[0].text === 'Favourite drink: seltzer')
}

function testHtmlConversion(){
    var noteList = new BookNote();
    var noteController = new NoteController(noteList);
    var elem = { innerHTML: 'unchanged' };
    noteController.updateElement(elem);
    assert.isTrue(elem.innerHTML === "<ul><li><div><a href='#notes/0'>Favourite drink: sel...</a></div></li><li><div><a href='#notes/1'>Favourite food: pest...</a></div></li></ul>")

}

testNoteController();
testHtmlConversion();