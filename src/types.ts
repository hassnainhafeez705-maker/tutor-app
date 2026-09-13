export type ScreenId =
  | 'overview'
  | 'my-children'
  | 'bookings'
  | 'payments'
  | 'messages'
  | 'reports';

export type TransitionType = 'push' | 'none';

export interface Child {
  id: string;
  name: string;
  initials: string;
  yearGroup: string;
  school: string;
  avatarBg: string;
  avatarText: string;
  ringColor: string;
  tags: string[];
  mathProgress: number;
  englishProgress: number;
}

export interface Booking {
  id: string;
  day: string;
  date: string;
  month: string;
  subject: string;
  subjectType: 'math' | 'english';
  title: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  time: string;
  tutor: string;
  studio: string;
  note: string;
}

export interface ChatMessage {
  id: string;
  sender: 'tutor' | 'parent';
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}
