import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ticketing-system",
  signingKey: process.env.INNGEST_SIGNING_KEY,
});
