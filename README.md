# 04-challenge
UConn Bootcmp chapter 4 challenge

## Description
In this chapter 4 challenge, I took my knowledge of JavaScript and Web APIs and used it to create a timed mini-quiz that stores high scores.  I now have evidence of my ability to create multi-page projects that collect and store data.

## Process
After Creating my repository, I noticed that there was no files written out for me, so I used the 'touch' command to create an 'index.html' file and a 'style.css' file.  For the HTML, I just decided to copy it off of my challenge-03 homework and fine-tune it a bit.  For the CSS, I left it as is.  After a quick review of the instructions, it looked like the 'High Scores' page was its own seperate webpage.  So, I did some google searches and found that for a 'High Scores' page on simple games like Minesweeper, for example, it is common to have 2 seperate HTML files.  So I created 2 HTML files and 2 JavaScript files to complement them.

Next, I worked on creating a question array that would produce 5 questions, one after the other.  I got these questions from another JavaScript quiz I found online.  I also added a startBtn function that starts the quiz and runs off some globals I put in.

Then, I needed a way for the questions to appear as a result of the user clicking 'Start'.  I looked up some ways to do this and something I found was a 'render' function.  I used this function to render my questions in an organized manner.  I had some issues with repitition, but I fixed them with a 'for' loop.

Then, I created a 'compare' function (also found off Google).  To put it simply, this function uses an 'li' to mark each user choice.  If the 'li' selected matches what the 'correctAnswer' for that question is, the user is correct.

Then, I made a point system that deducts points for wrong answers and adds to the 'scoreSet' for correct answers.  I also prepped my local storage system by adding a text box that collects 'userInfo'.

Finally, I finished off my previously created 'Highscores.js'.  This included my local storage system which I mostly took from previous lessons.  I also attached the highscore html page to this js file so that the user can access it from the start page.  I messed around with the point system as well, trying to make it more fair for users of all knowledge levels.  If you take longer to answer questions, but are accurate, then you will get a high score, but, similarly if you are quick at answering and are also accurate, then you will get an even higher score.  I also added in my CSS.  I did a color combo quiz online and it came out with orange and blue as my two favorite colors on average.  So, these are the colors I used for the buttons and I really like the contrast.  I also decided to use a wrapper for everything because I think with the lack of substance on both webpages, it looks nicer to have it all in one confined space.

## Conclusion
Overall, I think this is a really cool project because I had already worked on JavaScript in the previous 2 weeks, so it wasn't a completely new subject.  I still needed to do some Google searches and utilize BCS, but I'm very proud of the work I did myself.  This project in total took me aroud 15-20 hours, give or take, so about the same as the last challenge and I think that is a positive step, because even with the introduction of Web APIs, I was still able to complete the project in the same amount of time.
