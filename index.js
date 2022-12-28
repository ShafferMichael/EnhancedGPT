// Import the OpenAI API client library and the express library
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

// Set up a configuration object with the organization ID and API key for the OpenAI API
const configuration = new Configuration({
  organization: "org-fdEElitDGbfqLgz6ZLYDyBAH",
  apiKey: "",
});

// Create an OpenAI API instance using the configuration object
const openai = new OpenAIApi(configuration);

// Create an express app instance
const app = express();

// Specify the port for the express server to listen on
const port = 3080;

// Define a route for the root path that listens for POST requests
app.post("/", async (req, res) => {
  // When a request is received, create a text completion request using the OpenAI API
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  // Log the text of the first completion choice to the console
  console.log(response.data.choices[0].text);
  // Send the response data back to the client in JSON format
  res.json({
    data: response.data,
  });
});

// Start the express server and log a message to the console when it is ready to accept requests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
