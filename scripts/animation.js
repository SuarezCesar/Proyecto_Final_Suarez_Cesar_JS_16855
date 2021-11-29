//Pequeña animación que se muestra al abrir el sitio por primera vez mientras cargan de fondo las cards iniciales.
if (sessionStorage.img) {
  $("#imgLoading").hide();
} else {
  $("#header, #main").hide();
  setTimeout(() => {
    $("#imgLoading").fadeOut();
    $("#header, #main").fadeIn(3000);
    sessionStorage.setItem("img", true);
  }, 3000);
}
