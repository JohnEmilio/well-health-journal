# Well Health Jounral
A journal for individuals to keep track of their daily blood pressure, heart rate, if they've exercised today, and an area for free text to talk about how they are feeling, their mood, diet, exercises, and anything else they might want to keep in a journal.

![alt tag](https://media.giphy.com/media/sHDThojFypgknicdWp/giphy.gif)

## How It's Made:

**Tech used:** Node, MongoDB, Express, JavaScript, EJS, HTML, CSS

Using Node.js with Express and MongoDB for my database to host and serve data from user input and store previous entries. When data is requested on client side, Node and Mongo with serve the data back to the client which is then presented in the form of EJS for handling displaying the database data. Node also handles delete and post requests by the client which it then will delete or add data, respectively. CSS for basic styling, and EJS/HTML for presenting information.

## Optimizations

I would really like to build more on this app and add in somewhere to have a put request so that the user can update previous data without having to delete the data and retype what they would like. I would also like to host the front-end using React in the future as I like the way data can be manipulated and displayed for the user.

1. Implement put request on Journal page for user to update previous journal logs.
2. Build a React front-end (I like the ease of manipulating the data with React.)

## Lessons Learned:

Sometimes the idea in your head can cloud your judgement and prevent you from seeing an easier solution to problems. It's good to try to keep a big picture idea of things so that when you start to get tunnel vision, take a step back and think about the rough idea you're trying to accomplish.