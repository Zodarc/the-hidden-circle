export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  currency: string;
  image: string;
  gallery: string[];
  category: string;
  featured: boolean;
  inStock: boolean;
  details: string[]; // bullet points
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "signet-ring",
    name: "The Circle Signet Ring",
    description:
      "A hand-cast signet ring in 18k gold vermeil, bearing the incomplete circle seal. Issued to members upon formal initiation.",
    longDescription: `Forged from sterling silver with an 18k gold vermeil finish, The Circle Signet Ring is the most recognisable symbol of membership. Each ring is cast individually using a lost-wax process that dates to the Renaissance, ensuring that no two are precisely identical.

The face of the ring bears the incomplete circle — The Circle's primary symbol — rendered in high relief. The gap at the top of the circle is oriented toward the wearer's knuckle when worn correctly: a private reminder that there is always room for excellence.

The ring is presented in a handcrafted mahogany box lined with black velvet, accompanied by a certificate of origin bearing the unique serial number of the piece.

This is not merely jewellery. It is a declaration.`,
    price: 850,
    currency: "USD",
    image: "/images/products/product-01-ring.png",
    gallery: ["/images/products/product-01-ring.png"],
    category: "Insignia",
    featured: true,
    inStock: true,
    details: [
      "Sterling silver with 18k gold vermeil",
      "Hand-cast via lost-wax process",
      "Unique serial number on interior band",
      "Presented in handcrafted mahogany box",
      "Available in sizes 7–13",
      "Certificate of origin included",
    ],
    tags: ["ring", "gold", "insignia", "membership", "featured"],
  },
  {
    id: "2",
    slug: "leather-journal",
    name: "The Archive Journal",
    description:
      "A full-grain leather journal with 240 pages of acid-free cream paper, embossed with the Circle seal. For those who think in ink.",
    longDescription: `Some ideas are too important for digital storage. The Archive Journal was designed for those who understand that the act of writing by hand changes the nature of what is written.

The cover is full-grain black leather, hand-stitched with waxed linen thread. The spine is reinforced with a linen binding that will not crack with regular use. The pages — 240 of them — are acid-free cream stock at 120gsm, thick enough for fountain pens without bleed-through.

The Circle seal is blind-embossed on the front cover. No colour, no gold foil — the impression speaks for itself.

A grosgrain ribbon bookmark in gold is included. The journal lies flat when open. It will last a lifetime if treated with even basic care.`,
    price: 195,
    currency: "USD",
    image: "/images/products/product-02-journal.png",
    gallery: ["/images/products/product-02-journal.png"],
    category: "Stationery",
    featured: true,
    inStock: true,
    details: [
      "Full-grain black leather cover",
      "Hand-stitched waxed linen binding",
      "240 pages, 120gsm acid-free cream paper",
      "Blind-embossed Circle seal",
      "Gold grosgrain ribbon bookmark",
      "Lies flat when open",
    ],
    tags: ["journal", "leather", "stationery", "writing"],
  },
  {
    id: "3",
    slug: "wax-seal-kit",
    name: "Correspondence Wax Seal Kit",
    description:
      "A complete correspondence kit: custom brass seal stamp, dark burgundy sealing wax, and a handcrafted wax spoon. Correspondence as ceremony.",
    longDescription: `In The Circle, correspondence is not merely communication. It is ceremony. The act of sealing a letter — of applying heat, wax, and the pressure of the stamp — transforms a document into an artefact.

The kit includes a solid brass seal stamp bearing the Circle's incomplete circle motif, cast from the same master die used for member certificates since 1947. It also includes four sticks of dark burgundy sealing wax — the colour specified in The Circle's original charter — and a handcrafted wax spoon in copper.

A small card bearing instructions in both English and French is included, as is a linen storage pouch for transport.

Those who have used wax seals report that it changes how they write. When you know the letter will be sealed, you write differently. Better.`,
    price: 125,
    currency: "USD",
    image: "/images/products/product-03-wax-seal.png",
    gallery: ["/images/products/product-03-wax-seal.png"],
    category: "Stationery",
    featured: false,
    inStock: true,
    details: [
      "Solid brass seal stamp with Circle motif",
      "Four sticks of dark burgundy sealing wax",
      "Handcrafted copper wax spoon",
      "Instructions in English and French",
      "Linen storage pouch included",
    ],
    tags: ["wax seal", "stationery", "correspondence", "ritual"],
  },
  {
    id: "4",
    slug: "membership-card",
    name: "The Circle Member Card",
    description:
      "A hand-numbered member identification card in black metal with gold lettering. Presented as part of the formal induction package.",
    longDescription: `The Circle Member Card is not a loyalty card. It is a statement.

Cut from a single piece of black-anodised stainless steel at 0.8mm thickness, the card carries the member's unique identification number — never their name — engraved in 24k gold. The reverse bears The Circle's three foundational principles, abbreviated to their essential words.

The card serves no transactional purpose. It opens no doors, triggers no discounts. It is, in the most precise sense, purely symbolic — and that is what makes it valuable.

Members report that carrying it changes small things. The way they hold a meeting. The decisions they make when no one is watching. The standards they hold themselves to.

Perhaps that is sufficient purpose for any object.`,
    price: 0,
    currency: "USD",
    image: "/images/products/product-04-membership-card.png",
    gallery: ["/images/products/product-04-membership-card.png"],
    category: "Insignia",
    featured: true,
    inStock: true,
    details: [
      "Black-anodised stainless steel, 0.8mm",
      "24k gold-engraved unique member number",
      "Three principles engraved on reverse",
      "Presented in velvet induction envelope",
      "Issued exclusively upon formal acceptance",
    ],
    tags: ["card", "metal", "insignia", "membership", "identity"],
  },
  {
    id: "5",
    slug: "correspondence-set",
    name: "The Circle Correspondence Set",
    description:
      "Twenty sheets of heavyweight black correspondence paper with a single gold-foil Circle mark in the corner. For those whose words deserve the right vessel.",
    longDescription: `The Circle Correspondence Set comprises twenty sheets of 300gsm black cotton paper, each bearing a single blind-debossed Circle mark in the upper-left corner. A matching set of twenty black envelopes is included.

The paper accepts both fountain pen and ballpoint ink without smearing, and takes printer ink cleanly for those who prefer to type their correspondence.

The set is presented in a black cloth-wrapped box, sealed with a gold foil sticker bearing the archive number.

There is no digital version of this product. That is intentional.`,
    price: 75,
    currency: "USD",
    image: "/images/products/product-fallback.jpg",
    gallery: ["/images/products/product-fallback.jpg"],
    category: "Stationery",
    featured: false,
    inStock: true,
    details: [
      "20 sheets, 300gsm black cotton paper",
      "20 matching black envelopes",
      "Gold blind-debossed Circle mark",
      "Accepts fountain pen and printer ink",
      "Presented in cloth-wrapped box",
    ],
    tags: ["paper", "stationery", "correspondence", "black"],
  },
  {
    id: "6",
    slug: "reading-guide",
    name: "The Circle Reading Guide",
    description:
      "A curated list of works — philosophy, history, strategy, and fiction — that have been recommended within The Circle across one hundred years. Annotated.",
    longDescription: `This is not a bibliography. It is a conversation.

The Circle Reading Guide collects one hundred works — in philosophy, history, strategy, biography, and fiction — that have been formally recommended within The Circle over the past century. Each entry includes a brief annotation: not a summary, but a note on why the work matters.

The guide is printed on matte black stock in gold ink, bound in black cloth with silver-foil lettering on the spine. It is 180 pages.

Several of the works on the list are out of print. For those, The Circle maintains a small private lending library accessible to active members.

The guide is updated every ten years. This is the centenary edition.`,
    price: 145,
    currency: "USD",
    image: "/images/products/product-fallback.jpg",
    gallery: ["/images/products/product-fallback.jpg"],
    category: "Books",
    featured: false,
    inStock: false,
    details: [
      "100 curated works with annotations",
      "Printed on matte black stock in gold ink",
      "Black cloth binding, silver-foil spine",
      "180 pages",
      "Centenary edition — limited run",
      "Currently out of stock",
    ],
    tags: ["reading", "books", "curation", "philosophy", "limited"],
  },
];
