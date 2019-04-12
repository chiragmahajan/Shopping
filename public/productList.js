function refreshList() {
  console.log('running refreshList products fetching')
    $.get('/products', (data) => {
      $('#productList').empty()
      console.log(data);
      for (let product of data) {
        $('#productList').append(
          `<div> ${product.name} <input type='submit' value='Add To Cart' onclick='addToCart(${product.id})'></div>`  
        )
      }
    })
  } 
  refreshList() 
  function addToCart(productId)
  { 
    let useremail=window.localStorage.getItem('username')
    $.post('/carts',
      {
      productId:productId,
      userEmail:useremail  
    }),
    (data)=>
    {
      if (data.success) {
          alert('Successfully Added')
          refreshList()
        }else {
          alert('Error')
        }
    }
  }