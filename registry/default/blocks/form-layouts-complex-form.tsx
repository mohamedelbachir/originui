"use client";

import { Button } from "@/registry/default/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/default/ui/card";
import { Checkbox } from "@/registry/default/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group";
import { Separator } from "@/registry/default/ui/separator";
import { UploadCloud } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ComplexForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create Product Listing</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Basic Information</h3>
                <p className="text-sm text-muted-foreground">
                  Add your product details below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" placeholder="Enter product name" />
                </div>

                <div className="space-y-2">
                  <Label>Product Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Availability</Label>
                  <RadioGroup
                    defaultValue="instock"
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="instock" id="instock" />
                      <Label htmlFor="instock">In Stock</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="preorder" id="preorder" />
                      <Label htmlFor="preorder">Pre-order</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="backorder" id="backorder" />
                      <Label htmlFor="backorder">Backorder</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <Separator />

            {/* Media Upload */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Product Media</h3>
                <p className="text-sm text-muted-foreground">
                  Add product images and media.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Product Images</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50"
                    >
                      {imagePreview ? (
                        <Image
                          width={1280}
                          height={720}
                          src={imagePreview}
                          alt="Preview"
                          className="h-full object-contain"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <UploadCloud className="h-12 w-12 text-muted-foreground mb-2" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                      )}
                      <Input
                        id="image-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Additional Options */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Additional Options</h3>
                <p className="text-sm text-muted-foreground">
                  Configure additional product options.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Features</Label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="featured" />
                      <Label htmlFor="featured">Featured Product</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sale" />
                      <Label htmlFor="sale">On Sale</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new" />
                      <Label htmlFor="new">New Arrival</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exclusive" />
                      <Label htmlFor="exclusive">Exclusive</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button>Create Product</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
