document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("search").value;
  if (value === "")
    return;
  console.log("searching for: ", value);

  let resource = "http://api.iconfinder.com/v4/icons/search?query=" + value + "&count=100&premium=false";
  var nf_token_url = "https://www.iconfinder.com/api/v4/oauth2/token";
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  var form = {
    "grant_type": "jwt_bearer",
    "client_id": "<*>",
    "client_secret": "<*>"
  };

  var formBody = [];
  for (var property in form) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(form[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  $.ajax({
    url: proxyurl + resource,
    type: 'GET',
    contentType: "application/json",
    success: function(response) {
      console.log(response);

      let results = "";
      for (let i = 0; i < response.icons.length; i++) {
        results += "<div class=\"searchResult\">";
        results += "<div class=\"imageContainer\">";
        let offset = response.icons[i].raster_sizes.length;
        results += "<img src=\"" + response.icons[i].raster_sizes[offset-1].formats[0].preview_url + "\">";
        results += "</div>";
        results += "<div class=\"downloadLink\">";
        results += "<a href=\"" + response.icons[i].raster_sizes[offset-1].formats[0].preview_url + "\" download>" + "Download" + "</a>";
        results += "<p>Size: " + response.icons[i].raster_sizes[offset-1].size_width  + "x" + response.icons[i].raster_sizes[offset-1].size_height + "</p>";
        results += "</div>";
        results += "</div>";
      }

      document.getElementById("searchResults").innerHTML = results;
    },
    error: function(error) {
      console.log(error);
    },
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", "Bearer l2qDH6G3EcsadPndGGDB013TUTttx8mQEqq8UkCKqJ7C0OefM4TOmbyPsyN1nLX0");
    }

  });

});
