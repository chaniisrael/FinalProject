document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("file").addEventListener("click", submit);


}, false);

function submit()
{
    document.getElementById("file1").innerHTML=`<div class="" style=" width: 85%;
            padding: 20px 20px;"> <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
        <span class="sr-only ">Loading...</span>
    </button>
    <button class="btn btn-primary" type="button" style="width: 85%;
            20px 20px;" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
       הקבצים עולים...
    </button></div>`
}