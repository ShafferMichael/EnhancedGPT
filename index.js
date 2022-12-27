// require the OpenAI API client library
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-fdEElitDGbfqLgz6ZLYDyBAH",
  apiKey: "",
});

// create the OpenAI API instance
const openai = new OpenAIApi(configuration);

// Create a completion request node.js
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
