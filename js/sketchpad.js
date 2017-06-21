//JS sheet for sketchpad

$(document).ready(function(){

//Start button functions
  $("#btn_play").click(function(){
    $(".pad").empty();
    var s =  parseInt(prompt("How many squares would you like on each side of the grid (2-100)?"), 10);
      //Parameters and restriction alerts
        if (isNaN(s)){
          alert("You did not enter a valid number. Please enter a number between 2-100.")
          window.location.reload();
          return
        } else if (s < 2) {
          alert("Please enter a number greater than or equal to two, but less than or equal to 100.")
          window.location.relaod();
          return
        } else if (s > 100) {
          alert("Please enter a number less than or equal to 100, but greater than or equal to 2. Please wait for page to refresh.")
          window.location.reload();
          return
        }
    var z = (100 / s);
    for (var i = 0; i < (s*s); i++){
      var newUnit = $("<div class='unit' style='width:" + z + "%; height:" + z + "%'></div>");
        $(".pad").append(newUnit);
      }
        $(".unit").one("mouseover",function(){
          $(this).css("background-color","#ffcc00");
        });
        console.log(document.body.innerHTML);

//Clear button functions
      $("#btn_clear").click(function(){
        $(".pad").empty();
        var z = (100 / s);
        for (var i = 0; i < (s*s); i++){
          var newUnit = $("<div class='unit' style='width:" + z + "%; height:" + z + "%'></div>");
            $(".pad").append(newUnit);
          }
          $(".unit").one("mouseover",function(){
            $(this).css("background-color","#ffcc00");
          });
          console.log(document.body.innerHTML);


        });


      });

//Change grid size button
          $("#btn_change").click(function(){
            $(".pad").empty();
            var s = parseInt(prompt("How many squares would you like on each side of the grid? Pick between 2-100."), 10);
            //Parameters and restriction alerts
              if (isNaN(s)){
                alert("You did not enter a valid number. Please enter a number between 2-100.")
                window.location.reload();
                return
              } else if (s < 2) {
                alert("Please enter a number greater than or equal to two, but less than or equal to 100.")
                window.location.relaod();
                return
              } else if (s > 100) {
                alert("Please enter a number less than or equal to 100, but greater than or equal to 2. Please wait for page to refresh.")
                window.location.reload();
                return
              }
            var z = (100 / s);
            for (var i = 0; i < (s*s); i++){
              var newUnit = $("<div class='unit' style='width:" + z + "%; height:" + z + "%'></div>");
                $(".pad").append(newUnit);
              }
              $(".unit").one("mouseover",function(){
                $(this).css("background-color","#ffcc00");
              });
              console.log(document.body.innerHTML);

              //Clear button functions
                    $("#btn_clear").click(function(){
                      $(".pad").empty();
                      var z = (100 / s);
                      for (var i = 0; i < (s*s); i++){
                        var newUnit = $("<div class='unit' style='width:" + z + "%; height:" + z + "%'></div>");
                          $(".pad").append(newUnit);
                        }
                        $(".unit").one("mouseover",function(){
                          $(this).css("background-color","#ffcc00");
                        });
                        console.log(document.body.innerHTML);

            });

          });
          
});
