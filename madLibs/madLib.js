// input: elements from the form, a string the user supplies
			// output: the sentence, a string displayed to the user

			  

			//makeMadLib function
				//Retrieve values
				//Append the concatanated sentence to the dom
			
			//Add event listener to the button to call makeMadLib function

$(document).ready(function(){
    function makeMadLib(){
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var person = $("#person").val();
        var sentence = person + " really likes " + adjective + " " + noun + "."
        $("#story").append("<p>" + sentence + "</p>");
        var object = {};
        object.noun = noun;
        object.adjective = adjective;
        object.person = person;
        return object;
    };

    $("#lib-button").on("click", function(){
        var userObject = makeMadLib();
        console.log(userObject);
        });
    });

    //adding stuff
    function (){
        //add plus
    }