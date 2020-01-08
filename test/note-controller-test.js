function testNoteController(){
    var noteList = new BookNote();
    var noteController = new NoteController(noteList);

    assert.isTrue(noteList.list[0] === 'Favourite drink: seltzer')
   
};

testNoteController();