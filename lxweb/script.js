const data = ["klippning", "färgning", "naglar", "fransar"];

document.getElementById("search").addEventListener("input", function () {
  const q = this.value.toLowerCase();
  const hits = data.filter(item => item.toLowerCase().includes(q));
  document.getElementById("results").innerHTML = hits.join("<br>");
});
