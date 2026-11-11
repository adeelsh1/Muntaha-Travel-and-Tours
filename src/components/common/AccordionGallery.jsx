import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Check, ArrowRight } from 'lucide-react';

import './AccordionGallery.css';

const DEFAULT_ITEMS = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 2,
  accentColor = '#ECBC00',
  overlayColor = '#44163D',
  textColor = '#ffffff',
  height = 480,
  gap = 12,
  radius = 20,
  expandRatio = 0.52,
  orientation = 'horizontal',
  duration = 0.65,
  ease = 'power3.out',
  parallax = 0.5,
  tilt = 8,
  trigger = 'hover',
  grayscale = true,
  className = '',
  onItemClick = null
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    animate => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];

        tl.to(panel, { flexGrow: isActive ? grow : 1, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.05;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              duration: dur,
              ease
            },
            0
          );
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = i => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    } else if (onItemClick) {
      onItemClick(items[i]);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
      }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link && item.link !== '#' ? 'a' : 'div';
        const Icon = item.icon;

        return (
          <Tag
            key={i}
            ref={el => (panelRefs.current[i] = el)}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            href={item.link && item.link !== '#' ? item.link : undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            {/* Background Media */}
            <span className="ag-panel__frame">
              <span className="ag-panel__media" ref={el => (mediaRefs.current[i] = el)}>
                <img src={item.image} alt={item.alt || item.label || ''} draggable="false" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* Collapsed State: Full Name & Icon always visible horizontally without hover */}
            <div className="ag-panel__collapsed" aria-hidden={isActive ? 'true' : undefined}>
              <div className="flex flex-col items-start gap-1.5">
                {Icon && (
                  <span className="w-8 h-8 rounded-xl bg-gold/25 backdrop-blur-xs flex items-center justify-center text-gold shrink-0 shadow-xs border border-gold/40 mb-0.5">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </span>
                )}
                <span className="font-serif font-bold text-white text-xs sm:text-[13px] tracking-wide leading-tight drop-shadow-md whitespace-normal block text-left">
                  {item.label}
                </span>
              </div>
            </div>

            {/* Expanded State: Rich details shown on hover/active */}
            <div className="ag-panel__details flex flex-col justify-end" aria-hidden={!isActive ? 'true' : undefined}>
              {item.category && (
                <div className="mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold bg-gold text-plum font-sans shadow-xs inline-block">
                    {item.category}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2.5 mb-2">
                <span className="ag-panel__bar shrink-0" />
                <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  {item.label}
                </h3>
              </div>

              {item.description && (
                <p className="font-sans text-xs sm:text-[13px] text-white/90 font-light leading-relaxed mb-3 line-clamp-2 sm:line-clamp-3 max-w-lg">
                  {item.description}
                </p>
              )}

              {item.features && item.features.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5">
                  {item.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-white/95 bg-white/15 px-2 py-0.5 rounded-md backdrop-blur-xs font-sans"
                    >
                      <Check className="w-3 h-3 text-gold stroke-[3]" />
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>
              )}

              <div>
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    if (onItemClick) onItemClick(item);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gold hover:bg-[#d4a900] text-plum font-semibold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Inquire This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
