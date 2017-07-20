var dataList = data;
var url = window.location;
var eleveId = url.hash;
console.log("je suis sur le profil de l'eleve avec l'id "+eleveId);

eleveId = eleveId.substring(1);
eleveId = parseFloat(eleveId);

var myIndex = dataList.findIndex(function(i){ return i.id === eleveId });

var monuser = dataList[myIndex];

var id = monuser.id;
var nom = monuser.nom;
var prenom = monuser.prenom;
var js = monuser.javascript;
var fweb = monuser.fav_web;
var wweb = monuser.fav_web_why;
var fapp = monuser.fav_app;
var wapp = monuser.fav_app_why;
var bifa = monuser.before_ifa;
var wifa = monuser.why_ifa;
var mail = monuser.contact_mail;


element = document.createElement("div");
element.id = id; //Id de la description. Est le même que l'utilisateur' pour faciliter l'affichage.
element.class= "infos"; //Classe de la description.
element.style= "background-color:lightgrey;" //Ne pas afficher la description.
element.innerHTML = '<img src="http://via.placeholder.com/100x120/ff3285" alt=""/><br/>'+
                    '<span> <u>Prénom :</u> ' + prenom + '</span><br/>'+
                    '<span> <u>Nom :</u> ' + nom + '</span><br/>'+
                    '<span> <u>Pratique du Javascript :</u> ' + js + '</span><br/>'+
                    '<span> <u>Site Web Favori :</u> ' + fweb + '</span><br/>'+
                    '<span> <u>Raison :</u> ' + wweb + '</span><br/>'+
                    '<span> <u>Application Favorite :</u> ' + fapp + '</span><br/>'+
                    '<span> <u>Raison :</u> ' + wapp + '</span><br/>'+
                    '<span> <u>Evènements avant l\'Ifa :</u> ' + bifa + '</span><br/>'+
                    '<span> <u>Pourquoi avoir choisi l\'Ifa :</u> ' + wifa + '</span><br/>'+
                    '<span> <u>Email :</u> ' + mail + '</span><br/>';
document.getElementById('description').appendChild(element); //Ajout de la description à la suite des autres dans la div "description".

/*
var i0 = dataList.findIndex(i => i.id === eleveId);
var i1 = dataList.findIndex(function(i){i.id === eleveId});
var i2 = dataList.map(function(e){return e.id;}).indexOf(eleveId);
//i2 = i2.inbdexOf(eleveId);

console.log("i0"+i0);
console.log("i1"+i1);
console.log("i2"+i2);
*/
/*
dataList.forEach(function(item){
  if(item.id === eleveId){
    console.log("Ok!");
    console.log(item);
  }else {
    console.log("Nay.");
  }
});
*/
