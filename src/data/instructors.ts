export interface Instructor {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  imageUrl: string;
  instagram: string;
  certifications: string[];
}

export const instructors: Instructor[] = [
  {
    id: "lena-schmidt",
    name: "Lena Schmidt",
    title: "Head Instructor & Gründerin",
    specialties: ["Vinyasa", "Ashtanga"],
    bio: "200h RYT zertifiziert. Mit über 10 Jahren Erfahrung führt Lena jede Stunde mit Wärme und Präzision.",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&fit=crop&crop=face",
    instagram: "#",
    certifications: ["200h RYT – Yoga Alliance", "300h Advanced Training"],
  },
  {
    id: "mia-hoffmann",
    name: "Mia Hoffmann",
    title: "Yin & Restorative Specialist",
    specialties: ["Yin Yoga", "Restorative"],
    bio: "12 Jahre Erfahrung in therapeutischem Yoga. Mia hilft dir, tiefer zu entspannen als je zuvor.",
    imageUrl:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=600&q=80&fit=crop&crop=face",
    instagram: "#",
    certifications: ["Yin Yoga Zertifikat", "Therapeutisches Yoga"],
  },
  {
    id: "jonas-weber",
    name: "Jonas Weber",
    title: "Power & Meditation",
    specialties: ["Power Yoga", "Meditation"],
    bio: "Ehemaliger Berliner Balletttänzer. Jonas verbindet körperliche Stärke mit tiefer innerer Stille.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face",
    instagram: "#",
    certifications: ["200h RYT", "Meditation Teacher Certificate"],
  },
  {
    id: "ayse-kaya",
    name: "Ayşe Kaya",
    title: "Hatha & Pranayama",
    specialties: ["Hatha", "Pranayama"],
    bio: "Deutsch-türkische Yogalehrerin, die Tradition und Moderne harmonisch verbindet. 300h RYT.",
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&fit=crop&crop=face",
    instagram: "#",
    certifications: ["300h RYT – Yoga Alliance", "Pranayama Specialist"],
  },
];
