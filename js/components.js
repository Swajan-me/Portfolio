const navbar = `
<div class="container">
    <nav class="navBar">
        <a href="/index.html">
            <img class="logo" src="/Images/Me.jpg" alt="Profile" height="50px" width="50px">
        </a>
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#about">About</a></li>
            <li><a href="/index.html#projects">Projects</a></li>
            <li><a href="/index.html#contact">Contact</a></li>
        </ul>
    </nav>
</div>`;

const footer = `
<footer id="contact">
    <p>Contact me: 
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpclVZDQvQbBQTxlPPkgpFfWtHjxnQtZZdHBtmwLwcCWCbHQMNtcldrFpkFDGrwrtMjQPb" target="_blank" rel="noopener noreferrer">
            <i class="fa-regular fa-envelope"></i>
        </a> 
        or 
        <a href="https://www.linkedin.com/in/swajan-rajbanshi-203955302/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin-in"></i>
        </a>
    </p>
    <p>© 2026 Swajan Rajbanshi.</p>
</footer>`;

document.body.insertAdjacentHTML('afterbegin', navbar);
document.body.insertAdjacentHTML('beforeend', footer);