const dialog = document.getElementById("joinDialog");
["openJoin","openJoin2"].forEach(id => document.getElementById(id)?.addEventListener("click", () => dialog.showModal()));
document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());

function filterTailors() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const specialty = document.getElementById("specialtyFilter").value.toLowerCase();
  const cards = [...document.querySelectorAll(".tailor-card")];
  let visible = 0;
  cards.forEach(card => {
    const text = `${card.dataset.name} ${card.dataset.city} ${card.dataset.specialty}`.toLowerCase();
    const match = (!query || text.includes(query)) && (!specialty || text.includes(specialty));
    card.hidden = !match;
    if (match) visible++;
  });
  document.getElementById("resultCount").textContent = `${visible} tailor${visible === 1 ? "" : "s"} found`;
}
document.getElementById("searchButton").addEventListener("click", filterTailors);
document.getElementById("searchInput").addEventListener("keydown", e => { if (e.key === "Enter") filterTailors(); });
document.getElementById("specialtyFilter").addEventListener("change", filterTailors);

document.getElementById("interestForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent("Tailor & co.Stitch — Registration interest");
  const body = encodeURIComponent(`Name: ${data.get("name")}\nContact: ${data.get("contact")}\nI am a: ${data.get("role")}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
  dialog.close();
});
