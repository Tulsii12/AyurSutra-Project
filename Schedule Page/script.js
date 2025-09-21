// Highlight selected time slot
const slots = document.querySelectorAll(".time-slots button");
slots.forEach((slot) => {
  slot.addEventListener("click", () => {
    slots.forEach((s) => s.classList.remove("active"));
    slot.classList.add("active");
  });
});
function selectTreatment(card) {
  // Remove selection from all cards
  document
    .querySelectorAll(".card")
    .forEach((c) => c.classList.remove("selected"));
  // Add selection to clicked card
  card.classList.add("selected");
}
