var NoteBook = function(text){
    this.text = text;
    }
NoteBook.prototype = function(){
  function displayText(){
    return this.text;
  }
  return{
    displayText: displayText
  }
}()
    