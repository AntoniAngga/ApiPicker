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

module.exports = {
    get_Balance
}