export interface YogaClass {
  id: string;
  name: string;
  nameTr: string;
  type: string;
  description: string;
  level: "Einsteiger" | "Mittelstufe" | "Fortgeschrittene" | "Alle Levels";
  duration: number;
  imageUrl: string;
  accentColor: "sage" | "gold";
}

export const yogaClasses: YogaClass[] = [
  {
    id: "morgenfluss",
    name: "Morgenfluss",
    nameTr: "Sabah Akışı",
    type: "Vinyasa",
    description:
      "Starte deinen Tag mit fließenden Bewegungen und bewusstem Atem – energiegeladen in den Morgen.",
    level: "Alle Levels",
    duration: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=900&q=90&fit=crop&crop=center",
    accentColor: "sage",
  },
  {
    id: "power-yoga",
    name: "Power Yoga",
    nameTr: "Güç Yogası",
    type: "Power",
    description:
      "Dynamische Sequenzen, die Kraft und Ausdauer fördern. Für alle, die sich wirklich fordern wollen.",
    level: "Mittelstufe",
    duration: 75,
    imageUrl:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=90&fit=crop&crop=center",
    accentColor: "gold",
  },
  {
    id: "yin-yoga",
    name: "Yin Yoga",
    nameTr: "Yin Yogası",
    type: "Yin",
    description:
      "Tiefe Dehnung, Entspannung und Stille. Halte Positionen länger und lass los.",
    level: "Einsteiger",
    duration: 90,
    imageUrl:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=900&q=90&fit=crop&crop=center",
    accentColor: "sage",
  },
  {
    id: "ashtanga",
    name: "Ashtanga",
    nameTr: "Ashtanga",
    type: "Ashtanga",
    description:
      "Die klassische Praxis nach Pattabhi Jois – präzise, kraftvoll und mediativ.",
    level: "Fortgeschrittene",
    duration: 90,
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=90&fit=crop&crop=center",
    accentColor: "gold",
  },
  {
    id: "restorative",
    name: "Restorative",
    nameTr: "Restoratif",
    type: "Restorative",
    description:
      "Tief regenerierende Praxis mit Hilfsmitteln. Dein Körper bekommt echte Erholung.",
    level: "Alle Levels",
    duration: 75,
    imageUrl:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=90&fit=crop&crop=center",
    accentColor: "sage",
  },
  {
    id: "meditation",
    name: "Abend-Meditation",
    nameTr: "Akşam Meditasyonu",
    type: "Meditation",
    description:
      "Lass den Tag los. Geführte Meditationen für einen ruhigen, tiefen Schlaf.",
    level: "Alle Levels",
    duration: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=900&q=90&fit=crop&crop=center",
    accentColor: "gold",
  },
];
