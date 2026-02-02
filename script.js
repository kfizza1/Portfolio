/* ===============================
   PRELOADER
================================ */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hide");
});


/* ===============================
   MAIN SCRIPT
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- ELEMENTS ---------- */
  const closeBtn = document.getElementById("close");
  const menuBtn = document.getElementById("menu");
  const sidebarMenu = document.querySelector(".menu");
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");
  const horizontal = document.getElementById("horizontal");
  const nameHeading = document.querySelectorAll("h1");

  const form = document.getElementById("form");
  const hiremeBtn = document.getElementById("hireme");
  const closeFormBtn = document.getElementById("closeForm");

  const usernameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const darkModeBtn = document.getElementById("dark");


  /* ---------- H1 RELOAD ---------- */
  nameHeading.forEach((heading) => {
    heading.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.reload();
    });
  });


  /* ---------- SIDEBAR CONTROLS ---------- */
  closeBtn.addEventListener("click", () => {
    sidebarMenu.style.transform = "translateX(-100%)";
    sidebarMenu.style.transition = "transform 0.3s ease-in-out";

    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    horizontal.style.display = "block";

    if (window.innerWidth <= 480) {
      sidebarMenu.style.transform = "translateX(-100%)";
      sidebar.style.width = "100px";
      content.style.marginLeft = "10px";
      content.style.paddingLeft = "100px";
    }
    else{
    sidebar.style.width = "130px";
    content.style.marginLeft = "30px";
    content.style.paddingLeft = "130px";
    }
  });

  menuBtn.addEventListener("click", () => {
    sidebarMenu.style.transform = "translateX(0)";
    sidebarMenu.style.transition = "transform 0.3s ease-in-out";

    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
    horizontal.style.display = "none";
    if (window.innerWidth <= 480) {
      sidebarMenu.style.transform = "translateX(10%)";
      sidebar.style.width = "100px";
      sidebarMenu.style.marginTop = "40px";
      content.style.marginLeft = "10px";
      content.style.paddingLeft = "100px";
    }
else{
    sidebar.style.width = "200px";
    content.style.marginLeft = "20px";
    content.style.paddingLeft = "220px";
}
  });


  /* ---------- CONTACT FORM ---------- */
  closeFormBtn.addEventListener("click", () => {
    form.style.display = "none";
    form.style.opacity = "0";
    content.style.opacity = "1";
  });

  hiremeBtn.addEventListener("click", () => {
    form.style.display = "flex";
    form.style.opacity = "1";
    content.style.opacity = "0.5";

    if (
      emailInput.value.includes("@") &&
      usernameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    ) {
      form.reset();
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
      form.style.display = "none";
      form.style.opacity = "0";
      content.style.opacity = "1";
    });
  });


  /* ---------- DARK MODE ---------- */

  // LOAD SAVED THEME ON PAGE LOAD
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  document.body.style.color = "#ccc5b9";

  darkModeBtn.innerHTML =
    'Light <span class="material-symbols-outlined">light_mode</span>';

  form.style.background = "#403d39";
  form.style.color = "#f4f3ee";
  form.style.boxShadow = "3px 4px 15px #252422";
} else {
  darkModeBtn.innerHTML =
    'Dark <span class="material-symbols-outlined">dark_mode</span>';
}
// TOGGLE DARK MODE ON CLICK

  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.style.color = isDark ? "#ccc5b9" : "#1e1a29";

    if (isDark) {
      darkModeBtn.innerHTML =
        'Light <span class="material-symbols-outlined">light_mode</span>';
      form.style.background = "#403d39";
      form.style.color = "#f4f3ee";
      form.style.boxShadow = "3px 4px 15px #252422";
    } else {
      darkModeBtn.innerHTML =
        'Dark <span class="material-symbols-outlined">dark_mode</span>';
      form.style.background = "#f4f3ee";
      form.style.color = "#403d39";
      form.style.boxShadow = "3px 4px 15px #ccc5b9";
    }
  });

});
