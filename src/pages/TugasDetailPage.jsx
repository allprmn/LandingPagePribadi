import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { daftarTugas } from '../data/tugasData';
import Magnet from '../components/ui/Magnet';
import SpotlightCard from '../components/ui/SpotlightCard';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function TugasDetailPage() {
    const { id } = useParams();
    const tugas = daftarTugas.find(t => t.id === id);

    if (!tugas) return <div className="text-white text-center mt-20">Tugas tidak ditemukan.</div>;

    return (
        <div className="min-h-screen bg-black text-slate-200 p-6 md:p-12 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl w-full"
            >

                <SpotlightCard
                    className="bg-slate-800 p-6 md:p-10 rounded-2xl border border-slate-700 shadow-xl"
                    theme="dark"
                    spotlightColor="#a78bfa"
                    intensity={0.15}
                    flare
                >
                    {/* Breadcrumb / Header */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-purple-500/20 text-purple-300">{tugas.pertemuan}</span>
                        <span className="text-xs text-slate-400">{tugas.mataKuliah}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-700 pb-6">
                        {tugas.judul}
                    </h1>

                    {/* ================= AREA RENDER MARKDOWN ================= */}
                    <div className="text-slate-300 leading-relaxed">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            // Kustomisasi styling agar mirip GitHub Dark Mode
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-white mt-5 mb-2" {...props} />,
                                p: ({ node, ...props }) => <p className="mb-4 text-slate-300" {...props} />,
                                a: ({ node, ...props }) => <a className="text-purple-400 hover:text-purple-300 underline" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 ml-2" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-2" {...props} />,
                                li: ({ node, ...props }) => <li className="text-slate-300" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-semibold text-white" {...props} />,

                                // 👇 PERBAIKAN PADA BAGIAN CODE 👇
                                code: ({ node, className, children, ...props }) => {
                                    // Cek apakah ini blok kode (memiliki class 'language-...')
                                    const match = /language-(\w+)/.exec(className || '');
                                    return match ? (
                                        <pre className="bg-[#0d1117] p-4 rounded-xl overflow-x-auto border border-slate-700 mb-4">
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        </pre>
                                    ) : (
                                        <code className="bg-slate-700/50 text-purple-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {tugas.markdownContent}
                        </ReactMarkdown>
                    </div>

                    {/* Tombol Kembali */}
                    <div className="flex flex-wrap justify-center items-start gap-12 md:gap-20 w-full max-w-5xl mx-auto mt-8">
                        <Magnet padding={50} magnetStrength={3}>
                            <Link
                                to="/tugas"
                                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 text-sm rounded-xl hover:bg-gray-200 transition-colors shadow-xl"
                            >
                                Kembali ke Tugas
                            </Link>
                        </Magnet>
                    </div>
                </SpotlightCard>
            </motion.div>
        </div>
    );
}