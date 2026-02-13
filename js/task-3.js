const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", event => {
    const value = event.target.value.trim();
    if (value === "") {
        nameOutput.textContent = "Anonymous";
    }
    else {
        nameOutput.textContent = value;
    }
});
