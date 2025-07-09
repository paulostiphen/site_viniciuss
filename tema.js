const toggleThemeBtn = document.getElementById("toggleTheme");

// Aplica o tema salvo ao carregar
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  if (toggleThemeBtn) toggleThemeBtn.textContent = "☀️";
}

// Botão de alternância de tema
if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      toggleThemeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleThemeBtn.textContent = "🌙";
    }
  });
}
