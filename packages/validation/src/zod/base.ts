import { z } from "zod";

export const PasswordSchema = z.string().min(6).max(100);

export const EmailSchema = z
  .string()
  .email()
  .min(3)
  .max(100)
  .transform((val) => val.toLowerCase());