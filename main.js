function hinzufuegen() {
  var eingabe = document.getElementById("input").value;
  var td = document.createElement("p");
  td.textContent = eingabe;
  document.getElementById("toDoContainer").appendChild(td);
  //eingabefeld Clearen
  document.getElementById("input").value = "";
  // rem bei click
  td.addEventListener("click", function () {
    if(approve() == true) {
      this.remove()
      alert("Der Eintrag wurde erfolgreich gelöscht")
    } else {
      alert("Eintrag wurde nicht gelöscht!")
    }
  });
}


function approve() {
  console.log("TT")
  var abfrage = confirm("Willst du es wirklich löschen?")
  if(abfrage) {
    console.log("wahr")
    return true
  } else {
    return false
  }
}