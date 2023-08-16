import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://my-cart-2a070-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, "items")

const addButton = document.getElementById('add-button')
const message = document.getElementById("input-field");


addButton.addEventListener('click', function() {
    let cartItem = message.value
    push(itemsInDB, cartItem)
    console.log(`${cartItem} added to the database`)
} )
