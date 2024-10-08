
//displays the date and time in the header of every page
document.getElementsByTagName("header")[0].innerHTML += new Date();



//find a cat form client side verification
document.getElementById('catForm').addEventListener('submit', 
    function(event) {

    //check to see if cat breed is selected
    var catBreeds = document.getElementsByClassName('catBreeds');
    var selected = false;

    for (var i = 0; i < catBreeds.length; i++) {
        if (catBreeds[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        alert('Please select a cat breed');
        event.preventDefault();
    }

    //check to see if preferred gender is selected
    var catGenders = document.getElementsByClassName('catGenders');
    var genderSelected = false;

    for (var i = 0; i < catGenders.length; i++) {
        if (catGenders[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert('Please select a preferred cat gender');
        event.preventDefault();
    }

});


//find a dog form client side verification
document.getElementById('dogForm').addEventListener('submit',
    function(event) {

    //check to see if dog breed is selected
    var dogBreeds = document.getElementsByClassName('dogBreeds');
    var selected = false;

    for (var i = 0; i < dogBreeds.length; i++) {
        if (dogBreeds[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        alert('Please select a dog breed');
        event.preventDefault();
    }

    //check to see if preferred gender is selected
    var dogGenders = document.getElementsByClassName('dogGenders');
    var genderSelected = false;

    for (var i = 0; i < dogGenders.length; i++) {
        if (dogGenders[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        alert('Please select a preferred dog gender');
        event.preventDefault();
    }

});



//pet giveaway form client side verification
document.getElementById('petGiveaway').addEventListener('submit',
    function(event){

        //check to see if the user has a cat or dog
        var catOrDog = document.getElementsByClassName('catOrDog');
        var selected = false;

        for(var i = 0; i < catOrDog.length; i++){
            if(catOrDog[i].checked){
                selected = true;
                break;
            }
        }
        if(!selected){
            alert('Please select if your animal is a cat or dog');
            event.preventDefault();
        }

        //check to see if the pet is male or female
        var mOrF = document.getElementsByClassName('maleOrFemale');
        selected = false;

        for(var i = 0; i < mOrF.length; i++){
            if(mOrF[i].checked){
                selected = true;
                break;
            }
        }
        if(!selected){
            alert('Please select if your animal is a cat or dog');
            event.preventDefault();
        }

        //check first and last name text field
        var fnContent = document.getElementById('fname').textContent;
        var lnContent = document.getElementById('lname').textContent;

        if(fnContent == '' || lnContent == ''){
            alert('Please enter your full name');
            event.preventDefault();
        }

        //check the users email
        var email = document.getElementById('giveawayEmail').textContent;

        if(email == ''){
            alert('Please enter your email');
            event.preventDefault();
        }

        //check the animal breed and the age of the animal
        var animalBreed = document.getElementById('breed').textContent;

        if(animalBreed == ''){
            alert('Please enter your email');
            event.preventDefault();
        }

        //check age of animal
        var age =  parseInt(document.getElementById('age').textContent);

        if(isNaN(age)){
            alert('Please enter a valid age (no decimals please)');
            event.preventDefault();
        }

    }
);