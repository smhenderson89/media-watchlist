<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Media Watch List - Information at your fingertips</h3>
  https://media-watch-list.herokuapp.com/
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#example-usage">Example Usage</a></li>
        <li><a href="#running-local">Running Local</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About the Project
<div align="center">
 <img src="https://user-images.githubusercontent.com/53064568/146559008-9a81f32e-3a23-426a-8dc5-49e3379bd13b.jpeg" alt = "Media Watch List Logo" />
</div>

Tired of your kid Cars 3 for the 100th time? Excited about the newest Marvel release but not sure it is appropriate for you kid? 

Media Watch List is a website that **aggregates information from movie databases** for a user to easily like or add a movie to a watchlist. The market for our project is specifically **parents of young children**, who need an **easy way to save movie recommendations** and find **relevant information** before showing their child a new movie. No more scrolling endlessly through various notes in your note app to remember where you stashed recommendations from friends, you can save your movies in an organized and informative way using our website.

We use data from:

[OPEN IMDB](https://www.omdbapi.com/) - an open source version of the IMDB Database<br>
[IMDB - Parent's Guide](https://www.imdb.com/title/tt0114709/parentalguide) - A summary of each movie's categories, ranging from Sex & Nudity, Violence and Gore, Profanity, etc<br>
[Common Sense Media](https://www.commonsensemedia.org/) - Reviews of Movies for suitablity for children<br>
[JustWatch](https://www.justwatch.com/) - Find which service to stream or buy the movie<br>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Front End 

* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Open IMDB](http://www.omdbapi.com/)

Back End

* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Example Usage



<div align="center">Logging into the app

![image](https://user-images.githubusercontent.com/53064568/215614941-4544303a-b5fc-4218-85b8-0cb229716d35.png)

Register an account


![image](https://user-images.githubusercontent.com/53064568/215360667-7324be2d-a265-45f8-8445-9cfa40de154b.png)


Once logged in, you can search details for movies (By default the websites searches for Toy Story)

![image](https://user-images.githubusercontent.com/53064568/215360710-7a4a8649-4b31-41d8-95bb-6a138fbf1553.png)<br>

Searching for "The Matrix" will update the results without through React without reloading the page

![image](https://user-images.githubusercontent.com/53064568/215360753-69fdfb4d-cc9b-4a75-b8b6-b41520b0e8b7.png)

<br>

Clicking the "+" sign will add the movie to your watchlist

![0F9AF5C7-98E8-467F-9C5B-8DB07AD03D4F_4_5005_c](https://user-images.githubusercontent.com/53064568/215615983-17c1c376-2dcb-42fc-9d56-2c624c4edeea.jpeg)

<br>

Click "More Info" to find out more about the movie

<br>

![image](https://user-images.githubusercontent.com/53064568/215360877-763b55cc-85bf-4c21-8988-bd7663dcbebe.png)

Within the "More Info" page, you can find movie information, and links to the IMDB Parents Guide, Common Sense Media, and where to Stream the Movie

<br>

![image](https://user-images.githubusercontent.com/53064568/215360931-3d487231-791b-4687-b253-1ca157ca6dc2.png)

Click each of those Links will open up a seperate tab with the information from the services

IMDB Parents Guide
![image](https://user-images.githubusercontent.com/53064568/215360966-0cd5ad23-94e9-45f1-8446-8725d1626314.png)

Common Sense Media 
![image](https://user-images.githubusercontent.com/53064568/215360977-b696843b-400a-49da-8cbe-59664b29edf7.png)

JustWatch - Where to stream it
![image](https://user-images.githubusercontent.com/53064568/215361005-e7d0e7ae-94c2-42fa-9675-47b3b1ae536a.png)

Go to your Watchlist to see a your saved movies
![image](https://user-images.githubusercontent.com/53064568/215361191-7c9dcda0-dfb1-45ea-b24d-5c88399c3c8d.png)

<br>

Click "Delete" to remove the movie from your watchlist when you no longer need it

<br>

![image](https://user-images.githubusercontent.com/53064568/215361209-46f4e345-14d0-4b00-ae24-cb6f7470980c.png)

Click the Person Icon to Go to your account page 

<br>

![image](https://user-images.githubusercontent.com/53064568/215361237-ec0f049b-0a3a-489d-9ff7-324f0ed6e2fa.png)

Here you can Update your email or password, or logout.
![image](https://user-images.githubusercontent.com/53064568/215361257-ac999295-94a8-45d0-9470-dd27a4ad7b22.png)

Click the logout when you are done with the website. Thanks for using it!
![image](https://user-images.githubusercontent.com/53064568/215361271-2d4c375d-554c-4bc2-bb5b-ce3bd85015d9.png)
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

## Running Local

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g!

  ```

### Installation

1. Get a free API Key at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Clone the repo
   ```sh
   git clone gh repo clone smhenderson89/media-watchlist 
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `MediaList.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   const API_ID = 'ENTER YOUR KEY';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] **Stretch Goal:** Add aditional media types - books, music, app
- [ ] **Stretch Goal:** Add additional ways to login to webiste (Gmail)

See the [open issues](https://github.com/smhenderson89/media-watchlist) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Scott Henderson
<br>Github: [https://github.com/smhenderson89](https://github.com/smhenderson89)
<br>LinkedIN: [https://www.linkedin.com/in/scottmchenderson/](https://www.linkedin.com/in/scottmchenderson/)
<br>Portfolio: [https://scotthenderson.netlify.app/](https://scotthenderson.netlify.app/)

Julia Szymanski
<br>Github: [https://github.com/julszymanski](https://github.com/julszymanski)<br>

Mike Woolf
<br>Github: [https://github.com/mwoolf87](https://github.com/mwoolf87)<br>


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* The DigitalCrafts Teachers and Teaching Assistants
* Free Icons: [https://www.freeiconspng.com/](Link)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
