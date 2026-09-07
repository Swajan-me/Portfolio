const navbar = `
<div class="container">
    <nav class="navBar">
        <a href="/index.html">
            <img class="logo" src="/Images/Me.jpg" alt="Profile" height="50px" width="50px">
        </a>
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#projects">Projects</a></li>
            <li><a href="/index.html#about">Skills</a></li>
            <li><a href="/index.html#contact-section">Contact</a></li>
        </ul>
    </nav>
</div>`;


document.body.insertAdjacentHTML('afterbegin', navbar);
