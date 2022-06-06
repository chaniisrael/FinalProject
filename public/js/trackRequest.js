// document.addEventListener('DOMContentLoaded', function () {
    debugger;
//     document.getElementById("mm").addEventListener("onsubmit", fetch1);
//
//
//
// }, false);
//
// function fetch1(e)
// {
    fetch('/users/findRequests',{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userName:"חני"}),
        }).then(function (res) {
        res.json().then(function (data) {
            let nn= "בקשה בתהליך"
            console.log(data);
            if (data === 'הינך רשום לאתר') {

                document.getElementById('chani').innerHTML = data;
                // document.getElementById("jbh").innerHTML+=<div><a href="register">הירשם עכשיו</a></div>` ;

            } else {
                for (let i = 0; i < data.length; i++) {
                   if( data[i].applicationProcess===1)
                       nn="הבקשה אושרה"
                    document.getElementById('chani').innerHTML += `<div class="container card mb-3" style="max-width: 50rem;"><div><h6>  שם הבנק: ${data[i].nameBank} </h6>
                                                                             <h6>גובה הבקשה: ${data[i].requestHeight}</h6>
                                                                   <h6>גובה הון עצמי: ${data[i].amountOfEquity}</h6>
                                                                   <h6> ${nn}</h6></div></div>`;
                }
            }
            // document.getElementById("my11").submit();
        })
    }).catch(function (err) {
        // need to display error message!
        console.log('Fetch Error :', err);
    });

//}