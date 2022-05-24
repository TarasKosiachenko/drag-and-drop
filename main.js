function outputString(){

  const typedString = (document.getElementById("inputText").value);
  let ArrString = typedString.split('')

  document.getElementById('symbols').innerHTML = '';

  let newArrStr = ArrString.map((el, i) => {
    const p = document.createElement('p');
    p.id = i;
    p.innerHTML = el

    p.addEventListener('mousedown',  () => {


      document.addEventListener('mousemove', function(e){
          document.getElementById(i).style.transform = 'translateY('+(e.clientY)+'px)';
          document.getElementById(i).style.transform += 'translateX('+(e.clientX)+'px)';
        });

    });


    const div = document.getElementById('symbols');
    div.appendChild(p)
  })

}

document.getElementById("printLine").onclick = outputString;



// document.addEventListener('mousemove', function(ev){
//   document.getElementById('1').style.transform = 'translateY('+(ev.clientY-55)+'px)';
//   document.getElementById('1').style.transform += 'translateX('+(ev.clientX-10)+'px)';
// },false);