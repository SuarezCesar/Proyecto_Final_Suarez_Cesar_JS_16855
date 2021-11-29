/*Llamado, carga e impresión de una API de DBD que cuenta con todas las habilidades del juego. La API no es oficial pero se
actualiza con regularidad lo cual hace que esta página siempre esté al día o casi al día con el contenido del juego*/
let Perks = [];

$("#perksChild").append(
  $("<img>").attr({ src: "../imgHeader/loading.gif", id: "loading" })
);

setTimeout(() => {
  $.ajax({
    type: "GET",
    url: "https://dbd-api.herokuapp.com/perks?lang=en",
    dataType: "json",
    success: function (data) {
      data.forEach((perks) => {
        Perks.push(perks);
        localStorage.setItem("perks", JSON.stringify(Perks));
        $("#perksChild")
          .append(`<div class="card mb-3" style="max-width: 540px;">
                                  <div class="row g-0">
                                    <div class="col-md-4">
                                      <img src=${perks.icon} class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h3 class="card-title">${perks.perk_name}</h3>
                                        <p class="card-text">${perks.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                  `);
      });
      $("#loading").css("display", "none");
    },
  });
}, 4000);
