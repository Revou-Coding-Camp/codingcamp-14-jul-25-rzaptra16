// Show popup once using localStorage
function showWelcomePopup() {
  const userName = prompt("Silakan masukkan nama Anda:");
  document.getElementById("welcome-user").textContent = userName || "Guest";
}

// Handle form submit
function handleSubmit(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
  const pesan = document.getElementById("pesan").value;

  document.getElementById("output").innerHTML = `
    <div class="space-y-2 text-gray-800">
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", showWelcomePopup);
