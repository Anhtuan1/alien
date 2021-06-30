# alien

python -m CGIHTTPServer 8360

#Domain:
```javascript
all-access.wax.io
```
```javascript

 
  setInterval(function () {
    if (window.location.pathname.indexOf("cloud-wallet/signing") != -1) {
      
        document.querySelector(".react-ripples").classList.remove("disabled");
        document.querySelector(".react-ripples button").disabled = false;
        document.querySelector(".react-ripples button").click();
      
    }
  }, 3000);
   setInterval(function () {
    if (window.location.pathname.indexOf("cloud-wallet/login") != -1) {
        document.querySelector(".react-ripples button").click();
    }
  }, 25000);
 setInterval(function () {

        if( document.getElementById("google-social-btn")){
document.getElementById("google-social-btn").click();
        }
    
  }, 35000);
  setTimeout(function () {
    document.querySelector(".button-primary").click()
  }, 150000);



```

#Domain:
```javascript
play.alienworlds.io
```
```javascript


window.addEventListener("load", (event) => {
window.alert = function(){
return true;
}
  async function start() {
    const delay = (millis) =>
      new Promise((resolve, reject) => {
        setTimeout((_) => resolve(), millis);
      });

    const userAccount = await wax.login();
    account = userAccount;
    unityInstance.SendMessage(
      "Controller",
      "Server_Response_LoginData",
      userAccount
    );
    await delay(20000);
    while (true) {
      var firstMine = true;
      var previousMineDone = false;
      var minedelay = 1;
      do {
        minedelay = await getMineDelay(account);
        await delay(minedelay*2);
      } while (minedelay !== 0 && (previousMineDone || firstMine));
      
        console.log("OK MINE");
        var balance = await getBalance(account, wax.api.rpc);
        console.log("balance: (before mine)" + balance);

        await background_mine(account).then((mine_work) => {
          unityInstance.SendMessage(
            "Controller",
            "Server_Response_Mine",
            JSON.stringify(mine_work)
          );
          console.log(`${mine_work.account} Pushing mine results...`);
          const mine_data = {
            miner: mine_work.account,
            nonce: mine_work.rand_str,
          };
          console.log("mine_data", mine_data);
          const actions = [
            {
              account: mining_account,
              name: "mine",
              authorization: [
                {
                  actor: mine_work.account,
                  permission: "active",
                },
              ],
              data: mine_data,
            },
          ];
          wax.api
            .transact(
              {
                actions,
              },
              {
                blocksBehind: 3,
                expireSeconds: 90,
              }
            )
            .then((result) => {
              console.log("result is=", result);
              var amounts = new Map();
              if (result && result.processed) {
                result.processed.action_traces[0].inline_traces.forEach((t) => {
                  if (t.act.data.quantity) {
                    const mine_amount = t.act.data.quantity;
                    console.log(`${mine_work.account} Mined ${mine_amount}`);
                    if (amounts.has(t.act.data.to)) {
                      var obStr = amounts.get(t.act.data.to);
                      obStr = obStr.substring(0, obStr.length - 4);
                      var nbStr = t.act.data.quantity;
                      nbStr = nbStr.substring(0, nbStr.length - 4);
                      var balance = (
                        parseFloat(obStr) + parseFloat(nbStr)
                      ).toFixed(4);
                      amounts.set(t.act.data.to, balance.toString() + " TLM");
                    } else {
                      amounts.set(t.act.data.to, t.act.data.quantity);
                    }
                  }
                });
                unityInstance.SendMessage(
                  "Controller",
                  "Server_Response_Claim",
                  amounts.get(mine_work.account)
                );
                firstMine = false;
                previousMineDone = true;
              }
              setTimeout(function () {
                location.reload();
              }, 20000);
            })
            .catch((err) => {
              unityInstance.SendMessage(
                "ErrorHandler",
                "Server_Response_SetErrorData",
                err.message
              );
              previousMineDone = false;
            });
        });

        var balance = await getBalance(account, wax.api.rpc);
        console.log("balance (after mined): " + balance);
     

      await delay(70000);
    }
  }
  setTimeout(function () {
    start();
    console.log("Login");
  }, 45000);
  setTimeout(function () {
    location.reload();
    console.log("Reload");
  }, 7000000);
});


```


```javascript
//all-access.wax.io
setInterval(function () { 
if( document.getElementById("google-social-btn")){
	document.getElementById("google-social-btn").click();
}

if (window.location.pathname.indexOf("cloud-wallet/login") != -1 || window.location.pathname.indexOf("cloud-wallet/signing") != -1) {
	document.querySelector(".react-ripples button").click();
}

},4000)


```

```javascript
//wallet.wax.io
var url = new URL(window.location.href);
var get_param = url.searchParams.get("turn");
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
if(get_param === null){
	var d = new Date();
	var minute = d.getMinutes();
	
	if(d.getSeconds() > 40 && Math.ceil(minute / 3) != Math.ceil((minute+1) / 3)){
	 minute += 1;
	}
	var num = Math.ceil(minute / 3)%10 ;
	window.location.replace('https://play.alienworlds.io/?turn='+num)
}else{
	var d = new Date();
	var minute = d.getMinutes();
	var num = Math.ceil(minute / 3)%10 ;
	if(num != turn){
		document.querySelector(".bottom-area button").click();
	}else{
		var sleep_time = 60 + (3-minute%3)*60 - d.getSeconds();
		await sleep(sleep_time*1000);
		document.querySelector(".bottom-area button").click();
	}
	
}

```

```javascript
//accounts.google.com

var total = document.querySelectorAll("section ul li").length - 1;
var d = new Date();
var each = Math.ceil(30/total);
var minute = d.getMinutes();
if(d.getSeconds() > 35 && Math.ceil(minute / each) != Math.ceil((minute+1) / each)){
 minute += 1;
}
var num = Math.ceil(minute / each)%total ;
num = num < 1 ? 1: num;
document.querySelectorAll("section ul li")[num-1].querySelector('div').click();

```


```javascript

window.addEventListener("load", (event) => {
window.alert = function(){
return true;
}
  async function start() {
    const delay = (millis) =>
      new Promise((resolve, reject) => {
        setTimeout((_) => resolve(), millis);
      });

    const userAccount = await wax.login();
    account = userAccount;
    unityInstance.SendMessage(
      "Controller",
      "Server_Response_LoginData",
      userAccount
    );
    await delay(15000);
    while (true) {
      var firstMine = true;
      var previousMineDone = false;
      var minedelay = 1;
      do {
        minedelay = await getMineDelay(account);
        if(minedelay > 1){
			var url = new URL(window.location.href);
			var get_param = url.searchParams.get("turn");
			window.location.replace('https://wallet.wax.io/dashboard?turn='+get_param)
		}
      } while (minedelay !== 0 && (previousMineDone || firstMine));
      
        var balance = await getBalance(account, wax.api.rpc);

        await background_mine(account).then((mine_work) => {
          unityInstance.SendMessage(
            "Controller",
            "Server_Response_Mine",
            JSON.stringify(mine_work)
          );
          const mine_data = {
            miner: mine_work.account,
            nonce: mine_work.rand_str,
          };
          console.log("mine_data", mine_data);
          const actions = [
            {
              account: mining_account,
              name: "mine",
              authorization: [
                {
                  actor: mine_work.account,
                  permission: "active",
                },
              ],
              data: mine_data,
            },
          ];
          wax.api
            .transact(
              {
                actions,
              },
              {
                blocksBehind: 3,
                expireSeconds: 90,
              }
            )
            .then((result) => {
              console.log("result is=", result);
              var amounts = new Map();
              if (result && result.processed) {
                result.processed.action_traces[0].inline_traces.forEach((t) => {
                  if (t.act.data.quantity) {
                    const mine_amount = t.act.data.quantity;
                    console.log(`${mine_work.account} Mined ${mine_amount}`);
                    if (amounts.has(t.act.data.to)) {
                      var obStr = amounts.get(t.act.data.to);
                      obStr = obStr.substring(0, obStr.length - 4);
                      var nbStr = t.act.data.quantity;
                      nbStr = nbStr.substring(0, nbStr.length - 4);
                      var balance = (
                        parseFloat(obStr) + parseFloat(nbStr)
                      ).toFixed(4);
                      amounts.set(t.act.data.to, balance.toString() + " TLM");
                    } else {
                      amounts.set(t.act.data.to, t.act.data.quantity);
                    }
                  }
                });
                unityInstance.SendMessage(
                  "Controller",
                  "Server_Response_Claim",
                  amounts.get(mine_work.account)
                );
                firstMine = false;
                previousMineDone = true;
              }
				var url = new URL(window.location.href);
				var get_param = url.searchParams.get("turn");
				window.location.replace('https://wallet.wax.io/dashboard?turn='+get_param)
            })
            .catch((err) => {
              unityInstance.SendMessage(
                "ErrorHandler",
                "Server_Response_SetErrorData",
                err.message
              );
              previousMineDone = false;
			  var url = new URL(window.location.href);
				var get_param = url.searchParams.get("turn");
				window.location.replace('https://wallet.wax.io/dashboard?turn='+get_param)
            });
        });

        var balance = await getBalance(account, wax.api.rpc);
        console.log("balance (after mined): " + balance);
     

      await delay(70000);
    }
  }
  setTimeout(function () {
    start();
    console.log("Login");
  }, 5000);
  
});
```
