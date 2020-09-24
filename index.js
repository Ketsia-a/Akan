// var day = new Date("September 24, 2020");

// document.write(day.getDay())
function MakeArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = 0;
    }
}


days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

female = new MakeArray(7);
female[0] = "Ama"
female[1] = "Akosua"
female[2] = "Adwoa"
female[3] = "Abenaa"
female[4] = "Akua"
female[5] = "Yaa"
female[6] = "Afua"

male = new MakeArray(7);
male[0] = "Kwame"
male[1] = "Kwasi"
male[2] = "Kwadwo"
male[3] = "Kwabena"
male[4] = "Kwaku"
male[5] = "Yaw"
male[6] = "Kofi"


function compute(form) {
    var one = parseInt(form.date.value, 10)
    if ((one < 0) || (one > 31)) {
        alert("Day is out of range")
    }
    var two = parseInt(form.month.value, 10)
    if ((two < 0) || (two > 12)) {
        alert("Month is out of range")
    }
    var twox = parseInt(form.month.value, 10)
    var three = parseInt(form.year.value, 10)
    if (three < 1900) {
        alert("Are you that old?")
    }
    if (two == 1) {
        twox = 13;
        three = three - 1
    }
    if (two == 2) {
        twox = 14;
        three = three - 1
    }
    var step1 = parseInt(((twox + 1) * 3) / 5, 10)
    var step2 = parseInt(three / 4, 10)
    var step3 = parseInt(three / 100, 10)
    var step4 = parseInt(three / 400, 10)
    var step5 = one + (twox * 2) + step1 + three + step2 - step3 + step4 + 2
    var step6 = parseInt(step5 / 7, 10)
    var val0 = step5 - (step6 * 7)
    form.answer.value = days[val0]

    if (form.gender.value = "female") {

        form.akan.value = female[val0]
    }
    if (form.gender.value = "male") {
        form.akan.value = male[val0]
    }

}