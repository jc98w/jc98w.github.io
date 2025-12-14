---
layout: video_page
title: "Code Review"
video_link: "https://www.youtube.com/embed/ikWrz5R4tqo"
video_title: "Code Review Narration"
---

<p>
    For each enhancement category, I chose to use a chess application I wrote last spring. This was a side project inspired by my own enjoyment of chess and with the intent of creating a chess bot. I had not worked on this project since May before using it for this project. Reviewing the code again with fresh eyes revealed plenty of room for improvement, notably in the structure of the project. The video below goes through the results of the review.
</p>
<p>
    I followed through with a number of changes due to the review with the largest change being the creation of the GameManager class which took over game logic activity from the BoardCanvas class. This adjustment gives the project a more organized structure and better separation of concerns. I also added comments to many functions for better in-code documentation. Once I got into the planned enhancements, I was grateful that I had addressed these concerns first.
</p>