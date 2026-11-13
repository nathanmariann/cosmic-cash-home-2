const modal = document.getElementById("modal");
const toast = document.getElementById("toast");
const modalTitle = document.getElementById("modalTitle");
const modalStory = document.getElementById("modalStory");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function openFeature(name, story) {
  modalTitle.textContent = name;
  modalStory.textContent = story || "FEATURE PREVIEW";
  modal.querySelector("#modalDescription").textContent =
    "This is part of the Cosmic Cash home-page concept. The screen layout is a visual prototype; this feature is not connected to a bank, payment network, credit bureau, or live financial data.";
  modal.hidden = false;
}

document.querySelectorAll("[data-feature]").forEach(button => {
  button.addEventListener("click", () => openFeature(button.dataset.feature, button.dataset.story));
});

document.getElementById("notificationsButton").addEventListener("click", () =>
  openFeature("App Notification Center", "SCRUM #21 · SPRINT 2"));
document.getElementById("settingsButton").addEventListener("click", () =>
  openFeature("Account & Updates", "SCRUM #16 · SPRINT 1"));
document.getElementById("moreButton").addEventListener("click", () =>
  showToast("More features are listed below the app screen."));
document.getElementById("homeNav").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({behavior:"smooth"});
  showToast("You're on the Home screen.");
});
document.getElementById("lockButton").addEventListener("click", () =>
  openFeature("App Lock", "SCRUM #TBD · HOME / LOCK"));

function closeModal() { modal.hidden = true; }
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOkay").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
