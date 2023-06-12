CustomFunctions.associate("CLASSIFY",(function(t,e){if(!localStorage.getItem("token"))return"Please log in.";var n={input:t,groupings:e.flat(1/0).join(","),platform:"Excel Add-in",outputType:"Classify - FF"};return callAPI("classify",n)})),CustomFunctions.associate("EXTRACT",(function(t,e){if(!localStorage.getItem("token"))return"Please log in.";var n={input:t,extract:e,platform:"Excel Add-in",outputType:"Extract - FF"};try{return callAPI("extract",n)}catch(t){return"No result found"}})),CustomFunctions.associate("SENTIMENT",(function(t,e){if(!localStorage.getItem("token"))return"Please log in.";var n={input:t,sentiment:e.flat(1/0).join(","),platform:"Excel Add-in",outputType:"Sentiment - FF"};try{return callAPI("sentiment",n)}catch(t){return"No result found"}})),CustomFunctions.associate("INFO",(function(t,e){if(!localStorage.getItem("token"))return"Please log in.";var n={input:t,info:e.flat(1/0).join(" "),platform:"Excel Add-in",outputType:"Get Info - FF"};try{return callAPI("info",n)}catch(t){return"No result found"}})),CustomFunctions.associate("FREEFORM",(function(t){if(!localStorage.getItem("token"))return"Please log in.";var e={input:t.flat(1/0).join(" "),platform:"Excel Add-in",outputType:"Freeform - FF"};try{return callAPI("freeform",e)}catch(t){return"No result found"}})),CustomFunctions.associate("INFER",(function(t,e,n){if(!localStorage.getItem("token"))return"Please log in.";if(t.length!=e.length)return"input_examples and output_examples are different lengths";var o=[];for(var r in t){var a=t[r],u=e[r];o.push(a+": "+u)}var l={input:n,"reference-list":o=o.join("\\n"),platform:"Excel Add-in",outputType:"Infer - FF"};try{return callAPI("infer",l)}catch(t){return"No result found"}}));
//# sourceMappingURL=functions.js.map