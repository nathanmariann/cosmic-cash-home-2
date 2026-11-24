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
  modalStory.textContent = (story || "FEATURE PREVIEW").replaceAll(" | ", "\n");
  modal.querySelector("#modalDescription").textContent =
    "This is part of the Cosmic Cash home-page concept. The screen layout is a visual prototype; this feature is not connected to a bank, payment network, credit bureau, or live financial data.";
  modal.hidden = false;
}

document.querySelectorAll("[data-feature]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.route) {
      if (button.dataset.route === "lock") { lockNav.scrollIntoView({block: "center"}); lockScreen.hidden = false; unlockButton.focus(); }
      else window.location.href = button.dataset.route;
      return;
    }
    if (button.dataset.feature === "Credit Score" && button.classList.contains("quick-action")) { window.location.href = "credit.html"; return; }
    if (button.dataset.feature === "Disposable Income Budget") { window.location.href = "budget.html"; return; }
    if (["Cumulative Expenses", "Expenses"].includes(button.dataset.feature)) { window.location.href = "expenses.html"; return; }
    if (button.classList.contains("analytics-heading")) { window.location.href = "overview.html"; return; }
    if (button.dataset.feature === "Cumulative Income") { window.location.href = "income.html"; return; }
    if (button.dataset.feature === "Transfer Money") { window.location.href = "transfer.html"; return; }
    if (button.id === "billPayNav") { window.location.href = "bills.html"; return; }
    if (button.id === "cardsNav") { window.location.href = "authorizations.html"; return; }
    openFeature(button.dataset.feature, button.dataset.story);
  });
});

document.getElementById("notificationsButton").addEventListener("click", () => { window.location.href = "notifications.html"; });
document.getElementById("settingsButton").addEventListener("click", () => { window.location.href = "settings.html"; });
document.getElementById("shoppingButton").addEventListener("click", () => { window.location.href = "shopping.html"; });
document.getElementById("saturnButton").addEventListener("click", event => {
  event.preventDefault();
  openFeature("Cosmic Cash / Saturn", "SCRUM #40 · SPRINT 4 | SCRUM #64 · SPRINT 4");
});
const lockScreen = document.getElementById("lockScreen");
const lockNav = document.getElementById("lockNav");
const unlockButton = document.getElementById("unlockButton");
let lockAfterPopup = false;
lockNav.addEventListener("click", () => {
  lockAfterPopup = true;
  openFeature("Lock App", "SCRUM #63 · SPRINT 3");
});
unlockButton.addEventListener("click", () => {
  lockScreen.hidden = true;
  lockNav.focus();
});

function closeModal() {
  modal.hidden = true;
  if (lockAfterPopup) {
    lockAfterPopup = false;
    lockScreen.hidden = false;
    unlockButton.focus();
  }
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOkay").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
