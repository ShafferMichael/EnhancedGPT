// Import the OpenAI API client library and the express library
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");

// Import the body-parser and cors libraries for handling request bodies and CORS
const bodyParser = require("body-parser");
const cors = require("cors");

// Set up a configuration object with the organization ID and API key for the OpenAI API
const configuration = new Configuration({
  organization: "org-fdEElitDGbfqLgz6ZLYDyBAH",
  apiKey: "",
});

// Create an OpenAI API instance using the configuration object
const openai = new OpenAIApi(configuration);

// Create an express app instance
const app = express();

// Use the body-parser and cors middleware for handling request bodies and CORS
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

// Define a route for the /models path that listens for GET requests
app.get("/models", async (req, res) => {
  // When a request is received, get a list of available models using the OpenAI API
  const response = await openai.listEngines();

  // Send the response data (a list of models) back to the client in JSON format
  res.json({
    models: response.data,
  });
});

// Start the express server and log a message to the console when it is ready to accept requests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/**
 * DESCRIPTION:
 * This code is a simple server that uses the OpenAI API to provide text completion functionality to a client.
 * The server is written using the express library, which is a popular framework for building web applications with Node.js.
 * The code first imports the necessary libraries and creates a configuration object with the organization ID and API key for the OpenAI API.
 * It then creates an instance of the OpenAI API client using the configuration object.
 * Next, the code creates an express app instance and sets up middleware for handling JSON request bodies and Cross-Origin Resource Sharing (CORS).
 * The server listens for POST requests at the root path, and when it receives a request,
 * it uses the OpenAI API to create a text completion request using the request body as the prompt.
 * The server then sends the response data back to the client in JSON format.
 * The server also listens for GET requests at the /models path and responds with a list of available models in JSON format.
 * Finally, the server starts listening for requests on the specified port and logs a message to the console when it is ready to accept requests.
 */
