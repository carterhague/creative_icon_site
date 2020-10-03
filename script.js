document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("search").value;
  if (value === "")
    return;
  console.log(value);
  console.log("woot woot");

  const data = null;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "http://api.iconfinder.com/v4/icons/search?query=" + value);
  xhr.setRequestHeader("authorization", "Bearer l2qDH6G3EcsadPndGGDB013TUTttx8mQEqq8UkCKqJ7C0OefM4TOmbyPsyN1nLX0");
  xhr.send(data);
});
