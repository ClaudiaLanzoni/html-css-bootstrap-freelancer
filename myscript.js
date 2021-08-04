console.log("L'elemento con l'ID jumbotron_section si è trasformato in una frase di testo");
document.getElementById("jumbotron_section").innerHTML="Questo era il Jumbotron adesso è solo una frase";

console.log("Creazione link che rimandi a jumbotron_section:")
document.write("<a href=#jumbotron_section>Clicca qui per tornare a Jumbotron section</a>");

document.write("<p>Paragrafo a fondo pagina</p>");

function AlertSuToggle() {
    alert("TOGGLE!!!");
  }

console.log("Questo elemento h1 della contact_section si è trasformato: " + document.getElementById("contact_h1").innerHTML);
document.getElementById("contact_h1").innerHTML="CIAO H1"
