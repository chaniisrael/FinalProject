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
fetch('/users/findRequestsDirected',{
    method:'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({userName:"חני"}),
}).then(function (res) {
    res.json().then(function (data) {
        console.log(data);
        if(data==='הינך רשום לאתר')
        {

            document.getElementById('chani2').innerHTML=data;
        }
        else {
            for (let i = 0; i < data.length; i++) {

                document.getElementById('chani2').innerHTML += `<div  class="container card mb-3  w-20" style="max-width: 50rem;"><h6> שם הלקוח: ${data[i].nameCustomer} </h6>
                                                                   <h6>גובה הבקשה: ${data[i].requestHeight}</h6>
                                                                   <h6>גובה הון עצמי: ${data[i].amountOfEquity}</h6>
                                                                   <h6>קישורי: ${data[i].amountOfEquity}</h6>

                                                               </div>`;
            }
        }
        // document.getElementById("my11").submit();
    })
}).catch(function (err) {
    // need to display error message!
    console.log('Fetch Error :', err);
});

//}