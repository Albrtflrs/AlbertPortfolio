import { useEffect, useMemo, useRef, useState } from 'react';
import { PROJECTS, GROUPS, SYSTEMS, PERSONAL } from './data.js';
import Projects from './components/Project.jsx';
import TechLogo from './components/TechLogo.jsx';

const cx = (...c) => c.filter(Boolean).join(' ');

// ─────────────────────────────────────────────────────────────────
//   ICONS
// ─────────────────────────────────────────────────────────────────
const ICONS = {
  mail: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.41.97.1-.76.41-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.78 0c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.44-2.72 5.43-5.3 5.71.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.78A1.78 1.78 0 0 0 0 1.78v20.44A1.78 1.78 0 0 0 1.78 24h20.44A1.78 1.78 0 0 0 24 22.22V1.78A1.78 1.78 0 0 0 22.22 0Z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────
//   SCENE
// ─────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <div className="float-scene">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-line">
        <img
          src="/assets/Profile.png"
          alt="Albert F. Flores"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>
    </div>
  );
}


const PALETTES = [
  { id: 'bw', label: 'B&W', icon: '◑' },
  { id: 'color', label: 'Color', icon: '◐' },
  { id: 'beach', label: 'Beach', icon: '☼' },
];

// ─────────────────────────────────────────────────────────────────
//   PRIMARY STACK
// ─────────────────────────────────────────────────────────────────
function PrimaryStack({ group, lit, tech, setTech }) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-3 flex items-center gap-2 text-sm font-medium text-mut">
        <span className="size-1.5 rounded-full bg-acc" aria-hidden />
        {group.title}
      </h2>
      <ul className="tech-primary-list grid flex-1 gap-2">
        {group.items.map(([name, note], i) => {
          const on = lit.has(name);
          const dim = lit.size > 0 && !on;
          const active = tech === name;
          return (
            <li key={name} className="flex">
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setTech(active ? null : name)}
                className={cx(
                  'tech-primary group flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-3 text-left',
                  on
                    ? 'border-acc bg-acc/15 text-tx'
                    : 'border-line bg-deep text-soft hover:border-mut',
                  dim && 'opacity-40'
                )}
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-mut">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <TechLogo name={name} size={16} />
                  <span className="text-sm font-semibold tracking-tight">
                    {name}
                  </span>
                </span>
                <span className="text-[11px] font-normal text-mut transition-colors group-hover:text-tx">
                  {note}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//   SKILL GROUP — every skill visible, wrapped, no scrolling
// ─────────────────────────────────────────────────────────────────
function SkillGroup({ group, lit, tech, setTech, index = 0 }) {
  return (
    <section className="fade-up" style={{ '--d': `${index * 90}ms` }}>
      <h2 className="mb-2 flex items-center gap-2 text-sm font-medium text-mut">
        <span className="size-1.5 rounded-full bg-line" aria-hidden />
        {group.title}
      </h2>

      <div className="flex flex-wrap gap-1.5">
        {group.items.map((name) => {
          const on = lit.has(name);
          const dim = lit.size > 0 && !on;
          const active = tech === name;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={active}
              onClick={() => setTech(active ? null : name)}
              className={cx(
                'tech-pill flex items-center gap-2 rounded-md border px-2.5 py-1.5 font-mono text-xs',
                on
                  ? 'border-acc bg-acc/15 text-tx'
                  : 'border-line bg-deep text-soft hover:border-mut',
                dim && 'opacity-40'
              )}
            >
              <TechLogo name={name} size={12} />
              {name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────
//   PERSONAL DETAILS
// ─────────────────────────────────────────────────────────────────
function PersonalDetails({ focus, tech, usedIn }) {
  return (
    <aside className="lg:sticky lg:top-16 lg:self-start">
      <Scene />

      <div className="float-profile mt-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          {PERSONAL.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-acc">
          {PERSONAL.role} · {PERSONAL.tagline}
        </p>
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-soft">
        {PERSONAL.bio}
      </p>

      <ul className="mt-5 space-y-2">
        <li className="flex items-center gap-3 rounded-lg border border-line bg-deep px-3 py-2 text-sm">
          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-panel text-mut">
            {ICONS.pin}
          </span>
          <span className="text-soft">{PERSONAL.location}</span>
        </li>

        {PERSONAL.contacts.map((c) => (
          <li key={c.key}>
            <a
              href={c.href}
              target={c.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-line bg-deep px-3 py-2 text-sm transition-all duration-300 hover:border-acc hover:bg-acc/5"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-md bg-panel text-mut transition-colors group-hover:bg-acc/15 group-hover:text-acc">
                {ICONS[c.icon]}
              </span>
              <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                <span className="truncate text-tx">{c.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-mut transition-colors group-hover:text-acc">
                  {c.label}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-2">
        <a
          href="#"
          className="flex-1 rounded-lg bg-acc px-3 py-2 text-center text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Download resume
        </a>
        <a
          href={`mailto:${PERSONAL.email}`}
          className="flex-1 rounded-lg border border-line px-3 py-2 text-center text-sm font-medium transition-colors hover:border-acc"
        >
          Contact me
        </a>
      </div>

      <div
        className="mt-5 rounded-xl border border-line bg-deep p-4 font-mono text-xs leading-6"
        aria-live="polite"
      >
        <div><span className="text-mut">focus </span>{focus.name}</div>
        <div><span className="text-mut">kind  </span>{focus.kind}</div>
        <div>
          <span className="text-mut">stack </span>
          {focus.stack.length ? focus.stack.join(' · ') : 'no stack listed'}
        </div>
        {tech && (
          <div>
            <span className="text-mut">filter</span>{' '}
            <span className="text-acc">{tech}</span> → {usedIn.length} project
            {usedIn.length === 1 ? '' : 's'}
          </div>
        )}
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm">
        <span className="size-2 animate-pulse rounded-full bg-ok" />
        {PERSONAL.status}
      </p>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────
//   MAIN APP
// ─────────────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem('theme');
      if (t === 'light' || t === 'dark') return t;
    } catch { /* storage unavailable */ }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [palette, setPalette] = useState(() => {
    try {
      const p = localStorage.getItem('palette');
      if (PALETTES.some((x) => x.id === p)) return p;
    } catch { /* storage unavailable */ }
    return 'bw';
  });

  const [focusId, setFocusId] = useState('superapp');
  const [tech, setTech] = useState(null);

  const firstRun = useRef(true);
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.palette = palette;
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('palette', palette);
    } catch { /* ignore */ }

    // Fade every surface together on user-triggered changes (not on first load)
    if (firstRun.current) { firstRun.current = false; return; }
    root.classList.add('theme-fade');
    const id = setTimeout(() => root.classList.remove('theme-fade'), 600);
    return () => clearTimeout(id);
  }, [theme, palette]);

  const focus = PROJECTS.find((p) => p.id === focusId) ?? PROJECTS[0];
  const lit = useMemo(
    () => new Set(tech ? [tech] : focus.stack),
    [tech, focus]
  );
  const usedIn = tech ? PROJECTS.filter((p) => p.stack.includes(tech)) : [];

  const primary = GROUPS.find((g) => g.big);
  const rest = GROUPS.filter((g) => !g.big);

  return (
    <div>
      <header className="sticky top-0 z-10 flex items-center gap-2 border-b border-line bg-bg/85 px-5 py-2.5 font-mono text-xs text-mut backdrop-blur">


        <div className="ml-auto flex items-center gap-0.5 rounded-full border border-line bg-panel p-0.5">
          {PALETTES.map((p) => {
            const active = palette === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setPalette(p.id)}
                aria-pressed={active}
                title={p.label}
                className={cx(
                  'rounded-full px-3 py-1 text-[11px] font-medium transition-all duration-300',
                  active ? 'bg-acc text-bg' : 'text-mut hover:text-tx'
                )}
              >
                <span className="mr-1" aria-hidden>{p.icon}</span>
                <span className="hidden sm:inline">{p.label}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full border border-line bg-panel px-3 py-1 text-tx transition-colors hover:border-acc"
        >
          {theme === 'dark' ? '☀ Light' : '☾ Dark'}
        </button>
      </header>

      <main className="mx-auto grid max-w-[1500px] gap-6 p-5 lg:grid-cols-[1fr_2fr_1fr]">
        <PersonalDetails focus={focus} tech={tech} usedIn={usedIn} />

        <Projects
          focusId={focusId}
          setFocusId={setFocusId}
          tech={tech}
          lit={lit}
        />

        <aside className="tick space-y-6 lg:self-start lg:pl-6">
          {primary && (
            <PrimaryStack
              group={primary}
              lit={lit}
              tech={tech}
              setTech={setTech}
            />
          )}

          <hr className="border-line/60" />

          {rest.map((g, i) => (
            <SkillGroup
              key={g.title}
              group={g}
              lit={lit}
              tech={tech}
              setTech={setTech}
              index={i}
            />
          ))}

          {tech && (
            <section className="rounded-xl border border-acc/50 bg-acc/10 p-3 text-sm">
              <p className="font-medium">{tech} is used in</p>
              <p className="mt-1 text-soft">
                {usedIn.length
                  ? usedIn.map((p) => p.name).join(', ')
                  : 'none of the listed projects'}
              </p>
              <button
                type="button"
                onClick={() => setTech(null)}
                className="mt-2 font-mono text-xs text-acc underline"
              >
                clear filter
              </button>
            </section>
          )}
        </aside>
      </main>
    </div>
  );
}