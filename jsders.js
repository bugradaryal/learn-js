function mrhba() 
{
    alert('Merhaba JavaScript');
}

function yazi(){
    document.getElementById("id1").innerHTML="Bu bir test yazısıdır.";
}

function Documentwr(){
    document.write("Merhaba JavaScript");
}

function Conslog(){
    console.log("Merhaba JavaScript");
}

function Topla(){
    var s1 = Number(document.getElementById("id2").value);
    var s2 = Number(document.getElementById("id3").value);
    var s3 = s1 + s2;
    alert(s3)
}

//yazım yorumu
/* yazım yorumu */ 


function ternary(){
    var s1 = Number(document.getElementById("id4").value);
    var sonuc = s1<10 ? "Değer 10 dan küçük" : "Değer 10 dan büyük";
    alert(sonuc)
}

/*
a == b	a ve b eşit mi?
a === b	a ve b değerleri ve değer türleri eşit mi?
*/

function tipbulma(){
    var xSayisi = 1453;
    alert(typeof xSayisi);
}

function fonksi(d1,d2){
    alert(fonktopla(d1,d2));
}
function fonktopla(d1,d2){
    return d1+d2;
    //return c# daki gibi çalışıyor!
}


function obje(){
    var araba = {marka:"Fiat", model:"500", renk:"beyaz"};
    alert(araba.marka);
}


function replace(){
    var metin = "Merhaba ben Ahmet Ahmet Daryal";
    alert(
        metin.replace("Ahmet", "Bugra")
        +"\n\n\n"+
        metin.replace(/Ahmet/g, "Bugra")
        );
}

function concat(){
    var metin = "Merhaba ben";
    var ismim = "Bugra Daryal";
    alert(metin.concat(" ",ismim));
}

function charat(){
    var metin = "Bugra Daryal";
    alert(metin.charAt(6));
}

function split(){
    var metin = "Bugra Daryal";
    alert(metin.split(" "));
    alert(metin.split("a"));
}
//////////////////////////////////////////////////////////////////
/*
 javaScript ile sonsuzluk-sınır değerini ifade etmek için 
 Infinity veya -Infinity anahtar kelimesi kullanılır.
*/
//////////////////////////////////////////////////////////////////
/*
NaN – Not a Number:

avaScript ile bir değişkenin sayı olup olmadığını NaN anahtar kelimesiyle 
öğrenebiliriz. Sayısal bir değer sayısal olmayan bir değerle işlem 
yapılırsa JavaScript NaN sonucunu verir. Değişkenin sayı olup olmadığını 
bulmak için isNaN fonksiyonu kullanılır.

  var x = 100 / "Yusuf";
  alert(isNaN(x));
*/
//////////////////////////////////////////////////////////////////

function date(){
    var tarih = new Date();
    alert
    (
        Date()
        +"\n\n"+
        tarih.getDate()
        +"\n\n"+
        tarih.getDay()
    );
    tarih.setFullYear(2001, 2, 25);
    alert(tarih);
}

function dizi(){
    var liste = ["Elma", "Armut", "Portakal"];
    alert
    (
        liste
        +"\n\n\n"+
        liste[1]
        +"\n\n\n"+
        liste.length
    );
}
/*
Dizi oluşturma:
var liste = new Array(); VEYA
var liste = [];
*/ 

function diziyiveritürüne(){
    var liste = ["Elma", "Armut", "Portakal"];
    alert(liste.toString());
    alert(liste.join(" / "));
}

function diziyeeklevesil(){
    var liste = ["Elma", "Armut", "Portakal"];
    delete liste[1];
    alert(liste);
    liste.splice(1, 0, "Muz", "Kivi");
    alert(liste);
}
/* 
Dizi arasında boşluk bırakmadan eleman silmek için splice fonksiyonu 
kullanılabilir.

  var liste = ["Elma", "Armut", "Portakal", "Muz", "Kivi"];
  alert(liste);
  liste.splice(1, 3);
  alert(liste);
*/

function Karşılaştırma_fonk(){
    var liste = [10, 100, 250, 30, 1, 45];
    liste.sort(function(a, b){return 40 - 100}); //sort:küçük büyük sırala
    alert(liste);
}

function Dizi_nesnesi_sırala(){
    var liste, i, listeUzunluk, metin="";
    liste = [
    {ad:"Elma", gram:750},
    {ad:"Armut", gram:1000},
    {ad:"Portakal", gram:800},
    {ad:"Muz", gram:1500},
    {ad:"Kivi", gram:350},
    {ad:"Karpuz", gram:500},
    {ad:"Çilek", gram:450}];
    listeUzunluk = liste.length;
  
    for(i = 0; i < listeUzunluk; i++) metin += liste[i].ad + " - " + liste[i].gram +" \n";
    alert(metin);
    liste.sort(function(a, b){return a.gram - b.gram});
    metin = "";
    for(i = 0; i < listeUzunluk; i++) metin += liste[i].ad + " - " + liste[i].gram +" \n";
    alert(metin);
}
/////////////////////////////////////////////////////////////
/*
JavaScript Türkçe sıralama:

JavaScript ASCII karakterleri dışındaki karakterleri sıralamaz.
JavaScript ile Türkçe sıralama yapmak için localeCompare fonksiyonu 
kullanılır.

  var liste = ["Elma", "Armut", "Portakal", "Karpuz", "Çilek"];
  liste.sort(function(a, b){return a.localeCompare(b)});
  alert(liste);
*/
/////////////////////////////////////////////////////////////
/*
Switch Case:

  var tarih = new Date();
  var gun = tarih.getDay();
  switch(gun) {
    case 0:
      alert("pazar");
    break;
    case 1:
      alert("pazartesi");
    break;
    case 2:
      alert("salı");
    break;
    case 3:
      alert("çarşamba");
    break;
    case 4:
      alert("perşembe");
    break;
    case 5:
      alert("cuma");
    break;
    case 6:
      alert("cumartesi");
    break;
    default:
      alert("henüz hafta sonu değil");
    break;
  }
*/
/////////////////////////////////////////////////////////////

/*
Constructor: 

    Nesne veri türünden bir değerin dizi olup olmadığını 
    öğrenmek için constructor özelliğini kullanabiliriz.
*/

function constructorr(){
    var liste = ["Elma", "Armut", "Portakal"];
    alert(isArray(liste));
}
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

/* 

Regular expression kullanımı:

/ifade/nitelik;
Örnek;

var aranan = /yusuf/i;
/yusuf/i düzenli bir ifadedir.

yusuf aranacak kelimedir.

i küçük büyük harfe duyarsız arama yapılacağını ifade eder.
*/

function search_regular(){
  var metin = "Merhaba BeN BuGrA";
  var sonuc1 = metin.search(/bugra/i);
  var sonuc2 = metin.replace(/ben/i, "sen");
  alert(sonuc1 + "\n\n" + sonuc2);
}

/*
i	Küçük büyük harf duyarsız arama yapar.
g	Metin veri türü içerisinde aranan tüm kelimeler üzerinde işlem yapar.
m	Çok satırlı arama yapar.


\d	Sayıları bul
\s	Boşluk karakterini bul
\b	Kelimenin başında veya sonunda bul
\uxxxx	Onaltılık sayı xxxx ile belirtilen Unicode karakterini bul


n+	En az bir n içeren herhangi bir kelime bul.
n*	Sıfır veya daha fazla n içeren herhangi bir kelime bul.
n?	Sıfır veya bir kez n‘yi içeren herhangi bir kelime bul.
*/

function test(){
  //test fonksiyonu düzenli ifade ile arama yapar.
  var sonuc = (/bugra/i).test("Merhaba ben BuGrA");
  alert(sonuc);
  //aynı şekilde exec fonksiyonuda aynu aramayı yapar kelime yoksa null değeri döner
}

/*
if-else
while
try-catch

c# da çalıştığı gibi çalışmaktadır

throw "hata mesajı" : özel hata oluşturur
*/

function debugr(){
  var a = 2;
  var b = 3;
  debugger;
  var c = a + b;
  console.log(c);
}

/*
use strict kullanımı :
JavaScript kodlarının katı kurallı olarak yorumlanması için kod veya fonksiyon başına “use strict”; yazmak yeterli olacaktır.

Katı kural tanımı kod başına yazılırsa tüm kodlar katı kurallı olarak çalışacaktır.
*/

function Usestrict(){
  "use strict";
  a = 2;
  b = 3;
  c = a + b;
  alert(c);  // Değişken oluşturulmadan kullanıldığından hata verir.
}

///////////////////////////////////////////////////////////////
/*
Neden use strict:

JavaScript katı kural tanımı güvenli kod yazmak için kullanılır.

Katı kural tanımı daha önceki hatalı kullanımın önüne geçer.

Örnek olarak JavaScript’te değişken adını yazarak bir değişken kullanabiliriz.

Ancak katı kural tanımı ile değişken oluşturmadan değişken kullanmak hata verecektir.
*/
///////////////////////////////////////////////////////////////
/*
NOT:
JavaScript değişkenleri esnektir. Bir değişken bir veri türünden başka veri 
türüne otomatik olarak dönüştürülür.

  var a = "Yusuf"; // a'nın veri türü string
  a = 5;           // a'nın veri türü number
*/
///////////////////////////////////////////////////////////////
/*
NOT:

Döngü dışında değişken oluşturmak ve değer atamak döngülerin daha hızlı çalışmasını sağlar.

  var liste = ["Elma", "Armut", "Portakal"];
  for(var i = 0; i < liste.length; i++) {
    alert(liste[i]);
  }
Yerine aşağıdaki gibi kullanmak döngünün her adımında dizi uzunluğu hesabı yapılmayacaktır ve daha hızlı çalışacaktır.

  var liste, i, listeUzunluk;
  liste = ["Elma", "Armut", "Portakal"];
  listeUzunluk = liste.length;
  for(i = 0; i < listeUzunluk; i++) {
    alert(liste[i]);
  }
*/
///////////////////////////////////////////////////////////////