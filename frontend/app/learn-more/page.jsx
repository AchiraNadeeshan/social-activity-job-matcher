"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import Navbar from "../../components/Navbar";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#090a0f]">
      <Navbar />
      <div className={`${styles.paddings} container mx-auto pt-8`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-[#1A232E]/30 p-6 md:p-12 rounded-xl border border-[#ffffff0f] shadow-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Learn More About PathFinder</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* About Section */}
            <div className="bg-[#232a36] rounded-xl p-8 shadow-lg border border-white/10 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M4 4h16v16H4V4z" /></svg>
                <span className="text-xl font-bold text-white">What is PathFinder?</span>
              </div>
              <p className="text-gray-300 text-base">
                <span className="font-semibold text-white">PathFinder</span> is an AI-powered job recommendation platform that analyzes your social media activity (such as LinkedIn exports) to match you with the most relevant job opportunities. Our system uses advanced natural language processing and semantic similarity techniques to understand your skills, experience, and career goals.
              </p>
            </div>
            {/* How It Works Section */}
            <div className="bg-[#232a36] rounded-xl p-8 shadow-lg border border-white/10 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <span className="text-xl font-bold text-white">How It Works</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-base ml-2">
                <li>Upload your social media profile (PDF format).</li>
                <li>Our backend extracts and encodes your profile using pre-trained sentence embeddings.</li>
                <li>We compare your profile against thousands of job descriptions using semantic similarity.</li>
                <li>You receive the top 5 job recommendations, plus live job listings for your best match.</li>
              </ul>
            </div>
            {/* Live Job Listings Section */}
            <div className="bg-[#232a36] rounded-xl p-8 shadow-lg border border-white/10 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="text-xl font-bold text-white">Live Job Listings</span>
              </div>
              <p className="text-gray-300 text-base">
                For your top recommended job, we fetch real-time job listings from Indeed using the Apify API, so you can apply directly to current openings.
              </p>
            </div>
            {/* Tech Stack Section */}
            <div className="bg-[#232a36] rounded-xl p-8 shadow-lg border border-white/10 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-xl font-bold text-white">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Next.js</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">React</span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Tailwind CSS</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">FastAPI</span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Python</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Sentence Transformers</span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Apify API</span>
              </div>
            </div>
            {/* Privacy Section */}
            <div className="bg-[#232a36] rounded-xl p-8 shadow-lg border border-white/10 flex flex-col gap-4 md:col-span-2 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm0 0V7a4 4 0 118 0v4a4 4 0 01-8 0zm0 0v4a4 4 0 01-8 0V7a4 4 0 018 0v4z" /></svg>
                <span className="text-xl font-bold text-white">Privacy</span>
              </div>
              <p className="text-gray-300 text-base">
                Your uploaded data is processed securely and only used for generating recommendations. We do not store your personal information.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
