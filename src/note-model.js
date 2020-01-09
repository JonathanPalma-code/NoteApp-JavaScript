var NoteBook = function(text, id){
    this.text = text;
    this.id = id
    }
NoteBook.prototype = function(){
  function displayText(){
    return this.text;
  }
  return{
    displayText: displayText
  }
}()
    