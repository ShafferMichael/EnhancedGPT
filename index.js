// 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

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-fdEElitDGbfqLgz6ZLYDyBAH",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
