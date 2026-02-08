"use client";

import * as React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  LockIcon,
  ShieldIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
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
import { Alert, AlertDescription } from "@/registry/default/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Badge } from "@/registry/default/ui/badge";

// Email form schema
const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
});

// Security question form schema
const securitySchema = z.object({
  question: z.string().min(1, { message: "Please select a security question" }),
  answer: z
    .string()
    .min(2, { message: "Answer must be at least 2 characters" }),
});

// Password form schema
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type EmailFormValues = z.infer<typeof emailSchema>;
type SecurityFormValues = z.infer<typeof securitySchema>;
type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function SecurityQuestionReset() {
  const [currentStep, setCurrentStep] = React.useState<
    "identify" | "verify" | "reset" | "success"
  >("identify");
  const [userName, setUserName] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState(false);

  // Identity form
  const identityForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  // Security question form
  const securityForm = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  // Password form
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmitIdentity(data: EmailFormValues) {
    console.log("Identity submitted:", data);
    setUserName(data.username);
    setCurrentStep("verify");
  }

  function onSubmitSecurity(data: SecurityFormValues) {
    console.log("Security answer submitted:", data);
    setCurrentStep("reset");
  }

  function onSubmitPassword(data: PasswordFormValues) {
    console.log("Password submitted:", data);
    setCurrentStep("success");
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const securityQuestions = [
    "What was the name of your first pet?",
    "What was your childhood nickname?",
    "In what city were you born?",
    "What is your mother's maiden name?",
    "What high school did you attend?",
    "What was the make of your first car?",
    "What is your favorite movie?",
    "What is the name of your favorite childhood teacher?",
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <Card className="mx-auto max-w-lg">
        {/* Header section with title and description */}
        <CardHeader className="text-center">
          <div className="bg-muted/50 mx-auto flex h-12 w-12 items-center justify-center rounded-full border">
            {currentStep === "identify" && <UserIcon className="h-6 w-6" />}
            {currentStep === "verify" && <ShieldIcon className="h-6 w-6" />}
            {currentStep === "reset" && <LockIcon className="h-6 w-6" />}
            {currentStep === "success" && (
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            )}
          </div>
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>
            {currentStep === "identify" && "First, let's identify your account"}
            {currentStep === "verify" &&
              "Verify your identity with a security question"}
            {currentStep === "reset" && "Create a new secure password"}
            {currentStep === "success" &&
              "Your password has been reset successfully"}
          </CardDescription>

          {/* Progress bar */}
          <div className="mt-6 flex w-full items-center gap-2">
            <div
              className={`h-2 flex-1 rounded-full ${
                currentStep !== "identify" ? "bg-primary" : "bg-primary/30"
              }`}
            ></div>
            <div
              className={`h-2 flex-1 rounded-full ${
                currentStep === "verify" ||
                currentStep === "reset" ||
                currentStep === "success"
                  ? "bg-primary"
                  : "bg-primary/30"
              }`}
            ></div>
            <div
              className={`h-2 flex-1 rounded-full ${
                currentStep === "reset" || currentStep === "success"
                  ? "bg-primary"
                  : "bg-primary/30"
              }`}
            ></div>
            <div
              className={`h-2 flex-1 rounded-full ${
                currentStep === "success" ? "bg-primary" : "bg-primary/30"
              }`}
            ></div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 px-6 py-4">
          {/* Step 1: Identify account */}
          {currentStep === "identify" && (
            <Form {...identityForm}>
              <form
                onSubmit={identityForm.handleSubmit(onSubmitIdentity)}
                className="space-y-4"
              >
                <Alert>
                  <AlertDescription>
                    Please enter your email address and username to locate your
                    account.
                  </AlertDescription>
                </Alert>

                <FormField
                  control={identityForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={identityForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Continue <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          )}

          {/* Step 2: Security question verification */}
          {currentStep === "verify" && (
            <Form {...securityForm}>
              <form
                onSubmit={securityForm.handleSubmit(onSubmitSecurity)}
                className="space-y-4"
              >
                <div className="bg-muted rounded-lg p-3">
                  <h3 className="mb-1 text-sm font-medium">Account Found</h3>
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-4 w-4" />
                    <span className="text-sm">{userName}</span>
                    <Badge variant="outline" className="ml-auto text-xs">
                      Pending Verification
                    </Badge>
                  </div>
                </div>

                <Alert className="bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                  <AlertDescription>
                    Please answer your security question to verify your
                    identity.
                  </AlertDescription>
                </Alert>

                <FormField
                  control={securityForm.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Security Question</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a security question" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {securityQuestions.map((question) => (
                            <SelectItem key={question} value={question}>
                              {question}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={securityForm.control}
                  name="answer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Answer</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        Answers are case-sensitive and must match exactly what
                        you provided when setting up your account.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Verify Identity
                </Button>
              </form>
            </Form>
          )}

          {/* Step 3: Create new password */}
          {currentStep === "reset" && (
            <Form {...passwordForm}>
              <form
                onSubmit={passwordForm.handleSubmit(onSubmitPassword)}
                className="space-y-4"
              >
                <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-300">
                  <KeyIcon className="h-4 w-4" />
                  <AlertDescription>
                    Your identity has been verified. Please create a new
                    password for your account.
                  </AlertDescription>
                </Alert>

                <FormField
                  control={passwordForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="••••••••"
                            type={isPasswordVisible ? "text" : "password"}
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground absolute top-0 right-0 h-full px-3 py-2"
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle password visibility
                          </span>
                        </Button>
                      </div>
                      <FormDescription>
                        Password must be at least 8 characters with uppercase,
                        lowercase, and number.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={passwordForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="••••••••"
                            type={
                              isConfirmPasswordVisible ? "text" : "password"
                            }
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground absolute top-0 right-0 h-full px-3 py-2"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {isConfirmPasswordVisible ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle confirm password visibility
                          </span>
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </form>
            </Form>
          )}

          {/* Step 4: Success */}
          {currentStep === "success" && (
            <div className="space-y-6 py-4">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>

              <div className="text-center">
                <h3 className="mb-2 text-xl font-medium">
                  Password Reset Complete
                </h3>
                <p className="text-muted-foreground">
                  Your password has been successfully reset. You can now log in
                  with your new credentials.
                </p>
              </div>

              <Button asChild className="w-full">
                <Link href="#">Sign In</Link>
              </Button>

              <div className="bg-muted rounded-lg p-4">
                <h4 className="mb-2 text-sm font-medium">
                  Security Recommendations
                </h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="bg-primary h-1.5 w-1.5 rounded-full"></div>
                    <span>Use a different password for each account</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-primary h-1.5 w-1.5 rounded-full"></div>
                    <span>
                      Enable two-factor authentication where available
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-primary h-1.5 w-1.5 rounded-full"></div>
                    <span>Consider using a password manager</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col justify-center border-t px-6 py-4">
          {currentStep !== "success" && (
            <div className="flex w-full flex-col items-center gap-2">
              <p className="text-muted-foreground text-sm">
                Remember your password?{" "}
                <Link href="#" className="text-primary font-medium">
                  Sign in instead
                </Link>
              </p>
              {currentStep !== "identify" && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-xs"
                  onClick={() => setCurrentStep("identify")}
                >
                  Start over
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
