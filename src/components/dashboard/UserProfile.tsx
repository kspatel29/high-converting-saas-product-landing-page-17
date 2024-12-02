import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Coins, LogOut } from "lucide-react";
import Pricing from "@/components/Pricing";

interface UserProfileProps {
  onClose: () => void;
  credits: number;
}

const UserProfile = ({ onClose, credits }: UserProfileProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    } else {
      navigate("/auth");
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Your Profile</h2>
              <div className="flex items-center gap-2 mt-2">
                <Coins className="w-5 h-5 text-accent" />
                <span>{credits} credits available</span>
              </div>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Upgrade Your Plan</h3>
            <Pricing />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;