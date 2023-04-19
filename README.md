# Allergens-Quiz-Milestone Two

This Quiz App is my second project for the Frontend Developer Course. 
Having close relations in the Catering professional area I am aware of the importance of having well trained staff on all aspect's food related, being food allergies one of the most important ones.
Many thousands of people in the UK, both children and adults, have allergies, and it’s important that they’re able to go about their day-to-day lives in safety, which means that those working with food need to be equipped with the right knowledge.
This Quiz can be used to complement the training, usually provided by employers. It can work as a light and fun way to remind their staff about this important aspect of food preparation.
This game is aimed at people that already have a basic knowledge on food allergens, most questions offer hidden tips and/or important complementary information about the subject.
When playing, the user will find 4 answer options per each question. For every correct answer, 5 points will be awarded and after answering all 20 questions a new page will appear showing the final score and offering an option to repeat the game.

![responsive design picture](assets/images/responsive.png)

## UX

I've included pictures as background, a different colour in some buttons and hover effects to showcase a little of my CSS abilities, however I've mostly chosen to style this project in a neutral and basic look, easy to use so it would not distract the users. As its aim is to be used for professional training reasons, it helps to keep the users focus in the quiz itself.

Colour pallet is as follows:
rgb(255, 255, 255), rgb(250, 229, 201), rgb(0,0,0)

## User Stories

User stories can be found in the document bellow
- [testing.pdf](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/1209a837be8617d10de4f88317cf6e5bb258baa7/testing-documents/testing.pdf)

## Wireframes

The wireframes helped as an initial plan of how I would like the Quiz to look like in terms of its structure. I have chosen not to include too much detail to keep it simple and easy to the eye. 
I have focused on the importance of making it easy to use, with a responsive website built. 
With that in mind, I have created two wireframes per page, one for larger screens and another one for smaller screens.
For this, I've used Balsamiq Wireframes, the links to the files are below:

- [index.html](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/bb03e007b5a10beb9d1290bbbf301cd85860e094/wireframes/index-page.pdf)
- [quiz.html](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/bb03e007b5a10beb9d1290bbbf301cd85860e094/wireframes/quiz-page.pdf)
- [modal.view](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/bb03e007b5a10beb9d1290bbbf301cd85860e094/wireframes/modal-view.pdf)
- [end.html](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/bb03e007b5a10beb9d1290bbbf301cd85860e094/wireframes/end-page.pdf)


## Features

### index.html

- **Navigation bar** - Allows users to navigate around the Quiz by clicking each navigation link, which redirects them to the relevant webpage. It has an hover feature that changes the colour of the links. To help users to always know which page they are in, the active link for the current visited page will appear in a different colour.
- **Hamburger button** - Clicking the hamburger button, a menu containing the navigation links to all other pages will appear. The user can click the links to navigate to the relevant page.
Only visible in screen sizes under 576px.
- **Modal** - Modal will open when users click on the "About" option located in the navigation menu. The modal provides users of all the information about the Quiz and why the allergies topic is so relevant.
- **Logo** - The Chef´s Academy is a company that provides professional training for Catering and food preparation industry. Showcasing the company logo in the centre of the page reassures users on the high level of quality of this Quiz. 
(This is a fictional company)
- **Welcome message** - Presents the Quiz and its topic, with a relevant background image to give the visitors an idea of what subject is it about and a short playful text underneath, put as a little challenge to tempt a visitor to test their knowledge.
- **'Play' call to action button** - It will redirect to the Quiz itself.
- **Footer with Social media links** - These links are located in the Footer of all the pages (Github and LinkedIn). Hover feature that changes the size of the icons, it makes it easy for users to find and access relevant social media pages and as it opens on a different tab it avoids losing track of the page they were initially. 
### quiz.html

- **Navigation bar** - Allows users to navigate around the Quiz by clicking each navigation link, which redirects them to the relevant webpage. It has a hover feature that changes the colour of the links. To help users to always know which page they are in, the active link for the current visited page will appear in a different colour.
- **Navbar clickable logo** - Allows users to go back to 'Home' page, this is especially useful in smaller screens when the navigation links are hidden under the hamburger icon. It has a hover feature that adds a shadow effect to it.
- **Hamburger button** - Clicking the hamburger icon, a menu containing the navigation links to other pages will appear. The user can click the links to navigate to the relevant page.
Only visible in screen sizes under 576px.
- **Modal** - Modal will open when the user clicks on the 'About' option located in the navigation menu. The modal provides users of all the information about the Quiz and why the allergens topic is so relevant.
- **Progress text** - Out of a total of 20 questions, the progress text displays the correspondent number of already answered questions at that given time. It helps users to know how far in the Quiz they are, eg.12/20.
- **Progress bar** - A complement to the "Progress text", this bar provides the same kind of information but in a more visual way. For every answered question the dark bar will increase 5%. When the user reaches the last question, this bar will be full, corresponding to 100% of the questions answered.
- **Score section** - Through the 'hud-main-text' the score is displayed, it will add 5 points per each correct question.
- **Quiz container** - It displays the question and 4 options as possible answers. Prefix type - ABCD.
When the option of choice is clicked this will trigger a reaction depending on it being the right answer or the wrong one.
Right answers will return a green colour, 5 points earned and it will go straight to the next question.
Wrong answers will return a red colour, no points earned and it will go straight to the next question. 
When all the 20 questions have been answered the user will automatically be redirected to the end page were their final score is shown.
The questions appear in no particular order, this will guarantee more interesting repetitions.
- **Footer with Social media links** - These links are located in the Footer of all the pages (Github and LinkedIn). Hover feature that changes the size of the icons, it makes it easy for users to find and access relevant social media pages and as it opens on a different tab it avoids losing track of the page they were initially.
### end.html

- **Navigation bar** - Allows users to navigate around the Quiz by clicking each navigation link, which redirects them to the relevant webpage. It has a hover feature that changes the colour of the links. To help users to always know which page they are in, the active link for the current visited page will appear in a different colour.
- **Navbar clickable logo** - Allows users to go back to home page, this is especially useful in smaller screens when the navigation links are hidden under the hamburger button. It has a hover feature that adds a shadow effect to it.
- **Hamburger button** - Clicking the hamburger button, a menu containing the navigation links to all other pages will appear. The user can click the links to navigate to the relevant page.
Only visible in screen sizes under 576px.
- **Final score section** - Page reserved to give the users their final score and congratulate them for their achievement.
Final score was achieved by implementing a JavaScript 'incrementScore' function.
- **'Play Again' call to action button** - To encourage users to retake the Quiz in case they feel they should.
- **Footer with Social media links** - These links are located in the Footer of all the pages (Github and LinkedIn). Hover feature that changes the size of the icons, it makes it easy for users to find and access relevant social media pages and as it opens on a different tab it avoids losing track of the page they were initially.
### Quiz app functionality

I have implemented JavaScript for the Quiz functionallity and the final score display:
- [quiz.js](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/bb03e007b5a10beb9d1290bbbf301cd85860e094/js/quiz.js)
- [end.js](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/bb03e007b5a10beb9d1290bbbf301cd85860e094/js/end.js)


## Technologies Used

- [**Balsamiq**](https://balsamiq.com/)
    - I've used **Balsamiq** to create my Quiz app wireframes.
- [**HTML5**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - The project uses **HTML5** to create the basic elements and content of my quiz.
- [**Bootstrap v4.3**](https://getbootstrap.com/)
    - The project uses **Bootstrap v5.2** to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my website, before adding my custom styles.
- [**CSS3**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - The project uses **CSS3** to add custom styles to the elements and content of the quiz app.
- [**jQuery**](https://jquery.com)
    - The project uses **jQuery** to simplify DOM manipulation. This is the standard jQuery that is built with Bootstrap components.
- [**JavaScript**](https://www.javascript.com/)
    - I have used **JavaScript** required to add functionality to the quiz and to achieve the final score presented in the 'End page'. Bootstrap also added already embedded JavaScript code to this project.
- [**Font Awesome**](https://fontawesome.com/)
    - The project uses **Font Awesome** for the social media links on the Quiz app.
- [**Visual Studio Code**](https://code.visualstudio.com/)
    - I've used **Visual Studio Code** as the development environment to write the code for my website.
- [**Git**](https://git-scm.com/)
    - I've used **Git** as a version control system to regularly add and commit changes made to project in Visual Studio Code, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website in a live environment.

## Testing

### Testing User Stories

I used my user stories and documented each of the steps that each user would need to accomplish what they have stated. Below is the link to the document that contains this information:

- [Testing User Stories](https://github.com/Susafp/Allergens-Quiz-Milestone-two/blob/42e11a724e35d84a58eab69a9a16b1132d132ed1/testing-documents/testing.pdf)

### Responsive Testing

I've mainly used Microsoft Edge's Development tools to constantly test each change that I made to my website and to ensure that it appeared in the desired way on different screen sizes (mobile, tablet and desktop). I also tested my website with Google Chrome and Mozilla Firefox.
### HTML, CSS and JavaScript Code Validation

To test my whole project, I went through each page and tested it feature by feature, used:

- [W3C HTML Validator tool](https://validator.w3.org/#validate_by_input) to validate my HTML code.

- [W3C CSS Validator tool](https://jigsaw.w3.org/css-validator/#validate_by_input) to validate my CSS code.

- [Code Beautyfy JavaScript Validator tool](https://codebeautify.org/jsvalidate) to validate my JavaScript code.


### Bugs or Problems

- **Missing closing tags** - I was missing one 'div' closing tag in the body content of *Quiz* page. 
- **Hover effect on *Quiz* page** - When on small screen devices, the hover effect set for the ".choice-container" was misbehaving. The shadowing of the previous clicked choice was still somehow visible even after being populated with the next options. This could affect or wrongly influence the users on their next choice of answer.
This problem was fixed by adding a @media screen to disable the box-shadow hover effect for screens with a width smaller than 575px.
- **404 error returned instead of *End* page** - After deployment to GitHub, instead of rendering the 'end.html' page a 404 error was coming up. As after several attempts I still did not find a way to fix this I asked for Mentor assistance. Scott Nnaghor helped me find and fix the problem; a semi-column was missing in the JavaScript code to return end.html when reaching the end of all available questions.
- **unexpected 'const' *quiz.js*** - When testing JavaScript code
with Code Beautyfy JavaScript Validator tool, it accused 2 errors for *quiz.js*:
"Unexpected 'const', const question = document.getElementById('question');", and
"Stopping. (0% scanned)".
Did not find the solution for this errors, maybe in the future, with more experience I will.
Similar appeared with Firefox debugger ('getNewQuestion' line-282, 'startQuiz' in line-189, and 'anonymous' in line-265)

## Deployment

The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

1. Loaded the terminal window in my Visual Studio Code workspace.
2. Initialised Git using the `git init` command.
3. Added all files to the Staging area (Git) using the `git add .` command.
4. Committed the files to Git using the `git commit -m "Initial commit"` command.
5. Created a new repository in GitHub called 'JS-Milestone-two'.
6. Copied the below code from GitHub into the terminal window in my Visual Studio Code workspace:

```git remote add origin https://github.com/Susafp/Allergens-Quiz-Milestone-two.git```
```git push -u origin master```

7. Entered my GitHub username and password to push the files from Git to GitHub.
8. Went into 'Settings' on my repository page in GitHub.
9. Selected the 'master branch' option under the 'GitHub Pages' section.
10. Ran several regular commits throughout my project.

### Github Repository Link

https://github.com/Susafp/Allergens-Quiz-Milestone-two.git

### Live link

https://susafp.github.io/JS-MilestoneTwo/

### Running Code Locally

To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

1. Go to [my GitHub repository](https://github.com/Susafp/Allergens-Quiz-Milestone-two.git).
2. Click on 'Clone or download'.
3. Click on 'Download ZIP'.
4. Once downloaded, extract the zip file's contents and run my website locally.

## Credits

### Content

- For the Quiz JavaScript functionality I took inspiration from the following sources:
[Climate-quiz](https://github.com/Code-Institute-Submissions/climate-quiz),
[James Q Quick - quiz app - playlist](https://youtu.be/u98ROZjBWy8),
- For the Modal inside the *Navbar* I've consulted: [stackoverflow.com](https://stackoverflow.com/questions/23685837/open-an-modal-window-from-navigation-bar) as a guide for the Modal structure and best practice on how to include it in the menu.
- For information about allergies and allergens:
[Virtual College](www.virtual-college.co.uk/resources/the-importance-of-allergy-awareness-training )
- For the Quiz questions I've taken the information from:
[Highspeedtraining](https://www.highspeedtraining.co.uk/)
- About anaphylaxis: 
[Anaphylaxis UK](https://www.anaphylaxis.org.uk/)
- For the Logo I've used:
[Canva](https://www.canva.com/)

### Media
- Background pictures were downloaded from [unsplash.com](https://unsplash.com/).

### Acknowledgements

- I've inspired myself on my partners job as a Head Chef and how mindful he is when it comes to being extra careful with what is served to clients and the potential harm that the lack of knowledge in the food industry might cause to the public.
- I'm grateful for the support and feedback from my family and friends.
- A special thank you to the Mentor Scott Nnaghor, for the support on doing this project.
