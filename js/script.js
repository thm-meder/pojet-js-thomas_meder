

      //Fonction qui initialise les deux listes (les utilisateurs et leurs descriptions).
      function initialize(){

        for (var i = 0; i < data.length; i++) {

          //Optionnel : passage des données de l'utilisateur en variable.
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
          var element = document.createElement("div");
          element.id = i; //Id de l'utilisateur. Est le même que la description pour faciliter l'affichage.
          element.class = "user"; //Classe de l'utilisateur.
          element.innerHTML = '<div onClick="activation('+i+')"><span>' + nom + ' ' + prenom + '</span></div><br/>';
          document.getElementById('table').appendChild(element); //Ajout de l'utilisateur à la suite des autres dans la div "liste".

          //Création de la description de l'utilisateur dans une autre div.
          element = document.createElement("div");
          element.id = i; //Id de la description. Est le même que l'utilisateur' pour faciliter l'affichage.
          element.class= "infos"; //Classe de la description.
          element.style= "display:none;" //Ne pas afficher la description.
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

        }
      }

      //Fonction qui va afficher la description de l'utilisateur qur lequel on va cliquer.
      //Appelée grâce au onClick du bouton (voir ligne XXX)
      function activation(id)
      {
          var div = document.getElementById("description").children;
          for (var i = 0; i < div.length; i++) {
            if(i == id){
              div[i].style = "display:block; background-color: lightgrey; padding: 10px;"; //Si l'id convient, on affiche.
            } else {
              div[i].style = "display:none; background-color: transparent;"; //Si l'id ne convient pas, on fait disparaître.
            }
          }
      }


      function displayForm(){
        var div = document.getElementById("description").style = "display:block;";
      }


    window.onload = initialize; //On appelle la fonction initialize au chargement de la page.
