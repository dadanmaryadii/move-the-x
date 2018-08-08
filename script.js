var currentPosition = 4;

function bodyOnKeyDown (event) {
  // Right -> ArrowRight
  // Left -> ArrowLeft
  // Up -> ArrowUp
  // Down -> ArrowDown

  var boxes = document.getElementsByClassName('box');

  var character = document.createTextNode('X');
  var newh1 = document.createElement('h1');
      newh1.appendChild(character);

  if (event.key === 'ArrowRight') {
    if (currentPosition !== 8) {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition + 1].appendChild(newh1);
      currentPosition = currentPosition + 1;
    }
  } else if (event.key === 'ArrowLeft') {
    if (currentPosition !== 0) {
      boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
      boxes[currentPosition - 1].appendChild(newh1);
      currentPosition = currentPosition - 1;
    }
  }
}
