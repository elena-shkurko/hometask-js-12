;(function($){


// function ajaxJS() {
//   var xhr_request = new XMLHttpRequest();

//   xhr_request.onreadystatechange = function () {
//    console.log(xhr_request.readyState);

//    if (xhr_request.readyState === 4) {

//     document.getElementById("employeeList").innerHTML = xhr_request.responseText;

//    }  

//   } // onreadystatechange

//   xhr_request.open('GET', 'employees.json');
//   xhr_request.send();
//  }

// function ajaxJquery() {
// 	$.ajax('employees.json')
//   		.done(function(res){
//   			$('#employeeList').html(res); 
//   		});
// }

// $(document).ready(function(){
// 	 document.getElementById("employeeList").innerHTML = xhr_request.responseText;

//    } 

//   } // onreadystatechange

//   xhr_request.open('GET', 'employees.json');
//   xhr_request.send();

//   };

// });

$(document).ready(function(){
var xhr_request = new XMLHttpRequest();

xhr_request.onreadystatechange = function () {
console.log(xhr_request.readyState);
var data;

if (xhr_request.readyState === 4) {

	data = JSON.parse(xhr_request.responseText);

	var json_list = '<ul class="bulleted">';

	for (key in data) {
		var inOffice = data[key]['inoffice'];
		var liClass = inOffice?'in':'out';

		json_list += '<li class="'+liClass+'">'+data[key]['name']+'</li>';
	}

	json_list += '</ul>';
	 document.getElementById("employeeList").innerHTML = json_list;
}
} //onreadystatechange

	xhr_request.open('GET', 'data/employees.json');
	xhr_request.send();

});

})(jQuery);