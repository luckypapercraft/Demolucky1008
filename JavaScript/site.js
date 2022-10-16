// Kayma
$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {
        $('#yukari').fadeIn(200);
    } else {
        $('#yukari').fadeOut(200);
    }
});

// Tıklama
$('#yukari').on('click', function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});

//contact
function gotowhatsapp() {

    var name = document.getElementById("name").value;
    var soyname = document.getElementById("soyname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/+9940702869086?text="
        + "Adı: " + name + "%0a"
        + "Soy Adınız: " + soyname + "%0a"
        + "E-Posta: " + email + "%0a"
        + "Mesajınız: " + message;

    window.open(url, '_blank').focus();
}
//checkout
function gotowhatsapp2() {

    var name = document.getElementById("spname").value;
    var soyname = document.getElementById("spsoyname").value;
    var email = document.getElementById("spemail").value;
    var spnumber = document.getElementById("spnumber").value;
    var figur = document.getElementById("spfigur").value;
    var promo = document.getElementById("promo").value;
    var spaddress = document.getElementById("spaddress").value;


    var url = "https://wa.me/+9940505961256?text="
        + "Adı: " + name + "%0a"
        + "Soy Adınız: " + soyname + "%0a"
        + "E-Posta: " + email + "%0a"
        + "Promo: " + promo + "%0a"
        + "Adres: " + spaddress + "%0a"
        + "Sayı: " + spnumber + "%0a"
        + "Figür: " + figur;

    window.open(url, '_blank').focus();
}








