import { Video, Captions, Youtube, Mic } from "lucide-react";

const features = [
  {
    title: "Professional Dubbing",
    description: "Dub your videos in multiple languages with AI-powered voice synthesis and professional voice actors.",
    icon: Mic,
  },
  {
    title: "Auto Captions",
    description: "Generate accurate captions in multiple languages automatically, perfect for global reach.",
    icon: Captions,
  },
  {
    title: "Video Clips",
    description: "Create engaging clips from your videos optimized for different social platforms.",
    icon: Video,
  },
  {
    title: "YouTube Integration",
    description: "Seamlessly upload your dubbed videos directly to your YouTube channel.",
    icon: Youtube,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything You Need for Global Content
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Professional tools to help you reach international audiences and grow your YouTube channel.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;