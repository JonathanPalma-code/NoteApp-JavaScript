function SingleNoteView(note){
  this.note = note;
}
SingleNoteView.prototype = (function(){
  function getHTML(){
    return `<div>${this.note.text}</div>`;
  }
  return{
    getHTML: getHTML
  }
})()