let count = 0
let myCount = document.getElementById('counter')
let saveCount = document.getElementById('save-btn')
let preCount = document.getElementById('previous-btn')
let addCount = document.getElementById('add-up')
function increment(){
    count += 1
    myCount.textContent = count
}


function save(){
    let strCount = count + "-"
    saveCount = count
    preCount.textContent += strCount
    myCount.textContent = 0
    count = 0


}