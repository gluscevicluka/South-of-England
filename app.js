const read_more = document.querySelector("#read_more");
const read_more_content = document.querySelector("#read-more-content");

read_more.addEventListener("click", function () {
  if ((read_more_content.style.display === "block")) {
    read_more_content.style.display = "none";
    read_more.innerHTML = 'Read more';
  } else {
    read_more_content.style.display = "block";
    read_more.innerHTML = 'Show less';
  }
});
