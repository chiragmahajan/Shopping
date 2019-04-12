$('#loginUser').click(() => {
  let userLoggedIn=$('#userEmail').val()
  window.localStorage.setItem('username',userLoggedIn)
  userLoggedIn=window.localStorage.getItem('username')
  console.log(" user logged in is " + userLoggedIn)
    $.post(
      '/users/login',
      {
        email:$('#userEmail').val(),
        password:$('#userPassword').val()
      },
      (data) => {
               if (data.success) {
                          window.location="./productList.html"
                    }else {
                           alert('Error')
                          }
                }
    )
            
    })
   