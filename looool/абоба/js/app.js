const saveData = () => {

    let name = document.querySelector('#Name').value;
    let description = document.querySelector('#description').value;
    let code = document.querySelector('#code').value;
    let price = document.querySelector('#price').value;
    let status = document.querySelector('#status').value;
    let imageInput = document.querySelector('#image').files[0];
    //const file = imageInput.files[0];


    let src = URL.createObjectURL(imageInput);
    let storeData = JSON.parse(localStorage.getItem("userData")) || [];

    // Объект с хранением переменных
    let userData = {
        Name: name,
        description: description,
        code: code,
        price: price,
        status: status,
        img:src
    }
    storeData.push(userData);

    localStorage.setItem("userData", JSON.stringify(storeData));
    getData();
    
}

const getData = () => {

let storeData = JSON.parse(localStorage.getItem("userData"))
let dataList = document.querySelector('#dataList')
dataList.innerHTML = "";



    if (storeData && storeData.length > 0) {

        storeData.forEach(function(userData) {
            dataList.innerHTML += "<li>Фамилия: "+ userData.Name + "</li>" ;
            dataList.innerHTML += "<li>Имя: "+ userData.description + "</li>" ;
            dataList.innerHTML += "<li>Отчество: "+ userData.code + "</li>" ;
            dataList.innerHTML += "<li>Статус: "+ userData.price + "</li>" ;
            dataList.innerHTML += "<li>Мобила: "+ userData.status + "</li>" ;
            dataList.innerHTML += `<img src="${userData.imageInput}" ></img>`;
            dataList.innerHTML += "<hr>" ;
            dataList.innerHTML += "<br><br>" ;
    });

    } else {
        dataList.innerHTML = "<li>Данных нема</li> ";
    }

}

window.onload = function() {
    
    getData();
}