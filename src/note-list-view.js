function NoteListView(list){
  this.list = list;
}
NoteListView.prototype = (function(){
  function getHTML(){
    var final = '';
    this.list.displayNotes().forEach(note => {
      if(note.text.length > 20){
        final += `<li><div>${note.text.slice(0,20)}...</div></li>`;
      }else{
        final += `<li><div>${note.text}</div></li>`;
      }
    });
    return `<ul>${final}</ul>`;
  }
  return{
    getHTML: getHTML
  }
})();