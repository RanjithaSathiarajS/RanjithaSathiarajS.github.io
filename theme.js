(function () {
  function updateBtn(t) {
    var b = document.querySelector(".theme-toggle");
    if (!b) return;
    b.textContent = t === "dark" ? "☀" : "☾";
    b.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  window.__toggleTheme = function () {
    var cur = document.documentElement.getAttribute("data-theme") || "light";
    var next = cur === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", next); } catch (e) {}
    document.documentElement.setAttribute("data-theme", next);
    updateBtn(next);
  };
  document.addEventListener("DOMContentLoaded", function () {
    var t = document.documentElement.getAttribute("data-theme") || "light";
    updateBtn(t);
    var b = document.querySelector(".theme-toggle");
    if (b) b.addEventListener("click", window.__toggleTheme);
  });
})();
