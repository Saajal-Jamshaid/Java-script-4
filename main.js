 var compteur = 0;
 var compteur2 = 0;

 var MaDiv = document.getElementById("Methode2");
 MaDiv.addEventListener("click", UneProcedureQuiChangeLeText);

 var MaDiv = document.getElementById("Methode3");
 MaDiv.addEventListener("mouseover", UneProcedureQuiSurvole;

 var MaDiv = document.getElementById("Methode2");
 MaDiv.addEventListener("keydown", UneProcedureQuiEcrit);

 funtion UneProcedureQuiEcrit(evenement)  {
    evenement.target.innerHTML = "On a appuyè sur : "+evenement.key;
 }

 funtion UneProcedureQuiChangeLeText(evenement) {
    compteur++ 
    evenement.target.innerHTML = "On m'a cliqué desus "+compteur" fois";

 }

 function UneProcedureQuiSurvole(evenement) {
    compteur++
    evenement.target.innerHTML = "On m'a survollé"+compteur2+"  fois";
 }