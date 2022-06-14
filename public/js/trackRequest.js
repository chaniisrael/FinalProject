
    fetch('/users/findRequests',{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({userName:"חני"}),
        }).then(function (res) {
        res.json().then(function (data) {
            console.log(data);
            if (data === 'הינך רשום לאתר') {
                document.getElementById('trackRequest2').innerHTML = data;
            } else {
                for (let i = 0; i < data.length; i++) {

                    document.getElementById('trackRequest2').innerHTML += `<div dir="rtl" class="container card mb-3" style="max-width: 50rem; box-shadow: 0 0 100px rgba(0,0,0,0.2);"><div><h6>  שם הבנק: ${data[i].nameBank} </h6>
                                                                             <h6>גובה הבקשה: ${data[i].requestHeight}</h6>
                                                                   <h6>גובה הון עצמי: ${data[i].amountOfEquity}</h6>
                                                                   <h6> ${data[i].applicationProcess}</h6></div></div>`;
                }
            }
        })
    }).catch(function (err) {
        console.log('Fetch Error :', err);
    });

//}