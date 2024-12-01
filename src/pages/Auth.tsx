import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">Welcome to Monet</h2>
          <p className="text-secondary">Your AI-powered video dubbing platform</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <SupabaseAuth 
            supabaseClient={supabase}
            appearance={{
              theme: 'light',
              variables: {
                default: {
                  colors: {
                    brand: '#8989DE',
                    brandAccent: '#7878CD',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;