const achievementData = {
    league: `
        <h2>League of Legends</h2>
        <img src="../Images/lol1.png" alt="lol">
        <p>Peak rank: Gold IV</p>
        <p>Main: supprot?</p>
        <!-- add whatever content you want -->
    `,
    apex: `
        <h2>Apex Legends</h2>
        <img src="../Images/apex1.png" alt="apex">
        <p>Kills: 1200</p>
        <!-- add whatever content you want -->
    `,
    rainbow: `
        <h2>Rainbow Six Siege</h2>
        <img src="../Images/rainbow6.png" alt="rainbow">
        <p>Operator: Ash</p>
        <!-- add whatever content you want -->
    `
};

const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('modalClose');

// open modal
document.querySelectorAll('.btn[data-game]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const game = btn.getAttribute('data-game');
        modalContent.innerHTML = achievementData[game];
        overlay.classList.add('active');
    });
});

// close modal
closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
});