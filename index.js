//Обработка нажатия кнопки "Enter" внутри поля ввода.
document.querySelector('.ipInput').addEventListener('keydown', function (k) {
    if (k.keyCode === 13) {
        checkIp()
    }
})

//Точка входа в скрипт. Функция начинает работу после нажатия на кнопку "Проверить"
function checkIp() {
    let inputValue = document.querySelector('.ipInput').value //Получение строчки из поля ввода
    let arrayInput = inputValue.split('.') // Деление строки на части ip-адреса
    itsIp = checkArray(arrayInput) // Вызов функции проверки

    //Вывод сообщения 
    if (itsIp) {
        document.querySelector('.message').innerHTML = "<p class=\"alert ok\">Это ip-адрес</p>"
    }
    else
        document.querySelector('.message').innerHTML = "<p class=\"alert error\">Это не ip-адрес</p>"
}

// Функция проверки
function checkArray(array) {
    //Блок try/catch необходим для корректной обработки массив не содержащих чисел
    try {
        newArray = new Array() // Объявляем новый массив

        // Если длина полученного на проверку массива равна 4
        if (array.length == 4) {
            array.forEach(element => {
                newArray.push(+element) // То соберется новый массив. "+element" приводит пременную к числовому типу.
            });                         // Здесь может произойти ошибка которая аварийно остановит скрипт, в том случае если в поле ввода не содержалось чисел
            if (newArray[0] < 256 && newArray[1] < 256 && newArray[2] < 256 && newArray[3] < 256) // Проверка всех чисел на соответсвие ip-адресу
                return newArray // Функция вернет обработанный массив если изначально получила ip-адрес
            else
                return // Выход из функции если не какое то число ip-адреса оказалось больше 255
        }
        else
            return // Выход из функции если длина ip-адреса не равна 4
    }
    catch (e) {
        return // Выход из функции если введенная строка не является ip-адресом
    }
}