import React, { useMemo, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { GITHUB } from '../../lib/constants';
import Container from '../layout/Container';
import Section from '../layout/Section';
import FadeIn from '../animations/FadeIn';

function AnimatedCounter({ value, suffix = '' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = typeof value === 'number' ? value : parseInt(value, 10);
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
}

export default function GitHub() {
  const [tooltip, setTooltip] = useState(null);

  const contributionGrid = useMemo(() => {
    const weeks = [];
    const today = new Date();
    for (let w = 47; w >= 0; w--) {
      const days = [];
      for (let d = 6; d >= 0; d--) {
        const date = new Date(today);
        date.setDate(date.getDate() - (w * 7 + d));
        const rand = (w * 7 + d * 13) % 17;
        let level = 0, count = 0;
        if (rand > 13) { level = 4; count = rand + 8; }
        else if (rand > 10) { level = 3; count = rand + 4; }
        else if (rand > 7) { level = 2; count = rand; }
        else if (rand > 4) { level = 1; count = 2; }
        days.push({ level, count, dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
      }
      weeks.push(days);
    }
    return weeks;
  }, []);

  const levelColor = (level) => {
    switch (level) {
      case 4: return 'bg-black';
      case 3: return 'bg-black/70';
      case 2: return 'bg-black/40';
      case 1: return 'bg-black/15';
      default: return 'bg-black/5';
    }
  };

  return (
    <Section id="github" className="bg-white text-black border-t border-black/10">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono-tech text-black/50 block mb-3">
              03 / Engineering Activity
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Open Source & Proof of Craft
            </h2>
          </div>
          <a href={`https://github.com/${GITHUB.username}`} target="_blank" rel="noopener noreferrer"
            className="font-mono-tech text-xs uppercase tracking-widest text-black hover:opacity-50 transition-opacity flex items-center gap-2">
            github.com/{GITHUB.username} ↗
          </a>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-black/10 mb-16">
          {[
            { value: GITHUB.stats.repositories, label: 'Public Repositories' },
            { value: GITHUB.stats.contributions, label: 'Yearly Contributions' },
            { value: GITHUB.stats.streak, label: 'Active Commit Streak', suffix: 'd' },
            { value: GITHUB.stats.stars, label: 'GitHub Stars' },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="space-y-1">
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl block">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                </span>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-black/50 block">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pinned Repos */}
        <div className="mb-20">
          <h3 className="font-mono-tech text-xs uppercase tracking-widest text-black/50 mb-8">Pinned Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GITHUB.pinnedRepos.map((repo, idx) => (
              <FadeIn key={repo.name} delay={idx * 0.1}>
                <a href={`https://github.com/${GITHUB.username}/${repo.name}`} target="_blank" rel="noopener noreferrer"
                  className="border border-black/10 p-8 flex flex-col justify-between h-full hover:border-black hover:shadow-lg transition-all duration-300 group block">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono-tech text-lg font-medium group-hover:underline">{repo.name}</h4>
                      <span className="text-xs text-black/40 font-mono-tech group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </div>
                    <p className="text-sm text-black/60 font-light leading-relaxed">{repo.description}</p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-mono-tech text-black/50">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-black block" />
                      {repo.language}
                    </span>
                    <div className="flex items-center gap-4">
                      <span>★ {repo.stars}</span>
                      <span>⑂ {repo.forks}</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="mb-20 p-8 border border-black/10 bg-black/[0.01] relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <h3 className="font-mono-tech text-xs uppercase tracking-widest text-black/50">Contribution Velocity Matrix</h3>
              {tooltip && (
                <span className="font-mono-tech text-xs text-white bg-black px-2 py-0.5 font-semibold">
                  {tooltip.count} commits on {tooltip.dateStr}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-black/50">
              <span>Less</span>
              <div className="flex gap-1 items-center">
                {[5, 15, 40, 70, 100].map((o) => (
                  <span key={o} className={`w-2.5 h-2.5 bg-black/${o} block`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[700px]">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setTooltip(day)}
                      onMouseLeave={() => setTooltip(null)}
                      className={`w-full aspect-square ${levelColor(day.level)} transition-all hover:scale-125 cursor-pointer`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Stream */}
        <div>
          <h3 className="font-mono-tech text-xs uppercase tracking-widest text-black/50 mb-6">Latest Commits & Releases</h3>
          <div className="divide-y divide-black/5 border-t border-b border-black/10">
            {GITHUB.recentActivity.map((activity, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm hover:bg-black/[0.02] px-3 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-black block shrink-0" />
                    <span className="font-mono-tech text-xs text-black/60 font-semibold uppercase w-28">{activity.repo}</span>
                    <span className="font-light text-black/80">{activity.message}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-black/35 shrink-0">{activity.time}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
