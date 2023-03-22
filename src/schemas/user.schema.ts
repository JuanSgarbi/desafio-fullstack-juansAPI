import { z } from "zod";

export const phoneNumbersSchema = z.object({
  number: z.string().max(11),
});

export const createUserSchema = z.object({
  full_name: z.string().max(50),
  email: z.string().email().max(50),
  password: z.string().max(120),
  phone_numbers: z.array(phoneNumbersSchema),
  is_client: z.boolean().default(false),
});

const contactsSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  full_name: z.string(),
  phone_numbers: z.array(phoneNumbersSchema),
});

export const returnedUserSchema = createUserSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
    contacts: z.array(contactsSchema).default([]),
  })
  .omit({ password: true });
