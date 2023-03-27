var i=0,text1;
text1 = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ipsum ullam ducimus incidunt expedita, fugit veniam possimus libero obcaecati dolores nesciunt accusantium quas. Non reprehenderit est cum corrupti. Vero, cupiditate?......"

function ketik() {
  if(i<text1.length){
    document.getElementById("text1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(ketik,30);
  }
}
ketik();





  