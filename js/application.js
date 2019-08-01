// Personnages
var random_personnages_array = ['Mario.png','Luigi.png','Peach.png','Daisy.png','Harmonie.png','Tanuki.png','PeachChat.png','Yoshi.png','Toad.png','KoopaTroopa.png','Maskass.png','Lakitu.png','Toadette.png','RoiBoo.png','BebeMario.png','BebeLuigi.png','BebePeach.png','BebeDaisy.png','BebeHarmonie.png','MarioMetal.png','PeachOrRose.png','Wario.png','Waluigi.png','DonkeyKong.png','Bowser.png','Skelerex.png','BowserJr.png','Skelbowser.png','Lemmy.png','Larry.png','Wendy.png','Ludwig.png','Iggy.png','Roy.png','Morton.png','InkF.png','InkG.png','Link.png','Villageois.png','Villageoise.png','Marie.png','Amiibo.png'];
var imagesPersonnage = 'images/Personnage/';
// Vehicules
var random_vehicules_array = ['Moto-15.png','Moto-14.png','Moto-13.png','Moto-12.png','Moto-11.png','Moto-10.png','Moto-09.png','Moto-08.png','Moto-07.png','Moto-06.png','Moto-05.png','Moto-04.png','Moto-03.png','Moto-02.png','Moto-01.png','Kart-22.png','Kart-21.png','Kart-20.png','Kart-19.png','Kart-18.png','Kart-17.png','Kart-16.png','Kart-15.png','Kart-14.png','Kart-13.png','Kart-12.png','Kart-11.png','Kart-10.png','Kart-09.png','Kart-08.png','Kart-07.png','Kart-06.png','Kart-05.png','Kart-04.png','Kart-03.png','Kart-02.png','Kart-01.png'];
random_vehicules_sans_kart_array= ['Moto-15.png','Moto-14.png','Moto-13.png','Moto-12.png','Moto-11.png','Moto-10.png','Moto-09.png','Moto-08.png','Moto-07.png','Moto-06.png','Moto-05.png','Moto-04.png','Moto-03.png','Moto-02.png','Moto-01.png'];
random_vehicules_sans_moto_array= ['Kart-22.png','Kart-21.png','Kart-20.png','Kart-19.png','Kart-18.png','Kart-17.png','Kart-16.png','Kart-15.png','Kart-14.png','Kart-13.png','Kart-12.png','Kart-11.png','Kart-10.png','Kart-09.png','Kart-08.png','Kart-07.png','Kart-06.png','Kart-05.png','Kart-04.png','Kart-03.png','Kart-02.png','Kart-01.png'];
var imagesVehicule = 'images/Vehicule/';
// Roues
var random_roues_array = ['Roues-21.png','Roues-20.png','Roues-19.png','Roues-18.png','Roues-17.png','Roues-16.png','Roues-15.png','Roues-14.png','Roues-13.png','Roues-12.png','Roues-11.png','Roues-10.png','Roues-09.png','Roues-08.png','Roues-07.png','Roues-06.png','Roues-05.png','Roues-04.png','Roues-03.png','Roues-02.png','Roues-01.png'];
var imagesRoue = 'images/Roue/';
// Voiles
var random_voiles_array = ['Voile-13.png','Voile-14.png','Voile-12.png','Voile-11.png','Voile-10.png','Voile-09.png','Voile-08.png','Voile-07.png','Voile-06.png','Voile-05.png','Voile-04.png','Voile-03.png','Voile-02.png','Voile-01.png'];
var imagesVoile = 'images/Voile/';

function getRandomPersonnage() {
    var num = Math.floor( Math.random() * random_personnages_array.length );
    var img = random_personnages_array[ num ];
    var imgStr = '<img src="' + imagesPersonnage + img + '" alt = "" class="imageResultat">';
    document.write(imgStr); document.close();
}

function getRandomVehicule() {
    var num = Math.floor( Math.random() * random_vehicules_array.length );
    var img = random_vehicules_array[ num ];
    var imgStr = '<img src="' + imagesVehicule + img + '" alt = "" class="imageResultat">';
    document.write(imgStr); document.close();
}

function getRandomRoue() {
    var num = Math.floor( Math.random() * random_roues_array.length );
    var img = random_roues_array[ num ];
    var imgStr = '<img src="' + imagesRoue + img + '" alt = "" class="imageResultat">';
    document.write(imgStr); document.close();
}

function getRandomVoile() {
    var num = Math.floor( Math.random() * random_voiles_array.length );
    var img = random_voiles_array[ num ];
    var imgStr = '<img src="' + imagesVoile + img + '" alt = "" class="imageResultat">';
    document.write(imgStr); document.close();
}

function getRandomVehiculeSansKart() {
    var num = Math.floor( Math.random() * random_vehicules_sans_kart_array.length );
    var img = random_vehicules_sans_kart_array[ num ];
    var imgStr = '<img src="' + imagesVehicule + img + '" alt = "" class="imageResultat">';
    document.write(imgStr); document.close();
}

function getRandomVehiculeSansMoto() {
    var num = Math.floor( Math.random() * random_vehicules_sans_moto_array.length );
    var img = random_vehicules_sans_moto_array[ num ];
    var imgStr = '<img src="' + imagesVehicule + img + '" alt = "" class="imageResultat">';
    document.write(imgStr); document.close();
}
