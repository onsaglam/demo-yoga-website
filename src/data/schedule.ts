export interface ScheduleEntry {
  time: string;
  course: string;
  trainer: string;
  duration: string;
  room: string;
  full: boolean;
}

export type DayKey = "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";

export const DAYS: DayKey[] = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

export const scheduleData: Record<DayKey, ScheduleEntry[]> = {
  Mo: [
    { time: "06:30", course: "Morgenfluss", trainer: "Lena Schmidt", duration: "60 Min", room: "Raum 1", full: false },
    { time: "09:00", course: "Yin Yoga", trainer: "Mia Hoffmann", duration: "90 Min", room: "Raum 2", full: false },
    { time: "12:15", course: "Power Yoga", trainer: "Jonas Weber", duration: "75 Min", room: "Raum 1", full: true },
    { time: "18:00", course: "Ashtanga", trainer: "Lena Schmidt", duration: "90 Min", room: "Raum 1", full: false },
    { time: "20:00", course: "Abend-Meditation", trainer: "Ayşe Kaya", duration: "45 Min", room: "Raum 2", full: false },
  ],
  Di: [
    { time: "07:00", course: "Vinyasa Flow", trainer: "Jonas Weber", duration: "60 Min", room: "Raum 1", full: false },
    { time: "10:00", course: "Restorative", trainer: "Mia Hoffmann", duration: "75 Min", room: "Raum 2", full: false },
    { time: "17:30", course: "Hatha", trainer: "Ayşe Kaya", duration: "75 Min", room: "Raum 1", full: true },
    { time: "19:30", course: "Power Yoga", trainer: "Jonas Weber", duration: "75 Min", room: "Raum 1", full: false },
  ],
  Mi: [
    { time: "06:30", course: "Morgenfluss", trainer: "Ayşe Kaya", duration: "60 Min", room: "Raum 1", full: false },
    { time: "11:00", course: "Yin Yoga", trainer: "Mia Hoffmann", duration: "90 Min", room: "Raum 2", full: false },
    { time: "18:00", course: "Ashtanga", trainer: "Lena Schmidt", duration: "90 Min", room: "Raum 1", full: false },
    { time: "20:00", course: "Abend-Meditation", trainer: "Jonas Weber", duration: "45 Min", room: "Raum 2", full: false },
  ],
  Do: [
    { time: "07:00", course: "Vinyasa Flow", trainer: "Lena Schmidt", duration: "60 Min", room: "Raum 1", full: true },
    { time: "09:30", course: "Restorative", trainer: "Mia Hoffmann", duration: "75 Min", room: "Raum 2", full: false },
    { time: "12:00", course: "Power Yoga", trainer: "Jonas Weber", duration: "75 Min", room: "Raum 1", full: false },
    { time: "19:00", course: "Hatha", trainer: "Ayşe Kaya", duration: "75 Min", room: "Raum 1", full: false },
  ],
  Fr: [
    { time: "06:30", course: "Morgenfluss", trainer: "Jonas Weber", duration: "60 Min", room: "Raum 1", full: false },
    { time: "10:00", course: "Yin Yoga", trainer: "Ayşe Kaya", duration: "90 Min", room: "Raum 2", full: false },
    { time: "17:30", course: "Power Yoga", trainer: "Lena Schmidt", duration: "75 Min", room: "Raum 1", full: true },
    { time: "19:30", course: "Abend-Meditation", trainer: "Mia Hoffmann", duration: "45 Min", room: "Raum 2", full: false },
  ],
  Sa: [
    { time: "08:00", course: "Ashtanga", trainer: "Lena Schmidt", duration: "90 Min", room: "Raum 1", full: false },
    { time: "10:30", course: "Vinyasa Flow", trainer: "Jonas Weber", duration: "60 Min", room: "Raum 1", full: false },
    { time: "13:00", course: "Restorative", trainer: "Mia Hoffmann", duration: "75 Min", room: "Raum 2", full: false },
  ],
  So: [
    { time: "09:00", course: "Hatha", trainer: "Ayşe Kaya", duration: "75 Min", room: "Raum 1", full: false },
    { time: "11:00", course: "Yin Yoga", trainer: "Mia Hoffmann", duration: "90 Min", room: "Raum 2", full: false },
    { time: "17:00", course: "Abend-Meditation", trainer: "Jonas Weber", duration: "45 Min", room: "Raum 2", full: false },
  ],
};
