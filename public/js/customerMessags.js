fetch('/users/findIfComments',{
    method:'post',
    headers: {
        'Content-Type': 'application/json'
    },
}).then(function (res) {
    res.json().then(function (data) {
        console.log(data);
        if (data[0].documentProcessed === '1') {

            document.getElementById('messags1').innerHTML = `<div dir="rtl" class="container card mb-3" style="max-width: 50rem; box-shadow: 0 0 100px rgba(0,0,0,0.2);">
                                                                        <div><br>
                                                                                 המערכת קלטה את המסמכים ועברה על הנתונים שלך אם ברצונך למצאו את הבנקים המתאימים ביותר לנתונים שלך
                                                                         <input type="submit" value="לחץ לאישור הבקשה" class="btn btn-primary mb-3 formApproval2 " id="formApproval2" onclick={formApproval} >
                                                                          <br>
                                                                   </div></div>`;
            // document.getElementById("formApproval1").addEventListener("click", formApproval);
        let job = document.querySelectorAll('.formApproval2') // we check if were clicked on the delete button of a specific image.
        for (let j = 0, len = job.length; j < len; j++) {
            job[j].addEventListener('click', function () {
                formApproval()//שולחים לפונקציה שמוחקת את התמונה הזאת
            });
        }

        }
        if(data[0].errorMessage !== null)
         {
            document.getElementById('messags2').innerHTML = `<div dir="rtl" class="  container card mb-3" style="max-width: 50rem; box-shadow: 0 0 100px rgba(0,0,0,0.2);"><div class="error">
                                                                       <br>
                                                                        <h6>${data[0].errorMessage} ⚠</h6>
                                                                        <br>
                                                                   </div></div>`;
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
