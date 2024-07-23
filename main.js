var swiper = new Swiper(".popular-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
           slidesPerView:1,
           spaceBetween: 10,
        },
        320:{
            slidesPerView:2,
            spaceBetween: 10,
        },
         510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
         758:{
             slidesPerView:3,
            spaceBetween: 10,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        },
    },
  });

  function signupfn(){
    document.location.href="signup.html"
}
function loginfn(){
  document.location.href="login.html"
}

       // signup validation 
        function validateform() {
            var fullname = document.getElementById("fullname").value;
            var username = document.getElementById("username").value;
            var email = document.getElementById("email");
            var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var password = document.getElementById("password");
            var password2 = document.getElementById("password2").value;
            if (fullname == "") {
                document.getElementById("message1").innerHTML = "please enter full name";
                return false;
            }
            if (!isNaN(fullname)) {
                document.getElementById("message1").innerHTML = "only character is allowed";
                return false;
            }
            else {
                document.getElementById("message1").innerHTML = "";
            }
            if (username == "") {
                document.getElementById("message2").innerHTML = "please enter user name";
                return false;
            }
            else {
                document.getElementById("message2").innerHTML = "";
            }
            if (email.value == "") {
                document.getElementById("message3").innerHTML = "please enter email";
                return false;
            }
            if (!pattern.test(email.value)) {
                document.getElementById("message3").innerHTML = "Please provide a valid email address";
                email.focus;
                return false;
            }
            else {
                document.getElementById("message3").innerHTML = "";
            }
            if (password.value == "") {
                document.getElementById("message4").innerHTML = "please enter password";
                return false;
            }
            if (password.value.length < 8) {
                document.getElementById("message4").innerHTML = " password must be at least 8 characters";
                return false;
            }
            else {
                document.getElementById("message4").innerHTML = "";
            }
            if (password2 == "") {
                document.getElementById("message5").innerHTML = "please enter password again";
                return false;
            }
            if (password.value != password2) {
                document.getElementById("message5").innerHTML = " password are not matching";
                return false;
            }
            else {
                document.getElementById("message5").innerHTML = "";
            }

        }
        function store() {
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
            console.log(localStorage.getItem("email"));
        }


// login ==========================================

        function validation() {
            var valid = true;
            var email = document.form.email.value;
            var password = document.form.pass.value;
            var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (email == "" && password == "") {
                alert("Email and password are empty");
                document.form.email.focus();
                valid = false;
            }
            else if (email == "") {
                alert("Email is required");
                document.form.email.focus();
                valid = false;
            }
            else if (!pattern.test(email)) {
                alert("please enter valid email: info@yahoo.com ");
                document.form.email.focus();
                valid = false
            }
            else if (password == "") {
                alert("password is required");
                document.form.pass.focus();
                valid = false;
            }
            return valid;

        }
        function check() {
            var storedEmail = localStorage.getItem('email');
            var storedpass = localstorage.getItem('password');

            var username = document.getElementById('email');
            var userpw = document.getElementById('password');
            if (username.value == storedEmail && userpw.value == storedpass) {
                alert('you are loged in');
            } else
                alert('error');
        }
        // admin ===================================

        var typed = new Typed(".auto-type", {
            strings: ["YOU ARE THE ADMINSTRATOR!"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        })
function adminfn(){
  document.location.href="admin.html"
}
function logoutfn(){
  document.location.href="index.html"
}

function changeMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function gotohomefn(){
    document.location.href="movie page.html"
}
function gotochoose(){
    document.location.href="choosepg.html"
}