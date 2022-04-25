//Header
const header = new XMLHttpRequest();
header.onreadystatechange = function () {
  const navbar = document.querySelector("#navbar");
  navbar.innerHTML = this.responseText;
};
header.open("GET", "/navbar.html", true);
header.send();

//Footer
const footer = new XMLHttpRequest();
footer.onreadystatechange = function () {
  const navbar = document.querySelector("#footerDiv");
  navbar.innerHTML = this.responseText;
};
footer.open("GET", "/footer.html", true);
footer.send();
