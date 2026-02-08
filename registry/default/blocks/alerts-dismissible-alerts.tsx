"use client";

import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/default/ui/alert";
import { Button } from "@/registry/default/ui/button";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  X,
  XCircle,
} from "lucide-react";

export default function DismissibleAlerts() {
  const [alerts, setAlerts] = useState({
    default: true,
    destructive: true,
    success: true,
    warning: true,
    info: true,
  });

  const closeAlert = (type: keyof typeof alerts) => {
    setAlerts((prev) => ({ ...prev, [type]: false }));
  };

  const resetAlerts = () => {
    setAlerts({
      default: true,
      destructive: true,
      success: true,
      warning: true,
      info: true,
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        {alerts.default && (
          <Alert className="relative shadow-sm">
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a dismissible default alert.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={() => closeAlert("default")}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        {alerts.destructive && (
          <Alert variant="destructive" className="relative shadow-sm">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Destructive Alert</AlertTitle>
            <AlertDescription>
              This is a dismissible destructive alert.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 !p-0 h-6 w-6 text-destructive hover:bg-destructive/10"
              onClick={() => closeAlert("destructive")}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        {alerts.success && (
          <Alert className="border-green-500/50 text-green-700 dark:border-green-500 dark:text-green-400 [&>svg]:text-green-500 relative shadow-sm">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>
              This is a dismissible success alert.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 !p-0 h-6 w-6 text-green-700 hover:bg-green-500/10 dark:text-green-400"
              onClick={() => closeAlert("success")}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        {alerts.warning && (
          <Alert className="border-yellow-500/50 text-yellow-700 dark:border-yellow-500 dark:text-yellow-400 [&>svg]:text-yellow-500 relative shadow-sm">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>
              This is a dismissible warning alert.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 !p-0 h-6 w-6 text-yellow-700 hover:bg-yellow-500/10 dark:text-yellow-400"
              onClick={() => closeAlert("warning")}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        {alerts.info && (
          <Alert className="border-blue-500/50 text-blue-700 dark:border-blue-500 dark:text-blue-400 [&>svg]:text-blue-500 relative shadow-sm">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Info Alert</AlertTitle>
            <AlertDescription>
              This is a dismissible info alert.
            </AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 !p-0 h-6 w-6 text-blue-700 hover:bg-blue-500/10 dark:text-blue-400"
              onClick={() => closeAlert("info")}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}
      </div>

      {!Object.values(alerts).every(Boolean) && (
        <Button
          className="mt-6 shadow-md hover:shadow-lg transition-shadow"
          onClick={resetAlerts}
        >
          Reset Alerts
        </Button>
      )}
    </div>
  );
}
