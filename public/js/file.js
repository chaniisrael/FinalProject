document.addEventListener('DOMContentLoaded', function () {
    // document.getElementById("question7").addEventListener("click", question);
    // document.getElementById("employment").addEventListener("click", theJob);
    document.getElementById("file").addEventListener("click", submit);


}, false);

function submit()
{
    document.getElementById("file1").innerHTML=`<div class="center" style=" width: 85%;
            padding: 14px 20px;"> <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
        <span class="sr-only ">Loading...</span>
    </button>
    <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
    </button></div>`
}