const toggleButton = document.getElementById("toggle");
const statusText = document.getElementById("status");

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    statusText.textContent = "Current mode: Dark";
  } else {
    document.body.classList.remove("dark");
    statusText.textContent = "Current mode: Light";
  }
  localStorage.setItem("theme", theme);
}

toggleButton.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

console.log("script.js loaded");
