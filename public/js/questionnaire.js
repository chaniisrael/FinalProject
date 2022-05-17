document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("question7").addEventListener("click", question);
    document.getElementById("employment").addEventListener("click", theJob);
    document.getElementById("moreRevenue").addEventListener("click", additionalRevenue);
    document.getElementById("commitment").addEventListener("click", commitment);
    document.getElementById("pansyProblem").addEventListener("click", pansyProblem);


}, false);

let i=1;
//-----------------------------------------------------------------------------------------

function question (e)
{


    if(e.target.value ==2)
    {
        i+=1;
        PersonalInformation(i)
        console.log("chani")
    }
    else if(e.target.value ==3)
    {
        i+=1;
        PersonalInformation(i);
        document.getElementById("tt").innerHTML+=`<div><button type="button" id="buttonPlos">+</button> </div>`
        document.getElementById("buttonPlos").addEventListener("click", buttonPlos);

    }
console.log(e.target.value);
}
//---------------------------------------------------------------
function PersonalInformation(i)
{
    document.getElementById("jj").innerHTML+=`<div class="row mb-4">  
${i}. <div class=" col-lg-5 mb-3 ">
    <input size="10" type="name" class="form-control" name="name" id="name"  placeholder="שם מלא">
    <div class="text-danger errormessage "></div>
</div>
<div class=" col-lg-4 mb-3 ">
    <input placeholder="Select date" type="date" id="example" class="form-control picker__input">
    <div class="text-danger errormessage "></div>
</div>

<div class=" col-lg-5 mb-3 ">
    <div class="  input-group ">
    <select type="text" class="form-select" id="education">
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

<div class=" col-lg-4 mb-3  ">
    <div class="  input-group ">
<select type="text" class="form-select" id="employment">
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
}
//-------------------------------------------------
function buttonPlos(e)
{
    i+=1;
    PersonalInformation(i)
}
//------------------------------------------------
function theJob(e) {

    document.getElementById("seniorityInWork").classList.add('d-none');
    document.getElementById("salary11").classList.add('d-none');
    document.getElementById("seniorityInWork2").classList.add('d-none');
    document.getElementById("salary12").classList.add('d-none');
    document.getElementById("seniorityInWork3").classList.add('d-none');
    document.getElementById("notEmployed1").classList.add('d-none');
    document.getElementById("pension").classList.add('d-none');
    document.getElementById("annuity").classList.add('d-none');
    document.getElementById("scholarship").classList.add('d-none');

    if (e.target.value === "employee" || e.target.value==="independentEndEmployee") {
        document.getElementById("seniorityInWork").classList.remove('d-none')
        document.getElementById("salary11").classList.remove('d-none')}

    if (e.target.value === "independent" || e.target.value==="independentEndEmployee") {
        document.getElementById("seniorityInWork2").classList.remove('d-none')
        document.getElementById("salary12").classList.remove('d-none')}

    if (e.target.value === "controllingEmployee" ) {
        document.getElementById("seniorityInWork3").classList.remove('d-none')
        document.getElementById("salary11").classList.remove('d-none')}

     if (e.target.value === "notEmployee" )
        document.getElementById("notEmployed1").classList.remove('d-none')

    if (e.target.value === "pensioner" )
        document.getElementById("pension").classList.remove('d-none')

    if (e.target.value === "receivesAnAnnuity" )
        document.getElementById("annuity").classList.remove('d-none')

    if (e.target.value === "revealsTorahInstitution" )
        document.getElementById("scholarship").classList.remove('d-none')

    if (e.target.value === "revealsTorahInstitution" || e.target.value === "employee" || e.target.value==="independentEndEmployee" || e.target.value === "independent" || e.target.value === "controllingEmployee" || e.target.value === "notEmployee" || e.target.value === "pensioner" || e.target.value === "receivesAnAnnuity" ) {
        document.getElementById("mons3").classList.remove('d-none')
        document.getElementById("aboutRevenue").classList.remove('d-none')}

}

function additionalRevenue(e)
{
    console.log("oooooooooo")

    if(e.target.value==="yes1")
    {
        document.getElementById("revenue").classList.remove('d-none');

    }

}
function commitment(e) {

    if(e.target.value==="yes1")
    {
        document.getElementById("commit").classList.remove('d-none');

    }
}
function pansyProblem(e) {
    console.log("xnzk")
    if(e.target.value==="yes1")
    {
        document.getElementById("problem").classList.remove('d-none');

    }
}

