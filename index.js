function checkIp() {
    let inputValue = document.querySelector('.ipInput').value
    let arrayInput = inputValue.split('.')
    itsIp = checkArray(arrayInput)


    if (itsIp) {

        document.querySelector('.message').innerHTML = "<p class=\"alert ok\">Это ip-адрес</p>"
    }
    else
        document.querySelector('.message').innerHTML = "<p class=\"alert error\">Это не ip-адрес</p>"
}

function checkArray(array) {
    try {
        newArray = new Array()

        if (array.length == 4) {
            array.forEach(element => {
                newArray.push(+element)
            });
            if (newArray[0] < 256 && newArray[1] < 256 && newArray[2] < 256 && newArray[3] < 256)
                return newArray
            else
                return
        }
        else
            return
    }
    catch (e) {
        return
    }
}