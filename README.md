# alien

python -m CGIHTTPServer 8360
#Domain: all-access.wax.io

```javascript

  setInterval(function () {
    if (window.location.pathname.indexOf("cloud-wallet/signing") != -1) {
      if (grecaptcha.getResponse().length) {
        document.querySelector(".react-ripples").classList.remove("disabled");
        document.querySelector(".react-ripples button").disabled = false;
        document.querySelector(".react-ripples button").click();
      }
    }
  }, 3000);
  setTimeout(function () {
    document.querySelector(".button-primary").click()
  }, 150000);

```

#Domain: play.alienworlds.io

```javascript
window.addEventListener("load", (event) => {
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
        await delay(minedelay);
      } while (minedelay !== 0 && (previousMineDone || firstMine));
      console.log("just mine it!");
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open(
        "GET",
        "https://wax.eosrio.io/v2/state/get_account?account=" + userAccount,
        false
      ); // false for synchronous request
      xmlHttp.send(null);
      var get_user = JSON.parse(xmlHttp.responseText);
      //var last_action = get_user['actions'][get_user['actions'].length-1];
      if (
        get_user.account.cpu_limit &&
        get_user.account.cpu_limit.available > 600
      ) {
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
      } else {
        console.log(get_user);
      }

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
