import { z } from "zod";

export const createUserSchema = z.object({
  full_name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(120),
  phone_number: z.string().max(11),
  is_client: z.boolean().default(false),
});

const contactsSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  full_name: z.string(),
  phone_number: z.string(),
});

export const returnedUserSchema = createUserSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
    contacts: z.array(contactsSchema).default([]),
  })
  .omit({ password: true });

export const returnedAllUserSchema = z.array(returnedUserSchema);

export const contactIdSchema = z.object({
  id: z.string(),
});
