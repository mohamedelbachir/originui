"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form";
import { Input } from "@/registry/default/ui/input";
import { Button } from "@/registry/default/ui/button";
import { Textarea } from "@/registry/default/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { BriefcaseIcon, FileTextIcon, User2Icon } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  position: z.string().min(1, { message: "Please select a position" }),
  department: z.string().min(1, { message: "Please select a department" }),
  location: z
    .string()
    .min(1, { message: "Please select a location preference" }),
  resume: z.string().min(1, { message: "Resume is required" }),
  coverLetter: z.string().optional(),
  linkedIn: z.string().optional(),
  portfolio: z.string().optional(),
  referral: z.string().optional(),
  startDate: z.string().optional(),
  relocation: z.boolean().optional(),
  legal: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export default function ApplicationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      department: "",
      location: "",
      resume: "",
      coverLetter: "",
      linkedIn: "",
      portfolio: "",
      referral: "",
      startDate: "",
      relocation: false,
      legal: false,
    },
  });

  const positions = [
    { id: "1", title: "Senior Frontend Developer", department: "Engineering" },
    { id: "2", title: "Product Designer", department: "Design" },
    { id: "3", title: "DevOps Engineer", department: "Engineering" },
    { id: "4", title: "Content Marketing Manager", department: "Marketing" },
    { id: "5", title: "Data Scientist", department: "Data" },
    {
      id: "6",
      title: "Customer Success Manager",
      department: "Customer Success",
    },
  ];

  const departments = [
    "Engineering",
    "Design",
    "Product",
    "Marketing",
    "Data",
    "Customer Success",
    "Operations",
    "Sales",
  ];

  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Remote",
    "Chicago, IL",
    "Austin, TX",
  ];

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the form data to your server
    console.log(values);
    alert("Application submitted!");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">
          Join Our Team
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          We&apos;re excited about your interest in joining us. Please fill out
          the application form below to get started.
        </p>
      </div>

      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle>Job Application</CardTitle>
          <CardDescription>
            All fields marked with an asterisk (*) are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              encType="multipart/form-data"
            >
              <Accordion type="single" collapsible defaultValue="personal">
                <AccordionItem value="personal">
                  <AccordionTrigger className="flex items-center gap-2 text-lg font-medium">
                    <User2Icon className="h-5 w-5" />
                    Personal Information
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-4">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john.doe@example.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(123) 456-7890"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="linkedIn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Profile</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://linkedin.com/in/johndoe"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Optional but recommended
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Portfolio/Website</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://yourportfolio.com"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Optional but recommended for design/development
                              roles
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="position">
                  <AccordionTrigger className="flex items-center gap-2 text-lg font-medium">
                    <BriefcaseIcon className="h-5 w-5" />
                    Position Details
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-4">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {positions.map((position) => (
                                  <SelectItem
                                    key={position.id}
                                    value={position.title}
                                  >
                                    {position.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a department" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {departments.map((department) => (
                                  <SelectItem
                                    key={department}
                                    value={department}
                                  >
                                    {department}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location Preference *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a location" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {locations.map((location) => (
                                  <SelectItem key={location} value={location}>
                                    {location}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Earliest Start Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="sm:col-span-2">
                        <FormField
                          control={form.control}
                          name="relocation"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I am willing to relocate if required
                                </FormLabel>
                                <FormDescription>
                                  Some positions may require relocation to one
                                  of our office locations.
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documents">
                  <AccordionTrigger className="flex items-center gap-2 text-lg font-medium">
                    <FileTextIcon className="h-5 w-5" />
                    Resume & Documents
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pt-4">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="resume"
                        render={({ field: { onChange, ...fieldProps } }) => (
                          <FormItem>
                            <FormLabel>Resume / CV *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  type="file"
                                  className="cursor-pointer"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    onChange(file ? file.name : "");
                                  }}
                                  accept=".pdf,.doc,.docx"
                                  {...fieldProps}
                                />
                              </div>
                            </FormControl>
                            <FormDescription>
                              Accepted formats: PDF, DOC, DOCX (Max 5MB)
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="coverLetter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Letter</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us why you're interested in this position and what you would bring to the role..."
                                className="h-32 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Optional but recommended
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="referral"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Referral</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="How did you hear about this position?"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              If you were referred by a current employee, please
                              include their name
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <FormField
                control={form.control}
                name="legal"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I certify that all information provided is accurate *
                      </FormLabel>
                      <FormDescription>
                        By checking this box, you agree to our{" "}
                        <a href="#" className="text-primary underline">
                          terms of service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-primary underline">
                          privacy policy
                        </a>
                        .
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
