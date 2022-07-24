const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "assets/img/casaCampo.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "assets/img/casaPlaya.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Pieza en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src: "assets/img/casaCentro.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src: "assets/img/casaRodante.png",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src: "assets/img/depto.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "assets/img/mansion.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  // Limpiar Buscador
  let limpiarHtml = ()=> (llenadoHtml.innerHTML = "");

  // Llenar cards
  let llenadoHtml = document.querySelector(".propiedades");

  const rellenar = (arrayProp = propiedadesJSON) =>{
    limpiarHtml();
    for (let elemento of arrayProp ){
      htmlTexto = `<div class="propiedad"> 
      <div class="img" style="background-image: url(${elemento.src})"></div>
      <h5 class="mt-3">${elemento.name}</h5>
      <div class="d-flex justify-content-between mx-4">
      <p class="nHabit">Habitaciones: ${elemento.rooms}</p>
      <p class="metros">Metros: ${elemento.m}</p>
      </div>
      <p class="m-4">${elemento.description}</p>
      <button id="btn" class="btn-info my-3">Ver más</button>
      </div>`

      llenadoHtml.innerHTML += htmlTexto
    }
  }

  //Evento click
  let buscar = document.getElementById('btn');
  buscar.addEventListener('click', ()=>{
    let nHabit = document.getElementById('inputHabit').value;
    //parseInt(nhabit);
    //console.log(nHabit)

    let metrosMin = document.getElementById('metros-min').value;
    //parseInt(metros-min);
    //console.log(metros-min)

    let metrosMax = document.getElementById('metros-max').value;
    //parseInt(metros-max);
    //console.log(metros-max)

    if (nHabit != "" && metrosMin !="" & metrosMax !=""){
      let propiedadesFiltradas = propiedadesJSON.filter ((e)=> e.rooms >= nHabit && e.m >= metrosMin && e.m <= metrosMax);
      console.log(propiedadesFiltradas);
      rellenar(propiedadesFiltradas)

      let total = documet.getElementById('total')
      total.innerHTML = filtro.length
    }
    else{alert("Te faltaron datos!")    }


  })

  rellenar()