// function addElement () { 
//   var newElement = document.createElement("div")
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newElement.appendChild(newContent)
//   document.body.append(newElement)
// }

function addImages() {
  var images = document.querySelectorAll("img");

  for (var i=5; i < 67; i++) {
    var currentImage = images[i];
    // document.body.append(currentImage);
    document.getElementById("images").appendChild(currentImage);   
  }
}

function longImageString2() {
  var images = document.querySelectorAll("img");
  var imageString = ""
  for (var i=5; i < 67; i++) {
    var currentImage = images[i];
    imageString.concat(currentImage)

    if (i == 66) {
      console.log(imageString)
    }
  }
}
