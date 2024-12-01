import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container-padding max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Expand Your Global Reach?
        </h2>
        <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
          Join thousands of content creators who are breaking language barriers and growing their audience with Monet.
        </p>
        <Link
          to="/auth"
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg font-medium"
        >
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;