// JavaScript code
// function search_page() {
// 	let input = document.getElementById('searchButton').value
// 	input=input.toLowerCase();
// 	let x = document.getElementsByClassName('animals');
	
// 	for (i = 0; i < x.length; i++) {
// 		if (!x[i].innerHTML.toLowerCase().includes(input)) {
// 			x[i].style.display="none";
// 		}
// 		else {
// 			x[i].style.display="list-item";				
// 		}
// 	}
// }
function search_page(){
    // let x=document.getElementsByClassName("searchButton").value
    // // var a = document.createElement('a');
    // if(x=="home")
    //     {
    //         // a.href="/index.html";
    //         location.replace = '/index.html';
    //     }
    // else if(x=="about")
    //     {
    //         // a.href="/about.html";
    //         location.replace = '/about.html';
    //     }
    //     else if(x=="admissions")
    //     {
    //         // a.href="/admission.html";
    //         location.replace = '/admission.html';
    //     }
    location.replace('/index.html');
}