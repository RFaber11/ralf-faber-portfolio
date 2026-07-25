export type PortfolioImage = {
  src: string;
  alt: string;
  position?: string;
};

export type PortfolioCollection = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  coverPosition?: string;
  images: PortfolioImage[];
};

export const collections: PortfolioCollection[] = [
  {
    id: "collection-01",

    title: "Rotterdam Evenings",

    subtitle: "Portraits shaped by light, architecture and atmosphere.",

    cover: "/images/collections/collection-01/01.jpg",

    images: [
      {
        src: "/images/collections/collection-01/01.jpg",
        alt: "",
      },
      {
        src: "/images/collections/collection-01/02.jpg",
        alt: "",
      },
      {
        src: "/images/collections/collection-01/03.jpg",
        alt: "",
      },
    ],
  },

  {
    id: "collection-02",

    title: "City Stories",

    subtitle: "Editorial portraiture in everyday spaces.",

    cover: "/images/collections/collection-02/01.jpg",

images: [
  {
    src: "/images/collections/collection-02/01.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/02.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/03.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/04.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/05.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/06.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/07.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/08.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-02/09.jpg",
    alt: "",
  },
],
  },

  {
    id: "collection-03",

    title: "Fashion & Portrait",

    subtitle: "A selection of fashion-led portraits and runway imagery.",

    cover: "/images/collections/collection-03/01.jpg",

images: [
  {
    src: "/images/collections/collection-03/01.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/02.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/03.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/04.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/05.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/06.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/07.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/08.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/09.jpg",
    alt: "",
  },
  {
    src: "/images/collections/collection-03/10.jpg",
    alt: "",
  },
],
  },
];