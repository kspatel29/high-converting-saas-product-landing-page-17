import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { UserCircle2, Coins } from "lucide-react";
import VideoUpload from "@/components/dashboard/VideoUpload";
import VideoHistory from "@/components/dashboard/VideoHistory";
import UserProfile from "@/components/dashboard/UserProfile";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showProfile, setShowProfile] = useState(false);

  const { data: credits } = useQuery({
    queryKey: ['credits'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_credits')
        .select('credits')
        .single();
      
      if (error) throw error;
      return data?.credits || 0;
    }
  });

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Creator Studio</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-lg">
              <Coins className="w-5 h-5 text-accent" />
              <span>{credits} credits</span>
            </div>
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setShowProfile(true)}
            >
              <UserCircle2 className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dub" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="dub">Dub Video</TabsTrigger>
            <TabsTrigger value="caption">Add Captions</TabsTrigger>
            <TabsTrigger value="clip">Generate Clip</TabsTrigger>
          </TabsList>

          <TabsContent value="dub">
            <VideoUpload 
              type="dub"
              title="Dub Your Video"
              description="Upload a video and select the languages you want to dub it in."
            />
          </TabsContent>

          <TabsContent value="caption">
            <VideoUpload 
              type="caption"
              title="Add Captions"
              description="Upload a video and select the languages for captions."
            />
          </TabsContent>

          <TabsContent value="clip">
            <VideoUpload 
              type="clip"
              title="Generate Clip"
              description="Upload a video and create short clips from it."
            />
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <VideoHistory />
        </div>
      </main>

      {showProfile && (
        <UserProfile 
          onClose={() => setShowProfile(false)}
          credits={credits}
        />
      )}
    </div>
  );
};

export default Dashboard;