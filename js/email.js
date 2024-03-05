emailjs.init('cZlV9kCnTjwSBI-mq')

const button = document.querySelector('.contact-form-wrapper .btn-18')

button.addEventListener('click', function () {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    title: document.getElementById("title").value,
    contents: document.getElementById("contents").value
  };


  emailjs.send("service_3lv992s", "template_b9a3zik", params)
    .then(function (res) {
      alert("Sucess♥︎ ");
    }, function (error) {
      console.log('FAILED...', error);
    });
})