debugger;

fetch('/loginBank/findRequestsDirected',{
    method:'post',
    headers: {
        'Content-Type': 'application/json'
    },
    // body: JSON.stringify({userName:"חני"}),
}).then(function (res) {
    res.json().then(function (data) {
        console.log(data);
        if(data==='אין נתונים זמינים')
        {
            document.getElementById('requests').innerHTML+=data;
        }
        else {
            for (let i = 0; i < data.length; i++) {

                document.getElementById('requests').innerHTML += `<div id="${data[i].nameCustomer}" class="container card mb-3  w-20" style="max-width: 50rem;"><h6> שם הלקוח: ${data[i].nameCustomer} </h6>
                                                                   <h6>גובה הבקשה: ${data[i].requestHeight}</h6>
                                                                   <h6>גובה הון עצמי: ${data[i].amountOfEquity}</h6>
                                                                   <h6>קישורים למסמכים:</h6>
                                                                   <a  href="${data[i].file1}">${data[i].file1}</a>
                                                                   <a href="${data[i].file2}">${data[i].file2}</a>
                                                                    <a href="${data[i].file3}">${data[i].file3}</a>
                                                                     <a href="${data[i].file4}">${data[i].file4}</a>
                                                                     <button type="button" class="collapsible">הערות</button>
                                                                      <div class="content">
                                                                         <p>${data[i].remarks}</p>
                                                                      </div>
                                                                      <button type="submit" id ="${data[i].id}" class=" vv btn btn-primary" >לחץ לאישור  </button>  </div>`;


                }
            collapsible();

            let coll2 = document.getElementsByClassName("vv");

            for ( let j = 0; j < coll2.length; j++) {
                console.log("colls "+coll2[j])
                let myid=coll2[j].id;
                coll2[j].addEventListener("click", function() {
                    // coll2[j].classList.remove('btn-primary');
                    // coll2[j].classList.add('btn-success');

                    button(data,myid);
                    console.log("vjb")
                });

            }

        }
    })
}).catch(function (err) {
    // need to display error message!
    console.log('Fetch Error :', err);
});
//---------------------------------------------------------------------------------
 function collapsible()
 {
     var coll = document.getElementsByClassName("collapsible");
     var i;

     for (i = 0; i < coll.length; i++) {
         coll[i].addEventListener("click", function() {
             this.classList.toggle("active");
             var content = this.nextElementSibling;
             if (content.style.display === "block") {
                 content.style.display = "none";
             } else {
                 content.style.display = "block";
             }
         });
     }
 }
 function button(data,id)
 {
     console.log(id)
     fetch('/loginBank/updateRequestsInProcess',{
         method:'post',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({id:id}),
     }).then(function (res) {
         res.json().then(function (data2) {
         if(data2==='כפתור לא נמצא')
         {
            // document.getElementById(id.nameCustomer).innerHTML=data2;
         }
         else
         {

             for (let i = 0; i < data.length; i++) {
                 if(data[i].id==id)
                 {
                     document.getElementById(data[i].nameCustomer).innerHTML=`<div>הבקשה אושרה </div>`;
                     break;
                 }

             }
         }
         })
     }).catch(function (err) {
         // need to display error message!
         console.log('Fetch Error :', err);
     });

 }
//}