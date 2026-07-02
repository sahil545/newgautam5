export interface QAPair {
  keywords: string[];
  response: string;
  links?: Array<{ text: string; url: string }>;
}

export const knowledgeBase: QAPair[] = [
  {
    keywords: ["services", "offer", "what do you do", "architecture"],
    response: "Gautam & Associates specializes in architecture, design, and hospitality projects. We create functional masterpieces that inspire and endure. Our services include design, architecture, project management, and consultation.",
  },
  {
    keywords: ["team", "who", "staff", "people"],
    response: "Our team consists of experienced architects and designers dedicated to creating exceptional spaces. Visit our Team page to learn more about our talented professionals.",
  },
  {
    keywords: ["portfolio", "projects", "work", "case study", "show", "see"],
    response: "Here are some of our featured projects:",
    links: [
      { text: "Radisson Chandigarh", url: "/architecture/radisson-chandigarh" },
      { text: "Lemon Tree Hotel", url: "/architecture/lemon-tree" },
      { text: "Hotel Resort Kasauli", url: "/architecture/hotel-resort-kasauli" },
      { text: "Hotel Banquet Ladwa", url: "/architecture/hotel-banquet-ladwa" },
    ],
  },
  {
    keywords: ["hospitality", "hotel", "resort", "accommodation"],
    response: "We specialize in luxury hospitality design, creating premium accommodations with world-class amenities. Our hospitality projects blend contemporary design with comfort.",
  },
  {
    keywords: ["contact", "reach out", "get in touch", "hire", "inquiry"],
    response: "You can reach us through our Contact page with your project details. We'd love to hear about your vision and discuss how we can help bring it to life.",
  },
  {
    keywords: ["join", "career", "work with us", "hire", "employment"],
    response: "We're always looking for talented architects and designers. Check out our Join Us page for current opportunities and application information.",
  },
  {
    keywords: ["location", "where", "office"],
    response: "Gautam & Associates is based in India. We work on projects across various locations. Feel free to reach out to discuss your project requirements.",
  },
  {
    keywords: ["experience", "years", "founded", "established"],
    response: "Gautam & Associates brings years of experience in architecture and design. We've successfully delivered numerous premium projects across hospitality, residential, and commercial sectors.",
  },
  {
    keywords: ["design philosophy", "approach", "values"],
    response: "Our design philosophy focuses on creating spaces that inspire and endure. We believe in blending contemporary design with functional excellence to deliver exceptional user experiences.",
  },
  {
    keywords: ["timeline", "duration", "how long", "schedule"],
    response: "Project timelines vary based on scope and complexity. Contact us to discuss your specific project requirements and get a detailed timeline estimate.",
  },
  {
    keywords: ["budget", "cost", "price", "investment"],
    response: "We work with various budgets and project scales. Contact us with your project details, and we can provide customized solutions that match your investment level.",
  },
  {
    keywords: ["about"],
    response: "Gautam & Associates is a professional architecture and design firm creating functional masterpieces. We specialize in architecture, design, and premium projects.",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! Welcome to Gautam & Associates. I'm here to help with any questions about our services, team, or projects. What would you like to know?",
  },
  {
    keywords: ["thanks", "thank you", "appreciate"],
    response: "You're welcome! Feel free to ask if you have any more questions about our work or services.",
  },
];

export function findMatchingResponse(userMessage: string): { response: string; links?: Array<{ text: string; url: string }> } {
  const lowerMessage = userMessage.toLowerCase();

  for (const pair of knowledgeBase) {
    for (const keyword of pair.keywords) {
      if (lowerMessage.includes(keyword)) {
        return {
          response: pair.response,
          links: pair.links,
        };
      }
    }
  }

  return {
    response: "That's a great question! For more detailed information, please visit our website pages or contact us directly through the Contact page.",
  };
}
