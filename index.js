// Import the OpenAI API client library and the express library
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Set up a configuration object with the organization ID and API key for the OpenAI API
const configuration = new Configuration({
  organization: "org-fdEElitDGbfqLgz6ZLYDyBAH",
  apiKey: "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",
});

// Create an OpenAI API instance using the configuration object
const openai = new OpenAIApi(configuration);

// Create an express app instance
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Specify the port for the express server to listen on
const port = 3080;

// Define a route for the root path that listens for POST requests
app.post("/", async (req, res) => {
  // When a request is received, create a text completion request using the OpenAI API
  const { message, currentModel } = req.body;
  console.log(message);
  const response = await openai.createCompletion({
    model: `${currentModel}`,
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });

  // Send the response data back to the client in JSON format
  res.json({
    // data: response.data,
    message: response.data.choices[0].text,
  });
});

app.get("/models", async (req, res) => {
  const response = await openai.listEngines();
  res.json({
    models: response.data,
  });
});

// Start the express server and log a message to the console when it is ready to accept requests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
