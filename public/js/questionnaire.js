document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("question7").addEventListener("click", question);
    document.getElementById("employment").addEventListener("click", theJob);
    document.getElementById("form12").addEventListener("onsubmit", mysubmit);


}, false);

let i=0;
//-----------------------------------------------------------------------------------------

function mysubmit(e)
{
    // e.preventDefault()
    console.log("ccccccccccccccccc")
    // console.log(document.getElementById("1"))
    // e.preventDefault()

}

function question (e)
{
    // if(e.target.value ===1 || e.target.value ===2 ||e.target.value ===2)
    //     document.getElementById("aboutWork").innerHTML+=document.getElementById("salary").innerHTML
    document.getElementById("ss").innerHTML="";
    document.getElementById("tt").innerHTML="";




    i=0;
    if(e.target.value ==1)
    {
        i+=1;
        PersonalInformation(i)


        //document.getElementById("aboutWork").innerHTML+=document.getElementById("salary").innerHTML

    }


    //     if(e.target.value ==2)
    // {
    //     i+=1;
    //     PersonalInformation(i)
    //     i+=1;
    //     PersonalInformation(i)
    //
    // }
    //  if(e.target.value ==3)
    // {
    //     i+=1;
    //     PersonalInformation(i);
    //     i+=1;
    //     PersonalInformation(i)
    //
    //     document.getElementById("tt").innerHTML+=`<div><button type="button" id="buttonPlos">+</button> </div>`
    //     document.getElementById("buttonPlos").addEventListener("click", buttonPlos);
    //
    //
    // }
    // document.getElementById().rem
    // let clearImage = document.querySelectorAll('addJob') // we check if were clicked on the delete button of a specific image.
    // for (let i = 0, len = clearImage.length; i < len; i++) {
    //     clearImage[i].addEventListener('click', function () {
    //         theJob(clearImage[i])//שולחים לפונקציה שמוחקת את התמונה הזאת
    //     });
    // }

    console.log(e.target.value);
}
//---------------------------------------------------------------
function PersonalInformation(i)
{

   // document.getElementById("jj").innerHTML+=document.getElementById("personalInformation").innerHTML
    document.getElementById("ss").innerHTML+=`<div class="row mb-4" id="${i}"><div>${i}.</div>
   <br/> 
    <div class=" col-lg-6 mb-3 ">
    <input size="10" type="name" class="form-control" name="name" id="name${i}"  placeholder="שם מלא" required>
    <div class="text-danger errormessage "> </div>
    </div>
<div class=" col-lg-6 mb-3 ">
     <div class="  input-group ">
    <select type="text" class="form-select" name="age" required>
        <option value="00">גיל</option>
        <option value="lessThan18">פחות מ-18</option>
        <option value="between18And40">בין 18 ל-40</option>
        <option value="between40And70">בין 40 ל- 70</option>
        <option value="over70">מעל 70</option>
    </select>
        <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
    </div>
</div>

<div class=" col-lg-6 mb-3 ">
    <div class="  input-group ">
    <select type="text" class="form-select" name="education" required>
        <option value="00">השכלה</option>
        <option value="withoutEducation">ללא השכלה</option>
        <option value="highSchool">תיכונית</option>
        <option value="higherEducation">על תיכונית</option>
        <option value="vocationalTraining">הכשרה מקצועית</option>
        <option value="practicalEngineer">הנדסאי</option>
        <option value="degreeStudent">סטודנט תואר ראשון/שני/שלישי</option>
        <option value="degreeAcademic">אקדמאי תואר ראשןן/שני/שלישי</option>
    </select>
        <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
    </div>
</div>

<div class=" col-lg-6 mb-3  ">
    <div class="  input-group ">
<select type="text" class="form-select job" name="theJob" required>
    <option value="01">תעסוקה</option>
    <option value="employee">שכיר</option>
    <option value="independent">עצמאי</option>
    <option value="independentEndEmployee">שכיר ועצמאי</option>
    <option value="controllingEmployee">שכיר בעל שליטה</option>
    <option value="notEmployee">לא מועסק</option>
    <option value="pensioner">פנסיונר</option>
    <option value="receivesAnAnnuity">מקבל קיצבה</option>
    <option value="revealsTorahInstitution">מלגה מוסד תורני</option>
</select>
    <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
    </div>
</div></div>`
    // console.log(document.getElementById("name"+"${i}").value,"bbbbb")

    let job = document.querySelectorAll('.job') // we check if were clicked on the delete button of a specific image.
    for (let j = 0, len = job.length; j < len; j++) {
        job[j].addEventListener('click', function () {
            theJob(job[j].value,i)//שולחים לפונקציה שמוחקת את התמונה הזאת
        });
    }
}
//-------------------------------------------------
function buttonPlos(e)
{
    i+=1;
    PersonalInformation(i)
}
//------------------------------------------------
function theJob(e,i) {
console.log("qqqqqqqq" ,e)
    document.getElementById("aboutWork").innerHTML =" "
    document.getElementById("aboutWork222").classList.add("d-none");

    if (e === "employee" || e === "independentEndEmployee")
        employee();

    if (e === "independent" || e ==="independentEndEmployee")
          independent();

    if (e === "controllingEmployee" )
        controllingEmployee();

    if (e === "notEmployee" )
        notEmployee();

    if (e === "pensioner" )
        pensioner();

    if (e === "receivesAnAnnuity" )
        receivesAnAnnuity();

    if (e === "revealsTorahInstitution" )
            revealsTorahInstitution();

    if (e === "revealsTorahInstitution" || e=== "employee" || e ==="independentEndEmployee" || e === "independent" || e === "controllingEmployee" || e === "notEmployee" || e === "pensioner" || e === "receivesAnAnnuity" ) {
        addDetalis();
        document.getElementById("aboutWork222").classList.remove("d-none");
    }



//     console.log("uuuuuuuuuuuu")
//     document.getElementById("seniorityInWork").classList.add('d-none');
//     document.getElementById("salary11").classList.add('d-none');
//     document.getElementById("seniorityInWork2").classList.add('d-none');
//     document.getElementById("salary12").classList.add('d-none');
//     document.getElementById("seniorityInWork3").classList.add('d-none');
//     document.getElementById("notEmployed1").classList.add('d-none');
//     document.getElementById("pension").classList.add('d-none');
//     document.getElementById("annuity").classList.add('d-none');
//     document.getElementById("scholarship").classList.add('d-none');
//
//     if (e.target.value === "employee" || e.target.value==="independentEndEmployee") {
//         document.getElementById("seniorityInWork").classList.remove('d-none')
//         document.getElementById("salary11").classList.remove('d-none')}
//
//     if (e.target.value === "independent" || e.target.value==="independentEndEmployee") {
//         document.getElementById("seniorityInWork2").classList.remove('d-none')
//         document.getElementById("salary12").classList.remove('d-none')}
//
//     if (e.target.value === "controllingEmployee" ) {
//         document.getElementById("seniorityInWork3").classList.remove('d-none')
//         document.getElementById("salary11").classList.remove('d-none')}
//
//      if (e.target.value === "notEmployee" )
//         document.getElementById("notEmployed1").classList.remove('d-none')
//
//     if (e.target.value === "pensioner" )
//         document.getElementById("pension").classList.remove('d-none')
//
//     if (e.target.value === "receivesAnAnnuity" )
//         document.getElementById("annuity").classList.remove('d-none')
//
//     if (e.target.value === "revealsTorahInstitution" )
//         document.getElementById("scholarship").classList.remove('d-none')
//
//     if (e.target.value === "revealsTorahInstitution" || e.target.value === "employee" || e.target.value==="independentEndEmployee" || e.target.value === "independent" || e.target.value === "controllingEmployee" || e.target.value === "notEmployee" || e.target.value === "pensioner" || e.target.value === "receivesAnAnnuity" ) {
//         document.getElementById("mons3").classList.remove('d-none')
//         document.getElementById("aboutRevenue").classList.remove('d-none')
//         document.getElementById("aboutWork").classList.remove('d-none')}
//
// }
}
//----------------------------------------------------------------------------
function additionalRevenue(e)
{
    console.log("oooooooooo")
    if(e.target.value ==="no")
        document.getElementById("revenue").innerHTML="";
    if(e.target.value ==="yes1")
    {
        document.getElementById("revenue").innerHTML=`<div class="row"> <div class=" col-lg-6 mb-3 ">
          <div class="input-group">
            <select type="text" class="form-select" name="typeOfIncome" id="typeOfIncome" required> 
                <option class="">סוג הכנסה</option>
                <option class="" value="foods">מזונות</option>
                <option class="" value="scholarship">מלגה</option>
                <option class="" value="rent">שכירות</option>
                <option class="" value="allowances">קצבאות</option>
            </select>
             <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
        </div>
       </div>
        <div class=" col-lg-6 mb-3 ">
            <div class="input-group">
                <input class="form-control" type="number" name="monthlyIncomeLevel" required placeholder="גובה הכנסה חודשית" max="1000000"
                       pattern="[0-9]*" id="MonthlyIncomeLevel">
                    <span class="input-group-text">₪</span>
            </div>
        </div>
</div>`
        // document.getElementById("revenue").classList.remove('d-none');

    }

}
//-----------------------------------------------------------------------------
function commitment(e) {
    if(e.target.value ==="no")
        document.getElementById("commit").innerHTML="";

    if(e.target.value==="yes1")
    {
        document.getElementById("commit").innerHTML=`<div class="row" >
        <div class=" col-lg-6 mb-3 ">
           <div class="input-group">
            <select type="text" class="form-select" name="monthlyPaymentAmountOnCommitment" id="typeOfCommitment" required>
              <option class="">סוג התחיבות</option>
              <option class="" value="bankLoan">הלוואה בנקאית</option>
              <option class="" value="nonBankLoan">הלוואה חוץ בנקאית</option>
              <option class="" value="mortgage">משכנתא על נכס אחר</option>
              <option class="" value="paymentOfAlimony">תשלום דמי מזונות</option>
              <option class="" value="paymentOfRent">תשלום שכר דירה</option></select>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
          </div>
          </div>
          <div class=" col-lg-6 mb-3 ">
             <div class="input-group">
                <input class="form-control" type="number" name="monthlyPaymentAmount" required placeholder="גובה תשלום חודשי" max="1000000" pattern="[0-9]*" id="MonthlyIncomeLevel2" >
                <span class="input-group-text">₪</span>
             </div>
          </div>
</div>`

    }
}
//-----------------------------------------------------------------------
function pansyProblem(e) {
    if(e.target.value ==="no")
        document.getElementById("problem").innerHTML="";
    if(e.target.value==="yes1")
    {
        document.getElementById("problem").innerHTML= `<div class="row"><div class=" col-lg-6 mb-3" >
          <div class="input-group">
            <select type="text" class="form-select" name="problemType" id="problemType" required>
              <option class="">סוג בעיה</option>
              <option  value="checks">שיקים ללא כיסוי</option>
              <option value="subordinatedLoans">הלוואות בפיגור</option>
              <option  value="execution">הוצאה לפועל</option>
              <option  value="limitedAccount">חשבון מוגבל</option>
           </select>
           <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
         </div>
      </div>
     <div class=" col-lg-6 mb-3">
       <div class="input-group">
          <select type="text" class="form-select" name="problemOneLastTime" required>
            <option value="02">מתי בפעם האחרונה?</option>
            <option value="lessThanHaifYear">פחות מחצי שנה</option>
            <option value="betweenHaifYearAndYear">בין חצי שנה לשנה</option>
            <option value="betweenOnYearAndThreeYears">בין שנה לשלוש שנים</option>
            <option value="OverHisYears">מעל שלוש שנים</option>
         </select>
        <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
       </div>
     </div>
       </div>`;

    }
}
//----------------------------------------------------------------
function employee()
{
    document.getElementById("aboutWork").innerHTML += `<div class=" row mb-4" id="aboutWork2">
<br><br>
           <div class="  col-lg-6 mb-3"   id="seniorityInWork" required>
            <div class="input-group">
                <select type="text" class="form-select" name="seniorityInWork"  >
                    <option value="02">וותק בעבודה</option>
                    <option value="lessThanHaifYear">פחות מחצי שנה</option>
                    <option value="betweenHaifYearAndYear">בין חצי שנה לשנה</option>
                    <option value="betweenOnYearAndThreeYears">בין שנה לשלוש שנים</option>
                    <option value="OverHisYears">מעל שלוש שנים</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
            </div>
        </div>
        <div class="  col-lg-6 mb-3" id="salary11" >
            <div class=" input-group" >
                <input type="number" class="form-control" required name="monthlySalary" placeholder="משכורת חודשית" pattern="[0-9]*" inputmode="numeric" id="monthlySalary">
                <span class="input-group-text">₪</span>
            </div>
        </div>
      </div>`
}
//-------------------------------------------------------------------------------
function independent()
{
    document.getElementById("aboutWork").innerHTML+=`<div class="row">
           <div class="  col-lg-6 mb-3 " id="seniorityInWork2">
            <!--    <label for="seniorityInWork" class="form-label">וותק בעבודה</label>-->
            <div class="input-group">
                <select type="text" class="form-select" name="businessSeniority" required>
                    <option value="02">וותק העסק</option>
                    <option value="lessThanHaifYear">פחות מחצי שנה</option>
                    <option value="betweenHaifYearAndYear">בין חצי שנה לשנה</option>
                    <option value="betweenOnYearAndThreeYears">בין שנה לשלוש שנים</option>
                    <option value="OverHisYears">מעל שלוש שנים</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
            </div>
        </div>

        <div class="  col-lg-6 mb-3" id="salary12" >
            <div class=" input-group" >
                <!--    <label for="monthlySalary" class="form-label">משכורת חודשית</label>-->
                <input type="number" class="form-control" required name="averageMonthlyIncome" placeholder="הכנסה חודשית ממוצעת" pattern="[0-9]*" inputmode="numeric" id="monthlySalary2">
                <span class="input-group-text">₪</span>
            </div>
        </div>

       </div>`
}
//------------------------------------------------------------------------------
function controllingEmployee()
{
    document.getElementById("aboutWork").innerHTML+=`<div class="row">
            <div class="  col-lg-6 mb-3 " id="seniorityInWork3">
            <!--    <label for="seniorityInWork" class="form-label">וותק בעבודה</label>-->
            <div class="input-group">
                <select type="text" class="form-select" name="seniorityInOffice" required>
                    <option value="02">וותק בתפקיד</option>
                    <option value="lessThanHaifYear">פחות מחצי שנה</option>
                    <option value="betweenHaifYearAndYear">בין חצי שנה לשנה</option>
                    <option value="betweenOnYearAndThreeYears">בין שנה לשלוש שנים</option>
                    <option value="OverHisYears">מעל שלוש שנים</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
            </div>
        </div>
        <div class="  col-lg-6 mb-3" id="salary11" >
            <div class=" input-group" >
                <input type="number" class="form-control" required name="monthlySalary2" placeholder="משכורת חודשית" pattern="[0-9]*" inputmode="numeric" id="monthlySalary2">
                <span class="input-group-text">₪</span>
            </div>
        </div>
          </div>`

}
//------------------------------------------------------------------------
function notEmployee(){
    document.getElementById("aboutWork").innerHTML +=`<div class=" row">
<div class="  col-lg-6 mb-3 " id="seniorityInWork4">
    <!--    <label for="seniorityInWork" class="form-label">וותק בעבודה</label>-->
    <div class="input-group">
        <select type="text" class="form-select" name="seniorityInRecentWork" required>
            <option value="02">וותק בעבודה האחרונה</option>
            <option value="lessThanHaifYear">פחות מחצי שנה</option>
            <option value="betweenHaifYearAndYear">בין חצי שנה לשנה</option>
            <option value="betweenOnYearAndThreeYears">בין שנה לשלוש שנים</option>
            <option value="OverHisYears">מעל שלוש שנים</option>
        </select>
        <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
    </div>
</div>

<div class="  col-lg-6 mb-3 " id="date">
    <!--    <label for="seniorityInWork" class="form-label">וותק בעבודה</label>-->
    <div class="input-group">
        <select type="text" class="form-select" name="lastWorkEndTime" required >
            <option value="02">זמן סיום עבודה אחרונה</option>
            <option value="lessThanHaifYear">פחות מחצי שנה</option>
            <option value="betweenHaifYearAndYear">בין חצי שנה לשנה</option>
            <option value="betweenOnYearAndThreeYears">בין שנה לשלוש שנים</option>
            <option value="OverHisYears">מעל שלוש שנים</option>
        </select>
        <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
    </div>
</div>

<div class="  col-lg-6 mb-3" id="salary13" >
    <div class=" input-group" >
        <!--    <label for="monthlySalary" class="form-label">משכורת חודשית</label>-->
        <input type="number" class="form-control" required name="monthlySalaryInLastJob" placeholder="משכורת חודשית בעבןדה האחרונה" pattern="[0-9]*" inputmode="numeric" id="monthlySalary3">
        <span class="input-group-text">₪</span>
    </div>
</div>                       
        </div>`
}
//-------------------------------------------------------------
function pensioner(){
    document.getElementById("aboutWork").innerHTML+=`<div class="row"><div class="  col-lg-6 mb-3" id="salary14" >
    <div class=" input-group" >
        <!--    <label for="monthlySalary" class="form-label">משכורת חודשית</label>-->
        <input type="number" class="form-control" required name="amountOfThePension" placeholder="גובה קיצבת הפנסיה" pattern="[0-9]*" inputmode="numeric" id="monthlySalary3">
        <span class="input-group-text">₪</span>
    </div>
</div>
        </div>`
}
//-----------------------------------------------------------------------
function receivesAnAnnuity() {
    document.getElementById("aboutWork").innerHTML += `<div class="row"><div class="  col-lg-6 mb-3" id="salary15" >
    <div class=" input-group" >
        <!--    <label for="monthlySalary" class="form-label">משכורת חודשית</label>-->
        <input type="text" class="form-control" required name="heightOfStipination"  placeholder="גובה קיצבה " pattern="[0-9]*" inputmode="numeric" id="monthlySalary15">
        <span class="input-group-text">₪</span>
    </div>
   </div>
  </div>`
}
//-----------------------------------------------------------------------
function revealsTorahInstitution() {
    document.getElementById("aboutWork").innerHTML += `<div class="row"><br><div class="  col-lg-6 mb-3" id="salary16" >
          <div class=" input-group" >
        <!--    <label for="monthlySalary" class="form-label">משכורת חודשית</label>-->
        <input type="text" class="form-control" required name="scholarshipAmount"  placeholder="גובה מילגה " pattern="[0-9]*" inputmode="numeric" id="monthlySalary16">
        <span class="input-group-text">₪</span>
       </div>
</div></div>`
}
    //-------------------------------------------------------------------
function addDetalis()
{
    document.getElementById("aboutWork").innerHTML +=`<div class=" row">
           <div class=" col-lg-6 mb-3 ">
              <div  class="  input-group ">
                 <select type="text" class="form-select" name="theBank" id="theBank" required>
                    <option class="" value="0">הבנק בו מתנהל החשבון</option>
                    <option class="" value="1">שם הבנק</option>
                     <option class="" value="13">אגוד</option>
                     <option class="" value="14">אוצר החייל</option>
                     <option class="" value="11">דיסקונט</option>
                     <option class="" value="17">מרכנתיל</option>
                     <option class="" value="31">הבינלאומי</option>
                     <option class="" value="12">הפועלים</option>
                     <option class="" value="4">יהב</option>
                     <option class="" value="54">ירושלים</option>
                     <option class="" value="10">לאומי</option>
                     <option class="" value="20">מזרחי טפחות</option>
                     <option class="" value="46">מסד</option>
                     <option class="" value="2">פאג׳י</option>
                     <option class="" value="99">אחר</option>
              </select>
              <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
           </div>    
        </div>
        <div class=" col-lg-6 mb-3 ">
          <div  class="  input-group ">
            <select type="text" class="form-select"  name="accountStatus" id="accountStatus" required>
              <option class="" value="0">מצב חשבון ב3 חודשים האחרונים</option>
              <option class="" value="plus">פלוס</option>
              <option class="" value="minus">מינוס</option>
              <option class="" value="deviation">חריגה ממסגרת המינוס</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
         </div>
       </div>

       <div class=" mb-3" id="aboutRevenue">
         <div class=" col-lg-12 mb-3 " >
           <div class="input-group">
              <select type="text" class="form-select " id="moreRevenue" required>
                <option value="02">האם יש הכנסות נוספות</option>
                <option value="yes1">כן</option>
                <option value="no">לא</option>
              </select>
            <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
          </div>
        </div>
        
       <div class="" id="revenue">   </div>
       </div>  
                                                                     
       <div class=" col-lg-12 mb-3 ">
         <div class="input-group">
            <select type="text" class="form-select" id="commitment" required>
                <option value="02">האם יש התחיביות חודשיות ליותר מחצי שנה?</option>
                <option value="yes1">כן</option>
                <option value="no">לא</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
         </div>
       </div>

      <div class=" mb-3" >
        <div class=" " id="commit">
         
       </div>

    </div>

    <div class=" col-lg-12 mb-3 ">
        <div class="input-group">
            <select type="text" class="form-select" id="pansyProblem"  required>
                <option value="02">האם היו בעיות בהתנהלות הפנססית?</option>
                <option value="yes1">כן</option>
                <option value="no">לא</option>
            </select>
            <label class="input-group-text" for="inputGroupSelect02">אפשרויות</label>
        </div>
    </div>

    <div class=" mb-3" >
      <div class="  " id="problem">
        
    </div>
    </div>
</div>`
    console.log("11")
    document.getElementById("moreRevenue").addEventListener("click", additionalRevenue);
    document.getElementById("commitment").addEventListener("click", commitment);
    document.getElementById("pansyProblem").addEventListener("click", pansyProblem);



    // console.log("revenue","israel",document.getElementById("name${i}").value)
    // document.getElementById("revenue").classList.add('d-none');
    // document.getElementById("commit").classList.add('d-none');
    // document.getElementById("problem").classList.add('d-none');

    //
    // let job = document.querySelectorAll('.moreRevenue') // we check if were clicked on the delete button of a specific image.
    // for (let i = 0, len = job.length; i < len; i++) {
    //     job[i].addEventListener('click', function () {
    //         additionalRevenue(job[i].value,i)//שולחים לפונקציה שמוחקת את התמונה הזאת
    //     });
    // }
}