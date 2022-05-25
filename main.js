function outputString(){
  const typedString = (document.getElementById("inputText").value);
  let ArrString = typedString.split('')
  document.getElementById("inputText").value = ''

  document.getElementById('symbols').innerHTML = '';

  let newArrStr = ArrString.map((el, i) => {
    const span = document.createElement('span');
    span.id = i;
    span.innerHTML = el

    const div = document.getElementById('symbols');
    div.appendChild(span)


    span.onmousedown = function(e) {
      span.style.position = 'absolute';
      moveAt(e);
      document.body.appendChild(span);
      span.style.zIndex = 1000;

      function moveAt(e) {
        span.style.left = e.pageX - span.offsetWidth / 2 + 'px';
        span.style.top = e.pageY - span.offsetHeight / 2 + 'px';
      }
      document.onmousemove = function(e) {
        moveAt(e);
      }
      span.onmouseup = function() {
        document.onmousemove = null;
        span.onmouseup = null;
      }
    }
  })

}

document.getElementById("printLine").onclick = outputString;
