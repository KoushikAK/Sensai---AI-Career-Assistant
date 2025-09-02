import { Zap, BrainCircuit, Globe, Award } from 'lucide-react';

// Dummy Perks Data
const perks = [
  { name: 'AI-Powered Growth', description: 'Utilize our own tools to map your career growth and identify learning opportunities.', icon: BrainCircuit },
  { name: 'Innovate & Impact', description: 'Work on cutting-edge problems that directly shape the future of work for millions.', icon: Zap },
  { name: 'Global & Remote-First', description: 'Collaborate with a diverse, talented team from anywhere in the world.', icon: Globe },
  { name: 'Premium Benefits', description: 'Competitive salary, comprehensive health coverage, and wellness stipends.', icon: Award },
];

// Dummy Job Openings
const jobOpenings = [
  { title: 'Senior AI Prompt Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Lead Product Designer (UX/UI)', department: 'Design', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Data Scientist - NLP Specialist', department: 'Data Science', location: 'Remote (EU/US)', type: 'Contract' },
  { title: 'Content Strategist - Career Services', department: 'Marketing', location: 'Remote', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Join the Vanguard of Career Tech</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            We're not just building a product; we're crafting the future of professional development. If you're passionate, driven, and want to make a tangible impact, you've found your place.
          </p>
        </div>
      </div>

      {/* Perks Section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {perks.map((perk) => (
            <div key={perk.name} className="flex flex-col p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                <perk.icon className="h-8 w-8 flex-none text-indigo-400" aria-hidden="true" />
                {perk.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{perk.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      
      {/* Open Positions Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Open Positions</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">Find your next chapter in the future of work.</p>
        </div>
        <div className="mt-12 space-y-4">
          {jobOpenings.map((job) => (
            <div key={job.title} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors">{job.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {job.department} &middot; {job.location} &middot; {job.type}
                </p>
              </div>
              <a href="#" className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors shrink-0">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}