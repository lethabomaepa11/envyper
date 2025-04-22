import React from "react";
import { Button } from "@heroui/button";
import LinkButton from "@/components/LinkButton";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] grid place-items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-cyan-400">
            Welcome to Envyper
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            The modern sercrets manager for developers. Build, test, and deploy
            with confidence. And safe secrets
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton color="primary" href="/sign-up" size="lg">
              Get Started
            </LinkButton>
            <LinkButton
              color="primary"
              variant="bordered"
              size="lg"
              href="/sign-up"
            >
              View Documentation
            </LinkButton>
            {/* <Button
              size="lg"
              as={Link}
              href={process.env.NEXT_PUBLIC_DOCS_SITE_URL}
              variant="ghost"
              color="primary"
            >
              View Documentation
            </Button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all"
            >
              <div className="text-emerald-400 text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: "🚀",
    title: "Reliable",
  },
  {
    icon: "🛠️",
    title: "Powerful",
  },
  {
    icon: "🔒",
    title: "Secure by Design",
  },
];

export default Index;
