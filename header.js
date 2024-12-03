document.addEventListener('DOMContentLoaded', function() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a id="logo" href="index.html">parker demelia</a><br><br>
        <a href="about.html">about</a>
        <a href="work.html">work</a>
        <a href="blog.html">blog</a>
        <a href="explore.html">explore</a>
        <a href="merch.html">merch</a>
        <a href="contact.html">contact</a>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
}); 