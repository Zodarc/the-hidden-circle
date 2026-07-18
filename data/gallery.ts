export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  featured?: boolean;
}

export const galleryCategories = [
  "All",
  "Gatherings",
  "Architecture",
  "Artefacts",
  "Portraits",
  "Documents",
  "Ceremonies",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "The First Assembly",
    description:
      "A photographic reproduction of the first formal gathering at the estate outside London, winter 1921. Six figures, unidentified by mutual agreement.",
    image: "/images/gallery/gallery-01.png",
    category: "Gatherings",
    year: "1921",
    featured: true,
  },
  {
    id: "2",
    title: "The Founding Seal",
    description:
      "The original wax seal used to authenticate The Circle's founding charter. Preserved in the private archive since 1921.",
    image: "/images/gallery/gallery-02.jpg",
    category: "Artefacts",
    year: "1921",
    featured: true,
  },
  {
    id: "3",
    title: "The London Chapter House",
    description:
      "The exterior of The Circle's first permanent chapter house in London's Mayfair district, photographed in 1938.",
    image: "/images/gallery/gallery-03.jpg",
    category: "Architecture",
    year: "1938",
    featured: false,
  },
  {
    id: "4",
    title: "The Expansion Delegation",
    description:
      "Representatives from eight countries at the 1947 Expansion Gathering. The first formally international assembly of The Circle.",
    image: "/images/gallery/gallery-04.jpg",
    category: "Gatherings",
    year: "1947",
    featured: false,
  },
  {
    id: "5",
    title: "The Archive Room",
    description:
      "The private archive at the London chapter house, containing correspondence and documents spanning the full century of The Circle's existence.",
    image: "/images/gallery/gallery-05.jpg",
    category: "Architecture",
    year: "1955",
    featured: false,
  },
  {
    id: "6",
    title: "The Charter Document",
    description:
      "A detail of the founding charter, showing the three founding principles in their original handwritten form. Ink on vellum.",
    image: "/images/gallery/gallery-06.jpg",
    category: "Documents",
    year: "1921",
    featured: true,
  },
  {
    id: "7",
    title: "The Induction Ceremony",
    description:
      "A photograph from a 1962 induction ceremony. The faces of those present are obscured per the standing protocol.",
    image: "/images/gallery/gallery-07.jpg",
    category: "Ceremonies",
    year: "1962",
    featured: false,
  },
  {
    id: "8",
    title: "The Reformation Council",
    description:
      "The gathering at which the Reformation principles were agreed. Nineteen members, seven countries. No recording was made.",
    image: "/images/gallery/gallery-08.jpg",
    category: "Gatherings",
    year: "1968",
    featured: false,
  },
  {
    id: "9",
    title: "The Centenary Seal",
    description:
      "The special gold seal produced for The Circle's centenary in 2021. One hundred cast, numbered, distributed to senior members.",
    image: "/images/gallery/gallery-09.png",
    category: "Artefacts",
    year: "2021",
    featured: true,
  },
  {
    id: "10",
    title: "Portrait: The Warden",
    description:
      "A formal portrait of the current Warden of The Circle. The identity of the Warden is not publicly disclosed.",
    image: "/images/gallery/gallery-10.jpg",
    category: "Portraits",
    year: "2019",
    featured: false,
  },
  {
    id: "11",
    title: "The Geneva Chapter House",
    description:
      "The Circle's Geneva chapter house, established in 1952. The building has hosted some of the most consequential gatherings in The Circle's history.",
    image: "/images/gallery/gallery-11.png",
    category: "Architecture",
    year: "1952",
    featured: false,
  },
  {
    id: "12",
    title: "The Centenary Gathering",
    description:
      "One hundred years after the first assembly, members gathered once more. A moment of reckoning and renewal.",
    image: "/images/gallery/gallery-12.png",
    category: "Gatherings",
    year: "2021",
    featured: true,
  },
];
