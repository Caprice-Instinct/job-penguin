import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters long"),
  location: z.string().min(1, "Location must be defined"),
  about: z
    .string()
    .min(10, "Please provide enough information about your company"),
  logo: z.string().min(1, "Please upoad a logo"),
  website: z.string().url("Please provide a valid URL"),
  xAccount: z.string().optional(),
});

export const jobSeekerSchema = z.object({
  name: z.string().min(5, "Name should be at least 5 characters"),
  about: z.string().min(10, "Please provide more information about yourself"),
  resume: z.string().min(1, "Please provide your resume"),
});
