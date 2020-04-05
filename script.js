const square = document.createElement('div');
let squareSize = 10;
let flag = true;

document.body.appendChild(square);

window.addEventListener('scroll', function() {

  if ((squareSize < window.innerHeight / 2) && flag)
    squareSize += 5;
  else {
     flag = false;
     // flag = !flag;
    squareSize -= 5;
    if (squareSize == 5)
      flag = !flag;
  }
  square.style.height = squareSize + 'px';
  square.style.width = squareSize + 'px';
});
