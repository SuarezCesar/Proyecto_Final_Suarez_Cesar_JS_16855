let baseCharsSelected = 0; // Variable bandera necesaria para la función clickOnBase.
let totalPrice = 0; // Acumulador total de dinero.
let totalHours = 0; // Acumulador total de horas.
let baseGamePrice = 669; //Precio del juego base. Actualizar si cambia de precio en Steam.

localStorage.clear(); /*El localstorage se reinicia con una recarga de la página debido a que cada calculo es único.
Sin embargo, el localstorage se usa para poder actualizar correctamente las variables dentro del modal final de resultado.
Sin este proceso el modal mostraria valores 0, 0, debido a que toma las variables como están inicializadas*/

/*Impresión de las cards correspondientes al juego base. No se pueden comprar por separado por lo cual tienen comportamiento de grupo.
Se anima con un mouseover para informar precio del bundle*/
for (const character of baseGameCharacters) {
  $("#cards")
    .append(`<div><div class="cardsBase ${character.bundle} m-3" id=1${character.id}>
  <img src= ${character.img} class="clickBase" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}" id='priceS'>Bundle price: $${baseGamePrice} </p></div></div>`);

  $(`.price${character.id}`).hide();

  $(`#1${character.id}`).mouseover(function () {
    $(`#${character.id}`).css("opacity", "0.3");
    $(`.price${character.id}`).show();
  });
  $(`#1${character.id}`).mouseout(function () {
    $(`#${character.id}`).css("opacity", "1");
    $(`.price${character.id}`).hide();
  });
}

/*Función de highlight grupal y suma/resta de costo para los personajes del juego base. No se fuerza a tener el juego base por defecto debido
a que puede utilizar la herramienta para calcular alguien que ya cuenta con el juego*/
$(".clickBase").on("click", clickOnBase);

function clickOnBase(e) {
  let personajeClickeado = baseGameCharacters.find(
    (personaje) => personaje.id == e.target.id
  );

  if (personajeClickeado.color == "colorPago") {
    $(".colorPago");
  }
  if (baseCharsSelected == 0) {
    totalPrice = totalPrice + baseGamePrice;
    baseCharsSelected = 1;
    $(".bundle").css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else {
    $(".bundle").css("box-shadow", "none");
    totalPrice = totalPrice - baseGamePrice;
    baseCharsSelected = 0;
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  }
}

//Impresión de los personajes exclusivamente pagos. Solo pueden adquirirse con dinero.
//Cuenta con la misma animación de mouseover que las cards anteriores solo que individual.
for (const character of paidOnlyCharacters) {
  $("#paidOnly").append(`<div><div class="cardsPaid m-3" id=2${character.id}>
  <img src= ${character.img} class="clickPaid" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}" id='priceS'>Price: $${character.price} </p></div></div>`);

  $(`.price${character.id}`).hide();

  $(`#2${character.id}`).mouseover(function () {
    $(`#${character.id}`).css("opacity", "0.3");
    $(`.price${character.id}`).show();
  });
  $(`#2${character.id}`).mouseout(function () {
    $(`#${character.id}`).css("opacity", "1");
    $(`.price${character.id}`).hide();
  });
}

//Función para sumar/restar cuando se hace click en los elementos deseados o que se desean remover.
$(".clickPaid").on("click", clickOnPaid);

function clickOnPaid(e) {
  let personajePagoClickeado = paidOnlyCharacters.find(
    (personaje) => personaje.id == e.target.id
  );
  if (personajePagoClickeado.selected == "0") {
    totalPrice = totalPrice + personajePagoClickeado.price;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    personajePagoClickeado.selected = "1";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else {
    $(e.target).css("box-shadow", "none");
    totalPrice = totalPrice - personajePagoClickeado.price;
    personajePagoClickeado.selected = "0";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  }
}

/*Impresión de las cards de los personajes mixtos. Estos pueden conseguirse jugando 23 horas (El tiempo que lleva conseguir
9000 de currency violeta llamado Iridiscent Shards) o pagando dinero por lo cual cuentan con una muestra de la opción, el html explica 
claramente que si se desea con horas se debe hacer un segundo click y el highlight cambiará a violeta. se mantiene la cohesión: 
amarillo = pago, violeta = horas, no marcado = no deseado*/
for (const character of grindCharacters) {
  $("#grindeable").append(`<div><div class="cardsPaid m-3" id=3${character.id}>
  <img src= ${character.img} class="clickGrind" id=${character.id} />
  <p class = "nombrePersonajes">  ${character.name} </p>
  <p class = "price${character.id}" id='priceS'>or Hours: ${character.hours}</p>
  <p class = "price${character.id}" id='priceS'>Price: $${character.price}</p></div></div>`);

  $(`.price${character.id}`).hide();

  $(`#3${character.id}`).mouseover(function () {
    $(`#${character.id}`).css("opacity", "0.3");
    $(`.price${character.id}`).show();
  });
  $(`#3${character.id}`).mouseout(function () {
    $(`#${character.id}`).css("opacity", "1");
    $(`.price${character.id}`).hide();
  });
}

$(".clickGrind").on("click", clickOnGrind);

function clickOnGrind(e) {
  let personajeGrindClickeado = grindCharacters.find(
    (personaje) => personaje.id == e.target.id
  );
  if (personajeGrindClickeado.selected == "0") {
    totalPrice = totalPrice + personajeGrindClickeado.price;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(221,227,61,0.75)");
    personajeGrindClickeado.selected = "1";
    localStorage.setItem("totalPrice", totalPrice);
    localStorageRefresh();
  } else if (personajeGrindClickeado.selected == "1") {
    totalPrice = totalPrice - personajeGrindClickeado.price;
    totalHours = totalHours + personajeGrindClickeado.hours;
    $(e.target).css("box-shadow", "1px 1px 15px 9px rgba(160, 44, 227,0.75)");
    personajeGrindClickeado.selected = "2";
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalHours", totalHours);
    localStorageRefresh();
  } else {
    $(e.target).css("box-shadow", "none");
    totalHours = totalHours - personajeGrindClickeado.hours;
    personajeGrindClickeado.selected = "0";
    localStorage.setItem("totalPrice", totalPrice);
    localStorage.setItem("totalHours", totalHours);
    localStorageRefresh();
  }
}
/*Modal final junto a su botón estilizado todo a estetica del juego con una función para recuperar el valor final
del localstorage y que muestre el calculo correcto y no 0, 0. Además se puede seguir calculando sobre el calculo
actual hasta que se refresca la página e inicia un nuevo localstorage*/
$("#botonModal").append(
  `<div>
      <button type='button' class="btn btn-warning btn-dark resultsButton" data-bs-toggle="modal" data-bs-target="#modalResults">
        <img src="imgHeader/iconPerks.png" class="iconModal">
        Sacrifice Souls to the Entity (Calculate Results)</button>
      </div>  

      <div class="modal fade" id="modalResults" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content result">
          <div class="modal-header">
          <img src="imgHeader/LogoResults.png" class="imgModal2">
          <h5 class="modal-title modal2">You will need the following to feed the entity...</h5>
          <button type="button" class="btn-close close2" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body modal2B">
          <p>You will have to spend <span id="finalPrice">${totalPrice}</span> pesos.</p>
          <p>You will have to run from the killers or kill for about <span id="finalHours">${totalHours}</span> hours.</p>
          <p>Dare to get into the fog?</p>
      </div>                                                        
    </div>`
);

function localStorageRefresh() {
  let priceTotal = localStorage.getItem("totalPrice");
  let finalHours = localStorage.getItem("totalHours");
  $("#finalPrice").html(priceTotal);
  $("#finalHours").html(finalHours);
}
