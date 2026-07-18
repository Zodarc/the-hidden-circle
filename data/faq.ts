export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  "All",
  "Membership",
  "Process",
  "Values",
  "Events",
  "Products",
] as const;

export type FAQCategory = (typeof faqCategories)[number];

export const faqItems: FAQItem[] = [
  // Membership
  {
    id: "1",
    category: "Membership",
    question: "How do I apply for membership in The Hidden Circle?",
    answer:
      "Membership in The Circle is not applied for in the traditional sense. Candidates are identified and approached by existing members. However, you may submit a formal expression of interest via the Join page, which is reviewed by the Admission Council. Expression of interest does not guarantee consideration, and the Council is under no obligation to respond.",
  },
  {
    id: "2",
    category: "Membership",
    question: "What are the criteria for membership?",
    answer:
      "The Circle does not publish explicit criteria. What we can say is that we are looking for individuals who have demonstrated sustained excellence in their field, who possess an unusual degree of discretion, and who understand that the highest form of ambition is the elevation of others. Title, wealth, and fame are neither prerequisites nor disqualifiers.",
  },
  {
    id: "3",
    category: "Membership",
    question: "Is membership open to people outside Europe?",
    answer:
      "Yes. Since the Reformation of 1968, The Circle has maintained chapters in over forty countries. We do not restrict membership by geography, nationality, or any other demographic factor. We consider the full range of human excellence, wherever it emerges.",
  },
  {
    id: "4",
    category: "Membership",
    question: "Is there an annual membership fee?",
    answer:
      "Membership carries a contribution obligation, the specifics of which are disclosed during the admission process. We do not publish fee structures publicly. What we can confirm is that financial means is not a barrier to membership — the contribution structure is calibrated to the individual.",
  },
  {
    id: "5",
    category: "Membership",
    question: "Can membership be revoked?",
    answer:
      "Yes. Membership in The Circle is a continuing obligation, not a permanent status. The Circle reserves the right to withdraw membership in cases of conduct that violates the founding principles, at the sole discretion of the Warden and the Admission Council. Such decisions are final.",
  },
  // Process
  {
    id: "6",
    category: "Process",
    question: "How long does the admission process take?",
    answer:
      "The admission process has no fixed timeline. It can range from several months to several years. The Circle does not rush its decisions, and candidates are expected to understand this as a feature, not a limitation. Patience is itself a quality we observe.",
  },
  {
    id: "7",
    category: "Process",
    question: "Will I know if my expression of interest has been received?",
    answer:
      "Expressions of interest submitted via the Join page receive an automated acknowledgement. Beyond that, you will hear from The Circle only if your expression is being actively considered. The absence of contact should not be interpreted as rejection — the process operates on its own timeline.",
  },
  {
    id: "8",
    category: "Process",
    question: "What happens at an induction ceremony?",
    answer:
      "The details of induction ceremonies are not disclosed publicly. What we can confirm is that they are private, they involve existing members, and they take place at a location communicated to the inductee no more than seventy-two hours in advance.",
  },
  // Values
  {
    id: "9",
    category: "Values",
    question: "Is The Hidden Circle a secret society?",
    answer:
      "The Circle is not secret. We are private. The distinction is significant. A secret society conceals its existence. The Circle merely declines to publicise its activities, its members, and its deliberations. Our existence is not hidden. What we do is.",
  },
  {
    id: "10",
    category: "Values",
    question: "Is The Hidden Circle affiliated with any political, religious, or other organisations?",
    answer:
      "No. The Circle has no political affiliation, no religious dimension, and no formal relationship with any other organisation, institution, or network. Members hold widely varying political and religious views. The Circle is indifferent to all of them.",
  },
  {
    id: "11",
    category: "Values",
    question: "What is The Circle's stance on diversity and inclusion?",
    answer:
      "The Circle evaluates candidates solely on the basis of demonstrated excellence and alignment with our founding principles. We have members from every continent, every profession, and every background imaginable. We do not track demographic data about our membership, as we consider such tracking incompatible with the principle of evaluating individuals as individuals.",
  },
  {
    id: "12",
    category: "Values",
    question: "Does The Circle exercise influence in public life?",
    answer:
      "The Circle does not act as an organisation in public life. We facilitate no lobbying, endorse no candidates, and hold no institutional positions. What individual members do in their professional and public lives is their own business. The Circle neither amplifies nor restricts it.",
  },
  // Events
  {
    id: "13",
    category: "Events",
    question: "How often do gatherings take place?",
    answer:
      "The Circle convenes formal gatherings between two and four times per year, at dates and locations determined by the Steward and communicated to members in advance. Smaller, informal gatherings are arranged by chapters independently and occur more frequently.",
  },
  {
    id: "14",
    category: "Events",
    question: "Can family members or associates attend gatherings?",
    answer:
      "No. Gatherings are exclusively for active members. No guests, no family members, no associates. This policy has been in place since the founding and will not change.",
  },
  // Products
  {
    id: "15",
    category: "Products",
    question: "Are products available for purchase by non-members?",
    answer:
      "Selected products from The Circle's collection are available for public purchase via the Products section of this site. Certain items — notably the Signet Ring and Member Card — are exclusively available through the induction process and cannot be purchased directly.",
  },
  {
    id: "16",
    category: "Products",
    question: "Do you ship internationally?",
    answer:
      "Yes. The Circle ships all available products to any address worldwide. Delivery timelines vary by destination. All products are shipped in discreet black packaging bearing no external branding beyond a small Circle mark on the inner box.",
  },
  {
    id: "17",
    category: "Products",
    question: "What is the return policy for products?",
    answer:
      "Unused products may be returned within thirty days of receipt for a full refund, excluding shipping costs. Items must be returned in their original packaging. Personalised or member-exclusive items are not eligible for return.",
  },
];
