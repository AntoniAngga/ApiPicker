# API Picker

This API Picker to help my company get api faster :fire: :fire: :fire:

## How To Install :

```bash
	npm install --save apipicker
```

### Xendit

* Get Balance

To Get Balance
```javascript
	const apipicker = require("apipicker");
    
    apipicker.xendit.get_Balance(secret_key, (err,data) => {
    	if(err) {
        	console.log(err)
        } else {
        	console.log(data)
        }
    })
```

* Create Invoice

To Create Invoice
```javascript
	const apipicker = require("apipicker");
    
    apipicker.xendit.create_Invoice(secret_key,external_id,email,desc,amount,(err,data) => {
    	if(err){
        	console.log(err)
        } else {
        	console.log(data)
        }
    }

```

### Nexmo

* Send Sms
To send SMS

```javascript
	const apipicker = require("apipicker");
    
    apipicker.nexmo.Sms(api_key,api_secret,to,from,text, (err,data) => {
   		if(err) {
        	console.log(err)
        } else {
        	console.log(data)
        }
    })

```


Thanks you 🦄🦄🦄🦄