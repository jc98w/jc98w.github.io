---
layout: video_page
title: "Enhancement Two"
video_link: "https://www.youtube.com/embed/QmqZBXuhJKI"
video_title: Enhancement Two Narration
---

> There is an enhancement two branch in the GitHub repo linked to the "View On GitHub" button.
>
 
<p>
    This enhancement was focused on enhancing the built-in chess bot specifically by giving it access to book moves. The original chess bot operated by storing the results of games in a database for reference in future games. Succinctly, moves resulting in a win are more likely to be used again whereas moves resulting in a loss are less likely to be used again. This approach takes time to train and has credit assignment issues. To address this and help the bot through the opening stages of the game, I created a system that allowed it to reference book moves.
</p>
<p>
    Akin to the first enhancement, my initial idea did not turn out to be the best option. My initial idea involved structuring the book move data as a tree that could be traversed. This idea would have been inefficient from a data storage perspective because it would have involved loading every possible book move onto RAM and it would have had many redundant entries. The same opening position can be achieved with different move orders and in this solution that would mean separate branches.
</p>
<p>
    Accessing the moves in a game could be achieved with O(1) complexity by tracking the node corresponding to the current state of the game. Asking the bot to make a move without knowing the moves leading up to the current position would become more complex as it would have to potentially search multiple branches with the best-case scenario being O(N) complexity with N being the number of moves required to reach the position. These findings prompted me to devise a better solution.
</p>
<p>
	I decided on a hash table like structure using an SQLite database and a position-based string as the primary key. The queen’s gambit accepted opening could be inserted using the string “d4 d5 c4 dxc4,” and the program would simulate the moves to ensure validity and determine what position each move should be added to in the database. This solution solves each of the aforementioned problems. The bulk of the data is no longer loaded onto RAM and only usable moves are accessed which saves short term memory. It also eliminates redundancy: if two different lines converge into the same position, the position and subsequent moves are only stored once. Accessing usable moves can now be done using O(1) complexity without needing to know the previous moves.
</p>
<p>
	Keeping an open mind was central to the learning process during this enhancement. Hammering away at my first solution would potentially have solved some problems but would ultimately have resulted in a more complex solution and greater effort. There needs to be a constant, borderline subconscious, evaluation process going on to avoid wasting effort on suboptimal avenues.
</p>
<p>
	Outcome three was main goal for this enhancement as it focused on efficiently handling data. The resulting solution yielded good results with moves being selected as expected while maintaining the expected responsiveness. This also touched on outcome four as I utilized tools like SQLite to make a more competent chess bot. I continued to use collaborative techniques like Git and commenting as I did during the previous enhancement. I also valued security by validating input before inserting or updating the database.
</p>
