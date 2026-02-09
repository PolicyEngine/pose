# Rules Foundation | Open source ecosystem canvas

501(c)(3) — "Encode the law"

Mission: Neutral, multi-stakeholder foundation that maintains the authoritative encoding of law as code. Like OpenStreetMap for law.

## Core artifacts

| Artifact | Type | Description |
|----------|------|-------------|
| Source document archive | Legal documents | Statutes, regulations, and guidance documents encoded in Akoma Ntoso XML. The canonical source layer that .rac files compile from. |
| .rac DSL | Domain-specific language | Self-contained encoding format for expressing legal rules as executable code. |
| Reference compiler | Toolchain | Open-source compiler that transforms .rac files into executable rule engines. Serves as the specification implementation. |
| AutoRAC validation harness | CI pipeline | 3-tier validation: CI tests (unit + integration), Oracle checks (authoritative scenarios from agencies), LLM reviewers (AI-assisted statute interpretation review). |
| Ground truth test data | Benchmark dataset | Open benchmarks for evaluating AI policy reasoning. Curated scenario-outcome pairs with statute citations, used for RLVR training and model evaluation. |

---

## Community members

| Segment | Title/Role | Job in community | Value proposition | Steady state # | Interviews |
|---------|------------|------------------|-------------------|----------------|------------|
| Encoding community (OSS) | Lawyer, Policy Analyst, Software Engineer | Review, validate, and improve rule encodings. Interpret statutes into .rac format. | Public good contribution, legal tech skills, community recognition | 100 | 10 |
| Academic researcher (law/policy) | Law Professor, Legal Informatics Researcher | Advance computational law, publish research on legal formalization, validate methodologies | Structured legal data, computational law research platform, citation-worthy datasets | 80 | 8 |
| Downstream consumer | CTO, Product Lead, Engineering Manager | Consume authoritative rule encodings for production use (Cosilico, PolicyEngine, others) | Authoritative, tested rule encodings with citations — no independent statute encoding needed | 30 | 5 |

**Community member interview target: 23**

## Other stakeholders

| Segment | Title/Role | Job in ecosystem | Value proposition | Steady state # | Interviews |
|---------|------------|------------------|-------------------|----------------|------------|
| Government standards body | Tax Law Specialist, Regulatory Counsel | Validate encoded rules against statutes and regulatory guidance | Transparent, auditable encodings of laws they administer. Reduces ambiguity across vendors. | 50 | 8 |
| AI lab | Research Scientist, Product Lead | Build policy-aware AI that doesn't hallucinate on legal/tax questions | Ground truth for RLVR training, verifiable policy reasoning benchmarks, evaluation datasets | 20 | 6 |
| Government grants / Foundations | Program Manager, Foundation Director | Fund public legal infrastructure, support open-source civic tech | Open-source legal infrastructure, measurable impact via encoding coverage and adoption | 15 | 5 |

**Stakeholder interview target: 19**

**Total interview target: 42**

---

## Value propositions by segment

### For government standards bodies
- **Transparency**: Open-source encodings they can audit line-by-line against the statute
- **Reduce ambiguity**: Single authoritative encoding reduces inconsistent implementations across vendors
- **Feedback loop**: See how their guidance is operationalized, catch misinterpretations early
- **No vendor lock-in**: Encodings are open, not owned by any private company

### For AI labs
- **Ground truth**: Verifiable scenario-outcome pairs grounded in statute, not LLM opinion
- **RLVR signals**: Train models to reason about policy using citation-backed answers
- **Benchmarks**: Evaluate policy reasoning accuracy against open, curated test sets
- **Structured training data**: Machine-readable legal rules with provenance and temporal versioning

### For the encoding community (contributors)
- **Public good**: Contribute to open-source legal infrastructure that makes law more accessible
- **Skills**: Develop expertise in legal informatics and rules-as-code methodologies
- **Portfolio**: Demonstrate legal-technical skills in a growing field
- **Community**: Join a multi-stakeholder network of lawyers, engineers, and policy analysts

### For academic researchers
- **Datasets**: Structured, machine-readable legal rules for computational law research
- **Platform**: Build on a community-maintained encoding rather than one-off academic projects
- **Citations**: Reference and build on authoritative open-source legal encodings
- **Collaboration**: Connect with practitioners implementing rules-as-code at scale

### For downstream consumers (Cosilico, PolicyEngine, etc.)
- **Authoritative source**: Encodings validated by government experts and community review
- **Test suites**: Every rule comes with tested scenarios and citation chains
- **Updates**: Track legislative changes as they're encoded, with temporal versioning
- **Focus**: Build products on top of encodings rather than independently encoding statutes

### For funders (NSF, foundations)
- **Public good**: Open-source legal infrastructure accessible to all
- **Measurable impact**: Track encoding coverage (% of statute encoded), downstream adoption
- **Leverage**: One encoding serves many downstream consumers and use cases
- **Sustainability**: Multi-stakeholder model with diverse funding and contributor base

---

## Relationship flows

### Value flows TO Rules Foundation
| From | Flow type | Description |
|------|-----------|-------------|
| Government standards bodies | Ideas/feedback | Official statute interpretations, regulatory guidance, scenario validation |
| AI labs | Technical/code | Compute for encoding, AutoRAC improvements, research collaboration |
| Encoding community | Technical/code | Encoding review, statute interpretation, validation, bug reports |
| Academic researchers | Ideas/feedback | Academic validation, citations, methodology feedback, research |
| Downstream consumers | Ideas/feedback | Usage feedback, bug reports, compiler improvements |
| Grants / Foundations | Funding | Grant funding for development and operations |

### Value flows FROM Rules Foundation
| To | Flow type | Description |
|----|-----------|-------------|
| Government standards bodies | Data/analysis | Transparent encodings, audit trails, implementation feedback |
| AI labs | Data/analysis | Ground truth data, RLVR signals, policy reasoning benchmarks |
| Encoding community | Influence | Public good impact, community recognition, legal tech skills |
| Academic researchers | Data/analysis | Structured legal data, research platform, citation-worthy datasets |
| Downstream consumers | Data/analysis | Authoritative tested rule encodings, test suites, encoding updates |
| Grants / Foundations | Data/analysis | Impact reports, encoding coverage metrics |

---

## Key assumptions to test

1. **Government agencies will contribute statute interpretations to an open platform** — Will IRS/SSA/CMS staff validate encodings, or are they too risk-averse or legally constrained to participate?

2. **AI labs will invest in policy ground truth (vs. building internally)** — Do labs see enough value in externally-maintained legal benchmarks, or will they prefer proprietary training data?

3. **Multi-stakeholder governance can work across partisan lines** — Can a neutral foundation maintain authority when statutes have politically contested interpretations?

4. **Encoding community will sustain without paid contributors** — Is legal encoding too specialized and tedious for volunteer contributions to scale, or will the "OpenStreetMap for law" model attract sufficient participation?

---

## Governance model

**Proposed**: Multi-stakeholder 501(c)(3) foundation

**Governance structure**:
- Technical steering committee with representation from each segment
- Encoding standards board (lawyers + engineers) for .rac specification decisions
- Government advisory panel for agency liaison and interpretation validation
- Open contribution process with tiered review (similar to Wikipedia/OpenStreetMap)

**Key governance principles**:
- Partisan neutrality: encode the law as written, not as preferred
- Citation requirements: every encoding must link to specific statutory language
- Multi-reviewer validation: no single contributor can unilaterally modify encodings
- Temporal versioning: historical encodings preserved as law changes over time

---

## Sustainability

**Annual costs (estimated)**: ~$300K (engineering, validation infrastructure, community management)

**Funding sources**:
- Government grants (NSF POSE, other programs) — 40%
- Foundation grants (Sloan, Knight, Ford) — 30%
- In-kind contributions from AI labs (compute, engineering time) — 20%
- Downstream consumer contributions — 10%

**Path to sustainability**:
- Build encoding coverage to demonstrate value (start with US federal tax code)
- Secure multi-year government grants based on demonstrated impact
- Establish AI lab partnerships for compute and engineering support
- Grow encoding community to reduce reliance on paid contributors
- Downstream consumers (Cosilico, PolicyEngine) contribute back as their products generate revenue
