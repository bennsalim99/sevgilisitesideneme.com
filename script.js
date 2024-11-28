function showMessage() {
    const message = document.getElementById('love-message');
    message.style.display = 'block';
    message.classList.remove('hidden');
    setTimeout(() => {
        message.style.display = 'none';
        message.classList.add('hidden');
    }, 3000); // Mesaj 3 saniye sonra kaybolacak
}
