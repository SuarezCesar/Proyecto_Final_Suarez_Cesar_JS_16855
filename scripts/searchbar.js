/*Searchbar que permite buscar a medida que se va escribiendo letra por letra. Dado que son cientos de habilidades hasta que no carga
todas las cards de la API no comienza su función correctamente. Por lo cual tiene una animación de loading para intentar darle un poco
más de tiempo de responder a la API.*/
$("#search").keyup(function (e) {
  let resPerks = JSON.parse(localStorage.getItem("perks"));
  let variable = $(e.target).val().toLowerCase();
  let dato = resPerks.filter((el) =>
    el.perk_name.toLowerCase().includes(variable)
  );
  $("#perksChild").empty();
  dato.forEach((perks) => {
    $("#perksChild").append(`<div class="card mb-3" style="max-width: 540px;">
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
});
