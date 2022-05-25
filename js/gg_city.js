function contains(arr, elem) {
    console.log(arr.find((i) => i === elem));
    return arr.find((i) => i === elem) !== undefined;
}

function change_step(){
    if(curPlayer.innerHTML === 'Первый игрок')
        curPlayer.innerHTML = 'Второй игрок'
    else
        curPlayer.innerHTML = 'Первый игрок'
}

function myClick(){
    var curPlayer = document.getElementById("curPlayer")
    let a = document.querySelector('.step').value;

    if(contains(has, a) || (has.length !== 0 && has[has.length - 1][has[has.length - 1].length - 1].toUpperCase() !== a[0])){
        if((curPlayer.innerHTML === 'Второй игрок' && contains(sec, a)) || (curPlayer.innerHTML === 'Первый игрок' && contains(fir, a))){
            alert(curPlayer.innerHTML + " проиграл, так как дважды повторили город");
            document.querySelector('.out').innerHTML = "";
            has = [];
            fir = [];
            sec = [];
            return;
        }

        alert(curPlayer.innerHTML + " повторите ход, так как вы повторили город: " + a + ". Выберите другой город");

        var secondtry = prompt("Введите число:  ")

        if(contains(has, secondtry) || (has.length !== 0 && has[has.length - 1][has[has.length - 1].length - 1].toUpperCase() !== secondtry[0])){
            alert(curPlayer.innerHTML + " проиграл, так как дважды повторили или неправильно назвал город");
            document.querySelector('.out').innerHTML = "";
            has = [];
            fir = [];
            sec = [];
            return;
        }

        if(curPlayer.innerHTML === 'Второй игрок')
            sec.push(a);
        else
            fir.push(a);

        has.push(secondtry);
        change_step();
        document.querySelector('.out').innerHTML += '<br/><b>' + secondtry;
        return;
    }

    has.push(a);

    change_step();
    document.querySelector('.out').innerHTML += '<br/><b>' + a;
}

document.querySelector('.push').onclick = myClick;
var has = [], fir = [], sec = []
