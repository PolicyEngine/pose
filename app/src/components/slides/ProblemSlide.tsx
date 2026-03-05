import type { SlideProps } from '@/lib/types';
import { colors } from '@/lib/colors';
import { SlideHeader } from '@/components/ui/SlideHeader';

const options = [
  {
    title: 'Ask Congressional Budget Office',
    verdict: 'Gatekept and slow',
    problems: [
      'Not on Ways & Means or Senate Finance? Good luck.',
      'Months-long queue, even for top committees',
      'Usually just a budget number — no winners/losers breakdown',
    ],
  },
  {
    title: 'Commission a study',
    verdict: 'Expensive, black box, one-shot',
    problems: [
      '$10K+ per analysis from a think tank or consultant',
      'Proprietary models you can\u2019t inspect or adjust',
      'Others can\u2019t critique or iterate on your proposal',
    ],
  },
  {
    title: 'DIY',
    verdict: 'Uncertain, not credible',
    problems: [
      'Tax and transfer policy is enormously complex',
      'Back-of-envelope won\u2019t match CBO\u2019s eventual score',
      'No external credibility for your numbers',
    ],
  },
];

export function ProblemSlide(_props: SlideProps) {
  return (
    <div className="px-8 md:px-16">
      <SlideHeader
        tag="THE PROBLEM"
        tagColor={colors.warning}
        title="You want to expand the child tax credit. Now what?"
      />

      <div className="grid grid-cols-3 gap-4 mt-4">
        {options.map((option, i) => (
          <div
            key={option.title}
            className="scroll-reveal rounded-lg border p-5"
            style={{
              transitionDelay: `${0.1 + i * 0.12}s`,
              borderColor: colors.borderMedium,
              backgroundColor: colors.cardBg,
            }}
          >
            <h3 className="text-base font-bold" style={{ color: colors.textPrimary }}>
              {option.title}
            </h3>
            <p className="text-xs font-medium mt-0.5" style={{ color: colors.warning }}>
              {option.verdict}
            </p>

            <ul className="mt-3 space-y-2">
              {option.problems.map((problem, j) => (
                <li
                  key={j}
                  className="text-xs leading-relaxed pl-3 relative"
                  style={{ color: colors.textSecondary }}
                >
                  <span
                    className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: colors.textTertiary }}
                  />
                  {problem}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p
        className="scroll-reveal text-sm text-center mt-6"
        style={{ color: colors.textTertiary, transitionDelay: '0.5s' }}
      >
        This is a state capacity problem: governments can&apos;t analyze their own policy options
        fast enough.
      </p>
    </div>
  );
}
