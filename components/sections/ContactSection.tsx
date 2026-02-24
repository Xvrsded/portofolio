"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { profile } from "@/data/profile";
import { sectionClass } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <section id="contact" className="py-20">
      <div className={`${sectionClass} grid gap-8 lg:grid-cols-2`}>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <h2 className="text-3xl font-bold text-gray-100">Contact</h2>
          <div className="mt-5 rounded-xl border border-cyan-300/25 bg-cyan-400/10 p-4">
            <p className="text-sm font-semibold text-cyan-200">Ready to collaborate?</p>
            <p className="mt-1 text-xs text-gray-300">Fastest response via WhatsApp for project discussion and quick call scheduling.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://wa.me/6288991796535?text=Hi%20Guntur%2C%20I%20want%20to%20hire%20you%20for%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-2 text-xs font-semibold text-slate-950"
              >
                Hire Me on WhatsApp
              </a>
              <a
                href="https://wa.me/6288991796535?text=Hi%20Guntur%2C%20can%20we%20book%20a%20quick%20call%20this%20week%3F"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-gray-200"
              >
                Book a Quick Call
              </a>
            </div>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-gray-300">
            <li>Email: <a className="text-cyan-300" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>LinkedIn: <a className="text-cyan-300" href={profile.linkedIn} target="_blank" rel="noreferrer">Profile</a></li>
            <li>TikTok: <a className="text-cyan-300" href="https://tiktok.com/dongabang_" target="_blank" rel="noreferrer">Profile</a></li>
            <li>GitHub: <a className="text-cyan-300" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li>WhatsApp: <a className="text-cyan-300" href={profile.whatsapp} target="_blank" rel="noreferrer">Chat</a></li>
          </ul>
        </article>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6" aria-label="Contact form">
          <div className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm text-gray-300">Name</span>
              <input {...register("name")} className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-gray-100" />
              {errors.name && <span className="text-xs text-rose-400">{errors.name.message}</span>}
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-gray-300">Email</span>
              <input {...register("email")} className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-gray-100" />
              {errors.email && <span className="text-xs text-rose-400">{errors.email.message}</span>}
            </label>
            <label className="block">
              <span className="mb-1 block text-sm text-gray-300">Message</span>
              <textarea {...register("message")} rows={5} className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-gray-100" />
              {errors.message && <span className="text-xs text-rose-400">{errors.message.message}</span>}
            </label>
            <button disabled={isSubmitting} className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 font-semibold text-slate-950 disabled:opacity-70">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {success && (
            <m.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-sm text-emerald-300">
              Message sent successfully.
            </m.p>
          )}
        </form>
      </div>
    </section>
  );
}
