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


document.addEventListener('DOMContentLoaded', function() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a id="home" href="../index.html">[ back to home ] </a><br><br>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
}); 