import { Check } from "lucide-react";

const partners = [
  { name: "Shopify", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
  { name: "Stripe", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
  { name: "PayPal", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
  { name: "Google", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
  { name: "Apple", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
  { name: "Meta", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100" },
];

const Partners = () => {
  return (
    <section className="py-16 container-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
              <img src={partner.logo} alt={partner.name} className="h-8 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;