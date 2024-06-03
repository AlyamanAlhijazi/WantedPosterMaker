//input van inputveld opvangen
const nameInput = document.getElementById ('nameInput') 

// de naambox in de poster opvangen
const nameBox = document.getElementById('nameBox')

function fillName(){
    nameBox.textContent = nameInput.value 
}
nameInput.addEventListener('input', fillName)
console.log("nameInput")


const genderSelect = document.getElementById('gender')
const charachterImage = document.querySelector('.charachter-box img')
const bountyAmount = document.getElementById('bounty-amount')

let bounty = 0
let genderBounty = 0
let potionBounty = 0
let weaponBounty = 0
let animalBounty = 0

//functie om de totale bounty te berekenen
function calculateBounty(){
    bounty = genderBounty + potionBounty + weaponBounty + animalBounty
    bountyAmount.textContent = bounty
} 

//functie om de gender keuze te verwerken
function genderChange(){
    // waarde van de geselecteerde gender nemen
    const selectedGender = genderSelect.value 
    
    //image pad bepalen op basis van geseelecteerde gender
    let imageUrl = ""
    if (selectedGender === 'male'){
        imageUrl = "images/Male.jpg" 
        genderBounty = 500000 
    } else if (selectedGender === 'female'){
        imageUrl = "images/Female.jpg"
        genderBounty = 500000 
    }

    charachterImage.src = imageUrl
    calculateBounty()  
}
genderSelect.addEventListener('change', genderChange) 


const potionSelect = document.getElementById('potion')
const potionImage = document.querySelector('.potion-box img')

//functie om de Potion keuze te verwerken
function potionChange(){
    //waarde van de geselecteerde Potion nemen
    const selectedPotion = potionSelect.value 

    //image pad bepalen op basis van geselecteerde Potion
    let imageUrl = ""
    if (selectedPotion === 'Fire Potion'){
        imageUrl = "images/Red potion.jpg"
        potionBounty = 90000
    } else if (selectedPotion === 'Water Potion'){
        imageUrl = "images/Blue potion.jpg"
        potionBounty = 80000
    } else if (selectedPotion === 'Wind Potion'){
        imageUrl = "images/Green potion.jpg"
        potionBounty = 70000
    } else if (selectedPotion === 'Gravity Potion'){
        imageUrl = "images/Purple potion.jpg"
        potionBounty = 60000
    }

    potionImage.src = imageUrl
    calculateBounty()
}
potionSelect.addEventListener('change', potionChange)


const weaponSelect = document.getElementById('weapon')
const weaponImage = document.querySelector('.weapon-box img')

//functie om de Weapon keuze te verwerken
function weaponChange (){
    //waarde van de geselecteerde wapen nemen
    const selectedWeapon = weaponSelect.value

    //image pad bepalen op basis van geselecteerde Weapon
    let imageUrl = ""
    if (selectedWeapon === 'Cross'){
        imageUrl = "images/cross.jpg"
        weaponBounty = 10000
    } else if (selectedWeapon === 'Dagger 0'){
        imageUrl = "images/Dagger 0.jpg"
        weaponBounty = 20000
    } else if (selectedWeapon === 'Dagger 1'){
        imageUrl = "images/Dagger 1.jpg"
        weaponBounty = 25000
    } else if (selectedWeapon === 'Eye Of Life'){
        imageUrl = "images/Eye Of Life.jpg"
        weaponBounty = 60000
    } else if (selectedWeapon === 'Gun 0'){
        imageUrl = "images/Gun 0.jpg"
        weaponBounty = 40000
    } else if (selectedWeapon === 'Gun 1'){
        imageUrl = "images/Gun 1.jpg"
        weaponBounty = 40000
    } else if (selectedWeapon === 'Hammer'){
        imageUrl = "images/Hammer.jpg"
        weaponBounty = 35000
    } else if (selectedWeapon === 'Lamp'){
        imageUrl = "images/Lamp.jpg"
        weaponBounty = 45000
    } else if (selectedWeapon === 'Resurrection bell'){
        imageUrl = "images/Resurrection bell.jpg"
        weaponBounty = 55000
    }

    weaponImage.src = imageUrl
    calculateBounty()
}    
weaponSelect.addEventListener('change', weaponChange)


const animalSelect = document.getElementById('criminal animal')
const animalImage = document.querySelector('.animal-box img')

//functie om de animal keuze te verwerken
function animalChange(){
    const selectedAnimal = animalSelect.value 

    //image pad bepalen op basis an geselecteerde animal
    let imageUrl = ""
    if (selectedAnimal === 'Monkey'){
        imageUrl = "images/Monkey.jpg"
        animalBounty = 80000
    } else if (selectedAnimal === 'Dog'){
        imageUrl = "images/Dog.jpg"
        animalBounty = 75000
    } else if (selectedAnimal === 'Crow'){
        imageUrl = "images/Crow.jpg"
        animalBounty = 70000
    }

    animalImage.src = imageUrl 
    calculateBounty()
}
animalSelect.addEventListener('change', animalChange)
