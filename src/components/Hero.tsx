import { ArrowRight, Video, Youtube } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 container-padding bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-6">
          <Video className="w-8 h-8 text-accent" />
          <Youtube className="w-8 h-8 text-accent" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Professional Video Dubbing for YouTubers
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Transform your content for global audiences. Easily dub your videos, add captions, and create perfect clips for maximum reach and engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
            Start Dubbing
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="mt-16 glass-card rounded-xl p-4 max-w-4xl mx-auto animate-float">
        <img 
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          alt="Video Dubbing Interface"
          className="rounded-lg w-full"
        />
      </div>
    </section>
  );
};

export default Hero;