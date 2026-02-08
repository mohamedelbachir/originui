"use client";

import * as React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRightIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  RefreshCwIcon,
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
import { Separator } from "@/registry/default/ui/separator";
import { Alert, AlertDescription } from "@/registry/default/ui/alert";

// Email form schema
const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

// OTP form schema
const otpSchema = z.object({
  otp: z
    .string()
    .min(6, { message: "OTP must be at least 6 characters" })
    .max(6, { message: "OTP must be exactly 6 characters" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
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
type OTPFormValues = z.infer<typeof otpSchema>;
type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function EmailOTPReset() {
  const [activeStep, setActiveStep] = React.useState<
    "email" | "otp" | "password" | "success"
  >("email");
  const [email, setEmail] = React.useState("");
  const [countdown, setCountdown] = React.useState(0);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState(false);

  // Initialize countdown timer
  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Email form
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  // OTP form
  const otpForm = useForm<OTPFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
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

  function onSubmitEmail(data: EmailFormValues) {
    console.log("Email submitted:", data);
    setEmail(data.email);
    setActiveStep("otp");
    setCountdown(60); // Start 60-second countdown
  }

  function onSubmitOTP(data: OTPFormValues) {
    console.log("OTP submitted:", data);
    setActiveStep("password");
  }

  function onSubmitPassword(data: PasswordFormValues) {
    console.log("Password submitted:", data);
    setActiveStep("success");
  }

  function resendOTP() {
    setCountdown(60); // Reset countdown
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Left side: Illustration + Text */}
        <div className="flex flex-col justify-center lg:w-1/2">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            Account Recovery
          </h2>
          <p className="text-muted-foreground mb-6">
            Securely reset your password in three simple steps. We&apos;ll send
            you a one-time password to verify your email, then you can set a new
            password for your account.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium">
                1
              </div>
              <div>
                <h3 className="font-medium">Verify Email</h3>
                <p className="text-muted-foreground text-sm">
                  Enter your account email
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-primary/20 text-primary flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium">
                2
              </div>
              <div>
                <h3 className="font-medium">Enter OTP</h3>
                <p className="text-muted-foreground text-sm">
                  Enter the 6-digit code sent to your email
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-primary/20 text-primary flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium">
                3
              </div>
              <div>
                <h3 className="font-medium">New Password</h3>
                <p className="text-muted-foreground text-sm">
                  Create a new secure password
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="lg:w-1/2">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Reset Password</CardTitle>
                  <CardDescription>
                    Secure your account with a new password
                  </CardDescription>
                </div>
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <LockIcon className="text-primary h-5 w-5" />
                </div>
              </div>
              <Separator className="mt-6" />
            </CardHeader>

            <CardContent>
              {activeStep === "email" && (
                <Form {...emailForm}>
                  <form
                    onSubmit={emailForm.handleSubmit(onSubmitEmail)}
                    className="space-y-4"
                  >
                    <Alert className="mb-6 bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      <AlertDescription>
                        Enter the email address associated with your account.
                        We&apos;ll send you a verification code.
                      </AlertDescription>
                    </Alert>

                    <FormField
                      control={emailForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <div className="relative">
                            <FormControl>
                              <Input
                                placeholder="name@example.com"
                                type="email"
                                {...field}
                                className="pl-10"
                              />
                            </FormControl>
                            <MailIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Send Verification Code{" "}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              )}

              {activeStep === "otp" && (
                <Form {...otpForm}>
                  <form
                    onSubmit={otpForm.handleSubmit(onSubmitOTP)}
                    className="space-y-4"
                  >
                    <Alert className="mb-6">
                      <AlertDescription>
                        We&apos;ve sent a 6-digit verification code to{" "}
                        <span className="font-medium">{email}</span>. Please
                        check your inbox and spam folder.
                      </AlertDescription>
                    </Alert>

                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Verification Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="123456"
                              maxLength={6}
                              className="text-center text-lg tracking-widest"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Enter the 6-digit code we sent to your email
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Verify Code
                    </Button>

                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Didn&apos;t receive the code?{" "}
                        {countdown > 0 ? (
                          <span>Resend in {countdown}s</span>
                        ) : (
                          <Button
                            variant="link"
                            className="h-auto p-0 text-sm"
                            onClick={resendOTP}
                          >
                            Resend code{" "}
                            <RefreshCwIcon className="ml-1 h-3 w-3" />
                          </Button>
                        )}
                      </p>
                    </div>
                  </form>
                </Form>
              )}

              {activeStep === "password" && (
                <Form {...passwordForm}>
                  <form
                    onSubmit={passwordForm.handleSubmit(onSubmitPassword)}
                    className="space-y-4"
                  >
                    <div className="text-muted-foreground mb-4 text-sm">
                      Create a strong password with a mix of letters, numbers,
                      and symbols.
                    </div>

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

              {activeStep === "success" && (
                <div className="space-y-6 py-4 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-8 w-8 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">
                      Password Reset Successful
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Your password has been updated successfully. You can now
                      login with your new credentials.
                    </p>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="#">Sign in</Link>
                  </Button>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-center border-t p-6">
              {activeStep !== "success" && (
                <p className="text-muted-foreground text-sm">
                  Remember your password?{" "}
                  <Link href="#" className="text-primary font-medium">
                    Sign in
                  </Link>
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
