function toggleBox(boxNumber) {
    const box = document.getElementById(`options${boxNumber}`);
    const allBoxes = document.querySelectorAll(".options");

    allBoxes.forEach(b => {
        if (b !== box) {
            b.style.display = "none";
            b.parentNode.classList.remove("active");
        }
    });

    if (box.style.display === "none" || !box.style.display) {
        box.style.display = "block";
        box.parentNode.classList.add("active");
    } else {
        box.style.display = "none";
        box.parentNode.classList.remove("active");
    }
}
