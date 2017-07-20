
var list = data;

console.log(list);
/*
var newUrl = "pojo.biz";

window.location = newUrl;
*/
function initialize(){

  var monUl = document.createElement("ul");
  var monWrap = document.getElementById("table");
  monWrap.appendChild(monUl);

  for (var i = 0; i < data.length; i++) {

    //Optionnel : passage des données de l'utilisateur en variable.
    var id = data[i].id;
    var nom = data[i].nom;
    var prenom = data[i].prenom;
    var js = data[i].javascript;
    var fweb = data[i].fav_web;
    var wweb = data[i].fav_web_why;
    var fapp = data[i].fav_app;
    var wapp = data[i].fav_app_why;
    var bifa = data[i].before_ifa;
    var wifa = data[i].why_ifa;
    var mail = data[i].contact_mail;

    //Création de l'utilisateur dans la liste. Il est nécessaire d'utiliser
    //createElement afin d'éviter les erreurs de node.
    var element = document.createElement("li");
    element.innerHTML = nom + ' ' + prenom;
    element.className = "user"; //Classe de l'utilisateur.
    element.setAttribute("data-idEleve", id); //Id de l'utilisateur. Est le même que la description pour faciliter l'affichage.
    element.addEventListener("click", detectClick);
    monUl.appendChild(element); //Ajout de l'utilisateur à la suite des autres dans la div "liste".

  }
}

function detectClick(event){
  console.log(this);
  console.log(event);
  console.log(event.target);
  var myTarget = event.target;
	var eleveId = myTarget.getAttribute("data-idEleve");
console.log(eleveId);

  window.location = "profil.html" +'#'+ myTarget.getAttribute("data-idEleve") ;

}

  window.onload = initialize; //On appelle la fonction initialize au chargement de la page.
