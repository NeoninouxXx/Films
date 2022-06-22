const formFilms = document.querySelector(".formFilms");
const filmListe = document.querySelector(".filmListe");
const tbody = document.querySelector(".tbody");
const container = document.querySelector(".alerte");

class Film {
  constructor(titre, acteur, année) {
    this.titre = titre;
    this.acteur = acteur;
    this.année = année;
  }
  adFilmToList(film) {
    const row = document.createElement("tr");
    row.innerHTML = ` <td>${this.titre}</td>
                      <td>${this.acteur}</td>
                      <td>${this.année}</td>
                      <td><button class="deleted">X</td>`;
    tbody.appendChild(row);
    return true;
  }
  clearField() {
    document.getElementById("titre").value = "";
    document.getElementById("acteur").value = "";
    document.getElementById("année").value = "";
  }
  deletedFilm(target) {
    if (target.className === "deleted") {
      target.parentElement.parentElement.remove();
    }
  }
}

formFilms.addEventListener("submit", (e) => {
  e.preventDefault();
  const titre = document.getElementById("titre").value;
  const acteur = document.getElementById("acteur").value;
  const année = document.getElementById("année").value;

  const film = new Film(titre, acteur, année);
  if (titre === "" || acteur === "" || année === "") {
    const alert = document.createElement(`div`);
    alert.innerHTML = `<p class="error"> Erreur de saissi </p>`;
    container.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
    return false;
  } else {
    film.adFilmToList(film);
    film.clearField();
    const alert = document.createElement(`div`);
    alert.innerHTML = `<p class="success"> Film ajouté avec sucess! </p>`;
    container.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
});

filmListe.addEventListener("click", (e) => {
  const filmDeleted = new Film();
  filmDeleted.deletedFilm(e.target);
});
