const axios = require("axios");

function get_Balance (secret_key){
    axios.get('https://api.xendit.co/balance', {
        auth: {
            username: secret_key
        }
    })
    .then((response) => {
       console.log(response.data);
    })
    .catch(error => {
        console.log(error.response.data)
    })
}

function create_Invoice (secret_key,_external_id,_email,_desc,_amount) {
    axios({
        method: "post",
        url: "https://api.xendit.co/v2/invoices",
        data: {
            external_id: _external_id,
            payer_email: _email,
            description: _desc,
            amount: _amount
        },
        auth: {
            username: secret_key
        }
    })
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error.response.data);
    })
}

module.exports = {
    get_Balance,
    create_Invoice
}