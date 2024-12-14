document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("preloader");
  const content = document.getElementById("content");

  const pageKey = `hasVisited_${window.location.pathname}`;

  const isFirstVisitToPage = !localStorage.getItem(pageKey);

  if (isFirstVisitToPage) {
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
      localStorage.setItem(pageKey, "true");
    }, 2000);
  } else {
    loader.style.display = "none";
    content.style.display = "block";
  }
});
