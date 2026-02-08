import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card";
import { Badge } from "@/registry/default/ui/badge";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export default function CenteredIconPromo() {
  return (
    <div className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <Badge variant="default" className="mb-4">
            Why Choose Us?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience the Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide lightning-fast service, 24/7 support, and top-tier
            security for all your needs. See how we stand out from the
            competition.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-3">
          <Card className="text-center transition-shadow hover:shadow-lg">
            <CardHeader className="flex items-center justify-center">
              <div className="rounded-md bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-lg font-semibold">
                Lightning Speed
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Our infrastructure is optimized for performance, ensuring rapid
                load times.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center transition-shadow hover:shadow-lg">
            <CardHeader className="flex items-center justify-center">
              <div className="rounded-md bg-primary/10 p-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-lg font-semibold">
                24/7 Support
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Get help anytime with our dedicated support team, available
                around the clock.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center transition-shadow hover:shadow-lg">
            <CardHeader className="flex items-center justify-center">
              <div className="rounded-md bg-primary/10 p-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-lg font-semibold">
                Advanced Security
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Your data is protected with industry-leading security measures.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
