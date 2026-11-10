+++
title = "RED Delegated Act vs Cyber Resilience Act"
author = ["Piotr Polak"]
date = 2025-12-17
lastmod = 2026-11-10
categories = ["Regulations", "Cybersecurity"]
draft = false
description = "RED Delegated Act vs Cyber Resilience Act: differences in scope, protected assets, process requirements, and product assessment, and what the transition means for manufacturers of connected products."
+++

The Radio Equipment Directive [cybersecurity Delegated Act](<https://eur-lex.europa.eu/eli/reg_del/2022/30/oj/eng>) (RED DA) and the [Cyber Resilience Act](<https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>) (CRA) both address digital product security, but differ in scope and focus.

The RED DA activates three essential requirements of the Radio Equipment Directive for specified categories of radio equipment:

-   **Article 3(3)(d): network protection** for radio equipment that communicates over the internet, directly or through other equipment.
-   **Article 3(3)(e): personal data and privacy** for equipment capable of processing the relevant data. This includes internet-connected equipment, radio equipment intended exclusively for childcare, radio toys, and wearables; the latter three categories do not need an internet connection to be in scope.
-   **Article 3(3)(f): protection from fraud** for internet-connected radio equipment that enables transfers of money, monetary value, or virtual currency.

The RED DA also sets out exclusions for equipment covered by certain sector-specific legislation.

The CRA has a broader product scope: hardware and software made available on the market in the course of a commercial activity, where the intended purpose or reasonably foreseeable use includes a direct or indirect data connection to a device or network. An internet connection is not required, but a programmable component alone does not automatically put a product in scope. Article 2 sets out exclusions.

The CRA also includes remote data processing solutions developed by the manufacturer, or under its responsibility, whose absence would prevent the product from performing one of its functions. Its focus is both product security and the processes needed to manage cybersecurity risks and vulnerabilities throughout the support period.


## Assets {#assets}

The EN 18031 series supporting the RED DA groups assets into categories reflecting the requirements activated by Article 3(3)(d), (e), and (f):

-   Security assets
-   Network assets
-   Privacy assets
-   Financial assets

The CRA takes a broader risk-based approach. Article 13 requires a documented cybersecurity risk assessment that considers the product's intended purpose, reasonably foreseeable use, conditions of use, and assets to be protected. That assessment determines how the applicable essential cybersecurity requirements are implemented and must be updated as appropriate during the support period.


## Processes {#processes}

The RED DA activates product requirements, but it operates within the Radio Equipment Directive's existing manufacturer obligations. These already include technical documentation, conformity assessment, procedures to keep series production compliant, and corrective action for non-compliant equipment. It would therefore be misleading to say that RED compliance has no process requirements.

The CRA adds explicit cybersecurity risk-management and vulnerability-handling obligations, including coordinated vulnerability disclosure, security updates, and reporting. Vulnerability handling continues throughout a defined support period reflecting expected use. Under Article 13(8), that period must generally be at least five years; if the product is expected to be used for less than five years, it must cover that expected use time.


## Product assessment and compliance {#product-assessment-and-compliance}

Under the RED, manufacturers can use internal production control for the relevant Article 3(3) requirements when they fully apply applicable harmonized standards cited in the Official Journal. The [EN 18031 series was cited with restrictions](<https://eur-lex.europa.eu/eli/dec_impl/2025/138/oj/eng>), so using the standards does not automatically provide presumption of conformity in every case. Where the conditions for internal production control are not met, Article 17 requires EU-type examination followed by conformity to type, or full quality assurance.

The CRA assessment route depends on the product's classification and the conditions in Article 32. Some routes require a [notified body](<https://single-market-economy.ec.europa.eu/single-market/goods/building-blocks/notified-bodies_en>), which is a designated conformity assessment body—not simply any accredited test laboratory. See the [overview's conformity-assessment section]({{< relref "post/cra_overview" >}}#conformity-assessment) for the available routes and exceptions.

Existing RED DA assessments can provide useful evidence, but they do not establish CRA compliance on their own. Manufacturers need to address the applicable CRA product requirements, process obligations, and conformity-assessment procedure.


## The timeline {#the-timeline}

The RED DA cybersecurity requirements have applied since **1 August 2025**. [Delegated Regulation (EU) 2026/339](<https://eur-lex.europa.eu/eli/reg_del/2026/339/oj/eng>) repeals the RED DA with effect from **11 December 2027**, when the main CRA requirements apply. The Radio Equipment Directive itself is not repealed.

The repeal preserves market surveillance of the RED DA requirements for equipment placed on the market between 1 August 2025 and 10 December 2027. CRA Article 14 reporting obligations have already applied since **11 September 2026**, including to earlier products in scope. Other CRA requirements generally apply to products placed on the market before 11 December 2027 only if substantially modified from that date.


## Relevant links {#relevant-links}

-   [Cyber Resilience Act overview]({{< relref "post/cra_overview" >}})
-   [Cyber Resilience Act legal text](<https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>)
-   [RED DA legal text](<https://eur-lex.europa.eu/eli/reg_del/2022/30/oj/eng>)
-   [Radio Equipment Directive](<https://eur-lex.europa.eu/eli/dir/2014/53/oj/eng>) (Articles 10 and 17)
-   [RED DA repeal regulation](<https://eur-lex.europa.eu/eli/reg_del/2026/339/oj/eng>)
