export interface Article {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
  featured: boolean;
  readTime: number;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "origins-of-the-circle",
    title: "The Origins of The Hidden Circle",
    excerpt:
      "In the winter of 1921, six figures gathered beneath the vaulted ceiling of a private estate outside London. What they agreed upon that evening would echo through a century.",
    body: `In the winter of 1921, six figures gathered beneath the vaulted ceiling of a private estate outside London. What they agreed upon that evening would echo through a century.

The founding of The Hidden Circle was not an act of ambition. It was an act of necessity. The world had been reshaped by war, by loss, by the collapse of institutions that had once seemed permanent. These six individuals — each a titan in their respective field — understood that the highest form of legacy was not wealth, not title, but the cultivation of an enduring network of excellence.

They drafted three principles. First: that membership would never be sought, only offered. Second: that the work of The Circle would remain invisible to the world at large. Third: that each member would be obligated not merely to benefit from the network, but to elevate it.

Those three principles have governed every decision The Hidden Circle has made in the one hundred years since. They are inscribed — in abbreviated form — on the gold seal that every member receives upon initiation.

The seal bears no name. Only a symbol. A circle, incomplete, with a single gap at the top — signifying that there is always room for one more worthy soul.`,
    date: "2024-03-15",
    author: "The Archivist",
    category: "History",
    image: "/images/articles/article-01-history.jpg",
    featured: true,
    readTime: 6,
    tags: ["founding", "history", "legacy", "1921"],
  },
  {
    id: "2",
    slug: "the-language-of-symbols",
    title: "The Language of Symbols",
    excerpt:
      "Every mark, every seal, every geometric arrangement within The Circle carries meaning accumulated over decades. This is a primer on the visual vocabulary of distinction.",
    body: `Every mark, every seal, every geometric arrangement within The Circle carries meaning accumulated over decades.

The diamond — that recurring motif you will notice throughout our spaces, our correspondence, and our material objects — was chosen by the second generation of members in 1934. It replaced the original circular seal as the primary decorative element in a decision that was not made lightly.

The diamond is a symbol of pressure transformed into permanence. It represents the alchemical ideal: that what is difficult, what is compressed, what is subjected to forces that would destroy lesser materials, can emerge as something of irreplaceable value.

The gold palette is older than The Circle itself. Gold has signified worth across every civilisation humanity has produced. But within The Circle, gold carries a specific meaning: it is the colour of things that endure. Not silver, which tarnishes. Not bronze, which corrodes. Gold alone persists unchanged across centuries.

When a member receives their seal, they are receiving not merely an object but a vocabulary. The geometry of The Circle is a language. Learning to read it is part of the initiation.`,
    date: "2024-04-02",
    author: "The Historian",
    category: "Symbolism",
    image: "/images/articles/article-02-symbols.jpg",
    featured: true,
    readTime: 5,
    tags: ["symbols", "design", "meaning", "ritual"],
  },
  {
    id: "3",
    slug: "on-discretion",
    title: "On Discretion: The Most Undervalued Virtue",
    excerpt:
      "In an age of radical transparency, the deliberate choice to remain silent about one's affiliations, achievements, and associations is not secrecy — it is wisdom.",
    body: `In an age of radical transparency, the deliberate choice to remain silent about one's affiliations, achievements, and associations is not secrecy — it is wisdom.

The modern world has confused visibility with value. We have been trained to announce, to share, to document the minutiae of our lives in real time. The result is not greater connection. It is greater noise.

The Hidden Circle was built on a different premise. The premise that the most consequential work happens in quiet rooms. That the relationships most worth having are those forged without witnesses. That the person who needs to announce their importance has already demonstrated its limits.

Discretion is not the absence of pride. It is the discipline of knowing what to share, with whom, and when. It is the understanding that not everything valuable need be displayed to be valuable.

This is perhaps the virtue most difficult to teach, and the one most keenly tested during the admission process. We are not looking for those who can perform restraint. We are looking for those who have internalised it.`,
    date: "2024-05-18",
    author: "The Warden",
    category: "Philosophy",
    image: "/images/articles/article-03-members.jpg",
    featured: false,
    readTime: 4,
    tags: ["philosophy", "discretion", "values", "membership"],
  },
  {
    id: "4",
    slug: "the-art-of-the-gathering",
    title: "The Art of the Gathering",
    excerpt:
      "A Circle gathering is not a networking event. It is not a conference, a gala, or a summit. It is something older and more precise than any of those things.",
    body: `A Circle gathering is not a networking event. It is not a conference, a gala, or a summit. It is something older and more precise than any of those things.

The format has changed remarkably little since the 1930s. Gatherings are convened by invitation only, at locations announced no more than seventy-two hours in advance. Attendance is mandatory once confirmed. No recordings of any kind are permitted. No external guests.

The purpose of a gathering is not transactional. Members do not attend to pitch, to sell, or to network in the modern sense. They attend to think together. To subject their current work, their current thinking, to the scrutiny of people they trust absolutely.

The tradition of the evening's "open question" — in which any member may pose a question to the room without identifying themselves — dates to 1947. It has produced some of the most consequential conversations in The Circle's history.

What happens at a gathering stays at a gathering. Not because members are forbidden to speak of it, but because what matters cannot be transmitted. It must be experienced.`,
    date: "2024-06-30",
    author: "The Steward",
    category: "Tradition",
    image: "/images/articles/article-01-history.jpg",
    featured: false,
    readTime: 5,
    tags: ["gatherings", "tradition", "ritual", "community"],
  },
  {
    id: "5",
    slug: "legacy-the-long-game",
    title: "Legacy: The Long Game",
    excerpt:
      "The members who have shaped The Circle most profoundly are rarely the most prominent in their lifetimes. Legacy is a long game, and The Circle is patient.",
    body: `The members who have shaped The Circle most profoundly are rarely the most prominent in their lifetimes.

This is a pattern observable across the full century of The Circle's existence. The names that appear most frequently in our archives — those whose decisions and contributions have had the most lasting impact — are often not the names that appeared in newspapers or on honours lists.

Legacy is built differently from reputation. Reputation is the story others tell about you while you are present. Legacy is the story that persists after you are gone. The two rarely overlap.

The Circle attracts people who think in decades. Who are capable of planting trees they will never sit beneath. Who understand that the most important contributions to any endeavour are often invisible: the conversation that changed someone's direction, the introduction that sparked something unexpected, the standard maintained when it would have been easier to let it slip.

We are not in the business of recognition. We are in the business of permanence. The distinction matters enormously.`,
    date: "2024-08-12",
    author: "The Archivist",
    category: "Philosophy",
    image: "/images/articles/article-02-symbols.jpg",
    featured: false,
    readTime: 5,
    tags: ["legacy", "philosophy", "long-term", "impact"],
  },
  {
    id: "6",
    slug: "the-reformation-of-1968",
    title: "The Reformation of 1968",
    excerpt:
      "By the late 1960s, The Circle faced its most serious internal challenge. What emerged from that crisis was not a compromise — it was a clarification.",
    body: `By the late 1960s, The Circle faced its most serious internal challenge in its history.

The world outside had been transformed by movements that questioned every established institution. Inside The Circle, a faction of younger members — led by a figure known only as the Advocate — argued that the organisation's founding principles had calcified into orthodoxy. That the commitment to discretion had become an excuse for stagnation.

The debate that followed lasted eighteen months. It was conducted, in the tradition of The Circle, entirely in private. No record of the specific arguments was kept — only the outcomes.

The Reformation of 1968 produced three significant changes. First, the admission process was expanded to explicitly consider candidates from disciplines previously underrepresented: the arts, sciences, and emerging fields. Second, a formal mentorship obligation was established: senior members became responsible for the development of those they had sponsored. Third, and most controversially, the geographic restriction — which had effectively limited membership to Europe — was formally dissolved.

The Circle that emerged from 1968 was not a different organisation. It was the same organisation, more fully realised.`,
    date: "2024-09-05",
    author: "The Historian",
    category: "History",
    image: "/images/articles/article-03-members.jpg",
    featured: false,
    readTime: 6,
    tags: ["history", "1968", "reformation", "change"],
  },
];
