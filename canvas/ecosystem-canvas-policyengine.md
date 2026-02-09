# PolicyEngine | Open source ecosystem canvas

PolicyEngine is a 501(c)(3) / UK Charity focused on research and analysis. Mission: like Urban/Mathematica but better — tech-forward, open source, model-oriented. Uses best-in-class infrastructure (Cosilico) and focuses entirely on research impact.

Note: PolicyEngine USES Cosilico infrastructure (Rules API, Microsim API) but its core mission is research and analysis, not infrastructure.

## Community members

| Segment | Title/Role | Job in community | Value proposition | Steady state # | Interviews |
|---------|------------|------------------|-------------------|----------------|------------|
| PolicyEngine analyst/dev | Analyst, Engineer | Build core models, demonstrate usage through research | It's their job! | 10 | 10 |
| Academic researcher | Professor, PhD student | Apply tools to answer empirical questions, improve/fund model | Publications, grants, teach with real tools | 200 | 10 |
| Government economist | Budget Analyst, Policy Economist | Validate against official estimates, inform scoring | Transparent methodology they can defend, faster analysis | 100 | 10 |
| Think tank analyst | Policy Analyst, Fellow, Research Director | Produce policy reports, model reform proposals | Credible methodology, faster turnaround, differentiated research | 200 | 15 |
| Open source contributor | Software Engineer, Data Scientist | Contribute code, fix bugs, add parameters | Portfolio, policy impact without policy career, learning | 50 | 5 |
| Data journalist | Reporter, Data Editor | Fact-check claims, build interactives | Quick credible analysis, embeddable tools | 50 | 5 |
| Policy advocate | Executive Director, Comms Director | Shape narrative, amplify PE analysis, cite in media | Credible backing for advocacy, reach | 200 | 5 |

**Community member interview target: 60**

## Other stakeholders

| Segment | Title/Role | Job in ecosystem | Value proposition | Steady state # | Interviews |
|---------|------------|------------------|-------------------|----------------|------------|
| Policymaker / Staffer | Legislative Director, Committee Staff | Inform policy decisions, vet proposals | Quick what-if analysis, constituent answers, evidence for positions | 500 | 5 |
| Policy foundation (funder) | Program Officer, Philanthropist | Fund evidence-based policy infrastructure | Higher-quality policy research output | 50 | 10 |
| Research client | Policy Analyst, Research Director | Get custom analysis and tools built | Expert modeling without building internal capacity | 30 | 5 |
| Government grant | Program Manager (NSF POSE) | Fund open-source research infrastructure | Open-source infrastructure as public good | 10 | 5 |
| Data/tool partner | CTO, Product Lead | Integrate, share data, co-develop | Extend capabilities, aligned mission | 20 | 5 |
| Non-user (potential) | Analyst using alternatives | Not using yet — understand barriers | Understanding why not (cost? trust? awareness?) | 500 | 10 |
| Competitor | CEO/CTO of rival tools | Compete for same users/funding | Ecosystem mapping, potential collaboration | 10 | 3 |
| Misuser | Bad-faith analyst | Cherry-pick or misrepresent results | Risk to monitor — understand how to prevent | Few | 0 |

**Stakeholder interview target: 43**

**Total interview target: 100+**

---

## Core artifacts

### Models
- **policyengine-us**: US federal + state tax/benefit microsimulation
- **policyengine-uk**: UK tax-benefit microsimulation
- **policyengine-core**: Core simulation engine (OpenFisca fork)

### Data
- **Enhanced CPS microdata**: US simulations
- **Enhanced FRS microdata**: UK simulations

### Applications
- **policyengine.org**: Interactive policy simulation web app
- **Custom interactives / calculators**: Policy-specific dashboards
- **Congressional district dashboards**: Localized policy impacts

### API and tooling
- **REST API / policyengine.py**: Programmatic access to calculations

### Research output
- **Policy analysis and reports**: Quantitative storytelling for policymakers
- **Research partnerships**: NBER, Atlanta Fed, Brookings, NIESR

---

## Value propositions by segment

### For users (policy analysts, researchers, think tanks)
- **Transparency**: Open-source means you can audit every calculation, cite methodology in publications
- **Speed**: Run what-if scenarios in seconds vs. weeks waiting for proprietary model access
- **Cost**: Free to use vs. $10K+ annual licenses for comparable tools
- **Integration**: API access lets you embed in your own workflows and tools
- **Credibility**: Validated against official sources (IRS, SSA, CBO)

### For contributors (developers)
- **Impact**: Your code directly affects policy analysis used by Congress, think tanks, journalists
- **Portfolio**: Demonstrate policy domain expertise alongside technical skills
- **Community**: Work with policy experts to understand real-world requirements
- **Learning**: Understand how tax/benefit systems actually work

### For funders (foundations, government grants)
- **Leverage**: Fund infrastructure that multiplies impact across many organizations
- **Transparency**: See exactly what your money built (open-source, public roadmap)
- **Ecosystem building**: Create positive-sum dynamics vs. zero-sum competition for proprietary tools

### For research clients
- **Expert modeling**: Get custom analysis without building internal capacity
- **Open methodology**: Results defensible because methodology is auditable
- **Speed**: Faster turnaround than traditional consulting

### For policymakers (influence)
- **Quick what-if analysis**: Test policy proposals in seconds
- **Constituent answers**: Show how policy changes affect specific districts
- **Evidence-based**: Defensible methodology from a nonpartisan source

### For data journalists
- **Fact-checking**: Verify policy claims against microsimulation
- **Embeddable tools**: Custom interactives for stories
- **Speed**: Analysis on deadline

---

## Relationship flows

### Value flows TO PolicyEngine
| From | Flow type | Description |
|------|-----------|-------------|
| Policy foundations | Funding | Grants to support research and development |
| Research clients | Funding | Consulting fees for custom analysis |
| Government grants | Funding | NSF POSE and other infrastructure funding |
| OSS contributors | Code/data | Bug fixes, parameter updates, new features |
| Academic researchers | Ideas/validation | Research use cases, bug reports, methodology feedback |
| Data/tool partners | Data/integration | Data sharing, joint development |
| Government economists | Validation | Comparisons against official estimates |
| Think tank analysts | Ideas/feedback | Use cases, feature requests, methodology suggestions |
| Policy advocates | Amplification | Media coverage, citations, sharing |

### Value flows FROM PolicyEngine
| To | Flow type | Description |
|----|-----------|-------------|
| Think tank analysts | Analysis | Policy reports, reform modeling, credible methodology |
| Academic researchers | Analysis | Publications data, teaching materials, research tools |
| Government economists | Analysis | Scoring validation, transparent methodology |
| Data journalists | Analysis | Fact-checking, embeddable interactives |
| Policy advocates | Insights | Evidence for advocacy campaigns, credible backing |
| Policymakers | Insights | Quick what-if analysis, constituent answers, district dashboards |
| Research clients | Custom work | Tailored analysis and tools |

---

## Key assumptions to test

1. **Think tanks want transparent open-source methodology** — Do they actually value open-source, or do they prefer proprietary models with "brand name" credibility?

2. **Academic adoption requires validation against official sources** — What level of validation against CBO/JCT/IRS is needed before researchers will cite PolicyEngine?

3. **Government economists will engage with open-source tools** — Are government budget offices willing/allowed to use OSS?

4. **Contributors motivated by policy impact will contribute without pay** — Are there engineers motivated enough by policy impact to contribute without compensation?

5. **Research clients will pay for custom analysis using PE tools** — Will they prefer PE over building internal capacity or using established consultancies?

---

## Governance model

**Current**: Founder-led nonprofit (501(c)(3) / UK Charity), all code AGPL licensed

**Future**:
- Technical steering committee with community input on roadmap
- Contributor guidelines and code review process
- Advisory board including academics, policy experts, funder representatives
- Research partnership agreements with major institutions (NBER, Fed banks, Brookings)

---

## Sustainability

**Revenue sources**:
- Foundation grants (Arnold Ventures, Pritzker, etc.)
- Government grants (NSF POSE, other programs)
- Research consulting (custom analysis for think tanks, advocacy orgs)

**Key dependencies**:
- Cosilico infrastructure (Rules API, Microsim API) — PE uses but does not build
- Enhanced microdata quality (CPS, FRS)
- Research partnership pipeline

**Path to sustainability**:
- Grow research consulting revenue as primary earned-income stream
- Build contributor base to reduce paid engineering costs
- Establish recurring funder relationships vs. one-time grants
- Increase citations and visibility to attract larger foundation support
