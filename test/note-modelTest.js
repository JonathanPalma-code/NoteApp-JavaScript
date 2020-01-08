function TestDisplayText(){
  var notebook = new NoteBook("I love javascript");
  assert.isTrue(notebook.displayText() == "I love javascript");
}
TestDisplayText();
