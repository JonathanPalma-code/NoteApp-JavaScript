function NoteListView(text){
  this.text = text;
}
NoteListView.prototype = (function(){
  function getHTML(){
    if(this.text.displayNotes().length != 0){
      final = `<li><div>${this.text.displayNotes()[0]}</div></li>`;
      for(count = 1; count < this.text.displayNotes().length; count++){
        var test = (`<li><div>${this.text.displayNotes()[count]}</div></li>`);
        final+= test;
      }
      console.log(`<ul>${final}</ul>`);
      return `<ul>${final}</ul>`;
    }
  }
  return{
    getHTML: getHTML
  }
})();