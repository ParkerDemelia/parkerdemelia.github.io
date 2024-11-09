document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');

    logo.addEventListener('mouseover', () => {
        let chars = "abcdefghijklmnopqrstuvwxyz1234567890/?!@#$%^&*";
        for(let i = 0; i < 100; i++) {
            let randomchar = chars[Math.floor(Math.random() * chars.length)];
            logo.innerHTML += randomchar;
        }
    });
}); 