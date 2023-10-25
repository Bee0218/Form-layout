
function isNotEmpty(elem, errMsg) {
    if(elem.value.length == 0) {
        alert(errMsg);
        elem.focus();
        return false;
    }
    return true;
}

function isLetters(elem, errMsg) {
    var alphabetExpression = /^[a-zA-Z\s]*$/;
    if (elem.value.match(alphabetExpression)) {
        return true;
    } else {
        alert(errMsg);
        elem.focus();
        return false;
    }
}

function isAlphaNumeric(elem, errMsg) {
    var alphanumericExpression = /^[a-zA-Z0-9\s]*$/;
    if (elem.value.match(alphanumericExpression)) {
        return true;
    } else {
        alert(errMsg);
        elem.focus();
        return false;
    }
}

function isPhone(elem, errMsg) {
    var phoneExpression = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (elem.value.match(phoneExpression)) {
        return true;
    } else {
        alert(errMsg);
        elem.focus();
        return false;
    }
}

function getExchangeFormat(num) {
    return "(" + num.slice(0,3) + ")" + num.slice(3);
}

function formValid(name, address, phone) {
    if (isNotEmpty(name, 'Name field required.') && isLetters(name, 'Name must be only letters')) {
        if (isNotEmpty(address, 'Address field required.') && isAlphaNumeric(address, 'Address must contain only numbers or letters.')) {
            if (isNotEmpty(phone, 'Phone field required.') && isPhone(phone, 'Phone format must be "xxx-xxx-xxxx".')) {
                document.getElementById('userName').innerHTML = "Name: " + name.value;
                document.getElementById('userAddress').innerHTML = "Address: " + address.value;
                document.getElementById('userPhone').innerHTML = "Phone: " + getExchangeFormat(phone.value) ;
                return true;
            }
        }
    }
    document.getElementById('userName').innerHTML = "";
    document.getElementById('userAddress').innerHTML = "";
    document.getElementById('userPhone').innerHTML = "";
    return false;
}

function count1() {
    var chars = document.getElementById('Box1').value.length;
    var counter = document.getElementById('count1')
    counter.innerHTML = chars;
}

function count2() {
    var textBox = document.getElementById('Box2');
    var chars = textBox.value.replace(/[^a-zA-Z]/g, '').length;
    var counter = document.getElementById('count2')
    counter.innerHTML = chars;
}


function checkProtocol(link, image) {
    if (link.slice(0,5) == "https") {
        image.src = "lab04images/closed-green-padlock.png";
        image.style.height = "20px";
        image.style.width = "20px";
    } else {
        image.src = "lab04images/open-red-padlock.png";
        image.style.height = "20px";
        image.style.width = "20px";
    }
}

function checkAllSites() {
    checkProtocol(document.getElementById('website1').innerHTML, document.getElementById('lock1'));
    checkProtocol(document.getElementById('website2').innerHTML, document.getElementById('lock2'));
    checkProtocol(document.getElementById('website3').innerHTML, document.getElementById('lock3'));
    checkProtocol(document.getElementById('website4').innerHTML, document.getElementById('lock4'));
}
