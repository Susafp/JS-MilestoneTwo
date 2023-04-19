const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
//to display question counter ex. 1/20:
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
const quiz = document.getElementById('quiz');

let currentQuestion = {}; //object
let acceptingAnswers = false; //to create a delay to allow time to load
let score = 0;
let questionCounter = 0; //what question I am on 
let availableQuestions = []; //array of available questions, so they appear randomly
let questions = [ //each question will be an object
    {
        question: "What is a Food allergy?",
        choice0: "When the immune system’s “memory” registers the food as a threat and reacts inappropriately to it.", 
        choice1: "The result of consuming food that was not fully cooked.",
        choice2: "A person reaction to food that tastes bad.",
        choice3: "Caused by food contaminated with bacteria.",
        answer: 0 
    },
    {
        question: "Which option is NOT true?",
        choice0: "Food allergy symptoms can develop slowly, worsening over days to weeks", 
        choice1: "Usually food poisoning is not serious and lasts 24-48 hours",
        choice2: "Food allergy is the same as food poisoning",
        choice3: "Food allergy symptoms can develop rapidly, within 30 minutes",
        answer: 2 
    },
    {
        question: "How many named allergens are there that must be displayed on food labels and menu boards?",
        choice0: "10",
        choice1: "14",
        choice2: "23",
        choice3: "5",
        answer: 1
    },
    {
        question: "Which one of the fallowing options are groups of allergens?",
        choice0: "Milk, Eggs, Celery, Gluten and Nuts",
        choice1: "Molluscs, Crusttaceans an Fish and Sulphur Dioxide/ Sulphites",
        choice2: "Peanuts, Soya, Sesame seeds, Lupin, and Mustard",
        choice3: "All the above",
        answer: 3
    },
    {
        question: "Which one of the fallowing options is wrong?",
        choice0: "Peanuts are a Legume",
        choice1: "Peanuts are Nuts",
        choice2: "Peanuts are used as an ingredient in biscuits, cakes, curries, desserts, sauces",
        choice3: "Peanuts are also called groundnuts because they grow underground",
        answer: 1
    },
    {
        question: "A cellery allergy is usually caused by the use of its:",
        choice0: "Stalks, leaves, seeds and roots", 
        choice1: "Just the stalks and leaves",
        choice2: "Just the seeds and roots",
        choice3: "None of the above",
        answer: 0 
    },
    {
        question: "You can find celery in celery salt, salads, some meat products, soups and stock cubes. It is advisable for a celeriac to avoide:",
        choice0: "White wine", 
        choice1: "Ready Salted peanuts",
        choice2: "Egg and Avocado toast",
        choice3: "Bloody Mary Cocktail",
        answer: 3
    },
    {
        question:"Which of the fallowing flour options, is gluten free?",
        choice0: "Chickpea flour",
        choice1: "Rye flour",
        choice2: "Spelt flour",
        choice3: "Barley flour",
        answer: 0  
    },
    {
        question:"Which symptoms would someone suffering from a shelfish allergy present:",
        choice0: "Abdominal pain, nausea and vomiting", 
        choice1: "Nettle rash (otherwise known as hives or urticaria)",
        choice2: "Swelling in the face, lips, tongue, throat and/or mouth",
        choice3: "All de above",
        answer: 3
    },
    {
        question:"If someone is suffering from a severe allergic reaction (anaphylaxis), what should you do?",
        choice0: "Ask the customer to call a family member",
        choice1: "Give the customer a hot drink",
        choice2: "Call 999 and ask for an ambulance",
        choice3: "Send the customer home",
        answer: 2
    },
    {
        question: "If a customer in a restaurant asks whether a food contains an allergen and you don't know the answer, what should you do?",
        choice0: "Dismiss the comment",
        choice1: "Refer the customer to the manufacturer",
        choice2: "Ask the Chef or check the packaging",
        choice3: "Assure the customer that the food is safe",
        answer: 2
    },
    {
        question: "Which option would be the worse suited for someone that has a diary/milk allergy?",
        choice0: "Soya milk",
        choice1: "Lactose free milk",
        choice2: "Oat milk",
        choice3: "All the above",
        answer: 1  
    },
    {
        question: "Molluscs allergy is linked to crustacean allergy (Lobster, Prawn, Scampi, Crab and Shrimp). Catfish, some types of Salmon and Tilapia are types of fish which have also been identified as containing the same main allergen:",
        choice0: "Niacin",
        choice1: "Tropomyosin",
        choice2: "Omega-3",
        choice3: "B-12",
        answer: 1  
    },
    {
        question: "An allergic response may range from mild or moderate symptoms to a more severe reaction. Mild symptoms include:",
        choice0: "Nettle rash (otherwise known as hives or urticaria)",
        choice1: "Tingling or itchy feeling in the mouth",
        choice2: "Difficulty swallowing",
        choice3: "All the above",
        answer: 3
    },
    {
        question: "When ingested, Cashewnuts can cause difficulty breathing, headaches, swollen eyes and throat, stomach pain, and diarrhea. Their plant family, Anacardiaceae, also include:",
        choice0: "Pistachio and Pink Peppercorn",
        choice1: "Brazil nuts and Macadamia",
        choice2: "Peanuts and Pinenuts",
        choice3: "Chestnuts and Hazel Nuts",
        answer: 0
    },
    {
        question: "In case of a severe reaction a dramatic fall in blood pressure might occur. This is an anaphylactic shock. When this happens the person may:",
        choice0: "Become weak and floppy",
        choice1: "Have a sense of something terrible happening",
        choice2: "Collapse and loose consciousness",
        choice3: "All the above",
        answer: 3
    },
    {
        question: "Natasha's Law, come into force in 2021, after a girl named Natasha suffered an anaphylactic reaction to hidden sesame seeds, baked into the dough of the baguette. This caused her death later that day. Under this law, what are businesses required to do?",
        choice0: "Label all frozen foods on the premises with a full list of ingredients.",
        choice1: "Label certain foods that are prepared and pre-packaged by suppliers with further information.",
        choice2: "Label all fresh dairy products that they sell with a full list of ingredients.",
        choice3: "Label certain foods that they prepare and package on the premises with a full list of ingredients.",
        answer: 3
    },
    {
        question: "Soya is a staple ingredient in oriental food. Often found in bean curd, edamame beans, miso paste, textured soya protein, soya flour or tofu. It can also be found in:",
        choice0: "Ice cream",
        choice1: "Meat products",
        choice2: "Sauces and vegetarian products",
        choice3: "All the above",
        answer: 3
    },
    {
        question: "Sulphites can cause some people to suffer an allergy reaction. What are Sulphites used for?",
        choice0: "Flavour enhancer and Perserve freshness",
        choice1: "Perserve freshness and Growth hormone",
        choice2: "Colour enhancer and Flavour enhancer",
        choice3: "All the above",
        answer: 0
    },
    {
        question: "Sulphites can be found in:",
        choice0: "Dried fruit as raisins, apricots and prunes",
        choice1: "Some meat products and vegetable preservs",
        choice2: "Soft drinks, whine and beer",
        choice3: "All the above",
        answer: 3
    }
];

//constants SCORES:

const CORRECT_BONUS = 5;
const MAX_QUESTIONS = 20;

startQuiz = () => {
    questionCounter = 0; //to start at 0 
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score); //to display final score in end page
        //go to end page:
        return window.location.assign("end.html");
    }

    //to display question counter ex. 1/20:
    questionCounter++;

   progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    //update progress bar:
    progressBarFull.style.width = `${questionCounter / MAX_QUESTIONS * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex]; 
    question.innerText = currentQuestion.question;  // populates the question container

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]; // populates the choices options
    });

    //eliminate current question from the next random selection:
    availableQuestions.splice(questionIndex, 1); 

    //to allow the user to answer the questions:
    acceptingAnswers = true; 
};


choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        //console.log(selectedAnswer == currentQuestion.answer)
        //was to check if returns true/false for correct/incorrect answers
        
        /*const classToApply = "incorrect";
        if(selectedAnswer == currentQuestion.answer){
            classToApply = "correct";
        }*/    //same as underneath:

        const classToApply = selectedAnswer == currentQuestion.answer? "correct": "incorrect";
        //console.log(classToApply);  //its rightly returning correct/ incorrect
        
        //calling incrementScore function:
        if (classToApply === "correct"){   
            incrementScore(CORRECT_BONUS); //5 points for each correct answer
        }

        selectedChoice.parentElement.classList.add(classToApply);
        //red/green visible for correct/incorrect answers, but it doesnt dissapear, so:
        // I set a time out fallowed by a get new question:
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });                
});

// increment score function:
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
    
}

startQuiz();



