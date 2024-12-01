import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for new YouTubers",
    features: [
      "Up to 2 hours of video dubbing",
      "Auto-generated captions",
      "Basic clip creation tools",
      "2 language pairs",
    ],
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    description: "For growing channels",
    features: [
      "Up to 10 hours of video dubbing",
      "Professional captions",
      "Advanced clip creation",
      "10 language pairs",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per month",
    description: "For established creators",
    features: [
      "Unlimited video dubbing",
      "Professional captions",
      "Advanced clip creation",
      "All language pairs",
      "24/7 priority support",
      "Custom API access",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 container-padding bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your channel's needs
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 rounded-xl ${
                plan.highlighted ? 'ring-2 ring-accent relative' : ''
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-neutral-600">{plan.period}</span>
                </div>
                <p className="text-neutral-600">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-lg transition-colors ${
                plan.highlighted 
                  ? 'bg-accent text-white hover:bg-accent/90' 
                  : 'bg-neutral-200 text-primary hover:bg-neutral-300'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;