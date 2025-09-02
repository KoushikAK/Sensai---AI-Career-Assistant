import { Users, Target, Eye, BrainCircuit } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// Dummy Team Data
const teamMembers = [
  { name: 'Alex Turing', role: 'Founder & AI Architect', image: '/placeholder-avatar.png', social: { linkedin: '#', twitter: '#', github: '#' } },
  { name: 'Jane Lovelace', role: 'Lead Career Strategist', image: '/placeholder-avatar.png', social: { linkedin: '#', twitter: '#', github: '#' } },
  { name: 'Sam Altman', role: 'Head of Product', image: '/placeholder-avatar.png', social: { linkedin: '#', twitter: '#', github: '#' } },
];

// Dummy Values Data
const values = [
  { icon: <Target size={32} className="text-indigo-400" />, title: 'Precision', description: 'AI-driven insights tailored with unparalleled accuracy to your unique career path.' },
  { icon: <Eye size={32} className="text-pink-400" />, title: 'Vision', description: 'Empowering you to see and seize future opportunities before they arise.' },
  { icon: <BrainCircuit size={32} className="text-indigo-400" />, title: 'Intelligence', description: 'Leveraging cutting-edge technology to provide the smartest career guidance.' },
  { icon: <Users size={32} className="text-pink-400" />, title: 'Humanity', description: 'Combining AI with a deep understanding of human potential and ambition.' },
];

export default function AboutUsPage() {
  return (
    <div className="bg-gray-950 text-white">
      <div className="relative isolate overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gray-950">
          <div className="absolute inset-x-0 top-0 h-[50rem] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
        </div>

        {/* Header Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Forging the Future of Careers
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            We are a team of technologists, career coaches, and data scientists united by a single mission: to unlock human potential through the power of artificial intelligence. We believe everyone deserves a fulfilling career, and we're building the tools to make that a reality.
          </p>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">The principles that drive our innovation.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm">
                {value.icon}
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet the Architects</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">The minds behind the mission.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-indigo-500/50 hover:bg-gray-900">
                 {/* You can use a placeholder image or a library like `react-jdenticon` for unique avatars */}
                <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-indigo-500 mb-4"></div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-400">{member.role}</p>
                <div className="mt-4 flex space-x-4 text-gray-400">
                  <a href={member.social.linkedin} className="hover:text-white"><FaLinkedin size={20} /></a>
                  <a href={member.social.twitter} className="hover:text-white"><FaTwitter size={20} /></a>
                  <a href={member.social.github} className="hover:text-white"><FaGithub size={20} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}