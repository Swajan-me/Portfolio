
const GITHUB_USERNAME = "Swajan-me";

const pollTime = 30000; 

const projects = {
    fyp: "https://raw.githubusercontent.com/Swajan-me/FYP/refs/heads/main/README.md"
    // other projects here, same as above..
};

let activePoll = null;

function showReadme(projectKey, elementId) {
    const url = projects[projectKey];
    const el = document.getElementById(elementId);

    if (!url) {
        el.innerHTML = "<p>No project found for '" + projectKey + "'.</p>";
        return;
    }

    function fetchAndShow() {
        fetch(url + "?_=" + Date.now()) // stops old cached version from showing
            .then(res => {
                if (!res.ok) throw new Error("HTTP " + res.status);
                return res.text();
            })
            .then(md => { el.innerHTML = marked.parse(md); })
            .catch(err => {
                el.innerHTML = "<p>Failed to load README.</p>";
                console.error("README load error:", err);
            });
    }

    fetchAndShow();
    clearInterval(activePoll);
    activePoll = setInterval(fetchAndShow, pollTime);
}

function stopReadmePolling() {
    clearInterval(activePoll);
}

async function loadGitHubProjects() {
    const container = document.getElementById("projectList");

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        if (!response.ok) throw new Error("HTTP " + response.status);
        const repos = await response.json();

        repos.forEach(repo => {
            const repoItem = document.createElement("div");
            repoItem.className = "projectItem";
            repoItem.dataset.md = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${repo.default_branch}/README.md`;

            repoItem.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ?? "Click for more information!"}</p>
            `;

            container.appendChild(repoItem);
        });

        attachProjectClickEvents();

    } catch (error) {
        console.error("Error loading repos:", error);
        container.innerHTML = "<p>Failed to load projects.</p>";
    }
}

function attachProjectClickEvents() {
    const projectItems = document.querySelectorAll(".projectItem");
    const popup = document.getElementById("projectMDPopup");
    const content = document.getElementById("projectMDContent");
    const closeMD = document.querySelector(".closeMD");
    let popupPoll = null;

    projectItems.forEach(item => {
        item.addEventListener("click", () => {
            const mdPath = item.dataset.md;

            function fetchAndShow() {
                fetch(mdPath + "?_=" + Date.now())
                    .then(res => {
                        if (!res.ok) throw new Error("HTTP " + res.status);
                        return res.text();
                    })
                    .then(md => {
                        content.innerHTML = marked.parse(md);
                        popup.style.display = "flex";
                    })
                    .catch(err => {
                        content.innerHTML = "<p>README not found.</p>";
                        popup.style.display = "flex";
                        console.error(err);
                    });
            }

            fetchAndShow();
            clearInterval(popupPoll);
            popupPoll = setInterval(fetchAndShow, pollTime);
        });
    });

    closeMD.addEventListener("click", () => {
        popup.style.display = "none";
        content.innerHTML = "";
        clearInterval(popupPoll);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadGitHubProjects();
});