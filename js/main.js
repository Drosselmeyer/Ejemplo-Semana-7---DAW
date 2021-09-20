(function init()
{
  /*
  var conta = document.getElementsById("contabilidad");
  var admon = document.getElementsById("administracion");
  var venta = document.getElementsById("venta");
  */
  var cajas = document.getElementsByClassName("departamento");
  var enlaces = ["img/01.jpg","img/02.jpg","img/03.jpg"];

  for(let i=0; i<3; i++)
  {
    let imagen = document.createElement('img');

    cajas[i].style.height = "100px";
    cajas[i].style.width = "200px";
    cajas[i].style.border = '2px solid black';
    cajas[i].style.backgroundColor = 'green';
    cajas[i].style.display = "inline-block"
    cajas[i].style.position = "relative";

    imagen.setAttribute("src",enlaces[i]);
    imagen.style.height = "80px";
    imagen.addEventListener("mouseover",mostrarInfo);
    imagen.addEventListener("mouseout",salirInfo)
    cajas[i].appendChild(imagen);

    
  }

  function mostrarInfo(){
    console.log("Estoy sobre la imagen");
  }

  function salirInfo(){
    console.log("Estoy fuera de la imagen");
  }
  
})()