"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ckilliy from '../public/ckilliyA.png'

type ViewType = "Tech" | "Works" | "Others";
// 一旦これで開いてるボタンを管理
const frame =
  "px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-600 text-sm font-medium shadow-sm hover:bg-white/20 transition-all cursor-default";
const lang =
  "px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-800 text-sm font-medium shadow-sm hover:bg-white/20 transition-all cursor-default";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("Tech");

  const statusClasses: Record<ViewType, string> = {
    Tech: "translate-x-32%",
    Works: "translate-x-110",
    Others: "translate-x-187",
  };

  const handleItemChange = () => {
    switch (currentView) {
      case "Tech":
        return (
          <div>
            <h1 className="flex justify-center text-4xl pb-8">Tech Stack</h1>
            <div className="flex flex-wrap gap-3 justify-center">
              {/* 各タグの共通スタイル */}
              <span className={lang}>HTML</span>
              <span className={lang}>CSS</span>
              <span className={lang}>TypeScript</span>
              <span className={lang}>Python</span>
              <span className={frame}>Next.js</span>
              <span className={frame}>React</span>
              <span className={frame}>Django</span>
              <span className={frame}>Nest.js</span>
              <span className={frame}>Tailwindcss</span>
            </div>
            <h1 className="flex justify-center pt-10 pb-10 text-4xl">
              comming soon...
            </h1>
            <span className={lang}>C</span>
            <span className={lang}>C++</span>
            <span className={lang}>C#</span>
            <span className={frame}>Docker</span>
            <span className={frame}>SQL</span>
            <span className={frame}>AWS</span>
            <span className={frame}>Unity</span>
          </div>
        );
      case "Works":
        return (
          <div>
            <h1 className="text-4xl">Works</h1>
            <div className="flex">
            <span className="text-3xl border rounded-3xl w-fit p-6">hackathon</span>
            <span className="text-xl">vol.1 <a href="https://github.com/harumaki1220/Are-you-a-robot" target="_blank">We are human</a>
            <p className="">vol.2 <a href="https://github.com/tyohs/MinKara" target="_blank">MinKara</a></p>
            </span>
          </div>
          </div>
        );
      case "Others":
        return (
          <div>
            <h1 className="text-4xl">Others</h1>
            <span className="flex flex-wrap px-2 py-1 my-3 border border-red-200 bg-red-300 rounded-full w-fit mx-auto">
              Hobbies
            </span>
            <span className="flex flex-wrap px-2 py-1 my-3 border border-red-200 bg-cyan-500 rounded-full w-fit mx-auto">
              Connect
            </span>
            <a href="https://github.com/Akkiy-ckiliy" target="_blank" className="cursor-pointer hover:underline mr-2 select-none">GitHub</a>
            <a href="https://x.com/ckilliy_08" target="_blank" className=" cursor-pointer hover:underline select-none">X</a>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8 relative overflow-hidden">
      <span className="fixed flex text-[500px] -z-10 rotate-25">
        C<span className=" text-red-700">KILL</span>IY
      </span>
      <span className="fixed flex p-40 rounded-full translate-y-40 -z-9 border bg-black" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-300 to-purple-500 -z-20" />

      <div className="relative top-[-20%] left-[-10%] w-600px h-600px bg-cyan-200/40 rounded-full blur-3xl animate-wave -z-10 mix-blend-multiply" />
      <div className="relative bottom-[-10%] right-[-5%] w-500px h-500px bg-blue-200/40 rounded-full blur-3xl animate-wave animation-delay-2000 -z-10 mix-blend-multiply" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full z-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-sm text-cyan-700 text-sm font-semibold mb-8">
          <span>Beginner Engineer</span>
        </div>

        <span className="flex justify-center">
          <Image src={ckilliy} alt="Novaquiel" className="w-60 h-55 rounded-4xl"/>
        </span>
        {/* 名前(画像のアイコンに一緒に入れた) */}

        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light"></p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => setCurrentView("Tech")}
            className="text-left cursor-pointer"
          >
            <WaterCard
              title="Tech Stack"
              desc="TypeScript, Python, Next.js etc…"
            />
          </button>
          <button
            onClick={() => setCurrentView("Works")}
            className="text-left cursor-pointer"
          >
            <WaterCard
              title="Works"
              desc="music-app, todo-list, lottery etc…"
            />
          </button>
          <button
            onClick={() => setCurrentView("Others")}
            className="text-left cursor-pointer"
          >
            <WaterCard title="Others" desc="hobby, links etc…" />
          </button>
        </div>
        <div className={`flex transition-all ${statusClasses[currentView]}`}>
          <ChevronUp className="text-blue-50 scale-400" />
        </div>
        <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/70 shadow-lg transition-all duration-300 group">
          {handleItemChange()}
        </div>
      </motion.div>
    </main>
  );
}

function WaterCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      className="p-6 rounded-2xl bg-white/20 backdrop-blur-2xl border border-white/70 shadow-lg hover:shadow-cyan-100 transition-all duration-300 group"
    >
      <h3 className="text-lg font-bold mb-2 text-slate-700 group-hover:text-cyan-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </motion.div>
  );
}
