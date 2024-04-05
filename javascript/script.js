document.getElementById("judul").innerHTML = "javascript";

let desc = document.getElementById("deskripsi");
desc.innerHTML = "Belajar DOM, variabel, perulangan";

let nama = document.getElementById("nama");
let btnSimpan = document.getElementById("simpan");
let data = []; //simpan ke array data

btnSimpan.addEventListener("click", function () {
  console.log("tombol di tekan");
  data.push(nama.value);
  console.log(data);

  document.getElementById("list").innerHTML = ""; //clear element list
  for (const [index, value] of data.entries()) {
    console.log(value);
    document.getElementById("list").innerHTML += `<li>${value}`;
  }
});
