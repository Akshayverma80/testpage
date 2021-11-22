function myDropdwnFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

function myToggleFunction() {
  document.getElementById("dashMenuLeft").classList.toggle("showDashMenu");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-right')) {
      var dropdowns1 = document.getElementsByClassName("dashboard-left-container");
      var v;
      for (i = 0; i < dropdowns1.length; i++) {
          var openDropdown1 = dropdowns1[i];
          if (openDropdown1.classList.contains('showDashMenu')) {
              openDropdown1.classList.remove('showDashMenu');
          }
      }
  }
}




function toggleHeaderSidebar() {

  document.querySelector(".dashboard-left-container").classList.toggle("display_block");
  document.querySelector(".dashboard-main-container").classList.toggle("OpenSideMenu");


}

function toggleHeaderSidebarClose() {

  document.querySelector(".dashboard-left-container").classList.remove("display_block");
  document.querySelector(".dashboard-main-container").classList.remove("OpenSideMenu");

}




function toggle_visibility(id) {

  document.getElementById("ToggleDrop").classList.toggle("show");
  var e = document.getElementById(id);
  if (e.style.display == 'block')
      e.style.display = 'none';
  else
      e.style.display = 'block';
}



// tabs js

function Tabs() {
  var bindAll = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].addEventListener('click', change, false);
      }
  }

  var clear = function() {
      var menuElements = document.querySelectorAll('[data-tab]');
      for (var i = 0; i < menuElements.length; i++) {
          menuElements[i].classList.remove('active');
          var id = menuElements[i].getAttribute('data-tab');
          document.getElementById(id).classList.remove('active');
      }
  }

  var change = function(e) {
      clear();
      e.target.classList.add('active');
      var id = e.currentTarget.getAttribute('data-tab');
      document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();




// collaps js 