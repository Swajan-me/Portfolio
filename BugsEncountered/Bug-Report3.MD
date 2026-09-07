# Bug ID: BUG-003

###### Title: CSS/nav bar for the site not working while being git hosted.

###### Component: Layout

###### Environment: Firefox, Windows 11

###### Severity: Low-Medium

###### Priority: High

###### Status: **Fixed**

**Description**:
The background css for the site was being loaded as well as the navbar due to css/linking format issue.

**Steps to Reproduce**:

1. In the main index.html, while being hosted in github, dot (.) infront of the links, href, causes the issue.
2. Can observe that he css for the site does not work due to linking format being different.

**Expected Result**:
Site working normally and is visually appealing.

**Actual Result**:
The background was not being displayed as well as the navbar not showing.

**Fix Applied**:
FIxed the linking format from the css was linked to.

_No visual for the bug as the issue was solved before evidence was taken._
