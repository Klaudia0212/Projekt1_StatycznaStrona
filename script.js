
  const cookieBox = document.getElementById("cookieBox");
  const acceptBtn = document.getElementById("acceptCookies");

  if (localStorage.getItem("cookiesAccepted") === "yes") {
    cookieBox.style.display = "none";
  }

  acceptBtn.addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "yes");
    cookieBox.style.display = "none";
  });
