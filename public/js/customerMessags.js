fetch('/users/findIfComments',{
    method:'post',
    headers: {
        'Content-Type': 'application/json'
    },
}).then(function (res) {
    res.json().then(function (data) {
        console.log(data);
        if(data[0].errorMessage )
        {
            sendEmail(" לצערנו לא ניתן להמשיך את הבקשה כרגע, ניתן לנסות שוב בעוד כחצי שנה "+data[0].errorMessage+"מבדיקת הנתונים עולה כי")

            document.getElementById('messags2').innerHTML = `<div dir="rtl" class="  container card mb-3" style="max-width: 50rem; box-shadow: 0 0 100px rgba(0,0,0,0.2);"><div class="error">
                                                                       <br>
                                                                        <h6>${data[0].errorMessage} ⚠</h6>
                                                                        <br>
                                                                   </div></div>`;
        }

        if (data[0].documentProcessed === '1') {
            sendEmail(" המערכת קלטה את המסמכים ועברה על הנתונים שלך אם ברצונך למצאו את הבנקים המתאימים ביותר לנתונים שלך היכנס לאתר המשכנתאות להמשך התהליך ")
            document.getElementById('messags1').innerHTML = `<div dir="rtl" class="container card mb-3" style="max-width: 50rem; box-shadow: 0 0 100px rgba(0,0,0,0.2);">
                                                                        <div><br>
                                                                                 המערכת קלטה את המסמכים ועברה על הנתונים שלך אם ברצונך למצאו את הבנקים המתאימים ביותר לנתונים שלך
                                                                         <input type="submit" value="לחץ לאישור הבקשה" class="btn btn-primary mb-3 formApproval2 " id="formApproval2" onclick={formApproval} >
                                                                          <br>
                                                                   </div></div>`;
        let file = document.querySelectorAll('.formApproval2')
        for (let j = 0, len = file.length; j < len; j++) {
            file[j].addEventListener('click', function () {
                formApproval()//שולחים לפונקציה שמוחקת את התמונה הזאת
            });
        }

        }

    })
}).catch(function (err) {
    console.log('Fetch Error :', err);
});
//------------------------------------------------------------------------------------------
//צריך להפעיל מפה את אלגוריתם ההתאמה
function formApproval(){
    document.getElementById('messags1').innerHTML=`<div  dir="rtl" class="container card mb-3" style="max-width: 50rem; box-shadow: 0 0 100px rgba(0,0,0,0.2);"><br> <h6> הבקשה נישלחה ניתן להתעדכן במעקב אחרי בקשות </h6><br></div>`
}
//-----------------------------------------------------------------------------------
function sendEmail(message)
{
    fetch('/users/sendEmail',{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message:message}),
    }).then(function (res) {
        res.json().then(function (data) {
            console.log(data);

        })
    }).catch(function (err) {
        console.log('Fetch Error :', err);
    });
}