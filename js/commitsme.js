$(document).ready(function(){

	$(document).on("click", "a", function(e){
		e.preventDefault();

		//To get the commits list and details
		
		$.ajax({
			type: "GET",
			url: $(this).attr("href"),
			success: function(commits){
				$("tbody").empty();

				for(var i = 0; i < commits.length; i++){

					$("tbody").append(buildTableRow(commits[i]));
				}
			},
			error: function(jqXHR, textStatus, errorThrown){
				console.log(jqXHR);
	      console.log(textStatus);
	      console.log(errorThrown);
			}
		});

		function buildTableRow(commitData){
			var shaTd = $("<td>").append(commitData.sha);
			var authorTd = $("<td>").append(commitData.author.login);
			var messageTd = $("<td>").append(commitData.commit.message);
			var dateTd = $("<td>").append(commitData.commit.author.date);

			return $("<tr>").append(shaTd)
				.append(authorTd)
				.append(messageTd)
				.append(dateTd);
		}
	});
});