"use client";
import { motion } from "framer-motion";
import styles from "../../styles";
import Navbar from "../../components/Navbar";

const FeatureCard = ({ icon, title, text }) => (
  <motion.div
    className="backdrop-blur-md bg-[#1A232E]/30 p-6 rounded-xl border border-[#ffffff0f] shadow-lg hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-purple-500/20 rounded-full mr-4 border border-purple-500/30">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{text}</p>
  </motion.div>
);

const TechPill = ({ name }) => (
  <div className="bg-blue-500/10 text-blue-300 border border-blue-500/20 text-sm font-medium px-3 py-1 rounded-full">
    {name}
  </div>
);

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#13151a] to-[#090a0f] text-white overflow-x-hidden">
      <Navbar />
      <div className={`${styles.paddings} container mx-auto pt-12 pb-24`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Discover PathFinder
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your AI-powered copilot for navigating the job market. We analyze
            your professional social footprint to chart a course to your dream
            career.
          </p>
        </motion.div>

        {/* How It Works Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              }
              title="1. Upload Profile"
              text="Start by uploading your social media profile (e.g., LinkedIn export) in PDF format."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M12 8h.01M15 8h.01" />
                </svg>
              }
              title="2. AI Analysis"
              text="Our backend extracts and encodes your profile using advanced sentence embeddings."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              title="3. Semantic Matching"
              text="We compare your unique profile against thousands of job descriptions to find the perfect fit."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="4. Get Recommendations"
              text="Receive the top 5 job matches and live listings for your best-matched role."
            />
          </div>
        </div>

        {/* Tech Stack & Privacy Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-xl bg-gradient-to-br from-[#1A232E]/50 to-[#1A232E]/20 p-8 rounded-2xl border border-[#ffffff1a] shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <TechPill name="Next.js" />
              <TechPill name="React" />
              <TechPill name="Tailwind CSS" />
              <TechPill name="FastAPI" />
              <TechPill name="Python" />
              <TechPill name="Sentence Transformers" />
              <TechPill name="Apify API" />
              <TechPill name="Framer Motion" />
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-xl bg-gradient-to-tl from-[#1A232E]/50 to-[#1A232E]/20 p-8 rounded-2xl border border-[#ffffff1a] shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-500/20 rounded-full mr-4 border border-green-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.5-4.5m9-9l-4.5 4.5m0-10.472L9.563 5.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Your Privacy, Our Priority</h2>
            </div>
            <p className="text-gray-300">
              Your data is processed securely and is only used to generate your
              personalized job recommendations. We do not store your personal
              information, ensuring your privacy is always protected.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}