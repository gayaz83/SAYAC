// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count sheeps on the field!")


let countEl = document.getElementById("count-el") 
let saveEl = document.getElementById("save-el")

let count = 0

function increment () {
    count += 1
    countEl.innerText = count
}

function save () {
    countStr = count
    saveEl.innerText += " " + countStr
    count = 0
    countEl.innerText = 0
}
