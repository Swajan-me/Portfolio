
const GITHUB_TOKEN = "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"; 

const pollTime = 30000; 

const projects = {
    fyp: { owner: "Swajan-me", repo: "FYP", path: "README.md", branch: "main" }
    // add more like: name: { owner: "...", repo: "...", path: "README.md", branch: "main" }
};

let activePoll = null;

function showReadme(projectKey, elementId) {
    const proj = projects[projectKey];
    const el = document.getElementById(elementId);

    if (!proj) {
        el.innerHTML = "<p>No project found for '" + projectKey + "'.</p>";
        return;
    }

    const url = `https://api.github.com/repos/${proj.owner}/${proj.repo}/contents/${proj.path}?ref=${proj.branch}`;

    function fetchAndShow() {
        fetch(url, {
            headers: {
                Accept: "application/vnd.github.raw",
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
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


// ---------- PART 2: project grid + click-to-view popup ----------
// Use this if you want a grid of ALL your repos (public + private
// that this token can see), each opening its README in a popup.

async function loadGitHubProjects() {
    const container = document.getElementById("projectList");

    try {
        // /user/repos (not /users/{username}/repos) because it's
        // authenticated — this is what lets private repos show up.
        const response = await fetch("https://api.github.com/user/repos", {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
        });

        if (!response.ok) throw new Error("HTTP " + response.status);
        const repos = await response.json();

        repos.forEach(repo => {
            const repoItem = document.createElement("div");
            repoItem.className = "projectItem";
            repoItem.dataset.owner = repo.owner.login;
            repoItem.dataset.repo = repo.name;
            repoItem.dataset.branch = repo.default_branch;

            repoItem.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ?? "No description available"}</p>
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
            const owner = item.dataset.owner;
            const repo = item.dataset.repo;
            const branch = item.dataset.branch;
            const url = `https://api.github.com/repos/${owner}/${repo}/contents/README.md?ref=${branch}`;

            function fetchAndShow() {
                fetch(url, {
                    headers: {
                        Accept: "application/vnd.github.raw",
                        Authorization: `token ${GITHUB_TOKEN}`
                    }
                })
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