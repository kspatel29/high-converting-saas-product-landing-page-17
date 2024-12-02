import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "hi", label: "Hindi" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
];

interface VideoUploadProps {
  type: "dub" | "caption" | "clip";
  title: string;
  description: string;
}

const VideoUpload = ({ type, title, description }: VideoUploadProps) => {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      sourceLanguage: "",
      targetLanguages: [] as string[],
    },
  });

  const onSubmit = async (data: any) => {
    // Will be implemented when API is provided
    toast({
      title: "Coming Soon",
      description: "This feature will be implemented soon!",
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <Card className="p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-neutral-600 mb-6">{description}</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept="video/*"
                className="hidden"
                id="video-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-neutral-400 mb-4" />
                <span className="text-neutral-600">
                  Click to upload or drag and drop
                </span>
                <span className="text-sm text-neutral-500">MP4, WebM or MOV</span>
              </label>
            </div>

            {preview && (
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  src={preview}
                  controls
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <FormField
              control={form.control}
              name="sourceLanguage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Source Language</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source language" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetLanguages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Languages</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map((lang) => (
                      <label
                        key={lang.value}
                        className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                          field.value.includes(lang.value)
                            ? "border-accent bg-accent/5"
                            : "border-neutral-200 hover:border-accent"
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={lang.value}
                          checked={field.value.includes(lang.value)}
                          onChange={(e) => {
                            const value = e.target.value;
                            const newValue = e.target.checked
                              ? [...field.value, value]
                              : field.value.filter((v: string) => v !== value);
                            field.onChange(newValue);
                          }}
                          className="hidden"
                        />
                        {lang.label}
                      </label>
                    ))}
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={isUploading || !preview}
            >
              {isUploading ? "Processing..." : "Start Processing"}
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default VideoUpload;