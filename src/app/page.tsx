import { profile } from "@/content/profile";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight">
            {profile.title}
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-white/70 max-w-2xl">
            {profile.tagline}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {profile.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href={profile.ctas.primary.href}
              className="rounded-xl bg-white px-7 py-4 text-black font-medium"
            >
              {profile.ctas.primary.label}
            </a>

            <a
              href={profile.ctas.secondary.href}
              className="text-white/70 hover:text-white transition"
            >
              {profile.ctas.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

