// app/api/chat/route.ts

import { OpenAI } from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});
export const runtime = "edge";
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { schema, prompt } = await req.json();

  const message =
    `O seu trabalho é criar querie em SQL a partir de um schema SQl provido abaixo.
    Schema SQL: """ ${schema} """

    A partir do schema acima, escreva uma query SQL a partir da solicitação abaixo:

    Solicitação: """${prompt}"""
`.trim();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: message }],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
