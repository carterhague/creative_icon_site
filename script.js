document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("search").value;
  if (value === "")
    return;
  console.log(value);
  console.log("woot woot");
});
