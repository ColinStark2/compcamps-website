var favSongs = [
  {
    order: 1,
    song: "humbling river ",
    artist: "unknown" ,
  link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/O0YxeTjFn70\" frameborder=\"0\" allowfullscreen></iframe>",
},

 {order:2,
 song: "blunt the knives",
 artist:"unknown",
 link:"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/sLxNKBTKf2o\" frameborder=\"0\" allowfullscreen></iframe>"}
];
console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");

  //order, song, artist, link
  for (var j in favSongs[i]) {
    var td1 = document.createElement("td");
    if(j == 'link') {
      td1.innerHTML = favSongs[i][j];
    } else {
      td1.innerText = favSongs[i][j];
    }
    tr.appendChild(td1);
  }
  tbody.appendChild(tr);
}
