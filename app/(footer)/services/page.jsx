import { BrainCircuit, FileSearch, Mic, LineChart } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-indigo-400" />,
    title: 'AI Resume Analysis',
    description: 'Our GPT-powered engine scans your resume against millions of data points, providing actionable feedback to beat ATS and impress recruiters.',
  },
  {
    icon: <FileSearch className="h-8 w-8 text-pink-400" />,
    title: 'Personalized Career Pathing',
    description: 'Discover your ideal career trajectory. We analyze your skills and aspirations to map out a clear, achievable path to success.',
  },
  {
    icon: <Mic className="h-8 w-8 text-indigo-400" />,
    title: 'Interactive Interview Simulation',
    description: 'Practice with an AI interviewer that adapts to your responses. Get real-time feedback on your answers, tone, and confidence.',
  },
  {
    icon: <LineChart className="h-8 w-8 text-pink-400" />,
    title: 'Real-Time Skill Gap Analysis',
    description: 'Identify the exact skills you need for your dream job. We provide a curated list of resources to help you learn and grow.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gray-950">
          <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>
        </div>
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Arsenal of AI Tools</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Engineered to give you an unparalleled advantage in the competitive job market.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="group relative p-8 bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 h-1/2 w-1/2 bg-[radial-gradient(closest-side,_rgba(124,58,237,0.2),_transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}