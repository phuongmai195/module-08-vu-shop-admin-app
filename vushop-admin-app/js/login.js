function login() {
  let requestBody = {
    usernameOrEmail: $("input[name='usernameOrEmail']").val(),
    password: $("input[name='password']").val(),
  };

  console.log(requestBody);
  console.log(typeof requestBody);

  axios({
    url: `http://localhost:8080/api/auth/login`,
    method: "POST",
    responseType: "json",
    contentType: "application/json",
    data: requestBody,
  })
    .then(function (response) {
      console.log(response);
      console.log(response.status);
      console.log(response.data.token);

      if (response.status == 200) {
        localStorage.setItem("currentToken", response.data.token);
        window.location.href = "/index.html";
      }
    })
    .catch(function (err) {
      alert("Sai thông tin đăng nhập!");
      console.log(err.response);
    });
}



let forgotPassword = function () {
  let token = localStorage.getItem("currentToken");
  var email = document.getElementById("usernameOrEmail").value;
  var phone = document.getElementById("phoneNumber").value;
  console.log(email);
  var body = {
    email: document.getElementById("usernameOrEmail").value,
    phone: document.getElementById("phoneNumber").value,
  };

  axios({
    url: `http://localhost:8080/api/auth/forgot/${email}`,
    method: "PUT",
    data: body
  })
    .then(function (resp) {
      console.log(resp);
      getAll();
    })
    .catch(function (err) {
      console.log(err.response);
    });
};