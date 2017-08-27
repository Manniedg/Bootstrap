function initMap() {
          var uluru = {lat: 14.152737, lng: 121.324239};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: uluru,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            draggable: false,
            disableDoubleClickZoom: true,
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });
}

$("nav").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});
