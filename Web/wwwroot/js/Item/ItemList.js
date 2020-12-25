// Make Data Tables work
// @ts-check
$(document).ready(function () {
    $('#itemsTable').DataTable();
});

let showPopUp = () => {
    let title = "Add Food";
    let url = "/Item/Add";
    let httpMethod = "GET";
    let xhr = new XMLHttpRequest();
    //Giving the instructions, how should it do the request
    xhr.open(httpMethod, url);
    // What to do after getting a response 
    let innerResponseToTheModal = () => {
        let partialView = xhr.response;
        let modalTittle = document.querySelector(".modal-title");
        modalTittle.textContent = title;
        let modalBody = document.querySelector(".modal-body");
        console.log(partialView);
        modalBody.innerHTML = partialView;
        $.validator.unobtrusive.parse("#addForm");
        let submitForm = document.getElementById("addForm")
        submitForm.addEventListener("submit", formSubmit);
    }
    xhr.onload = innerResponseToTheModal;
    xhr.send();
}
// Before
// let formSubmit = e => {
//     var url = "/Item/Add";
//     var request = new XMLHttpRequest();
//     request.open('POST', url, true);
//     request.onload = function () { // request successful
//         // we can use server response to our request now
//         let partialView = request.response;
//         console.log(request.responseText);
//         let modalBody = document.querySelector(".modal-body");
//         modalBody.innerHTML = partialView;
//         $.validator.unobtrusive.parse("#addForm");
//     };

//     request.send(new FormData(e.target)); // create FormData from form that triggered event
//     e.preventDefault();
// }
// After
let formSubmit = e => {
    var url = "/Item/Add";
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    let whatToDo = () => {
        // request successful
        // we can use server response to our request now
        let result = JSON.parse(request.response);
        console.log(result);
        if (result.isValid) {
            $('#modal').modal('hide');
        } else {
            let modalBody = document.querySelector(".modal-body");
            modalBody.innerHTML = result.html;
            $.validator.unobtrusive.parse("#addForm");
        }
    }
    request.onload = whatToDo;

    request.send(new FormData(e.target)); // create FormData from form that triggered event
    e.preventDefault();
}
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', showPopUp);