window.addEventListener('load',  e =>{
    // display post todo app
    displayData();
})


const mainAddBtn = document.getElementById("mainAddBtn");
const itemsContainer = document.querySelector(".items");
const delBtn = document.getElementsByClassName('clear-btn');


// model box
const modelBox = document.getElementsByClassName("modelbox");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addContentBtn = document.getElementById("submitBtn");
const modelCloseBtn = document.getElementById("modelCloseBtn");


// alert Box
const alertBox = document.querySelector(".alertBox");
const alertOk = document.getElementById("dialogId");
const alertCancel = document.getElementById("dialogCancel");

// json data

var jsonData = {
    allData: [
    {
        "_id": 1,
        "title":"how are today aditya ",
        "content": "defenetly final sections"
    },
    {
        "_id": 2,
        "title": "join online class",
        "content": "i have to join online class on 12:30 P.M."
    },
    {
        "_id": 3,
        "title": "have to go on mall today",
        "content": "i have to buy some beauty, Jeans, shirt and tshirt product from mall"
    },
    {
        "_id": 4,
        "title": "3:30 PM physics classes ",
        "content": "we have to take mayank sir class at 3:30 PM tomorrow. a man going to arah to take classes"
    }
]
}





// event listener
// show model box event
mainAddBtn.addEventListener('click', showModelBox);
//model close btn event
modelCloseBtn.addEventListener('click', hideModelBox);
// item delete button event
addEventListenerToDeleteBtn();

function addEventListenerToDeleteBtn(){
    for (var i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click', deleteItems)
    }
}
// add item to db and view event
addContentBtn.addEventListener("click", (e)=>{
    addDataToDB(displayData)
});





function showModelBox(){
    modelBox[0].classList.remove("invisible");
}

function hideModelBox(){
    modelBox[0].classList.add("invisible");
}

function addDataToDB(callback){
    if (titleInput.value != "" && contentInput.value != "") {
        const id = jsonData.allData.length +1;
    
       var newID =  jsonData.allData.push({
            "_id": parseInt(id),
            "title": titleInput.value.toString(),
            "content": contentInput.value.toString()
        });

        console.log(newID);
        console.log(id);
        
        
        
        if (newID === id) {
            clearFormData();
            hideModelBox();
            callback()
        }

        
    }
    addEventListenerToDeleteBtn();
}

function displayData(){

    itemsContainer.innerHTML = ``; 
    const data = jsonData.allData
    console.log(data.length);
    
    for(var i = data.length - 1; i >= 0; i--){
        console.log(data[i]);
        
        if (data[i] != null && data[i] !== "empty")  {
            var dataID = data[i]._id;
            var dataTitle = data[i].title;
            var dataContent = data[i].content;
        }else {
          return
        }
        
        const templates = `<div id= "${dataID}" class="item-container">` + 
        `<div class="item-left">` + 
        `<div class="item-title">` +
         `<h1>${dataTitle}</h1>` + 
         `</div>` + 
         `<div class="item-content">` + 
         `<p>${dataContent}</p>` + 
         `</div>` + 
         `</div>` + 
         `<div class="item-right">`+ 
         `<div class="clear-btn" ` +
           `</div>` + 
           `</div>` + 
           `</div>`;

        itemsContainer.innerHTML += templates;
        
    }
}



console.log(jsonData.allData);


function deleteItems(e){
    const m = e.target.parentNode.parentNode.id
    jsonData.allData.forEach( data=>{
       if (data._id === parseInt(m)) {
           const index =jsonData.allData.indexOf(data);
           console.log(index);
           delete jsonData.allData[index];
           e.target.parentNode.parentNode.remove();
           displayData();
       }
       
    })
}


function clearFormData(){
    titleInput.value = ""
    contentInput.value = ""
}


function showToastMessage(msg){
    if (msg ==="" || msg === "undefined" || msg == null) return

}


