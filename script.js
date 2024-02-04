
    $(document).ready(function() {
        $("#modal").removeClass("hidden");
        
        $("#close-modal").click(function() {
            $("#modal").addClass("hidden");
        });
    });

    
// Menu mobile
    document.addEventListener("DOMContentLoaded", function () {
        var menuButton = document.querySelector("[data-collapse-toggle='navbar-default']");
        var menuList = document.getElementById("navbar-default");
    
        menuButton.addEventListener("click", function () {
          menuList.classList.toggle("hidden");
        });
      });
