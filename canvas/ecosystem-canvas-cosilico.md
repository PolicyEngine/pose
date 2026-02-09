# Cosilico | Open source ecosystem canvas

## Traction

| Metric | Value |
|--------|-------|
| Simulations run | 1M+ |
| State tax systems | 50+ |
| Benefit programs | 100+ |
| OSS contributors | 50+ |
| Lighthouse customers | UK Government, US Congress, think tanks |

## Core artifacts

### Cosilico Rules (deterministic calculations)
| Product | Type | Description |
|---------|------|-------------|
| Rules API | API | Tax/benefit calculations derived directly from statute |
| Verifier API | API | Binary reward signal for AI reinforcement learning from verifiable rewards (RLVR) |
| Eligibility engines | System | Benefits administration calculation layer for SNAP, TANF, Medicaid, etc. |

### Cosilico Simulate (statistical modeling)
| Product | Type | Description |
|---------|------|-------------|
| Microsim API | API | Population-scale policy modeling (microsimulation) |
| Imputation | Service | Predict missing household attributes from partial data |
| Microplex | Dataset | Synthetic population for simulation, daily updates, 200+ attributes |

---

## Segments

| Segment | Title/Role | Job to be done | Value proposition | Market size | Incumbents | Product line |
|---------|------------|----------------|-------------------|-------------|------------|--------------|
| State revenue departments | IT Director, Tax Administrator | Implement tax rules accurately, track law changes | Auditable, AI-maintained rules vs proprietary vendors | $1B+ state IT contracts | Chainbridge/PolicyLinks, Corticon | Rules |
| Benefits agencies | Program Director, Systems Manager | Calculate eligibility accurately, reduce errors | Compliant calculations, rapid rule updates | $500M+ eligibility contracts | Deloitte, Accenture | Rules |
| Tax software vendors | Product Manager, Engineer | Calculate accurate taxes, deploy law changes fast | Certified-correct calculations, reduced liability | $90B+ tax software | Internal engines, Thomson Reuters | Rules |
| Financial planners | CFP, Wealth Manager, Robo-advisor PM | Provide tax-aware financial advice | Precise federal+state tax calcs most tools lack | $5B+ wealth tech | eMoney, MoneyGuidePro, RightCapital | Rules |
| Banks / lenders | CDO, Underwriting Lead | Predict income, assess financial profiles | ML-enhanced imputation from partial data (Microplex) | $100B+ consumer lending | Experian, Equifax | Simulate |
| Insurance / actuaries | Actuary, Compliance Officer | Calculate ACA subsidies, model tax impacts | Statute-compliant ACA subsidy calculations | $50B+ health insurance admin | Internal models, consulting firms | Rules |
| AI labs | Research Scientist, Product Lead | Build policy-aware AI that doesn't hallucinate | Verifier API for RLVR signals, policy-grounded AI | Strategic / priceless | None (novel capability) | Rules |
| AI agent builders | Engineer, Product Manager | Give agents reliable tax/benefits tools | Function calling with legal citations | $10B+ enterprise AI | Internal tools, hallucination | Rules |
| Marketing / data platforms | Data Science Lead, Audience PM | Enrich customer profiles, build audience segments | Microplex provides 200+ attributes from minimal input | $2.4B+ data enrichment | Experian, LiveRamp, Acxiom | Simulate |
| Benefit platform builders | PM, Engineer | Embed eligibility calculations in products | No need for own rules engine, auto-updates with policy | Varied | In-house rules engines | Rules |
| Economic impact analysts | Economist, Impact Analyst | Quantify fiscal impact of events (factories, incentives) | Household-level fiscal impacts from statutes, not multipliers | $50-100M+ | IMPLAN ($100M+ acq), REMI, Lightcast ($350M+) | Simulate |

---

## Value propositions by segment

### For government agencies (state revenue, benefits)
- **Auditability**: Open-source rules tied to statute citations, auditable by design
- **Speed of updates**: AI-assisted rule updates when legislation changes vs months-long vendor cycles
- **Cost reduction**: Open-source core vs seven-figure vendor contracts
- **Compliance**: Calculations tested against statute text with temporal versioning

### For commercial / financial services (tax software, planners, banks, insurance)
- **Accuracy**: Certified-correct federal + state calculations with full audit trail
- **Liability reduction**: Statute-linked rules reduce exposure to calculation errors
- **API simplicity**: $0.02/household pay-per-call vs building and maintaining internal engines
- **Data enrichment**: Microplex imputation predicts 200+ attributes from minimal input (banks, marketing)

### For AI ecosystem (labs, agent builders)
- **Verifiable ground truth**: Binary reward signals for RLVR training on policy questions
- **Function calling**: APIs with legal citations — no hallucination on tax/benefit questions
- **Policy grounding**: Deterministic statute-based answers AI can reference with confidence

### For data / platform builders (marketing platforms, benefit screeners)
- **Microplex enrichment**: Synthetic population data with 200+ attributes, daily updates
- **Plug-and-play eligibility**: Don't build a rules engine — call the API
- **Auto-updates**: When laws change, API updates automatically — no code changes needed

---

## Relationship flows

### Value flows TO Cosilico
| From | Flow type | Description |
|------|-----------|-------------|
| State revenue departments | Revenue | Paid contracts for rules infrastructure |
| Benefits agencies | Revenue | Paid contracts for eligibility calculation systems |
| Tax software vendors | Revenue | API fees at $0.02/household |
| Financial planners | Revenue | API fees for tax calculations |
| Banks / lenders | Revenue | API fees for Microplex imputation |
| Insurance / actuaries | Revenue | API fees for ACA subsidy calculations |
| AI labs | Revenue + compute | Partnership deals, compute-for-API trades |
| AI agent builders | Revenue | API fees for function calling |
| Marketing / data platforms | Revenue | API fees for data enrichment |
| Benefit platform builders | Revenue + feedback | API fees, product feedback and use cases |

### Value flows FROM Cosilico
| To | Flow type | Description |
|----|-----------|-------------|
| State revenue departments | Technical | Auditable, temporally-versioned rules with statute links |
| Benefits agencies | Technical | Compliant eligibility calculations, rapid rule updates |
| Tax software vendors | Technical | Rules API with certified calculations, audit trail |
| Financial planners | Technical | Precise federal + state tax calculations |
| Banks / lenders | Data | Microplex imputation, county-calibrated attributes |
| Insurance / actuaries | Technical | ACA rules encoded with legal citations |
| AI labs | Technical | Verifier API for RLVR training signals |
| AI agent builders | Technical | Calculate/rules APIs with legal citations |
| Marketing / data platforms | Data | Microplex 200+ attribute enrichment |
| Benefit platform builders | Technical | Eligibility API, auto-updated with policy changes |

---

## Key assumptions to test

1. **Government agencies will buy open-source rules infrastructure** — Will procurement and regulatory overhead prevent adoption? Do IT directors trust open-source for mission-critical tax calculations? Or will incumbents (Chainbridge, Deloitte) win on inertia?

2. **Tax software vendors prefer API at $0.02/household vs building internally** — At the scale of TurboTax (50M+ returns), is an external API dependency acceptable? Is the price point right? Or are internal engines cheaper to maintain at scale?

3. **Financial services will pay for precise tax calculation APIs** — Do wealth managers and planners actually need federal+state precision, or are approximations "good enough" for planning tools?

4. **AI labs will pay for verifiable policy ground truth signals** — Will labs invest in policy-grounded AI, or is this too niche? Are compute partnerships a viable currency?

5. **Microplex synthetic data is accurate enough for commercial use** — Is synthetic data precise enough for lending decisions, insurance pricing, and marketing segmentation? How will regulators view it?

---

## Competitive landscape

| Capability | Column Tax | Symmetry | Benefit Kitchen | Avalara | IMPLAN | Cosilico |
|-----------|-----------|----------|-----------------|---------|--------|----------|
| Income tax calculation | Yes | No | No | No | No | Yes |
| Payroll tax (FICA, etc.) | No | Yes | No | No | No | Yes |
| Benefits eligibility | No | No | Yes (7 states) | No | No | Yes |
| Attribute prediction | No | No | No | No | No | Yes |
| Microsimulation | No | No | No | No | Aggregate only | Yes |
| Open source | No | No | No | No | No | Yes |

**Key gap**: No one combines income tax + benefits + prediction + simulation in a single API.

**GPT-4 tax accuracy**: 67% on true/false (SARA benchmark) — deterministic tools will always beat LLMs on statutory precision.

### Competitive pricing

| Product | Competitor | Their pricing | Cosilico | Advantage |
|---------|-----------|--------------|----------|-----------|
| Tax/benefit calcs | TaxJar | ~$0.10/calc | $0.02/household | 5x cheaper, includes benefits |
| Record imputation | Experian | $0.50-2/record | $0.10/1K records | 500-1000x cheaper at scale |
| Microsimulation | None commercial | N/A | $0.50/1K records | First commercial API |
| Economic impact | IMPLAN | $10K-50K+/yr | $0.50/1K records | Household-level, no sales call |
| Data downloads | Commercial | $0.10+/record | Free (R2) | Open source, daily-updated Microplex |

## Business model

**Entity**: Cosilico, Public Benefit Corp

**Revenue model**:
- Open source: Free (Apache 2.0) — run it yourself
- API usage: $0.001-0.01/call — hosted, managed, <100ms latency
- Data enrichment: $0.10-1.00/record — predict household attributes at scale
- Enterprise: $100K-1M+/year — 99.9% SLA, dedicated support, custom jurisdictions

**Comparable outcomes**: MongoDB $1.7B ARR, Elastic $1.3B ARR, GitLab $580M ARR, Avalara $8.4B acq, Plaid $6.1B, Gusto $9.3B, Rippling $13.5B, IMPLAN $100M+ (12-15x rev multiple)

**Two product lines**:
1. **Cosilico Rules** — deterministic calculations from statute. Serves 8 of 11 segments.
2. **Cosilico Simulate** — statistical modeling and synthetic data. Serves 4 of 11 segments (banks, marketing, benefit platforms, economic impact).

### Revenue path

| Year | ARR | Customers | Milestone |
|------|-----|-----------|-----------|
| Y1 | $500K | 5-10 | Product-market fit, first enterprise deal |
| Y2 | $3M | 50+ | Self-serve launch, 2-3 enterprise deals |
| Y3 | $10M | 200+ | Enterprise sales team, intl expansion |
| Y4 | $30M | 500+ | Platform status, AI lab partnerships |
| Y5 | $75M | 1000+ | Category leader |

---

## Market sizing

| Market | TAM | Cosilico segment |
|--------|-----|------------------|
| State IT contracts | $1B+ | State revenue departments |
| Eligibility system contracts | $500M+ | Benefits agencies |
| Tax software | $90B+ | Tax software vendors |
| Wealth tech | $5B+ | Financial planners |
| Consumer lending | $100B+ | Banks / lenders |
| Health insurance admin | $50B+ | Insurance / actuaries |
| Enterprise AI | $10B+ | AI agent builders |
| Data enrichment | $2.4B+ | Marketing / data platforms |

Total addressable markets exceed $250B, though Cosilico targets a small API-revenue slice of each.

---

## Government as lighthouse customer

Government adoption creates downstream enterprise value:
- **Credibility signal**: "If HM Treasury trusts this for budget scoring, it's accurate enough for our risk models."
- **Regulatory alignment**: Banks want to model what government models. Same methodology = predictable regulatory outcomes.
- **Policy anticipation**: Run the same scenarios government runs. Know how proposed legislation affects your portfolio before it passes.
- **Compliance defence**: "We used the same methodology as [agency]" is a strong regulatory position.

---

## Governance model

**Current**: Public Benefit Corp (PBC), AGPL-licensed core

**Future**:
- Technical steering committee with government and commercial advisory input
- Open-source contributor guidelines and code review process
- Formal partnership agreements with enterprise customers
- Regulatory compliance advisory board (for government and insurance segments)

---

## Sustainability

**Revenue sources**:
- Government contracts (state revenue, benefits agencies) — high-value, long sales cycle
- Commercial API (tax software, financial planners, insurance) — volume-based, shorter cycle
- AI partnerships (labs, agent builders) — compute + cash, strategic relationships
- Data enrichment API (banks, marketing) — high-volume, automated

**Path to sustainability**:
- Land first government pilot to prove procurement feasibility
- Build API volume through tax software and fintech integrations
- Leverage AI lab partnerships for compute subsidy and credibility
- Scale Microplex data product for data enrichment market
