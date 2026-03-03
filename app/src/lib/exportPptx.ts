import PptxGenJS from 'pptxgenjs';
import { colors } from './colors';
import { team } from '../data/team';
import { stats, trustedBy } from '../data/impact';
import { weeklyProgress, segments } from '../data/interviews';
import { assumptions } from '../data/assumptions';
import { orgs } from '../data/orgs';
import { governanceBefore, governanceAfter } from '../data/governance';
import { sustainability } from '../data/sustainability';
import { milestones } from '../data/timeline';
import { voicesQuotes, impactGoalsEvolution, impactGoals, partners, canvasMembers, competitors, markets, interviewHighlights } from '../data/appendix';
import { governanceDetail } from '../data/governance';

const BG = 'FFFFFF';
const CARD = 'F5F9FF';
const TEXT_PRIMARY = '000000';
const TEXT_SECONDARY = '5A5A5A';
const TEXT_TERTIARY = '9CA3AF';
const BORDER = 'E2E8F0';

function hexToRgb(hex: string) {
  return hex.replace('#', '');
}

function addSlideHeader(slide: PptxGenJS.Slide, tag: string, tagColor: string, title?: string, isAppendix = false) {
  if (isAppendix) {
    slide.addText('APPENDIX', { x: 0.8, y: 0.3, w: 5, h: 0.3, fontSize: 10, color: TEXT_TERTIARY, fontFace: 'Calibri' });
  }
  const yTag = 0.5;
  slide.addText(tag, { x: 0.8, y: yTag, w: 5, h: 0.4, fontSize: 12, color: hexToRgb(tagColor), bold: true, fontFace: 'Calibri' });
  slide.addShape('rect', { x: 0.8, y: yTag + 0.4, w: 2, h: 0.02, fill: { color: hexToRgb(tagColor) } });
  if (title) {
    slide.addText(title, { x: 0.8, y: yTag + 0.6, w: 11, h: 0.6, fontSize: 28, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
  }
}

export function exportPptx() {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';

  // ---- SLIDE 1: TITLE ----
  const s1 = pptx.addSlide();
  s1.background = { fill: BG };
  s1.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.03, fill: { color: hexToRgb(colors.primary) } });
  s1.addText('One Ecosystem Became Three', { x: 0.5, y: 1.2, w: 9, h: 1, fontSize: 44, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
  s1.addText('How 100+ interviews reshaped our open-source strategy', { x: 0.5, y: 2.3, w: 9, h: 0.6, fontSize: 20, color: hexToRgb(colors.primary), align: 'center', fontFace: 'Calibri' });
  s1.addText('NSF POSE  |  Award #4373  |  Winter 2026', { x: 0.5, y: 3.5, w: 9, h: 0.4, fontSize: 14, color: TEXT_TERTIARY, align: 'center', fontFace: 'Calibri' });
  [colors.rulesBlue, colors.cosilicoCyan, colors.peTeal].forEach((c, i) => {
    s1.addShape('ellipse', { x: 3.8 + i * 0.6, y: 4.2, w: 0.35, h: 0.35, fill: { color: hexToRgb(c) } });
  });
  s1.addText('pose-ecosystem.vercel.app', { x: 0.5, y: 5, w: 9, h: 0.3, fontSize: 11, color: TEXT_TERTIARY, align: 'center', fontFace: 'Calibri' });

  // ---- SLIDE 2: TEAM ----
  const s2 = pptx.addSlide();
  s2.background = { fill: BG };
  addSlideHeader(s2, 'THE TEAM', colors.primary, 'PolicyEngine POSE Team');
  team.forEach((m, i) => {
    const left = 0.8 + i * 3.2;
    s2.addText(m.name, { x: left, y: 2.2, w: 2.8, h: 0.4, fontSize: 18, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
    s2.addText(m.role, { x: left, y: 2.6, w: 2.8, h: 0.3, fontSize: 12, color: hexToRgb(m.color), bold: true, align: 'center', fontFace: 'Calibri' });
    s2.addText(m.bio.join('\n'), { x: left, y: 3, w: 2.8, h: 1, fontSize: 10, color: TEXT_SECONDARY, align: 'center', fontFace: 'Calibri' });
  });

  // ---- SLIDE 3: THESIS ----
  const s3 = pptx.addSlide();
  s3.background = { fill: BG };
  addSlideHeader(s3, 'THESIS', colors.accentOrange);
  const thesisLines = [
    { text: 'FOR economists, policy researchers, think tanks, journalists, advocates, and benefit access platforms', color: TEXT_SECONDARY },
    { text: 'WHO NEED TO understand taxes and benefits for households or analyze policy impacts on populations', color: TEXT_PRIMARY, bold: true },
    { text: 'THE STATUS QUO \u2014 proprietary microsimulation tools \u2014 FAILS DUE TO high cost, limited accessibility, and restrictions', color: colors.accentOrange },
    { text: 'CAUSING policy decisions without rigorous distributional analysis', color: TEXT_PRIMARY, bold: true },
    { text: 'WE WILL ESTABLISH three complementary organizations:', color: colors.primary },
    { text: '\u2022  Rules Foundation \u2014 Encode the law as open, auditable code', color: colors.rulesBlue },
    { text: '\u2022  Cosilico \u2014 Run the production infrastructure as a public benefit corp', color: colors.cosilicoCyan },
    { text: '\u2022  PolicyEngine \u2014 Tell the story through research and analysis', color: colors.peTeal },
    { text: 'TO DELIVER open models, web apps, and APIs', color: TEXT_PRIMARY },
  ];
  thesisLines.forEach((line, i) => {
    s3.addText(line.text, { x: 0.8, y: 1.3 + i * 0.45, w: 8.5, h: 0.4, fontSize: 13, color: typeof line.color === 'string' && line.color.startsWith('#') ? hexToRgb(line.color) : line.color, bold: line.bold, fontFace: 'Calibri' });
  });

  // ---- SLIDE 4: IMPACT ----
  const s4 = pptx.addSlide();
  s4.background = { fill: BG };
  addSlideHeader(s4, 'IMPACT', colors.success, 'What we\'ve built \u2014 and who\'s using it');
  stats.forEach((stat, i) => {
    const left = 0.4 + i * 2.4;
    s4.addShape('roundRect', { x: left, y: 2.2, w: 2.1, h: 1.4, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    s4.addShape('rect', { x: left, y: 2.2, w: 0.06, h: 1.4, fill: { color: hexToRgb(stat.color) } });
    s4.addText(stat.number, { x: left, y: 2.3, w: 2.1, h: 0.7, fontSize: 30, color: hexToRgb(stat.color), bold: true, align: 'center', fontFace: 'Calibri' });
    s4.addText(stat.label, { x: left, y: 3, w: 2.1, h: 0.4, fontSize: 10, color: TEXT_SECONDARY, align: 'center', fontFace: 'Calibri' });
  });
  s4.addText(trustedBy.line1, { x: 0.5, y: 4, w: 9, h: 0.3, fontSize: 13, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
  s4.addText(trustedBy.line2, { x: 0.5, y: 4.3, w: 9, h: 0.3, fontSize: 11, color: hexToRgb(colors.primary), align: 'center', fontFace: 'Calibri' });

  // ---- SLIDE 5: INTERVIEW LOG ----
  const s5 = pptx.addSlide();
  s5.background = { fill: BG };
  addSlideHeader(s5, 'INTERVIEW LOG', colors.primary);
  s5.addText('100+ interviews', { x: 0.8, y: 1.1, w: 4, h: 0.6, fontSize: 32, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
  s5.addText('across 14 segments in 7 weeks', { x: 0.8, y: 1.7, w: 4, h: 0.3, fontSize: 14, color: hexToRgb(colors.primary), fontFace: 'Calibri' });
  weeklyProgress.forEach((w, i) => {
    const y = 2.3 + i * 0.32;
    s5.addText(w.week, { x: 0.5, y, w: 1.8, h: 0.25, fontSize: 9, color: TEXT_TERTIARY, fontFace: 'Calibri' });
    s5.addShape('roundRect', { x: 2.5, y: y + 0.03, w: 2 * w.count / 100, h: 0.18, fill: { color: hexToRgb(colors.primary) }, rectRadius: 0.05 });
    s5.addText(String(w.count), { x: 2.5 + 2 * w.count / 100 + 0.1, y, w: 0.4, h: 0.25, fontSize: 9, color: hexToRgb(colors.primary), bold: true, fontFace: 'Calibri' });
  });
  segments.forEach((seg, i) => {
    const y = 1.0 + i * 0.35;
    s5.addText(seg.name, { x: 5, y, w: 2.2, h: 0.3, fontSize: 9, color: TEXT_TERTIARY, align: 'right', fontFace: 'Calibri' });
    s5.addShape('roundRect', { x: 7.4, y: y + 0.04, w: 2 * seg.count / 18, h: 0.2, fill: { color: hexToRgb(seg.color) }, rectRadius: 0.05 });
    s5.addText(String(seg.count), { x: 7.5 + 2 * seg.count / 18, y, w: 0.3, h: 0.3, fontSize: 9, color: hexToRgb(seg.color), bold: true, fontFace: 'Calibri' });
  });

  // ---- SLIDE 6: ASSUMPTIONS ----
  const s6 = pptx.addSlide();
  s6.background = { fill: BG };
  addSlideHeader(s6, 'ASSUMPTIONS', colors.accentOrange, 'What we assumed vs. what we learned');
  assumptions.forEach((a, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const left = 0.4 + col * 5;
    const top = 2 + row * 2;
    s6.addShape('roundRect', { x: left, y: top, w: 4.6, h: 1.8, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    s6.addShape('rect', { x: left, y: top, w: 0.06, h: 1.8, fill: { color: hexToRgb(a.color) } });
    s6.addText(a.status, { x: left + 0.2, y: top + 0.1, w: 2, h: 0.25, fontSize: 10, color: hexToRgb(a.color), bold: true, fontFace: 'Calibri' });
    s6.addText(a.title.replace('\n', ' '), { x: left + 0.2, y: top + 0.35, w: 2, h: 0.3, fontSize: 12, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    s6.addText(a.learning, { x: left + 0.2, y: top + 0.7, w: 2, h: 0.5, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
    s6.addText(a.quote, { x: left + 2.4, y: top + 0.3, w: 2, h: 0.8, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
    s6.addText(a.source, { x: left + 2.4, y: top + 1.2, w: 2, h: 0.25, fontSize: 8, color: hexToRgb(a.color), fontFace: 'Calibri' });
  });

  // ---- SLIDE 7: A-HA MOMENT ----
  const s7 = pptx.addSlide();
  s7.background = { fill: BG };
  addSlideHeader(s7, 'THE A-HA MOMENT', colors.highlight, 'One ecosystem became three');
  s7.addText('Interviews revealed that serving everyone from one organization creates governance, funding, and mission conflicts.', { x: 0.5, y: 1.8, w: 9, h: 0.4, fontSize: 12, color: TEXT_SECONDARY, align: 'center', fontFace: 'Calibri' });
  s7.addShape('ellipse', { x: 1, y: 2.7, w: 1.5, h: 1.5, fill: { color: CARD }, line: { color: BORDER, width: 1 } });
  s7.addText('PolicyEngine\n(Unified)', { x: 1, y: 3, w: 1.5, h: 0.8, fontSize: 12, color: TEXT_SECONDARY, bold: true, align: 'center', fontFace: 'Calibri' });
  s7.addText('\u2192', { x: 2.8, y: 3.1, w: 0.8, h: 0.5, fontSize: 36, color: hexToRgb(colors.highlight), align: 'center', fontFace: 'Calibri' });
  orgs.forEach((org, i) => {
    const left = 4 + i * 2;
    s7.addShape('roundRect', { x: left, y: 2.5, w: 1.8, h: 2.5, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    s7.addShape('rect', { x: left, y: 2.5, w: 1.8, h: 0.05, fill: { color: hexToRgb(org.color) } });
    s7.addShape('ellipse', { x: left + 0.7, y: 2.75, w: 0.4, h: 0.4, fill: { color: hexToRgb(org.color) } });
    s7.addText(org.name.replace('\n', ' '), { x: left + 0.1, y: 3.2, w: 1.6, h: 0.4, fontSize: 12, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
    s7.addText(`"${org.tagline}"`, { x: left + 0.1, y: 3.6, w: 1.6, h: 0.3, fontSize: 9, color: hexToRgb(org.color), align: 'center', fontFace: 'Calibri' });
    s7.addText(org.entity, { x: left + 0.1, y: 3.9, w: 1.6, h: 0.2, fontSize: 8, color: TEXT_SECONDARY, align: 'center', fontFace: 'Calibri' });
  });

  // ---- SLIDES 8-10: ECOSYSTEM MAPS ----
  const ecoOrgs = [
    { tag: 'ECOSYSTEM 1 OF 3', title: 'Rules Foundation \u2014 "Encode the law"', color: colors.rulesBlue },
    { tag: 'ECOSYSTEM 2 OF 3', title: 'Cosilico \u2014 "Run the infrastructure"', color: colors.cosilicoCyan },
    { tag: 'ECOSYSTEM 3 OF 3', title: 'PolicyEngine \u2014 "Tell the story"', color: colors.peTeal },
  ];
  ecoOrgs.forEach((eco) => {
    const s = pptx.addSlide();
    s.background = { fill: BG };
    addSlideHeader(s, eco.tag, eco.color, eco.title);
    s.addText('(See interactive ecosystem map at pose-ecosystem.vercel.app)', { x: 1, y: 3, w: 8, h: 0.5, fontSize: 14, color: TEXT_TERTIARY, align: 'center', fontFace: 'Calibri' });
  });

  // ---- SLIDE 11: GOVERNANCE ----
  const s11 = pptx.addSlide();
  s11.background = { fill: BG };
  addSlideHeader(s11, 'GOVERNANCE', colors.accentPurple, 'From founder-led to multi-stakeholder');
  s11.addShape('roundRect', { x: 0.4, y: 2, w: 4.2, h: 1.6, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
  s11.addShape('rect', { x: 0.4, y: 2, w: 4.2, h: 0.05, fill: { color: hexToRgb(colors.accentOrange) } });
  s11.addText('BEFORE', { x: 0.6, y: 2.1, w: 2, h: 0.25, fontSize: 11, color: hexToRgb(colors.accentOrange), bold: true, fontFace: 'Calibri' });
  s11.addText(governanceBefore.title, { x: 0.6, y: 2.35, w: 3.8, h: 0.3, fontSize: 15, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
  governanceBefore.items.forEach((item, i) => {
    s11.addText(`\u2022  ${item}`, { x: 0.6, y: 2.7 + i * 0.22, w: 3.8, h: 0.2, fontSize: 10, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });
  s11.addText('\u2192', { x: 4.6, y: 2.5, w: 0.6, h: 0.5, fontSize: 30, color: hexToRgb(colors.highlight), align: 'center', fontFace: 'Calibri' });
  s11.addShape('roundRect', { x: 5.4, y: 2, w: 4.2, h: 1.6, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
  s11.addShape('rect', { x: 5.4, y: 2, w: 4.2, h: 0.05, fill: { color: hexToRgb(colors.success) } });
  s11.addText('AFTER', { x: 5.6, y: 2.1, w: 2, h: 0.25, fontSize: 11, color: hexToRgb(colors.success), bold: true, fontFace: 'Calibri' });
  s11.addText(governanceAfter.title, { x: 5.6, y: 2.35, w: 3.8, h: 0.3, fontSize: 15, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
  governanceAfter.items.forEach((item, i) => {
    s11.addText(`\u2022  ${item.text}`, { x: 5.6, y: 2.7 + i * 0.22, w: 3.8, h: 0.2, fontSize: 10, color: hexToRgb(item.color), fontFace: 'Calibri' });
  });

  // ---- SLIDE 12: SUSTAINABILITY ----
  const s12 = pptx.addSlide();
  s12.background = { fill: BG };
  addSlideHeader(s12, 'SUSTAINABILITY', colors.success, 'Three models, each self-sustaining');
  sustainability.forEach((org, i) => {
    const left = 0.3 + i * 3.3;
    s12.addShape('roundRect', { x: left, y: 2, w: 3, h: 3.2, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    s12.addShape('rect', { x: left, y: 2, w: 3, h: 0.05, fill: { color: hexToRgb(org.color) } });
    s12.addText(org.name, { x: left + 0.3, y: 2.15, w: 2.5, h: 0.3, fontSize: 15, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    s12.addText(org.budget, { x: left + 0.3, y: 2.5, w: 2.5, h: 0.3, fontSize: 13, color: hexToRgb(org.color), bold: true, fontFace: 'Calibri' });
    org.items.forEach((item, j) => {
      s12.addText(`\u2022  ${item}`, { x: left + 0.3, y: 3 + j * 0.3, w: 2.5, h: 0.25, fontSize: 10, color: TEXT_SECONDARY, fontFace: 'Calibri' });
    });
  });

  // ---- SLIDE 13: TIMELINE ----
  const s13 = pptx.addSlide();
  s13.background = { fill: BG };
  addSlideHeader(s13, 'TIMELINE', colors.primary, 'Next 24 months');
  s13.addShape('rect', { x: 0.5, y: 2.8, w: 9, h: 0.02, fill: { color: BORDER } });
  milestones.forEach((m, i) => {
    const left = 0.3 + i * 1.9;
    s13.addShape('ellipse', { x: left + 0.7, y: 2.65, w: 0.25, h: 0.25, fill: { color: hexToRgb(m.color) } });
    s13.addText(m.period, { x: left, y: 2.1, w: 1.8, h: 0.25, fontSize: 10, color: hexToRgb(m.color), bold: true, align: 'center', fontFace: 'Calibri' });
    s13.addText(m.label, { x: left, y: 2.35, w: 1.8, h: 0.2, fontSize: 10, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
    s13.addText(m.description.join('\n'), { x: left, y: 3.1, w: 1.8, h: 1.2, fontSize: 8, color: TEXT_SECONDARY, align: 'center', fontFace: 'Calibri' });
  });

  // ---- SLIDE 14: CLOSE ----
  const s14 = pptx.addSlide();
  s14.background = { fill: BG };
  s14.addShape('rect', { x: 0, y: 0, w: '100%', h: 0.03, fill: { color: hexToRgb(colors.primary) } });
  s14.addText('One ecosystem became three.', { x: 0.5, y: 1, w: 9, h: 0.8, fontSize: 36, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
  s14.addText('Each stronger for it.', { x: 0.5, y: 1.8, w: 9, h: 0.6, fontSize: 26, color: hexToRgb(colors.primary), bold: true, align: 'center', fontFace: 'Calibri' });
  [{ n: 'Rules Foundation', t: 'Encode the law', c: colors.rulesBlue },
   { n: 'Cosilico', t: 'Run the infrastructure', c: colors.cosilicoCyan },
   { n: 'PolicyEngine', t: 'Tell the story', c: colors.peTeal }].forEach((org, i) => {
    const left = 1.2 + i * 2.8;
    s14.addShape('ellipse', { x: left + 0.9, y: 2.8, w: 0.4, h: 0.4, fill: { color: hexToRgb(org.c) } });
    s14.addText(org.n, { x: left, y: 3.3, w: 2.2, h: 0.3, fontSize: 14, color: TEXT_PRIMARY, bold: true, align: 'center', fontFace: 'Calibri' });
    s14.addText(org.t, { x: left, y: 3.6, w: 2.2, h: 0.2, fontSize: 11, color: hexToRgb(org.c), align: 'center', fontFace: 'Calibri' });
  });
  s14.addShape('roundRect', { x: 2, y: 4.2, w: 6, h: 0.6, fill: { color: CARD }, line: { color: hexToRgb(colors.primary), width: 1 }, rectRadius: 0.08 });
  s14.addText('Looking for:  foundation partners  ·  agency pilot programs  ·  AI lab collaborations', { x: 2.2, y: 4.25, w: 5.6, h: 0.5, fontSize: 11, color: hexToRgb(colors.primary), bold: true, align: 'center', fontFace: 'Calibri' });

  // ---- APPENDIX A: VOICES ----
  const sA = pptx.addSlide();
  sA.background = { fill: BG };
  addSlideHeader(sA, 'VOICES FROM THE FIELD', colors.primary, undefined, true);
  voicesQuotes.forEach((q, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const left = 0.4 + col * 5;
    const top = 1.5 + row * 2;
    sA.addShape('roundRect', { x: left, y: top, w: 4.6, h: 1.7, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    sA.addShape('rect', { x: left, y: top, w: 0.06, h: 1.7, fill: { color: hexToRgb(q.color) } });
    sA.addText(q.text, { x: left + 0.2, y: top + 0.2, w: 4.2, h: 0.8, fontSize: 10, color: TEXT_SECONDARY, fontFace: 'Calibri' });
    sA.addText(`\u2014 ${q.name}`, { x: left + 0.2, y: top + 1, w: 4.2, h: 0.2, fontSize: 10, color: hexToRgb(q.color), bold: true, fontFace: 'Calibri' });
    sA.addText(q.title, { x: left + 0.2, y: top + 1.25, w: 4.2, h: 0.2, fontSize: 8, color: TEXT_TERTIARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX B: IMPACT GOALS ----
  const sB = pptx.addSlide();
  sB.background = { fill: BG };
  addSlideHeader(sB, 'IMPACT GOALS', colors.success, undefined, true);
  sB.addText(impactGoalsEvolution.week2, { x: 1.5, y: 1.5, w: 7.5, h: 0.3, fontSize: 10, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  sB.addText(impactGoalsEvolution.week3, { x: 1.5, y: 2, w: 7.5, h: 0.3, fontSize: 10, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  impactGoals.forEach((goal, i) => {
    const left = 0.3 + i * 3.3;
    sB.addShape('roundRect', { x: left, y: 3, w: 3, h: 2, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    sB.addShape('rect', { x: left, y: 3, w: 3, h: 0.05, fill: { color: hexToRgb(goal.color) } });
    sB.addText(goal.name, { x: left + 0.2, y: 3.15, w: 2.6, h: 0.3, fontSize: 12, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    sB.addText(goal.condition, { x: left + 0.2, y: 3.5, w: 2.6, h: 0.5, fontSize: 9, color: hexToRgb(goal.color), bold: true, fontFace: 'Calibri' });
    sB.addText(goal.impact, { x: left + 0.2, y: 4.1, w: 2.6, h: 0.6, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX C: PARTNERS ----
  const sC = pptx.addSlide();
  sC.background = { fill: BG };
  addSlideHeader(sC, 'STRATEGIC PARTNERS', colors.accentPurple, undefined, true);
  partners.forEach((p, i) => {
    const left = 0.3 + i * 3.3;
    sC.addShape('roundRect', { x: left, y: 1.5, w: 3, h: 3.5, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    sC.addShape('rect', { x: left, y: 1.5, w: 3, h: 0.05, fill: { color: hexToRgb(p.color) } });
    sC.addText(p.name, { x: left + 0.2, y: 1.65, w: 2.6, h: 0.3, fontSize: 14, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    sC.addText(p.orgs, { x: left + 0.2, y: 1.95, w: 2.6, h: 0.2, fontSize: 8, color: hexToRgb(p.color), fontFace: 'Calibri' });
    sC.addText(p.type, { x: left + 0.2, y: 2.2, w: 2.6, h: 0.2, fontSize: 9, color: TEXT_TERTIARY, bold: true, fontFace: 'Calibri' });
    sC.addText(p.value.join('\n'), { x: left + 0.2, y: 2.6, w: 2.6, h: 0.8, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
    sC.addText(`Risk: ${p.risk}`, { x: left + 0.2, y: 3.6, w: 2.6, h: 0.4, fontSize: 8, color: TEXT_TERTIARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX D: CANVAS (placeholder) ----
  const sD = pptx.addSlide();
  sD.background = { fill: BG };
  addSlideHeader(sD, 'OSE CANVAS', colors.highlight, undefined, true);
  sD.addText('(See OSE Canvas image in full presentation)', { x: 1, y: 3, w: 8, h: 0.5, fontSize: 14, color: TEXT_TERTIARY, align: 'center', fontFace: 'Calibri' });

  // ---- APPENDIX E: CANVAS DETAIL ----
  const sE = pptx.addSlide();
  sE.background = { fill: BG };
  addSlideHeader(sE, 'OSE CANVAS (DETAIL)', colors.primary, undefined, true);
  sE.addText(canvasMembers.community.title, { x: 0.5, y: 1.3, w: 4.5, h: 0.3, fontSize: 12, color: hexToRgb(canvasMembers.community.color), bold: true, fontFace: 'Calibri' });
  canvasMembers.community.items.forEach((item, i) => {
    sE.addText(`\u2022  ${item}`, { x: 0.5, y: 1.7 + i * 0.22, w: 4.5, h: 0.2, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });
  sE.addText(canvasMembers.stakeholders.title, { x: 5.5, y: 1.3, w: 4.5, h: 0.3, fontSize: 12, color: hexToRgb(canvasMembers.stakeholders.color), bold: true, fontFace: 'Calibri' });
  canvasMembers.stakeholders.items.forEach((item, i) => {
    sE.addText(`\u2022  ${item}`, { x: 5.5, y: 1.7 + i * 0.22, w: 4.5, h: 0.2, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX F: GOVERNANCE DETAIL ----
  const sF = pptx.addSlide();
  sF.background = { fill: BG };
  addSlideHeader(sF, 'GOVERNANCE DETAIL', colors.accentPurple, undefined, true);
  governanceDetail.forEach((org, i) => {
    const top = 1.3 + i * 1.4;
    sF.addShape('roundRect', { x: 0.5, y: top, w: 9, h: 1.2, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.08 });
    sF.addShape('rect', { x: 0.5, y: top, w: 0.06, h: 1.2, fill: { color: hexToRgb(org.color) } });
    sF.addText(org.name, { x: 0.8, y: top + 0.1, w: 3, h: 0.3, fontSize: 14, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    sF.addText(org.details.join('\n'), { x: 0.8, y: top + 0.4, w: 8.5, h: 0.7, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX G: COMPETITIVE ----
  const sG = pptx.addSlide();
  sG.background = { fill: BG };
  addSlideHeader(sG, 'COMPETITIVE LANDSCAPE', colors.cosilicoCyan, undefined, true);
  competitors.forEach((c, i) => {
    const y = 1.5 + i * 0.6;
    sG.addShape('roundRect', { x: 0.5, y, w: 9, h: 0.5, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.05 });
    sG.addText(c.name, { x: 0.7, y, w: 2, h: 0.4, fontSize: 12, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    sG.addText(c.metric, { x: 3, y, w: 2, h: 0.4, fontSize: 10, color: hexToRgb(colors.accentOrange), fontFace: 'Calibri' });
    sG.addText(c.focus, { x: 5.2, y, w: 4, h: 0.4, fontSize: 10, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX H: HIGHLIGHTS ----
  const sH = pptx.addSlide();
  sH.background = { fill: BG };
  addSlideHeader(sH, 'KEY INTERVIEW HIGHLIGHTS', colors.primary, undefined, true);
  interviewHighlights.forEach((h, i) => {
    sH.addText(`${h.name}: ${h.insight}`, { x: 0.5, y: 1.3 + i * 0.35, w: 9, h: 0.3, fontSize: 9, color: TEXT_SECONDARY, fontFace: 'Calibri' });
  });

  // ---- APPENDIX I: MARKETS ----
  const sI = pptx.addSlide();
  sI.background = { fill: BG };
  addSlideHeader(sI, 'COSILICO: 12 MARKET SEGMENTS, $250B+ TAM', colors.cosilicoCyan, undefined, true);
  markets.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const left = 0.3 + col * 3.3;
    const top = 1.3 + row * 1;
    sI.addShape('roundRect', { x: left, y: top, w: 3, h: 0.8, fill: { color: CARD }, line: { color: BORDER, width: 1 }, rectRadius: 0.05 });
    sI.addText(m.name, { x: left + 0.15, y: top + 0.05, w: 2.7, h: 0.3, fontSize: 10, color: TEXT_PRIMARY, bold: true, fontFace: 'Calibri' });
    sI.addText(`TAM: ${m.tam}`, { x: left + 0.15, y: top + 0.4, w: 2.7, h: 0.25, fontSize: 9, color: hexToRgb(colors.cosilicoCyan), fontFace: 'Calibri' });
  });

  // Generate and download
  const now = new Date();
  const dateStr = `${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${now.getFullYear()}`;
  pptx.writeFile({ fileName: `NSF_POSE_Final_${dateStr}.pptx` });
}
