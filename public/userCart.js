function refreshList() {
    const userLog = window.localStorage.getItem('username');

    $.get(`/carts/${userLog}`, (data) => {
        $('#userCart').empty()
        $('#totalBill').empty()
     //   console.log(!Object.keys(data).length + "data of refresh ist cart");
        let total = 0;
        if (Object.keys(data).length) {
            for (let item of data) {
                if (item.productId) {
                    total = total + item.product.price * item.quantity;
                    $('#userCart').append(
                        `<div> ${item.product.name}  ${item.product.price}  <input type='submit' value='Remove' onclick='removeFromCart(${item.product.id})'></div>`
                    )

                }
            }
            $('#totalBill').append(`<span>${total}<span>`)

        }
        else {
            $('#userCart').append(
                `<div><p>No Item</p></div>`
            )

            $('#totalBill').append(`<span>${0}<span>`)
        }
    })
}
refreshList()
function removeFromCart(id) {
    let useremail = window.localStorage.getItem('username')
    console.log(id + " from remove from cart")
    $.post('/carts/delete',
        {
            productId: id,
            userEmail: useremail
        }).then((data) => {
            if (data.success) {
                refreshList()
            } else {
                alert('Some error occurred')
            }
        })
}