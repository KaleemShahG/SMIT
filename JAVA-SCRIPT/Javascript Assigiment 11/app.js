function mobileAlert(mobileName) {
    alert("Thanks for purchasing " + mobileName);
  }

  function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
  }