const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    // document.querySelectorAll('.container').forEach(container => container.classList.toggle('dark'));
    // document.querySelectorAll('.left-data').forEach(container => container.classList.toggle('dark'));
    // document.querySelectorAll('.right-data').forEach(container => container.classList.toggle('dark'));
}   )