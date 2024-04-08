/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

const exercises = [
    {
        name: "Dumbbell Bench Press",
        description: "A freeweight exercise targetting the medial chest, triceps, and front shoulders.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2023/07/Reverse-grip-dumbbell-bench-press.png",
        categories: ["chest", "triceps", "shoulders", "freeweight"]
    },
    {
        name: "Incline Chest Press",
        description: "A machine exercise targetting the upper chest, triceps, and front shoulders.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mREvNC0-cEnEKyhPi__R5Q9ryojsYRFYbCGVUsByzw&s",
        categories: ["chest", "triceps", "shoulders", "freeweight"]
    },
    {
        name: "Chest Fly",
        description: "A machine exercise targetting the entire chest.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/12/Machine-Fly-resized.png",
        categories: ["chest", "machine"]
    },
    {
        name: "Bodyweight/Weighted Dips",
        description: "A bodyweight or freeweight exercise targetting the lower chest, triceps, and shoulders.",
        imageURL: "https://pump-app.s3.eu-west-2.amazonaws.com/exercise-assets/17551101-Weighted-Tricep-Dips_Upper-Arms_small.jpg",
        categories: ["chest", "triceps", "shoulders", "bodyweight"]
    },
    {
        name: "Barbell Bench Press",
        description: "A compound freeweight exercise targetting the chest, triceps, and shoulders.",
        imageURL: "https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Barbell-Bench-Press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4",
        categories: ["compound", "chest", "triceps", "shoulders"]
    },
    {
        name: "Dumbbell Shoulder Press",
        description: "A freeweight exercise targetting the front shoulders and triceps",
        imageURL: "https://legionathletics.com/wp-content/uploads/2023/10/Dumbbell-Shoulder-Press-before-after.png",
        categories: ["triceps", "shoulders", "freeweight"]
    },
    {
        name: "Lateral Dumbbell Raise",
        description: "A freeweight exercise targetting the medial fibers of the shoulder",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/05/dumbbell-lateral-raise-resized.png",
        categories: ["freeweight", "shoulders"]
    },
    {
        name: "Rear Delt Cable Fly",
        description: "Cable Machine exercise targetting the rear delts (shoulder).",
        imageURL: "https://anabolicaliens.com/cdn/shop/articles/5e628d3bea2ff808d2e7abcd_standing-cable-rear-delt-fly-exercise-anabolic-aliens-p-500.png?v=1644926615",
        categories: ["machine", "cable", "shoulders"]
    },
    {
        name: "Lat Pulldown",
        description: "Cable Machine exercise targetting the latissimus dorsi of the back (lats) and biceps.",
        imageURL: "https://training.fit/wp-content/uploads/2020/03/lat-pulldown-maschine-800x448.png",
        categories: ["machine", "cable", "back", "lats", "biceps"]
    },
    {
        name: "Seated Machine Row",
        description: "A machine exercise targetting the mid-back and biceps.",
        imageURL: "https://training.fit/wp-content/uploads/2020/02/rudern-geraet.png",
        categories: ["machine", "back", "biceps"]
    },
    {
        name: "Barbell/Smith Machine Row",
        description: "A compound exercise working the upper mid-back and rhomboids and biceps.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/10/Bent-over-barbell-row.png",
        categories: ["compound", "machine", "back", "biceps"]
    },
    {
        name: "Dumbbell Bicep Curl",
        description: "A freeweight exercise working all heads of the bicep",
        imageURL: "https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638182915251-SYYRLB4Q59U6DKLRL6X7/Standing%2BDumbbell%2BBiceps%2BCurl.png",
        categories: ["freeweight", "biceps", "arms"]
    },
    {
        name: "Spider Curl",
        description: "A freeweight exercise working the long head of the bicep",
        imageURL: "https://learn.podium.school/wp-content/uploads/2023/11/image-125-1024x501-1.png",
        categories: ["freeweight", "biceps", "arms"]
    },
    {
        name: "Bicep Cable Curl",
        description: "A cable exercise working both heads of the bicep",
        imageURL: "https://cdn.shopify.com/s/files/1/1633/7705/files/ez_bar_cable_curl_480x480.jpg?v=1675363522",
        categories: ["cable", "biceps", "arms"]
    },
    {  
        name: "Hammer Curl",
        description: "A freeweight or cable exercise targetting the brachioradialis of the forearm",
        imageURL: "https://training.fit/wp-content/uploads/2020/02/bizeps-hammercurls-800x448.png",
        categories: ["cable", "freeweight", "biceps", "forearms", "arms"]
    },
    {
        name : "Tricep Pushdown",
        description: "A cable exercise targetting all three heads of the tricep",
        imageURL: "https://s3assets.skimble.com/assets/2358738/image_iphone.jpg",
        categories: ["cable", "triceps", "arms"]
    },
    {
        name: "Barbell Squat",
        description: "A compound exercise hitting the quads, hamstrings, glutes, and core/lower back.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/10/barbell-squat-resized-FIXED-2.png",
        categories: ["compound", "legs", "glutes"]
    },
    {
        name: "Lying Leg Curl",
        description: "A machine exercise targetting the hamstrings and glutes.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/10/lying-leg-curl-resized.png",
        categories: ["machine", "hamstrings", "legs", "glutes"]
    },
    {
        name: "Standing Calf Raise",
        description: "A bodyweight/machine exercise targetting the calves.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/10/Lever-Standing-Calf-Raise-resized.png",
        categories: ["machine", "bodyweight", "legs", "calves"]
    },
    {
        name: "Leg Extensions",
        description: "A machine exercise targetting the quads.",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2016/05/lever-leg-extension-resized.png",
        categories: ["machine", "legs", "quads"]
    },

    {
        name: "Romanian Deadlift",
        description: "A compound exercise targetting the hamstrings and the glutes.",
        imageURL: "https://cdn.shopify.com/s/files/1/0645/8762/8770/files/RDL_Muscles_worked_480x480.jpg?v=1702889620",
        categories: ["barbell", "compound", "legs", "hamstrings", "glutes"]
    },
    {
        name: "Hip Abduction",
        description: "A machine/cable exercise targetting the hip abductors",
        imageURL: "https://weighttraining.guide/wp-content/uploads/2017/06/Cable-hip-abduction-resized.png",
        categories: ["machine", "cable", "legs", "hips"]
    },
    {
        name: "Hip Adduction",
        description: "A machine/cable exercise hitting the hit adductors",
        imageURL: "https://s3.amazonaws.com/prod.skimble/assets/2534653/image_iphone.jpg",
        categories: ["machine", "cable", "legs", "hips"]
    },
    {
        name: "Hack Squat",
        description: "A machine exercise to replicate the barbell squat, also targetting the quads, hamstrings, and glutes.",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsp67ahaipsDSOdi2baigTmq4ZsBvEaxQC2T9_hVD6g&s",
        categories: ["machine", "legs", "glutes", "hamstrings"]
     },
    {
        name: "Finger Workout",
        description: "Spam the 'Remove A Card!' button for a finger workout",
        categories: ["misc"]
    }
    
];
// This is an array of strings (TV show titles)
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < exercises.length; i++) {
        let exercise = exercises[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, exercise.name, exercise.description,  exercise.imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newName, newDescription, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newName;

    const cardDescription = card.querySelector(".description");
    cardDescription.textContent = newDescription;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newName + " Image";

}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.");
}

function removeLastCard() {
    exercises.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function search() {
    let input = document.getElementById('searchbar').value.toLowerCase(); // Get the value of the search input and convert to lowercase
    const cardContainer = document.getElementById("card-container"); // Get the container for the cards
    const cards = cardContainer.querySelectorAll(".card"); // Get all the cards

    cards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase(); // Get the title of each card and convert to lowercase
        const description = card.querySelector(".description").textContent.toLowerCase(); // Get the description of each card and convert to lowercase
        
        // Check if the title or description contains the search input
        if (title.includes(input) || description.includes(input)) {
            card.style.display = "block"; // Show the card if it matches the search
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match the search
        }
    });
}

function filterChest(){
    const cardContainer = document.getElementById("card-container"); // Get the container for the cards
    const cards = cardContainer.querySelectorAll(".card");
    cards.forEach(card=>{
        const description = card.querySelector(".description").textContent.toLowerCase(); 
        if (description.includes("chest")) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none"; 
        }
    })
}

function randomExercise() {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const randomExercise = exercises[randomIndex];
    displayExercise(randomExercise);
}

function displayExercise(exercise) {
    console.log("Random Exercise:", exercise);
    alert("Random Exercise:\n" + exercise.name + "\n" + exercise.description);
}