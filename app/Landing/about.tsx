"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"

const About = () => {
    return (
        <section className="w-full min-h-screen bg-[#FDFCF9] px-6 md:px-20 py-28 overflow-hidden relative">

            {/* ambient glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200/30 blur-3xl rounded-full"></div>

            {/* top */}
            <div className="relative z-10 mb-24">

                <p className="uppercase tracking-[0.35em] text-sm text-orange-400 font-medium mb-6"> About </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#111827] max-w-6xl"> Not following a path. Just paying attention to what pulls me forward. </h1>

            </div>

            {/* main layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">

                {/* left side */}
                <div className="space-y-8">

                    {/* main story card */}
                    <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[40px] p-10 shadow-xl shadow-orange-100">

                        <div className="flex items-start justify-between mb-10">

                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">Perspective</p>

                                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight">I’m more interested in building things
                                    that feel inevitable once they exist.</h2>
                            </div>

                            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                <ArrowUpRight className="text-orange-500" />
                            </div>

                        </div>

                        <div className="space-y-7 text-gray-600 text-lg leading-9">

                            <p>
                                Most of my interests sit somewhere
                                between technology, systems,
                                design and human behavior.
                            </p>

                            <p>
                                I like figuring out why some products feel effortless,
                                why certain ideas spread,
                                and why simple experiences are usually the hardest to build well.
                            </p>

                            <p>
                                Right now I’m exploring different directions —
                                digital products, intelligent systems,
                                interfaces, workflows and ideas that quietly improve how people interact with technology.
                            </p>

                        </div>

                    </div>

                    {/* bottom cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] p-8 shadow-lg shadow-orange-100">

                            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-5">Thought</p>

                            <h3 className="text-2xl font-bold text-[#111827] mb-4">What I think</h3>

                            <p className="text-gray-600 leading-8">
                                I trust curiosity
                                more than fixed plans.
                            </p>

                        </div>

                        <div className="bg-[#111827] text-white rounded-[32px] p-8 shadow-2xl">

                            <p className="text-sm uppercase tracking-[0.25em] text-orange-300 mb-5">
                                Current Focus
                            </p>

                            <h3 className="text-2xl font-bold mb-4">
                                Learning & Building
                            </h3>

                            <p className="text-gray-300 leading-8">
                                Learning fast.
                                Building carefully.
                                Paying attention to what matters.
                            </p>

                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className="flex flex-col gap-6">

                    {/* abstract card */}
                    <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 shadow-lg shadow-orange-100 min-h-[280px] flex flex-col justify-between">

                        <div className="flex gap-3">

                            <div className="w-3 h-3 rounded-full bg-orange-300"></div>
                            <div className="w-3 h-3 rounded-full bg-orange-200"></div>
                            <div className="w-3 h-3 rounded-full bg-orange-100"></div>

                        </div>

                        <div>

                            <p className="text-gray-400 uppercase tracking-[0.25em] text-sm mb-4">
                                Mindset
                            </p>

                            <h2 className="text-3xl font-bold leading-tight text-[#111827]">
                                The goal was never to fit into one role.
                                Just to keep becoming harder to define.
                            </h2>

                        </div>

                    </div>

                    {/* quote card */}
                    <div className="bg-linear-to-br from-orange-100 to-orange-50 rounded-[40px] p-10 min-h-[240px] flex flex-col justify-between shadow-xl shadow-orange-100">

                        <div className="text-6xl text-orange-300 font-serif">
                            ”
                        </div>

                        <p className="text-2xl leading-relaxed text-[#111827] font-medium">
                            I get attached to ideas
                            before I fully understand why.
                        </p>

                    </div>

                    {/* small footer card */}
                    <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[32px] p-7 shadow-lg shadow-orange-100">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">
                                    RIGHT NOW
                                </p>

                                <h3 className="text-2xl font-bold text-[#111827]">
                                    Learning what deserves my attention.
                                </h3>
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                                AK.
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About