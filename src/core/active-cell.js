const activeCell = (e) => {
    let actives = document.getElementsByClassName("active")
  if (actives.length == 0){
    e.target.classList.add("active");
  } else {
    actives[0].classList.remove("active");
    e.target.classList.add("active");
  }
}

export default activeCell;