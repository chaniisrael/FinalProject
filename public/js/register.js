
document.addEventListener('DOMContentLoaded', function () {
    debugger;
     document.getElementById("submitPassword").addEventListener("click", password);

    document.getElementById("my23").addEventListener("onsubmit", login);
     document.querySelector("#nextRegister").addEventListener("click", login2);


}, false);

function login(event) {
    debugger;

    let userName = document.getElementById('userName').value;
     let password=  document.getElementById('password').value=window.btoa(document.getElementById('password').value);

    fetch('/users/findUserName',{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName:userName, password: password}),


    }).then(function (res) {
        res.json().then(function (data) {
            console.log('su' + data);
            if(data==='עדין לא נירשמת לאתר')
            {

                document.getElementById('error').innerHTML=data ;
                // document.getElementById("jbh").innerHTML+=<div><a href="register">הירשם עכשיו</a></div>` ;

            }
            else
                document.getElementById('error').innerHTML = data;
                document.getElementById("my11").submit();
        })
    }).catch(function (err) {
        // need to display error message!
        console.log('Fetch Error :', err);
    });

}
//--------------------------------------------------------------------
function login2(e) {
    e.preventDefault();
    let mail = document.getElementById('mail').value;

    console.log(mail);
    fetch('/users/findEmail', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({mail:mail}),


    }).then(function (res) {
        res.json().then(function (data) {
            console.log('su' + data);
            if (data === 'not exist') {

                document.getElementById("my22").submit();
            } else
            document.getElementById('error2').innerHTML = data;
        })
    }).catch(function (err) {
        // need to display error message!
        console.log('Fetch Error :', err);
    });
}
//--------------------------------------------------------
function password(e)
{
    debugger;
    console.log(e)
     document.getElementById('password').value=window.btoa(document.getElementById('password').value);
     document.getElementById('password2').value=window.btoa(document.getElementById('password2').value);

    // fetch('/register/save', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({password:password}),
    //
    //
    // }).then(function (res) {
    //     res.json().then(function (data) {
    //     //     console.log('su' + data);
    //     //     if (data === 'not exist') {
    //     //
    //     //         document.getElementById("my22").submit();
    //     //     } else
    //     //         document.getElementById('error2').innerHTML = data;
    //      })
    // }).catch(function (err) {
    //     // need to display error message!
    //     console.log('Fetch Error :', err);
    // });
}