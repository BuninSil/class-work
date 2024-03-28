const saveData = () => {
    // Получаем данные из всех полей
    let lastName = document.querySelector('#lastName').value;
    let firstName = document.querySelector('#firstName').value;
    let middleName = document.querySelector('#middleName').value;

    let status = document.querySelector('#status').value;

    if (  status == "нига"  ) {

        let storeBook = JSON.parse(localStorage.getItem("Book")) || [];
        let Book = {
            lastName: lastName,
            firstName: firstName,
            middleName: middleName,
      
            status: status
        }
        storeBook.push(Book);

        localStorage.setItem("Book", JSON.stringify(Book));
    } else if ( status == "путь" ) {

        // Запрос на проверку данных
        let storeTravel = JSON.parse(localStorage.getItem("Travel")) || [];


        // Объект с хранением переменных 
        let Travel = {
            lastName: lastName,
            firstName: firstName,
            middleName: middleName,

            status: status
        }
        

        // Добавление в локальное хранилище
        storeTravel.push(Travel);

        // Сохранение данных в локальном хранилище
        localStorage.setItem("Travel", JSON.stringify(Travel));



    }

    // Вызываем функцию, которая будет отображать добавленные записи
    getData();

}
const getData = () => {
    let storeBook = JSON.parse(localStorage.getItem("Travel"));
    let storeTravel = JSON.parse(localStorage.getItem("Book"));
    let dataList = document.querySelector('#dataList');
    dataList.innerHTML = "";

    if ( storeBook && storeBook.length > 0 ) {
        storeBook.forEach(function(Book, index) {
            dataList.innerHTML += "<li>Книга: " + Book.lastName + "</li>"
            dataList.innerHTML += "<li>Дата: " + Book.firstName + "</li>"
            dataList.innerHTML += "<li>Описание: " + Book.middleName + "</li>"
            
            dataList.innerHTML += "<li>Тип: " + Book.status + "</li>"
            dataList.innerHTML += "<button onclick='deleteData("+ index +")'> Удалить </button>"
            dataList.innerHTML += "<hr>";
            dataList.innerHTML += "<br><br>";
        });
    } else if (storeTravel && storeTravel.length > 0 ) {
        storeTravel.forEach(function(Travel, index) {
            dataList.innerHTML += "<li>Путь: " + Travel.lastName + "</li>";
            dataList.innerHTML += "<li>Дата: " + Travel.firstName + "</li>";
            dataList.innerHTML += "<li>Описание: " + Travel.middleName + "</li>";
            
            dataList.innerHTML += "<li>Тип: " + Travel.status + "</li>";
            dataList.innerHTML += "<button onclick='deleteData("+ index +")'> Удалить </button>";
            dataList.innerHTML += "<hr>";
            dataList.innerHTML += "<br><br>";
        });
    } else {
        dataList.innerHTML += "<li>Данные не найдены</li>";
    }
}

// вызов функции getData() по загрузке страницы
window.onload = function() {

    getData();
}

const deleteData = (index) => {

    let Book = JSON.parse(localStorage.getItem("Book"));
    let Travel = JSON.parse(localStorage.getItem("Travel"));
    storeData.splice(index, 1);
    localStorage.setItem("Book", JSON.stringify(Book));
    localStorage.setItem("Travel", JSON.stringify(Travel));
    getData();
}