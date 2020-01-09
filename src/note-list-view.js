function NoteListView(text){
  this.text = text;
}
NoteListView.prototype = (function(){
  function getHTML(){
    var final = '';
    this.text.displayNotes().forEach(note => {
      if(note.length > 20){
        final += `<li><div>${note.slice(0,20)}...</div></li>`;
      }else{
        final += `<li><div>${note}</div></li>`;
      }
    });
    return `<ul>${final}</ul>`;

    // if(this.text.displayNotes().length != 0){
    //   final = `<li><div>${this.text.displayNotes()[0]}</div></li>`;
    //   for(count = 1; count < this.text.displayNotes().length; count++){
    //     var test = (`<li><div>${this.text.displayNotes()[count]}</div></li>`);
    //     final+= test;
    //   }
    //   return `<ul>${final}</ul>`;
    // }
  }
  return{
    getHTML: getHTML
  }
})();