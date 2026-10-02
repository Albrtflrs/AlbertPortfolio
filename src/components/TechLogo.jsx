// src/components/TechLogo.jsx
// Colored logo (or monochrome when palette is B&W).
import { useState, useEffect } from 'react';
import { LOGO_SLUGS, BRAND_COLORS, BRAND_COLORS_DARK_OVERRIDE } from '../data.js';

export default function TechLogo({ name, size = 14, mono = false }) {
    const slug = LOGO_SLUGS?.[name];
    const [failed, setFailed] = useState(false);

    const [env, setEnv] = useState(() => {
        if (typeof document === 'undefined') return { isDark: true, palette: 'bw' };
        const el = document.documentElement;
        return {
            isDark: el.dataset.theme !== 'light',
            palette: el.dataset.palette || 'bw',
        };
    });

    useEffect(() => {
        if (typeof document === 'undefined') return;
        const el = document.documentElement;
        const update = () => setEnv({
            isDark: el.dataset.theme !== 'light',
            palette: el.dataset.palette || 'bw',
        });
        update();
        const mo = new MutationObserver(update);
        mo.observe(el, { attributes: true, attributeFilter: ['data-theme', 'data-palette'] });
        return () => mo.disconnect();
    }, []);

    if (!slug || failed) return null;

    const url = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

    let color = 'currentColor';
    const shouldBeMono = mono || env.palette === 'bw';

    if (!shouldBeMono) {
        if (env.isDark && BRAND_COLORS_DARK_OVERRIDE?.[name]) {
            color = BRAND_COLORS_DARK_OVERRIDE[name];
        } else {
            color = BRAND_COLORS?.[name] ?? 'currentColor';
        }
    }

    return (
        <span
            aria-hidden="true"
            className="inline-block shrink-0"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                WebkitMaskImage: `url(${url})`,
                maskImage: `url(${url})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
            }}
        >
            <img
                src={url}
                alt=""
                style={{ display: 'none' }}
                onError={() => setFailed(true)}
            />
        </span>
    );
}