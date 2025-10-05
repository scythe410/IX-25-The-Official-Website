import { PlaceHolderImages } from './placeholder-images';

export type Announcement = {
  id: string;
  title: string;
  content: string;
  timestamp: string;
};

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Welcome to IX Hackathon!',
    content: 'We are excited to have you here. Let the innovation begin! Check the schedule for opening ceremony times.',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    title: 'Workshop: Intro to Generative AI',
    content: 'Join our workshop at 2 PM in Hall A to learn about building with Gen AI.',
    timestamp: '1 day ago',
  },
  {
    id: '3',
    title: 'Team Formation Mixer',
    content: 'Looking for a team? Head over to the main hall for our team formation event.',
    timestamp: '2 days ago',
  },
];

export type ScheduleEvent = {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'workshop' | 'talk' | 'event';
};

export const scheduleEvents: ScheduleEvent[] = [
    { id: '1', time: 'Day 1 - 09:00 AM', title: 'Opening Ceremony', description: 'Kick-off of IX Hackathon with keynote speakers.', type: 'event' },
    { id: '2', time: 'Day 1 - 11:00 AM', title: 'Workshop: Next.js for Beginners', description: 'Learn the fundamentals of Next.js to build your hack.', type: 'workshop' },
    { id: '3', time: 'Day 1 - 01:00 PM', title: 'Lunch Break', description: 'Refuel and network with fellow hackers.', type: 'event' },
    { id: '4', time: 'Day 1 - 02:00 PM', title: 'Talk: The Future of AI', description: 'An inspiring talk on the latest trends in Artificial Intelligence.', type: 'talk' },
    { id: '5', time: 'Day 1 - 04:00 PM', title: 'Team Formation Ends', description: 'All teams must be registered by this time.', type: 'event' },
    { id: '6', time: 'Day 2 - 10:00 AM', title: 'Workshop: Building with Firebase', description: 'Deep dive into Firebase for backend services.', type: 'workshop' },
    { id: '7', time: 'Day 2 - 01:00 PM', title: 'Lunch Break', description: 'Another chance to eat and connect.', type: 'event' },
    { id: '8', time: 'Day 2 - 05:00 PM', title: 'Project Submissions Deadline', description: 'Final call for all project submissions.', type: 'event' },
    { id: '9', time: 'Day 2 - 06:00 PM', title: 'Judging Begins', description: 'Judges will start reviewing the projects.', type: 'event' },
    { id: '10', time: 'Day 2 - 08:00 PM', title: 'Closing Ceremony & Awards', description: 'Announcement of winners and closing remarks.', type: 'event' },
];

export type Participant = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarHint: string;
  skills: string[];
  interests: string;
};

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id) ?? { id: 'default', imageUrl: 'https://picsum.photos/seed/default/100/100', imageHint: 'placeholder' };

export const participants: Participant[] = [
  {
    id: 'p1',
    name: 'Alex Doe',
    avatarUrl: findImage('participant1').imageUrl,
    avatarHint: findImage('participant1').imageHint,
    skills: ['React', 'Node.js', 'AI/ML'],
    interests: 'Interested in building AI-powered applications for social good.'
  },
  {
    id: 'p2',
    name: 'Jane Smith',
    avatarUrl: findImage('participant2').imageUrl,
    avatarHint: findImage('participant2').imageHint,
    skills: ['Python', 'Data Science', 'UI/UX'],
    interests: 'Looking for a data-focused project with a strong visual component.'
  },
  {
    id: 'p3',
    name: 'Sam Wilson',
    avatarUrl: findImage('participant3').imageUrl,
    avatarHint: findImage('participant3').imageHint,
    skills: ['Flutter', 'Firebase', 'Mobile Dev'],
    interests: 'Passionate about mobile apps and creating seamless user experiences.'
  },
  {
    id: 'p4',
    name: 'Priya Khan',
    avatarUrl: findImage('participant4').imageUrl,
    avatarHint: findImage('participant4').imageHint,
    skills: ['Next.js', 'Vercel', 'Serverless'],
    interests: 'Wants to work on a fast, scalable web application.'
  },
  {
    id: 'p5',
    name: 'Chris Lee',
    avatarUrl: findImage('participant5').imageUrl,
    avatarHint: findImage('participant5').imageHint,
    skills: ['Web3', 'Solidity', 'Blockchain'],
    interests: 'Exploring decentralized applications and their potential.'
  },
  {
    id: 'p6',
    name: 'Maria Garcia',
    avatarUrl: findImage('participant6').imageUrl,
    avatarHint: findImage('participant6').imageHint,
    skills: ['UI/UX Design', 'Figma', 'Prototyping'],
    interests: 'A designer looking to join a team to create a beautiful and intuitive product.'
  },
];
