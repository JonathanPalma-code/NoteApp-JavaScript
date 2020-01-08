function NoteController(noteList){
  noteList = new BookNote();
  noteList.add('Favourite drink: seltzer');
  this.noteListView = new NoteListView(noteList);

}
NoteController.prototype = (function(){
  function updateElement(){
    var elem = document.getElementById('app');
    elem.innerHTML = this.noteListView.getHTML();
    console.log(elem);
  }
  return{
    updateElement: updateElement
  }
})();



// (function (exports){
//   function NoteController(){
//   };
//   NoteController.prototype.updateElement = function(){
//     var elem = document.getElementById('app')
//     elem.innerHTML = 'howdy';
//     console.log(elem);
//   }
//   exports.NoteController = NoteController;
// })(this);
