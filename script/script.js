/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Création de l'object Contact
var contact = {
  init:function(prenom, nom){
    this.nom = nom ;
    this.prenom= prenom;
  },

  afficher: function(){
    var description = "Description du contact : [Prénom : " + this.prenom + "] [Nom : " + this.nom + "]";
    return description;
  }
};

// Tableau des contacts
var tableauContact = [];

// Création d'un contact
var contact1 = Object.create(contact);
contact1.init("Dereck","Tom");
tableauContact.push(contact1);

// Création d'un deuxième contact
var contact2 = Object.create(contact);
contact2.init("Michel","Bierrequejprefere");
tableauContact.push(contact2);

// afficher le menu et choix


do {

  console.log("Bienvenue dans les gestionnaire des contacts !");
  console.log("1 : Afficher la liste des contacts");
  console.log("2 : Créer un nouveau contact");
  console.log("3 : Quitter");
  var choix = Number(prompt("Votre choix (1, 2 ou 3)"));

  if(choix == 1) {
    tableauContact.forEach(function(contact) {
      console.log(contact.afficher());
    });
  }

  else if(choix == 2){
    var prenom = prompt("Ajoutez le prenom du nouveau contact");
    var nom = prompt("Ajoutez le prenom du nouveau contact");
    var contact3= Object.create(contact);
    contact3.init(prenom, nom);
    tableauContact.push(contact3);
    console.log("Nouveau contact ajouté");
  }

} while(choix !=3) {
  console.log("GoodBye");
}
