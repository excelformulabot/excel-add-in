/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

// The initialize function must be run each time a new page is loaded
Office.onReady(() => {
  //document.getElementById("sideload-msg").style.display = "none";
  //document.getElementById("app-body").style.display = "flex";
  //document.getElementById("run").onclick = run;
});

/*
export async function run() {
  try {
    await Excel.run(async (context) => {
      
      // Insert your Excel code here
      const range = context.workbook.getSelectedRange();

      // Read the range address
      range.load("address");

      // Update the fill color
      range.format.fill.color = "yellow";

      await context.sync();
      console.log(`The range address was ${range.address}.`);
    });
  } catch (error) {
    console.error(error);
  }
}
*/

// Function to replace formulas with values
function replaceFormulasWithValues() {
  return new Promise(function (resolve, reject) {
    Excel.run(function (context) {
      var sheet = context.workbook.worksheets.getActiveWorksheet();
      var range = sheet.getUsedRange();
      range.load(["formulas", "values"]);

      return context.sync().then(function () {
        var formulas = range.formulas;
        console.log("formulas", formulas);
        var values = range.values;
        var count = 0;

        if (!formulas) {
          console.log("No formulas found in the range.");
          resolve(count);
        }

        console.log(formulas.length,formulas[0].length)
        for (var i = 0; i < formulas.length; i++) {
          for (var j = 0; j < formulas[i].length; j++) {
            var formula = formulas[i][j];
            console.log("formula",formula)
            if (typeof formula === "string" && formula.includes("FORMULABOT.")) {
              var value = values[i][j];
              range.getCell(i, j).values = [[value]];
              count++;
            }
          }
        }
        resolve(count);
      });
    })
      .then(function (count) {
        console.log("Replaced " + count + " formulas with values.");
        // Perform any further actions if needed
      })
      .catch(function (error) {
        console.error(error);
        reject("Error: " + error);
      });
  });
}

async function loginFunc() {
  return new Promise(function (resolve, reject) {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    if (email == "" || password == "") {
      updateBtn("#login", "Fill Input Field!", "Login");
      reject(new Error("Fill Input Field!"));
      return;
    }
    document.getElementById("login").innerText = "Logging In...";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://formulabot.com/api/1.1/wf/login/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var resp = JSON.parse(result);
        if (resp.status == "success") {
          localStorage.setItem("token", resp.response.token);
          loginHandle(resp);
          resolve(resp);
        } else if (resp.reason === "INVALID_LOGIN_CREDENTIALS") {
          updateBtn("#login", "Invalid Email/Password", "Login");
          reject(new Error("Invalid Email/Password"));
        } else {
          reject(new Error("Login failed"));
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
        delayedMessage();
      });
  });
}

function loginHandle(res) {
  if (res.status === "success") {
    if (res.response.subscription) {
      $("#login").text("Login");
      $("#email").val("");
      $("#password").val("");
      $("#loginScr").css("display", "none");
      $("#mainScr").css("display", "block");
      $("#loadScr").css("display", "none");
    } else {
      $("#loginScr").css("display", "block");
      $("#mainScr").css("display", "none");
      $("#loadScr").css("display", "none");
      updateBtn("#login", "Inactive Subscription", "Login");
    }
  } else {
    updateBtn("#login", res.message, "Login");
  }
}

function getActiveRange() {
  return new Promise(function(resolve, reject) {
    Excel.run(function(context) {
      var selectedRange = context.workbook.getSelectedRange();
      selectedRange.load("address");

      return context.sync().then(function() {
        var rangeA1Notation = selectedRange.address;
        resolve(rangeA1Notation);
      });
    }).catch(function(error) {
      reject(error);
    });
  });
}
