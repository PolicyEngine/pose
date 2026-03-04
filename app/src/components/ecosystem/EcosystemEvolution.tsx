import { useState } from 'react';
import { EcosystemMapInteractive } from './EcosystemMapInteractive';
import { EVOLUTION_STEPS } from '../../data/ecosystem';
import { colors } from '../../lib/colors';
import type { SlideProps } from '../../lib/types';
import { SlideHeader } from '../ui/SlideHeader';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const LEGEND: { label: string; org: 'rules' | 'cosilico' | 'pe' | 'all'; color: string; bg: string }[] = [
  { label: 'Rules Foundation', org: 'rules', color: colors.rulesBlue, bg: 'rgba(59, 130, 246, 0.1)' },
  { label: 'Cosilico', org: 'cosilico', color: colors.cosilicoCyan, bg: 'rgba(6, 182, 212, 0.1)' },
  { label: 'PolicyEngine', org: 'pe', color: colors.peTeal, bg: 'rgba(49, 151, 149, 0.1)' },
  { label: 'Shared', org: 'all', color: '#64748B', bg: 'rgba(100, 116, 139, 0.1)' },
];

const STEP_NARRATIVES = [
  'This was us. One organization trying to serve researchers, government agencies, AI labs, and funders. One governance model. One funding strategy. One brand.',
  '100 interviews revealed that each audience needs fundamentally different things: different governance, different funding models, different technical architecture.',
  'Three organizations. Each specialized. Each stronger for the separation. Connected by shared open-source code flowing between them.',
];

export function EcosystemEvolutionSlide(_props: SlideProps) {
  const { containerRef, currentStep } = useScrollProgress(3);
  const stepData = EVOLUTION_STEPS[currentStep - 1];
  const [selectedOrg, setSelectedOrg] = useState<'all' | 'rules' | 'cosilico' | 'pe'>('all');

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex flex-col px-8 md:px-16 py-4 bg-page-bg">
        <SlideHeader tag="THE A-HA MOMENT" tagColor={colors.highlight} title="One became three" />

        <div className="flex items-center gap-4 mt-2">
          <div className="flex gap-1 flex-1">
            {EVOLUTION_STEPS.map((s) => (
              <div
                key={s.step}
                className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all border ${
                  currentStep === s.step
                    ? 'bg-primary text-white border-primary'
                    : 'bg-card-bg text-text-secondary border-border-medium'
                }`}
              >
                {s.step}. {s.title}
              </div>
            ))}
          </div>

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
                  <span className="text-[11px] font-medium" style={{ color: isActive ? item.color : '#94A3B8' }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p
          key={`narrative-${currentStep}`}
          className="text-sm md:text-base text-text-secondary mt-3 text-center italic leading-relaxed max-w-3xl mx-auto transition-opacity duration-500"
        >
          {STEP_NARRATIVES[currentStep - 1]}
        </p>
        <p
          key={`desc-${currentStep}`}
          className="text-xs text-text-tertiary mt-1 text-center transition-opacity duration-300"
        >
          {stepData.description}
        </p>

        <div className="flex-1 min-h-0 mt-2">
          <EcosystemMapInteractive step={currentStep} filterOrg={selectedOrg} />
        </div>
      </div>
    </div>
  );
}
