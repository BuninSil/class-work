const calculateShipping = () => {
    const senderFirstName = document.getElementById("senderFirstName").value;
    const senderLastName = document.getElementById("senderLastName").value;
    const senderMiddleName = document.getElementById("senderMiddleName").value;
    const recipientFirstName = document.getElementById("recipientFirstName").value;
    const recipientLastName = document.getElementById("recipientLastName").value;
    const recipientMiddleName = document.getElementById("recipientMiddleName").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const shippingType = document.getElementById("shippingType").value;
    const country = document.getElementById("country").value;
    let shippingCost = 0;

    if (shippingType === "regular") {
        shippingCost = weight * 5;
        if ((country === "USA" || country === "Canada") && weight <= 5) {
            shippingCost = 0;
        }
        if (weight > 10) {
            shippingCost *= 2;
        }
    } else if (shippingType === "express") {
        shippingCost = weight * 10 + 20;
    }

    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("results");

    modalContent.innerHTML = "<p><strong>Отправитель:</strong> " + senderLastName + " " + senderFirstName + " " + senderMiddleName + "</p>" +
        "<p><strong>Получатель:</strong> " + recipientLastName + " " + recipientFirstName + " " + recipientMiddleName + "</p>" +
        "<p><strong>Вес посылки:</strong> " + weight.toFixed(2) + " кг</p>" +
        "<p><strong>Тип доставки:</strong> " + (shippingType === "regular" ? "Обычная" : "Экспресс") + "</p>" +
        "<p><strong>Страна доставки:</strong> " + country + "</p>" +
        "<p><strong>Стоимость доставки:</strong> $" + shippingCost.toFixed(2) + "</p>";

    modal.style.display = "block";
}

const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
