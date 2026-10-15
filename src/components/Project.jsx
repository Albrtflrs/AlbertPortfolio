// src/components/Projects.jsx
import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data.js';
import TechLogo from './TechLogo.jsx';

const cx = (...c) => c.filter(Boolean).join(' ');

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

function useReveal(options = {}) {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof IntersectionObserver === 'undefined') {
            el.classList.add('is-visible');
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [options.threshold, options.rootMargin]);

    return ref;
}

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

function Chip({ children, lit }) {
    return (
        <span
            className={cx(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[11px]',
                'transition-all duration-300 ease-out motion-reduce:transition-none',
                lit
                    ? 'scale-105 border-acc bg-acc/15 text-acc'
                    : 'border-line bg-deep text-soft'
            )}
        >
            <TechLogo name={children} size={11} />
            {children}
        </span>
    );
}

function Status({ s }) {
    if (!s) return null;
    return (
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ok">
            <span className={cx('size-2 rounded-full bg-ok', s === 'building' && 'animate-pulse')} />
            {s === 'building' ? 'in development' : 'built'}
        </span>
    );
}

function Flow({ steps, play }) {
    return (
        <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs">
            {steps.map((s, i) => (
                <li
                    key={s}
                    className={cx(
                        'flex items-center gap-2 transition-all duration-500 ease-out motion-reduce:transition-none',
                        play ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                    )}
                    style={{ transitionDelay: play ? `${120 + i * 90}ms` : '0ms' }}
                >
                    <span
                        className={cx(
                            'rounded-md border px-2.5 py-1',
                            i === steps.length - 1
                                ? 'border-sea text-sea'
                                : 'border-line bg-deep text-soft'
                        )}
                    >
                        {s}
                    </span>
                    {i < steps.length - 1 && <span className="text-acc" aria-hidden>→</span>}
                </li>
            ))}
        </ol>
    );
}

function ImageGallery({ p, onImage }) {
    const shots = [p.image, ...(p.gallery || [])].filter(Boolean);
    if (!shots.length) return null;

    return (
        <div className="mt-4 grid grid-cols-2 gap-3 overflow-hidden">
            {shots.map((src, i) => (
                <button
                    key={`${p.id}-shot-${i}`}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onImage(p, src); }}
                    aria-label={`Enlarge ${p.name} image ${i + 1}`}
                    className={cx(
                        'zoom-shot group block overflow-hidden rounded-lg border border-line cursor-zoom-in',
                        i === 0 ? 'col-span-2' : ''
                    )}
                >
                    <img
                        src={src}
                        alt={`${p.name} — view ${i + 1}`}
                        loading="lazy"
                        className={cx(
                            'w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none',
                            i === 0 ? 'h-52' : 'h-40'
                        )}
                    />
                </button>
            ))}
        </div>
    );
}

function ImageModal({ src, alt, onClose }) {
    // Mount hidden, flip on the next frame so the fade/scale-in actually animates.
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setShown(true));
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={onClose}
            className={cx(
                'fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm',
                'transition-opacity duration-300 ease-out motion-reduce:transition-none',
                shown ? 'opacity-100' : 'opacity-0'
            )}
        >
            <div
                className={cx(
                    'relative transition-all duration-300 ease-out motion-reduce:transition-none',
                    shown ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={src} alt={alt} className="max-h-[88vh] max-w-full rounded-lg object-contain" />
                <button
                    type="button"
                    aria-label="Close preview"
                    onClick={onClose}
                    className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-black/70 text-white transition-colors hover:text-acc"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */

/**
 * Layout never changes with the tech filter, so nothing jumps around.
 * The filter is purely visual and animated:
 *   - matching cards lift slightly and get an accent border, their chips pop
 *   - non-matching cards ease back (dim, desaturate, shrink a touch)
 * Expanding a card animates its height (grid-rows 0fr → 1fr) and fades the
 * content in, instead of mounting it abruptly.
 */
function ProjectCard({ p, big, focusId, setFocusId, tech, lit, onImage }) {
    const expanded = focusId === p.id;
    const active = Boolean(tech);
    const match = !active || p.stack.includes(tech);
    const ref = useReveal();

    const toggle = () => setFocusId(expanded ? null : p.id);

    const hasDetails =
        p.desc || p.link || p.flow ||
        (p.features && p.features.length) ||
        (p.hardware && p.hardware.length) ||
        p.image || (p.gallery && p.gallery.length);

    const teaser = [p.image, ...(p.gallery || [])].filter(Boolean)[0];

    return (
        <li ref={ref} className="reveal">
            <div
                className={cx(
                    'project-card rounded-xl border',
                    'transition-all duration-300 ease-out motion-reduce:transition-none',
                    big ? 'p-6 sm:p-7' : 'p-4',
                    expanded
                        ? 'border-acc/60 bg-panel'
                        : active && match
                            ? 'border-acc/40 bg-panel/60 -translate-y-0.5'
                            : 'border-line bg-panel/40 hover:-translate-y-0.5 hover:border-mut',
                    active && !match && 'scale-[0.985] opacity-35 saturate-50'
                )}
            >
                <button
                    type="button"
                    onClick={toggle}
                    aria-expanded={expanded}
                    className="block w-full text-left cursor-pointer"
                >
                    <span className="flex items-start justify-between gap-3">
                        <span>
                            <span
                                className={cx(
                                    'block font-semibold tracking-tight',
                                    big ? 'text-3xl sm:text-4xl' : 'text-lg'
                                )}
                            >
                                {p.name}
                            </span>
                            <span className="block text-sm text-mut">{p.kind}</span>
                        </span>
                        <Status s={p.status} />
                    </span>

                    {p.stack.length > 0 && (
                        <span className="mt-3 flex flex-wrap gap-1.5">
                            {p.stack.map((t) => (
                                <Chip key={t} lit={lit.has(t)}>{t}</Chip>
                            ))}
                        </span>
                    )}

                    {hasDetails && (
                        <span
                            className={cx(
                                'mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] transition-colors duration-300',
                                expanded ? 'text-acc' : 'text-mut'
                            )}
                        >
                            <span
                                className={cx(
                                    'inline-block transition-transform duration-300',
                                    expanded ? 'rotate-90' : ''
                                )}
                                aria-hidden
                            >
                                ▸
                            </span>
                            {expanded ? 'Click to collapse' : 'Click to expand'}
                        </span>
                    )}
                </button>

                {/* Collapsed teaser (featured card only) */}
                {big && p.desc && (
                    <div
                        className={cx(
                            'grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none',
                            expanded ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'
                        )}
                        aria-hidden={expanded}
                    >
                        <div className="min-h-0 overflow-hidden">
                            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-soft line-clamp-2">
                                {p.desc}
                            </p>
                            {teaser && (
                                <button
                                    type="button"
                                    tabIndex={expanded ? -1 : 0}
                                    onClick={(e) => { e.stopPropagation(); onImage(p, teaser); }}
                                    aria-label={`Enlarge ${p.name} screenshot`}
                                    className="zoom-shot group mt-4 block w-full overflow-hidden rounded-lg border border-line cursor-zoom-in"
                                >
                                    <img
                                        src={teaser}
                                        alt={`${p.name} — screenshot`}
                                        loading="lazy"
                                        className="h-52 w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                                    />
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Expandable details: height + fade animate; hidden content is
                    removed from tab order / a11y tree via visibility. */}
                <div
                    className={cx(
                        'grid transition-[grid-template-rows,visibility] duration-300 ease-out motion-reduce:transition-none',
                        expanded ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
                    )}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div
                            className={cx(
                                'expanded-panel mt-4 space-y-4 transition-all duration-300 ease-out motion-reduce:transition-none',
                                expanded ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                            )}
                        >
                            {p.desc && (
                                <p className="max-w-prose text-[15px] leading-relaxed text-soft">
                                    {p.desc}
                                </p>
                            )}

                            <ImageGallery p={p} onImage={onImage} />

                            {p.link && (
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block font-mono text-xs text-acc hover:underline"
                                >
                                    View project ↗
                                </a>
                            )}

                            {p.flow && <Flow steps={p.flow} play={expanded} />}

                            {p.features && p.features.length > 0 && (
                                <div>
                                    <h4 className="mb-2 text-sm font-medium text-mut">Features</h4>
                                    <ul className="grid gap-1 text-sm sm:grid-cols-2">
                                        {p.features.map((f, i) => (
                                            <li
                                                key={f}
                                                className={cx(
                                                    'flex gap-2 transition-all duration-500 ease-out motion-reduce:transition-none',
                                                    expanded ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                                                )}
                                                style={{ transitionDelay: expanded ? `${100 + i * 60}ms` : '0ms' }}
                                            >
                                                <span className="text-acc" aria-hidden>–</span>
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {p.hardware && p.hardware.length > 0 && (
                                <div>
                                    <h4 className="mb-2 text-sm font-medium text-mut">Hardware</h4>
                                    <ul className="flex flex-wrap gap-1.5">
                                        {p.hardware.map((h) => (
                                            <li
                                                key={h}
                                                className="inline-flex items-center gap-1 rounded-md border border-line bg-deep px-2 py-0.5 font-mono text-[11px] text-soft"
                                            >
                                                <TechLogo name={h} size={11} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

const byId = (...ids) => ids.map((id) => PROJECTS.find((p) => p.id === id));

function RevealSection({ title, ids, shared }) {
    const ref = useReveal();
    return (
        <div ref={ref} className="reveal">
            <h2 className="mb-3 mt-8 text-sm font-medium text-mut">{title}</h2>
            <ul className="reveal-stagger grid items-start gap-4 sm:grid-cols-2">
                {byId(...ids).filter(Boolean).map((p) => (
                    <ProjectCard key={p.id} p={p} {...shared} />
                ))}
            </ul>
        </div>
    );
}

export default function Projects({ focusId, setFocusId, tech, lit }) {
    const [modal, setModal] = useState(null);
    const openImage = (project, src) => setModal({ src, alt: project.name });
    const shared = { focusId, setFocusId, tech, lit, onImage: openImage };

    return (
        <section className="tick lg:pl-6" aria-label="Projects">
            <ul className="space-y-4">
                <ProjectCard p={PROJECTS[0]} big {...shared} />
                <ProjectCard p={PROJECTS[1]} {...shared} />
            </ul>

            <RevealSection
                title="Government systems"
                ids={['civil', 'gad']}
                shared={shared}
            />

            <RevealSection
                title="Laravel / Vue"
                ids={['floodguard', 'felsci']}
                shared={shared}
            />

            <RevealSection
                title="Previous work"
                ids={['nutrimeal', 'afterfootball', 'captain', 'jtour', 'boracay', 'iot']}
                shared={shared}
            />

            {modal && (
                <ImageModal
                    src={modal.src}
                    alt={modal.alt}
                    onClose={() => setModal(null)}
                />
            )}
        </section>
    );
}