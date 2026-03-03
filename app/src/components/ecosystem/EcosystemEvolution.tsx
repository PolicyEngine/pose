import { useState } from 'react';
import { EcosystemMapInteractive } from './EcosystemMapInteractive';
import { EVOLUTION_STEPS } from '../../data/ecosystem';
import { colors } from '../../lib/colors';
import type { SlideProps } from '../../lib/types';
import { SlideHeader } from '../ui/SlideHeader';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const LEGEND: { label: string; org: 'rules' | 'cosilico' | 'pe' | 'all'; color: string; bg: string }[] = [
  { label: 'Rules Foundation', org: 'rules', color: colors.rulesBlue, bg: '#EFF6FF' },
  { label: 'Cosilico', org: 'cosilico', color: colors.cosilicoCyan, bg: '#ECFEFF' },
  { label: 'PolicyEngine', org: 'pe', color: colors.peTeal, bg: '#F0FDFA' },
  { label: 'Shared', org: 'all', color: '#94A3B8', bg: '#F8FAFC' },
];

export function EcosystemEvolutionSlide(_props: SlideProps) {
  const { containerRef, currentStep } = useScrollProgress(3);
  const stepData = EVOLUTION_STEPS[currentStep - 1];
  const [selectedOrg, setSelectedOrg] = useState<'all' | 'rules' | 'cosilico' | 'pe'>('all');

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col px-8 md:px-16 py-4 bg-white">
        <SlideHeader tag="ECOSYSTEM EVOLUTION" tagColor={colors.highlight} title="How the ecosystem transformed" />

        {/* Step indicators + legend row */}
        <div className="flex items-center gap-4 mt-2">
          <div className="flex gap-1 flex-1">
            {EVOLUTION_STEPS.map((s) => (
              <div
                key={s.step}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all border ${
                  currentStep === s.step
                    ? 'bg-primary text-white border-primary'
                    : 'bg-card-bg text-text-secondary border-border-light'
                }`}
              >
                {s.step}. {s.title}
              </div>
            ))}
          </div>

          {/* Legend (clickable) */}
          <div className="flex gap-2 shrink-0">
            {LEGEND.map((item) => {
              const isActive = selectedOrg === item.org;
              return (
                <button
                  key={item.label}
                  onClick={() => setSelectedOrg(isActive ? 'all' : item.org)}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md transition-all cursor-pointer"
                  style={{
                    backgroundColor: isActive ? item.bg : 'transparent',
                    border: `1.5px solid ${isActive ? item.color : 'transparent'}`,
                    opacity: selectedOrg === 'all' || isActive ? 1 : 0.4,
                  }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded"
                    style={{
                      backgroundColor: item.bg,
                      border: `2px solid ${item.color}`,
                    }}
                  />
                  <span className="text-[11px] font-medium" style={{ color: isActive ? item.color : '#5A5A5A' }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p
          key={currentStep}
          className="text-sm text-text-secondary mt-2 text-center transition-opacity duration-300"
        >
          {stepData.description}
        </p>

        {/* Map */}
        <div className="flex-1 min-h-0 mt-2">
          <EcosystemMapInteractive step={currentStep} filterOrg={selectedOrg} />
        </div>
      </div>
    </div>
  );
}
