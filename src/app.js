$(".change").on("click", function () {


    if ($("body").hasClass("whiteMode")) {
      $("h3").removeClass("whiteMode");
      $("body").removeClass("whiteMode");
      $("h5").removeClass("whiteMode");
      $(".div").removeClass("whiteMode");
  
      $("p").removeClass("whiteMode");
  
      $("#a1").removeClass(" fa-solid fa-moon");
      $("#a1").addClass(" fa-solid fa-sun");
  
  
      $("body").css("transition", "all 1s ease");
      
      $("body").removeClass("bodyLight")
      $("body").addClass("bodyDark")
  
      //themeButton
      // $( ".change" ).text( "ON" );
      $(".img1").attr("src", "1.png");
      $(".bg").attr("src", "tokyo.jpg");
  
    } else {
      $("h3").addClass("whiteMode");
      $("p").addClass("whiteMode");
      $("h5").addClass("whiteMode");
      $(".div").addClass("whiteMode");
  
      $("body").addClass("whiteMode");
      $("#a1").removeClass(" fa-solid fa-sun");
      $("#a1").addClass(" fa-solid fa-moon");
  
      $("body").addClass("bodyLight")
      $("body").removeClass("bodyDark")
  
      $("body").css("transition", "all 1s ease");
  
      $(".img1").attr("src", "2.png");
      $(".bg").attr("src", "desert.jpg");
  
  
      //whiteMode
  
      // $( ".change" ).text( "OFF" );
    }
  });