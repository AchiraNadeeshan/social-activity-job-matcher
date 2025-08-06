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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden backdrop-blur-md bg-[#0e1218]/60 p-6 md:p-12 rounded-2xl border border-[#ffffff0f] shadow-2xl"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="text-center mb-10 relative">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              Learn More About PathFinder
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Match your skills to real jobs using AI-powered semantic understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-xl border border-[#ffffff12] bg-[#0e1218]/70 p-6 hover:border-purple-400/30 hover:bg-[#141a22] transition-colors"
            >
              <div className="mb-3 text-purple-300">01</div>
              <h2 className="text-xl font-semibold text-white mb-2">What is PathFinder?</h2>
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">PathFinder</span> analyzes your exported
                social activity to understand your skills, experience, and intent. Using modern NLP and
                semantic similarity, it finds roles that truly fit you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[#ffffff12] bg-[#0e1218]/70 p-6 hover:border-indigo-400/30 hover:bg-[#141a22] transition-colors"
            >
              <div className="mb-3 text-indigo-300">02</div>
              <h2 className="text-xl font-semibold text-white mb-2">How It Works</h2>
              <ul className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Upload your exported profile (PDF).</li>
                <li>We extract and embed your profile with sentence transformers.</li>
                <li>We compare against thousands of job descriptions semantically.</li>
                <li>Receive top matches plus live listings for the best fit.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-xl border border-[#ffffff12] bg-[#0e1218]/70 p-6 hover:border-blue-400/30 hover:bg-[#141a22] transition-colors"
            >
              <div className="mb-3 text-blue-300">03</div>
              <h2 className="text-xl font-semibold text-white mb-2">Live Listings</h2>
              <p className="text-gray-300 leading-relaxed">
                For your top role, we fetch real-time postings from Indeed via Apify so you can act on
                fresh opportunities immediately.
              </p>
            </motion.div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[#ffffff12] bg-[#0e1218]/70 p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Tech Stack</h2>
              <p className="text-gray-300 leading-relaxed">
                Next.js, React, Tailwind CSS, FastAPI, Python, Sentence Transformers, Apify.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="rounded-xl border border-[#ffffff12] bg-[#0e1218]/70 p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Your data is processed securely for recommendations only. We avoid storing personal
                information and never expose secrets.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
