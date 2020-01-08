function displayList(){
  var list = new BookNote();
  list.add("Academy");
  list.add("Makers");
  assert.isTrue(list.displayNotes()[0] == 'Academy');
  assert.isTrue(list.displayNotes()[1] == 'Makers');
}
displayList();
