const form = document.getElementById("regForm");
const cards = document.querySelector(".cards-container");
const live = document.getElementById("live");
const tableBody = document.querySelector("#summary tbody");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  // form inputs 
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const prog = document.getElementById("prog").value;
  const year = document.querySelector('input[name="year"]:checked');
  const interests = document.getElementById("interests").value;
  const photo = document.getElementById("photo").value;

  //  checks required fields
  if (!first || !last || !email || !prog || !year) {
    live.textContent = "Please fill in all required fields.";
    return;
  }

  //  card creation 
  const card = document.createElement("div");
  card.className = "card-person";
  card.innerHTML = `
    <img src="${photo || 'https://placehold.co/128'}" alt="Student Photo">
    <h3>${first} ${last}</h3>
    <p><strong>${prog}</strong> - Year ${year.value}</p>
    <p>${interests}</p>
    <button>Remove</button>
  `;
  cards.appendChild(card);

  // Add to table
 const row = document.createElement("tr");
row.innerHTML = `
  <td>${first} ${last}</td>
  <td>${prog}</td>
  <td>${year.value}</td>
  <td>${interests}</td>
`;
tableBody.appendChild(row);

  // Remove button
  card.querySelector("button").addEventListener("click", function () {
    card.remove();
    row.remove();
  });

  // reset form or list  and live updates 
  form.reset();
  live.textContent = "Student added!";
});
