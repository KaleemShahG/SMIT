function mobileAlert(mobileName) {
    alert("Thanks for purchasing " + mobileName);
  }

  function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
  }

  function changeImage(img) {
    img.src = "image2.jpg";
  }

  function resetImage(img) {
    img.src = "image1.jpg";
  }

   let counter = 0;

  function increase() {
    counter++;
    document.getElementById("count").innerText = counter;
  }

  function decrease() {
    counter--;
    document.getElementById("count").innerText = counter;
  }