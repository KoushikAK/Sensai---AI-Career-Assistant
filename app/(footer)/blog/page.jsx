"use client"; // Add this line at the top for React hooks

import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Expanded Dummy Blog Data with slugs and categories
const allPosts = [
  {
    slug: 'the-rise-of-the-ai-augmented-workforce',
    category: 'Industry Insights',
    title: 'The Rise of the AI-Augmented Workforce',
    description: 'Explore how AI is not replacing jobs, but creating hybrid roles that blend human creativity with machine precision.',
    author: 'Alex Turing',
    date: 'August 28, 2025',
  },
  {
    slug: '5-prompts-to-supercharge-your-career',
    category: 'Career Advice',
    title: '5 Prompts to Supercharge Your Career with ChatGPT',
    description: 'Unlock your potential by learning how to communicate effectively with large language models to brainstorm, strategize, and solve problems.',
    author: 'Jane Lovelace',
    date: 'August 15, 2025',
  },
  {
    slug: 'introducing-skill-matrix-v2',
    category: 'Product Updates',
    title: 'Introducing the Skill Matrix v2.0',
    description: 'Our latest update provides even deeper insights into your skill gaps with real-time market data and personalized learning pathways.',
    author: 'Sam Altman',
    date: 'July 30, 2025',
  },
  {
    slug: 'navigating-the-ethics-of-ai-in-hiring',
    category: 'Industry Insights',
    title: 'Navigating the Ethics of AI in Hiring',
    description: 'A deep dive into the challenges and solutions for creating fair and unbiased AI-driven recruitment processes.',
    author: 'Alex Turing',
    date: 'July 21, 2025',
  },
    {
    slug: 'how-to-build-a-future-proof-resume',
    category: 'Career Advice',
    title: 'How to Build a Future-Proof Resume for the AI Era',
    description: 'Learn the key components of a modern resume that stands out to both AI screening tools and human recruiters.',
    author: 'Jane Lovelace',
    date: 'July 10, 2025',
  },
  {
    slug: 'behind-the-code-our-interview-simulator',
    category: 'Product Updates',
    title: 'Behind the Code: Our AI Interview Simulator',
    description: 'Take a look at the technology that powers our realistic interview simulations and how it helps you prepare for the real thing.',
    author: 'Sam Altman',
    date: 'June 25, 2025',
  },
];

const categories = ['All', 'Industry Insights', 'Career Advice', 'Product Updates'];

export default function BlogPage() {
  const [filter, setFilter] = useState('All');

  const filteredPosts = filter === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === filter);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            The AI Career Nexus
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Insights, analysis, and advice at the intersection of artificial intelligence and professional ambition.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-16 flex justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === category 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
              <article className="relative flex flex-col items-start justify-between bg-gray-900/50 p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:border-indigo-500/50 hover:bg-gray-900 h-full">
                <div className="relative w-full h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden"></div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-400 flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-indigo-900/50 px-3 py-1.5 font-medium text-indigo-300">
                    {post.category}
                  </span>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-xl font-semibold leading-6 text-white group-hover:text-pink-400 transition-colors">
                      {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{post.description}</p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-700"></div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">{post.author}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination UI */}
        <div className="mt-20 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-gray-800/60 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700/80">Previous</button>
          <button className="rounded-md bg-gray-800/60 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700/80">Next</button>
        </div>

      </div>
    </div>
  );
}