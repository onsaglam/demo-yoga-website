export interface Testimonial {
  id: string;
  text: string;
  author: string;
  course: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    text: "Prana Studio hat mein Leben verändert. Ich kann mir den Morgen ohne diese Kurse nicht mehr vorstellen.",
    author: "Sarah K.",
    course: "Vinyasa",
    stars: 5,
  },
  {
    id: "2",
    text: "Endlich ein Studio in Bremen, das sich wirklich um jeden Schüler kümmert.",
    author: "Thomas M.",
    course: "Yin Yoga",
    stars: 5,
  },
  {
    id: "3",
    text: "Die Atmosphäre ist einzigartig – warm, einladend und professionell zugleich.",
    author: "Elena B.",
    course: "Ashtanga",
    stars: 5,
  },
  {
    id: "4",
    text: "Mia ist die beste Lehrerin, die ich je hatte. Ihre Restorative-Stunden sind ein Geschenk.",
    author: "Klaus W.",
    course: "Restorative",
    stars: 5,
  },
  {
    id: "5",
    text: "Seit ich hier Yoga mache, schlafe ich endlich wieder tief und gut. Danke Jonas!",
    author: "Franziska H.",
    course: "Meditation",
    stars: 5,
  },
  {
    id: "6",
    text: "Jonas verbindet Kraft und Ruhe wie kein anderer. Power Yoga auf einem anderen Level.",
    author: "Markus T.",
    course: "Power Yoga",
    stars: 5,
  },
  {
    id: "7",
    text: "Das Studio ist wunderschön und die Gemeinschaft hier ist einfach herzlich.",
    author: "Nina S.",
    course: "Hatha",
    stars: 5,
  },
  {
    id: "8",
    text: "Lena hat mir gezeigt, dass Yoga viel mehr ist als Dehnen. Ich bin so dankbar!",
    author: "Petra L.",
    course: "Vinyasa",
    stars: 5,
  },
];
