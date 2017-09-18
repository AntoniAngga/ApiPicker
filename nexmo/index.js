const axios = require("axios");

function Sms (_api_key,_api_secret,_to,_from,_text,callback) {
    axios.post("https://rest.nexmo.com/sms/json", {
        api_key: _api_key,
        api_secret: _api_secret,
        to: _to,
        from: _from,
        text: _text
    })
    .then(res => {
        callback(res.data)
    })
    .catch(err => {
        callback(error.response.data)
    })
}

module.exports = {
    Sms
}