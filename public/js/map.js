var mymap = L.map('mapid').setView([-33.9524484, 18.5309409, 9.88], 10);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=hBayp6753sAz4cE22Fvu', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(mymap);
var marker1 = L.marker([-33.9734624, 18.5428407]).addTo(mymap);
marker1.bindPopup("<b>Johencar Transport and Recycling cc.</b><br>32 Dynamo Way, Blackheath, Cape Town, 7580").openPopup();
var marker2 = L.marker([-33.9456014, 18.5366871]).addTo(mymap);
marker2.bindPopup("<b>Recycle 1st</b><br>unit 5, 22 Losack Ave, Epping, Cape Town, 7475").openPopup();
var marker3 = L.marker([-33.9412816, 18.5207197]).addTo(mymap);
marker3.bindPopup("<b>Myplas (Pty) Ltd</b><br>6 Mill Rd, Bellville South, Cape Town, 7530").openPopup();
var marker4 = L.marker([-33.970865, 18.5276349]).addTo(mymap);
marker4.bindPopup("<b>Biogreen Cape</b><br>4 Luxmi St, Sand Industria, Cape Town, 7767").openPopup();
var marker5 = L.marker([-33.9195729, 18.4259962]).addTo(mymap);
marker5.bindPopup("<b>L&B RECYCLING</b><br>Tide St, Woodstock, Cape Town, 7925").openPopup();
var marker6 = L.marker([-34.0037386, 18.4438764]).addTo(mymap);
marker6.bindPopup("<b>Retreat Recycling And Waste Drop-off</b><br>61 10th Ave, Cafda Village, Cape Town, 7965").openPopup();
var marker7 = L.marker([-33.98392, 18.5137102]).addTo(mymap);
marker7.bindPopup("<b>Waste Carriers</b><br>Weltevreden Rd, Philippi, Cape Town, 7785").openPopup();
var marker8 = L.marker([-33.933626, 18.4032583]).addTo(mymap);
marker8.bindPopup("<b>Clearer Conscience</b><br>Mill St, Gardens, Cape Town, 8001").openPopup();