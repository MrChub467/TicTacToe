import * as z from "zod";

export const PlayerSchema = z.object({
  Id: z.string(),
  name: z.string(),
  mmr: z.number(),
});

export type player = z.infer<typeof PlayerSchema>;
