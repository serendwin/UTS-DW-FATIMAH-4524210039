const inputNamaGuest = document.querySelector('#guest-name');
const inputDeskripsiGuest = document.querySelector('#guest-info');

const previewJudul = document.querySelector('#Preview-Guest-Star h2');
const previewDeskripsi1 = document.querySelectorAll('#Preview-Guest-Star p')[0];
const previewGambar = document.querySelector('#Preview-Guest-Star img');
const previewCaption = document.querySelector('#Preview-Guest-Star figcaption');

inputNamaGuest.addEventListener('input', function() {
  const nama = inputNamaGuest.value.trim();

  if (nama === "") 
    {
    previewJudul.textContent = "About Guest Star";
    previewCaption.textContent = "Silahkan pilih guest star";
    previewGambar.src = "Serendwin.jpg"; 
  } 
  else 
    {
    previewJudul.textContent = `About ${nama}`;
    previewCaption.textContent = `Profil dari ${nama}`;

    if (nama.toLowerCase().includes("7verse")) {
      previewGambar.src = "7Verse.jpg";
    } else if (nama.toLowerCase().includes("daydream")) {
      previewGambar.src = "Daydream Girls.jpg";
    } else if (nama.toLowerCase().includes("universe")) {
      previewGambar.src = "Universe.jpg";
    } else {
      previewGambar.src = "Serendwin.jpg"; 
    }
  }
});

inputDeskripsiGuest.addEventListener('input', function() 
{
  const deskripsi = inputDeskripsiGuest.value.trim();

  if (deskripsi === "") 
    {
    previewDeskripsi1.textContent = "Deskripsi tentang guest star.......";
  } 
  else 
    {
    previewDeskripsi1.textContent = deskripsi;
  }
});
