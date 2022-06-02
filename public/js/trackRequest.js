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
    fetch('/users/findUser',{
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

                document.getElementById('chani').innerHTML=data ;
                // document.getElementById("jbh").innerHTML+=<div><a href="register">הירשם עכשיו</a></div>` ;

            }
            else
                document.getElementById('chani').innerHTML = `<div><h6> שם: ${data[0].firstName} ${data[0].lastName}</h6>
                                                                             <h6>שם הבנק:</h6>
                                                                             <h6>בקשה בתהליך</h6></div>`;
            // document.getElementById("my11").submit();
        })
    }).catch(function (err) {
        // need to display error message!
        console.log('Fetch Error :', err);
    });

//}