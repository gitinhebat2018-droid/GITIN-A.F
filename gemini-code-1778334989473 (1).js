// Efek Mengetik Nama
const nameElement = document.getElementById('typing-name');
const fullName = "GITIN ARIFYSA FADILAH";
let index = 0;

function typeName() {
    if (index < fullName.length) {
        nameElement.innerHTML += fullName.charAt(index);
        index++;
        setTimeout(typeName, 100);
    }
}

// Menjalankan fungsi saat halaman dimuat
window.onload = () => {
    typeName();
};

// Menambahkan efek klik pada ikon orbit agar berhenti sejenak
const orbit = document.querySelector('.orbit');
document.querySelectorAll('.orbit-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        orbit.style.animationPlayState = 'paused';
    });
    icon.addEventListener('mouseleave', () => {
        orbit.style.animationPlayState = 'running';
    });
});