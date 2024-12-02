import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoHistory = () => {
  const { data: history, isLoading } = useQuery({
    queryKey: ['video-history'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('video_history')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  if (isLoading) {
    return <div>Loading history...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Processing History</h2>
      <div className="grid gap-4">
        {history?.map((item: any) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{item.video_name}</h3>
                <div className="text-sm text-neutral-600 space-y-1">
                  <p>Type: {item.process_type}</p>
                  <p>Status: {item.status}</p>
                  <p>Languages: {item.target_languages.join(", ")}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {item.status === "completed" && (
                  <>
                    <Button size="sm" variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoHistory;