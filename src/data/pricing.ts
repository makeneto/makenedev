export interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
  icon: string
  buttonText: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 30000,
    description:
      "Ideal for those who need a simple, fast, and professional online presence to showcase their business.",
    features: [
      "Responsive landing page (1 page)",
      "Mobile-first design",
      "Contact form",
      "Basic SEO optimization",
      "Deployment included (Vercel)",
    ],
    highlighted: false,
    icon: "seed",
    buttonText: "Get Started Now!",
  },
  {
    id: "professional",
    name: "Professional",
    price: 120000,
    description:
      "For companies that need a complete website with multiple pages and advanced features.",
    features: [
      "All features from the Starter plan",
      "Multi-page website (up to 5 pages)",
      "Integrated CMS",
      "Custom animations",
      "Technical SEO",
      "1 month of post-launch support",
    ],
    highlighted: true,
    icon: "brief",
    buttonText: "Request a Quote",
  },
  {
    id: "genius",
    name: "Genius",
    price: 350000,
    description:
      "For companies that need a custom web application with backend, authentication, and tailored functionalities.",
    features: [
      "All features from the Professional plan",
      "Full-Stack application",
      "Custom API",
      "User authentication",
      "Scalable architecture",
      "Advanced SEO optimization",
      "3 months of priority support",
    ],
    highlighted: true,
    icon: "brain",
    buttonText: "Schedule a Meeting",
  },
]
