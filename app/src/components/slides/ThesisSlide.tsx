import type { SlideProps } from '../../lib/types';
import { colors } from '../../lib/colors';
import { SlideHeader } from '../ui/SlideHeader';

const lines = [
  { text: 'FOR economists, policy researchers, think tanks, journalists, advocates, and benefit access platforms', color: colors.textSecondary },
  { text: 'WHO NEED TO understand taxes and benefits for households or analyze policy impacts on populations', color: colors.textPrimary, bold: true },
  { text: 'THE STATUS QUO \u2014 proprietary microsimulation tools \u2014 FAILS DUE TO high cost, limited accessibility, and restrictions in government/secure environments', color: colors.accentOrange },
  { text: 'CAUSING policy decisions without rigorous distributional analysis', color: colors.textPrimary, bold: true },
  { text: 'WE WILL ESTABLISH three complementary organizations for open-source fiscal policy simulation:', color: colors.primary },
];

const orgLines = [
  { text: '\u2022  Rules Foundation \u2014 Encode the law as open, auditable code', color: colors.rulesBlue },
  { text: '\u2022  Cosilico \u2014 Run the production infrastructure as a public benefit corp', color: colors.cosilicoCyan },
  { text: '\u2022  PolicyEngine \u2014 Tell the story through research and analysis', color: colors.peTeal },
];

export function ThesisSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16 py-4">
      <SlideHeader tag="THESIS" tagColor={colors.accentOrange} />

      <div className="space-y-4 mt-4">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`scroll-reveal-left text-base ${line.bold ? 'font-semibold' : ''}`}
            style={{ color: line.color, transitionDelay: `${i * 0.1}s` }}
          >
            {line.text}
          </p>
        ))}

        <div className="space-y-1.5 pl-2">
          {orgLines.map((line, i) => (
            <p
              key={i}
              className="scroll-reveal-left text-sm font-medium"
              style={{ color: line.color, transitionDelay: `${0.5 + i * 0.1}s` }}
            >
              {line.text}
            </p>
          ))}
        </div>

        <p
          className="scroll-reveal-left text-text-primary text-base"
          style={{ transitionDelay: '0.8s' }}
        >
          TO DELIVER open models, web apps, and APIs {'\u2014'} democratizing access to sophisticated policy analysis
        </p>
      </div>
    </div>
  );
}
