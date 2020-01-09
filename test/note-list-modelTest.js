function displayList(){
  var list = new BookNote();
  list.add("Academy");
  list.add("Makers");
  assert.isTrue(list.displayNotes()[0].text == 'Academy');
  assert.isTrue(list.displayNotes()[1].text == 'Makers');
  assert.isTrue(list.displayNotes()[0].id== 0);
  assert.isTrue(list.displayNotes()[1].id == 1);
}
displayList();
