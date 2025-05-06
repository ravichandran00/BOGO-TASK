const radios = document.querySelectorAll('input[type=radio][name="unit"]');
const planBoxes = document.querySelectorAll(".plan-box");
const total = document.getElementById("total");

const prices = {
  1: "$10.00 USD",
  2: "$18.00 USD",
  3: "$24.00 USD",
};

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    planBoxes.forEach((box) => {
      const details = box.querySelector(".expandable");

      if (details) details.style.display = "none";
      box.style.border = "1px solid #ddd";
    });

    const selectedBox = radio.closest(".plan-box");
    const expandable = selectedBox.querySelector(".expandable");

    // Show selected details and apply active border to box
    if (expandable) expandable.style.display = "block";
    selectedBox.style.border = "2px solid #FF6B82";
    selectedBox.style.background = "#FFF9FA";

    total.textContent = prices[radio.value];
  });
});

document
  .querySelector('input[name="unit"]:checked')
  .dispatchEvent(new Event("change"));
