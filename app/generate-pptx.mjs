import pptxgen from 'pptxgenjs';

// Colors
const teal = '319795';
const purple = '7C3AED';
const blue = '2563EB';
const orange = 'EA580C';
const green = '16A34A';

// Team photos
const teamPhotos = {
  'Max Ghenis': '/tmp/max-ghenis.png',
  'Pavel Makarchuk': '/tmp/pavel-makarchuk.jpeg',
  'Daniel Feenberg': '/tmp/daniel-feenberg.jpg',
};

// Common slide generators
function addTeamSlide(pptx) {
  const slide = pptx.addSlide();
  slide.addText('PolicyEngine POSE Team', { x: 0.5, y: 0.3, w: '90%', fontSize: 32, bold: true, color: '1F2937' });

  const teamData = [
    { name: 'Max Ghenis', role: 'Co-Founder & CEO', bio: 'MS Economics' },
    { name: 'Pavel Makarchuk', role: 'Chief of Staff', bio: 'Led development of PolicyEngine US state-level tax-benefit model' },
    { name: 'Daniel Feenberg', role: 'Advisor', bio: 'PhD Economics, created TAXSIM' },
  ];

  teamData.forEach((member, i) => {
    const xPos = 0.8 + i * 3.0;
    // Add photo
    slide.addImage({
      path: teamPhotos[member.name],
      x: xPos + 0.5,
      y: 1.2,
      w: 1.5,
      h: 1.5,
      rounding: true
    });
    slide.addText(member.name, { x: xPos, y: 2.9, w: 2.5, fontSize: 16, bold: true, color: '1F2937', align: 'center' });
    slide.addText(member.role, { x: xPos, y: 3.3, w: 2.5, fontSize: 12, color: teal, align: 'center' });
    slide.addText(member.bio, { x: xPos, y: 3.7, w: 2.5, fontSize: 9, color: '6B7280', align: 'center', wrap: true });
  });
  return slide;
}

function addThesisSlide(pptx) {
  const slide = pptx.addSlide();
  slide.addText('4373 PolicyEngine | OSE Thesis', { x: 0.5, y: 0.2, w: '90%', fontSize: 24, bold: true, color: '1F2937' });
  const thesisLines = [
    { prefix: 'FOR', text: 'economists, policy researchers, think tanks, journalists, advocates, and developers building benefit access tools', color: teal },
    { prefix: 'WHO NEED TO', text: 'understand taxes and benefits for households or analyze policy impacts on populations', color: purple },
    { prefix: 'THE STATUS QUO', text: 'proprietary microsimulation tools', color: 'DC2626', suffix: 'FAILS DUE TO high cost, limited accessibility, and restrictions in government/secure environments, CAUSING policy decisions without rigorous distributional analysis.' },
    { prefix: 'WE WILL ESTABLISH A MANAGING ORGANIZATION FOR', text: 'open-source fiscal policy simulation', color: blue },
    { prefix: 'TO DELIVER', text: 'PolicyEngine models, web apps, and APIs', color: blue, suffix: 'WITH AGPL license and transparent governance.' },
    { prefix: 'WE WILL GROW THE COMMUNITY THROUGH', text: 'documentation and partnerships with universities and think tanks', color: green },
    { prefix: 'WE WILL ACHIEVE', text: 'democratized access to sophisticated policy analysis', color: green },
    { prefix: 'MEASURE SUCCESS BY', text: 'citations, applications built on PolicyEngine, their users, contributors, and funding', color: orange },
    { prefix: 'AND SUSTAIN THE ECOSYSTEM VIA', text: 'diversified foundation grants, government funding, and SaaS offerings', color: orange },
  ];
  thesisLines.forEach((line, i) => {
    const yPos = 0.7 + i * 0.48;
    slide.addText([
      { text: line.prefix + ' ', options: { bold: true, color: '374151' } },
      { text: line.text, options: { color: line.color } },
      ...(line.suffix ? [{ text: ' ' + line.suffix, options: { color: '374151' } }] : []),
    ], { x: 0.5, y: yPos, w: 9, fontSize: 11 });
  });
  return slide;
}

function addAssumptionsSlide(pptx) {
  const slide = pptx.addSlide();
  slide.addText('Assumptions', { x: 0.5, y: 0.3, w: '90%', fontSize: 32, bold: true, color: '1F2937' });
  const goalsAndAssumptions = [
    { goal: 'Grow adoption among policy analysts', assumption: 'Policy researchers will adopt open-source tools if they are accessible without programming expertise', color: teal },
    { goal: 'Achieve sustainable, diversified funding', assumption: 'Funders value transparency and reproducibility enough to fund open-source over proprietary alternatives', color: purple },
    { goal: 'Build active contributor community', assumption: 'Developers will contribute for policy impact without requiring competitive compensation', color: blue },
  ];
  goalsAndAssumptions.forEach((item, i) => {
    const yPos = 1.0 + i * 1.3;
    slide.addShape('rect', { x: 0.5, y: yPos, w: 9, h: 1.1, fill: { color: item.color, transparency: 90 }, line: { color: item.color } });
    slide.addText([{ text: 'Goal: ', options: { color: '6B7280' } }, { text: item.goal, options: { bold: true, color: item.color } }], { x: 0.7, y: yPos + 0.15, w: 8.5, fontSize: 12 });
    slide.addText([{ text: 'Assumption: ', options: { color: '6B7280' } }, { text: item.assumption, options: { color: item.color } }], { x: 0.7, y: yPos + 0.55, w: 8.5, fontSize: 10 });
  });
  return slide;
}

function addInterviewLogSlide(pptx) {
  const slide = pptx.addSlide();
  slide.addText('Interview log', { x: 0.5, y: 0.2, w: '90%', fontSize: 28, bold: true, color: '1F2937' });

  // Add screenshot of the POSE Tracker app (preserve aspect ratio 2208x1948)
  slide.addImage({
    path: '/tmp/interview-log.png',
    x: 2.5,
    y: 0.55,
    w: 5.0,
    h: 4.4,
  });

  return slide;
}

function addGoalsCharterSlide(pptx) {
  const slide = pptx.addSlide();
  slide.addText('Team goals and charter', { x: 0.5, y: 0.3, w: '90%', fontSize: 32, bold: true, color: '1F2937' });

  slide.addText('Goals', { x: 0.5, y: 1.0, w: 4, fontSize: 16, bold: true, color: '1F2937' });
  const goals = [
    'Complete 100 ecosystem discovery interviews across all 6 stakeholder segments',
    'Identify 3+ sustainable funding models beyond traditional grants',
    'Establish partnerships with 5+ policy think tanks and media organizations',
    'Develop community governance structure with clear decision rights',
  ];
  goals.forEach((goal, i) => {
    slide.addShape('rect', { x: 0.5, y: 1.4 + i * 0.38, w: 4.3, h: 0.33, fill: { color: green, transparency: 90 }, line: { color: green } });
    slide.addText(`${i + 1}. ${goal}`, { x: 0.6, y: 1.45 + i * 0.38, w: 4.1, fontSize: 8, color: green });
  });

  slide.addText('Working agreements', { x: 5.2, y: 1.0, w: 4, fontSize: 16, bold: true, color: '1F2937' });
  const agreements = [
    'Weekly team sync (Mondays)',
    '24-hour response time on Slack',
    'Share interview notes within 24 hours',
    'Consensus on strategic decisions, CEO decides operational matters',
  ];
  agreements.forEach((agreement, i) => {
    slide.addShape('rect', { x: 5.2, y: 1.4 + i * 0.38, w: 4.3, h: 0.33, fill: { color: teal, transparency: 90 }, line: { color: teal } });
    slide.addText(`• ${agreement}`, { x: 5.3, y: 1.45 + i * 0.38, w: 4.1, fontSize: 8, color: teal });
  });
  return slide;
}

// Generate PPTX 1: Team, Thesis, Assumptions, Interview Log
const pptx1 = new pptxgen();
pptx1.layout = 'LAYOUT_16x9';
pptx1.title = 'PolicyEngine POSE - Weekly Session';
pptx1.author = 'PolicyEngine';

addTeamSlide(pptx1);
addThesisSlide(pptx1);
addAssumptionsSlide(pptx1);
addInterviewLogSlide(pptx1);

await pptx1.writeFile({ fileName: '/Users/maxghenis/Downloads/4373_PolicyEngine_01202026.pptx' });
console.log('Created: 4373_PolicyEngine_01202026.pptx');

// Generate PPTX 2: Team, Thesis, Goals & Charter
const pptx2 = new pptxgen();
pptx2.layout = 'LAYOUT_16x9';
pptx2.title = 'PolicyEngine POSE - Kickoff';
pptx2.author = 'PolicyEngine';

addTeamSlide(pptx2);
addThesisSlide(pptx2);
addGoalsCharterSlide(pptx2);

await pptx2.writeFile({ fileName: '/Users/maxghenis/Downloads/4373_PolicyEngine_01202026_OfficeHours.pptx' });
console.log('Created: 4373_PolicyEngine_01202026_OfficeHours.pptx');
