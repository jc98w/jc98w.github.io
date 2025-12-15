---
layout: video_page
title: "Enhancement Three"
video_link: "https://www.youtube.com/embed/vbJ9saMKO_0"
video_title: "Enhancement Three Narration"
---

<blockquote>
    There is an enhancement three branch in the GitHub repo linked to the "View On GitHub" button.
</blockquote>

<p>
    This enhancement was unique because it basically went as planned without any significant bumps. The original design for this program used MongoDB Atlas to store positions and moves for the chess bot. Atlas was good for developing, but the free version comes with some limitations, most notable of which being a cap on how much data can be stored. This goal aligns with my longer-term goals of adapting this program, or at least this data, for a full stack chess application.
</p>
<p>
	Migrating the data did not take any complex code, but it did require more tools than previous enhancements did. I had to interact with the existing MongoDB Atlas database I set up last May, and I set up a new MongoDB container on my local system using Docker. To facilitate the actual data migration, I wrote a mongo shell script. This process transferred data from over 200,000 positions seen by the bot. Refactoring the code to use the local MongoDB was straightforward and worked quickly.
</p>
<p>
	Docker, MongoDB Community, and writing mongo shell scripts were all relatively new for me. Having used MongoDB and its shell, the script came naturally. Figuring out Docker was a bit stranger, but I expect having familiarity with the tool will be useful in the future. Creating the database, activating, and deactivating the database are all simple tasks through Docker and makes me want to explore more of what that tool can do.
</p>
<p>
	The variety of tools used during this enhancement effectively prepares this project for its next phase by avoiding the drawbacks of Atlas and gaining control associated with a locally hosted database. Consideration was taken to ensure that the program runs even when the database connection fails. These efforts were made with outcomes four and five in mind.
</p>
