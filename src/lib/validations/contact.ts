import { z } from "zod";


export const contactSchema = z.object({

  name: z
    .string()
    .min(2,"Name is required"),


  email: z
    .string()
    .email("Invalid email"),


  subject: z
    .string()
    .min(3,"Subject required"),


  message: z
    .string()
    .min(10,"Message too short"),

});


export type ContactSchema =
z.infer<typeof contactSchema>;