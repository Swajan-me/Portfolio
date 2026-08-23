Bug ID: BUG-001
Title: Fixed content overflow
Component: Layout
Environment: Firefox, Windows 11
Severity: Medium
Priority: High
Status: Fixed

Description:
The content/ major components of the website were getting out the display area and overlapping with other parts of the site.

Steps to Reproduce:

1. In the main index.html, take any section tag and place it outside of the main content tag.
2. Observe the infromation in the page gets split into howevery many section tags were removed from the main content tag.

Expected Result:
Page content should be displayed in a viewable manner and not in random vertical or horrizontal fashion.

Actual Result:
The content was being displayed in random vertical order where the information was unreadable and hard to view any feature of the website.

Fix Applied:
All the necessary information was placed under the main class "content" where the body stores the information to be displayed.
