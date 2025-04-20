
$(document).ready(function () {
  const transition_el = document.querySelector('.transition');
  const anchors = document.querySelector('a');

  setTimeout(() => {
      transition_el.classList.remove('is-active');
  },500)

  $('.nav-menu').click(function(e) {
      e.preventDefault();

      var menu = $(this).attr('id')

      if(menu == "about") {
          transition_el.classList.add('is-active');

          setTimeout(() => {
              $('body').load('/asset/views/about.html');
  
          },500)
      } else if(menu == "contact") {
          transition_el.classList.add('is-active');

          setTimeout(() => {
              $('body').load('/asset/views/contact.html');
  
          },500)
      } else if(menu == "resume") {
          transition_el.classList.add('is-active');

          setTimeout(() => {
              $('body').load('/asset/views/resume.html');
  
          },500)
      } else if(menu == "login") {
        transition_el.classList.add('is-active');

        setTimeout(() => {
            $('body').load('/asset/views/login.html');

        },500)
    }
    })

  $('#close').click(function(e) {
      transition_el.classList.add('is-active');

      setTimeout(() => {
          $('body').load('/asset/views/home.html');

      },500)
  });

  $(document).on("click", function(event) {
    if ($(event.target).closest("#menu-btn").length === 0) {
          $("#menu-btn").prop("checked", false);
    }
  });

})

function project() {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');

    setTimeout(() => {
        $('body').load('/asset/views/project.html');

    },500)
}

function projects() {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');
    
    setTimeout(() => {
        window.location='/project.html';

    },500)
}