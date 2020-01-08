function NoteController(){
}
NoteController.prototype = (function(){
  function updateElement(){
    var elem = document.getElementById('app')
    elem.innerHTML = 'howdy';
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
