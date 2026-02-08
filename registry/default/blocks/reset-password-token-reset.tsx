"use client";

import * as React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  EyeIcon,
  EyeOffIcon,
  KeyIcon,
  LockIcon,
  ShieldIcon,
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

// Step 1: Validate Token
const tokenSchema = z.object({
  token: z
    .string()
    .min(6, { message: "Token must be at least 6 characters" })
    .max(8, { message: "Token cannot be more than 8 characters" }),
});

// Step 2: Set new password
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

type TokenFormValues = z.infer<typeof tokenSchema>;
type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function TokenReset() {
  const [step, setStep] = React.useState<"token" | "password" | "complete">(
    "token",
  );
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState(false);

  // Token form
  const tokenForm = useForm<TokenFormValues>({
    resolver: zodResolver(tokenSchema),
    defaultValues: {
      token: "",
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

  function onSubmitToken(data: TokenFormValues) {
    console.log("Token submitted:", data);
    setStep("password");
  }

  function onSubmitPassword(data: PasswordFormValues) {
    console.log("Password submitted:", data);
    setStep("complete");
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <Card className="mx-auto max-w-md">
        <CardHeader className="space-y-1">
          {step === "token" && (
            <>
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <KeyIcon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-center text-2xl">
                Verify Reset Code
              </CardTitle>
              <CardDescription className="text-center">
                Enter the reset code from your email to continue
              </CardDescription>
            </>
          )}

          {step === "password" && (
            <>
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <LockIcon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-center text-2xl">
                Create New Password
              </CardTitle>
              <CardDescription className="text-center">
                Set a new secure password for your account
              </CardDescription>
            </>
          )}

          {step === "complete" && (
            <>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2Icon className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-center text-2xl">
                Password Updated
              </CardTitle>
              <CardDescription className="text-center">
                Your password has been reset successfully
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent>
          {/* Step indicators */}
          <div className="mb-6 flex items-center justify-center">
            <div className="flex w-2/3 items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${step !== "token" ? "bg-primary text-primary-foreground" : "border-input bg-background border"}`}
              >
                1
              </div>
              <div
                className={`h-1 flex-1 ${step !== "token" ? "bg-primary" : "bg-muted"}`}
              ></div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${step === "complete" ? "bg-primary text-primary-foreground" : "border-input bg-background border"}`}
              >
                2
              </div>
              <div
                className={`h-1 flex-1 ${step === "complete" ? "bg-primary" : "bg-muted"}`}
              ></div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${step === "complete" ? "bg-primary text-primary-foreground" : "border-input bg-background border"}`}
              >
                3
              </div>
            </div>
          </div>

          {step === "token" && (
            <Form {...tokenForm}>
              <form
                onSubmit={tokenForm.handleSubmit(onSubmitToken)}
                className="space-y-4"
              >
                <FormField
                  control={tokenForm.control}
                  name="token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reset Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter reset code"
                          {...field}
                          className="text-center text-lg tracking-widest"
                        />
                      </FormControl>
                      <FormDescription>
                        Check your email for a 6-8 character code we sent you
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Verify Code <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          )}

          {step === "password" && (
            <Form {...passwordForm}>
              <form
                onSubmit={passwordForm.handleSubmit(onSubmitPassword)}
                className="space-y-4"
              >
                <Alert className="mb-4 bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  <ShieldIcon className="h-4 w-4" />
                  <AlertDescription>
                    Your identity has been verified. Now create a new secure
                    password.
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
                          className="text-muted-foreground absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent dark:hover:bg-transparent"
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
                        Must have at least 8 characters with uppercase,
                        lowercase, and number
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
                          className="text-muted-foreground absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent dark:hover:bg-transparent"
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

          {step === "complete" && (
            <div className="space-y-4 text-center">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900">
                <p className="text-green-800 dark:text-green-300">
                  Your password has been successfully reset. Your account is now
                  secure.
                </p>
              </div>
              <Button asChild className="w-full">
                <Link href="#">Sign in with new password</Link>
              </Button>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-center">
          {step !== "complete" && (
            <p className="text-muted-foreground text-sm">
              Remember your password?{" "}
              <Link href="#" className="text-primary underline">
                Sign in
              </Link>
            </p>
          )}

          {step === "complete" && (
            <p className="text-muted-foreground text-sm">
              Need help?{" "}
              <Link href="#" className="text-primary underline">
                Contact support
              </Link>
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
