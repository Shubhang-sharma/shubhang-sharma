function myFunction(clicked_id) {
  var elms = document.getElementsByClassName(clicked_id)

  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.transition = "0.4s";
    } else {
      x.style.display = "none";
    }
  })
}
