// http://stackoverflow.com/questions/8146676/google-maps-api-v3-offset-panto-by-x-pixels

google.maps.Map.prototype.panToWithOffset = function(latlng, offsetX, offsetY) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function() {
        var proj = this.getProjection();
        var aPoint = proj.fromLatLngToContainerPixel(latlng);
        aPoint.x = aPoint.x+offsetX;
        aPoint.y = aPoint.y+offsetY;
        map.panTo(proj.fromContainerPixelToLatLng(aPoint));
    }; 
    ov.draw = function() {}; 
    ov.setMap(this); 
};

var latlng = new google.maps.LatLng(-34.397, 150.644);
var map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latlng
});

setTimeout(function() { map.panToWithOffset(latlng, 0, 150); }, 1000);

//////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////// 