$(document).ready(function(){



});

$(function(){
	$("#commentVisit").keydown(function(){
		$("#msg").html($("#commentVisit").val());

	});
});

$(function(){
	$("#commentBtn").on("click", function(){
		//var postComment ="";
		var comments = $("input:text").val();
		console.log(comments);

		if(comments !== ''){
			var element = $("<li></li>").text(comments);
			$(element).append("<button class='rem'> x</button>");
			//$(element).append($("#commentsField"));

$("#comment").append(element);
		}

	    //postComment = ' <p> ' + comments + ' </p>';

		
	});
});

function printDiv() {    
    var printContents = document.getElementById('commen').innerHTML;
    var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
    }