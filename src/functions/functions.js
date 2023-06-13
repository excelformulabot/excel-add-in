/* global console */

const BASE_URL = "https://formulabot.com/api/1.1/wf/";

/**
 * =FORMULABOT_CLASSIFY(cell_to_classify, option1, option2,...)
 * Ex:=FORMULABOT_CLASSIFY(F1,"fruit","veggie")
 * @customfunction
 * @param {string} cell_to_classify_type Input String
 * @param {string} cell_to_classify Input String
 * @param {string} cell_to_classify_based_on Input String
 * @param {string[][][]} list_options Multiple ranges of values.
 * @returns {string} The Formulabot result
 */
function CLASSIFY(cell_to_classify_type, cell_to_classify, cell_to_classify_based_on, list_options) {
  // check if user is active
  const activeState = localStorage.getItem("token");
  if (!activeState) {
    return "Please log in.";
  }

  // call API
  const payload = {
    inputType: cell_to_classify_type,
    input: cell_to_classify,
    groupingType: cell_to_classify_based_on,
    groupings: list_options.flat(Infinity).join(","),
    platform: "Excel Add-in",
    outputType: "Classify - FF",
  };
  console.log('payload',payload)

  const result = callAPI("classify", payload);
  return result;
  /*
  try {
    const result = callAPI("classify", payload);
    return result;
  } catch (e) {
    return "No result found";
  }*/
}

/**
 * =FORMULABOT_EXTRACT(cell_to_extract_info, info_to_extract)
 * Ex: =FORMULABOT_EXTRACT(F1,"company name")
 * @customfunction
 * @param {string} cell_to_extract_info Input String
 * @param {string} info_to_extract Input String
 * @returns {string} The Formulabot result
 */
function EXTRACT(cell_to_extract_info, info_to_extract) {
  // check if user is active
  const activeState = localStorage.getItem("token");
  if (!activeState) {
    return "Please log in.";
  }

  // call API
  const payload = {
    input: cell_to_extract_info,
    extract: info_to_extract,
    platform: "Excel Add-in",
    outputType: "Extract - FF",
  };

  try {
    const result = callAPI("extract", payload);
    return result;
    //return JSON.stringify(payload);
  } catch (e) {
    return "No result found";
  }
}

/**
 * =FORMULABOT_SENTIMENT(cell_to_analyze_sentiment, option1, option2,...)
 * Ex: =FORMULABOT_SENTIMENT(F1,"positive","negative","neutral")
 * @customfunction
 * @param {string} cell_to_analyze_sentiment Input String
 * @param {string[][][]} options Multiple ranges of values.
 * @returns {string} The Formulabot result
 */
function SENTIMENT(cell_to_analyze_sentiment, options) {
  // check if user is active
  const activeState = localStorage.getItem("token");
  if (!activeState) {
    return "Please log in.";
  }

  // call API
  const payload = {
    input: cell_to_analyze_sentiment,
    sentiment: options.flat(Infinity).join(","),
    platform: "Excel Add-in",
    outputType: "Sentiment - FF",
  };

  try {
    const result = callAPI("sentiment", payload);
    return result;
  } catch (e) {
    return "No result found";
  }
}

/**
 * =FORMULABOT_INFO(cell_to_get_info, info_request)
 * Ex: =FORMULABOT_INFO(F1,"tallest building")
 * @customfunction
 * @param {string} cell_to_get_info Input String
 * @param {string[][][]} info_request Multiple ranges of values.
 * @returns {string} The Formulabot result
 */
function INFO(cell_to_get_info, info_request) {
  // check if user is active
  const activeState = localStorage.getItem("token");
  if (!activeState) {
    return "Please log in.";
  }

  // call API
  const payload = {
    input: cell_to_get_info,
    info: info_request.flat(Infinity).join(" "),
    platform: "Excel Add-in",
    outputType: "Get Info - FF",
  };

  try {
    const result = callAPI("info", payload);
    return result;
  } catch (e) {
    return "No result found";
  }
}

/**
 * =FORMULABOT_FREEFORM(input_any_info)
 * Ex: =FORMULABOT_FREEFORM( “Write me a thank you note to ”, B10 ,“for gifting me a”, C10)
 * @customfunction
 * @param {string[][][]} input_any_info Multiple ranges of values.
 * @returns {string} The Formulabot result
 */
function FREEFORM(input_any_info) {
  // check if user is active
  const activeState = localStorage.getItem("token");
  if (!activeState) {
    return "Please log in.";
  }

  // call API
  const payload = {
    input: input_any_info.flat(Infinity).join(" "),
    platform: "Excel Add-in",
    outputType: "Freeform - FF",
  };

  try {
    const result = callAPI("freeform", payload);
    return result;
  } catch (e) {
    return "No result found";
  }
}

/**
 * =FORMULABOT_INFER(input_examples, output_examples, input_to_predict)
 * Ex: =FORMULABOT_INFER(A1:A5,B1:B5,A6)
 * @customfunction
 * @param {string} input_to_predict Input String
 * @param {string[][]} input_examples Multiple ranges of values.
 * @param {string[][]} output_examples Multiple ranges of values.
 * @returns {string} The Formulabot result
 */
function INFER(input_examples, output_examples, input_to_predict) {
  // check if user is active
  const activeState = localStorage.getItem("token");
  if (!activeState) {
    return "Please log in.";
  }

  if (input_examples.length != output_examples.length) {
    return "input_examples and output_examples are different lengths";
  }

  // loop inputs and outputs to assemble
  var example_arr = [];
  for (var i in input_examples) {
    const input_val = input_examples[i];
    const output_val = output_examples[i];
    example_arr.push(input_val + ": " + output_val);
  }

  example_arr = example_arr.join("\\n")

  // call API
  const payload = {
    input: input_to_predict,
    "reference-list": example_arr,
    platform: "Excel Add-in",
    outputType: "Infer - FF",
  };

  try {
    const result = callAPI("infer", payload);
    return result;
  } catch (e) {
    return "No result found";
  }
}
