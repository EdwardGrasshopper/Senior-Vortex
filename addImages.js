// function addElement () { 
//   var newElement = document.createElement("div")
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newElement.appendChild(newContent)
//   document.body.append(newElement)
// }

function addImage2() {
  var images = document.querySelectorAll("img");

  for (var i=5; i < 67; i++) {
    var currentImage = images[i];
    document.body.append(currentImage);
  }
}
