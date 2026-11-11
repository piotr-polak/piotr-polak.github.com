+++
title = "Cyber Resilience Act: an Overview"
author = ["Piotr Polak"]
date = 2025-09-07
lastmod = 2026-11-11
categories = ["Regulations", "Cybersecurity"]
draft = false
description = "What the EU Cyber Resilience Act requires of products with digital elements: scope, product classes, conformity assessment, and manufacturer obligations, explained from a manufacturer's perspective."
+++

The [Cyber Resilience Act](<https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>) (CRA) sets EU cybersecurity requirements for products with digital elements. Manufacturers must address product security before placing products on the market and handle vulnerabilities throughout a defined support period.


## The timeline {#the-timeline}

-   **June 11, 2026**: the provisions on notification of conformity assessment bodies began to apply.
-   **September 11, 2026**: manufacturer reporting obligations began to apply, including to products already placed on the EU market.
-   **December 11, 2027**: the main CRA requirements apply and the RED cybersecurity Delegated Act is repealed.

Under Article 69, products placed on the market before December 11, 2027, generally become subject to the other CRA requirements only if substantially modified from that date. Article 14 reporting obligations are an exception and already apply to earlier products in scope.


## The scope {#the-scope}

The CRA covers hardware and software made available on the market in the course of a commercial activity where the intended purpose or reasonably foreseeable use includes a direct or indirect data connection to a device or network. This includes components placed on the market separately and remote data processing solutions developed by the manufacturer, or under its responsibility, whose absence would prevent the product from performing one of its functions.

An internet connection is not required. However, not every programmable product or cloud service is automatically in scope: Article 2 sets out the scope and exclusions, and Article 3 defines products with digital elements and remote data processing.


## Obligations of manufacturers {#obligations-of-manufacturers}

The CRA introduces a number of obligations for compliance. The manufacturers must ensure:

-   The product and the manufacturer's processes comply with the applicable essential cybersecurity requirements for product security and vulnerability handling
-   Product cybersecurity risk assessment is documented and updated as appropriate during the support period
-   Due diligence when integrating components is exercised to ensure cybersecurity risks that may be introduced by the components are understood and if necessary mitigated
-   Relevant cybersecurity aspects concerning the product are documented and sufficient information is provided to third parties (including known vulnerabilities)
-   Vulnerabilities are handled during the product support period
-   Actively exploited vulnerabilities and severe incidents affecting product security are reported without undue delay: early warning within 24 hours of awareness, followed by a notification within 72 hours and a final report under the applicable deadline. See [reporting obligations]({{< relref "post/cra_reporting_obligations" >}}#reporting-deadlines) for the different final-report deadlines and exceptions.

The support period must reflect the time the product is expected to be used and must generally be at least five years. If expected use is shorter than five years, the support period must cover that expected use time. The manufacturer must communicate the support end date at purchase.


## Product classification {#product-classification}

The "core functionality" of the product determines the product classification. Most products in scope of the CRA belong to the "default" class: all product categories that the CRA does not list as important or critical products.

Annex III of the CRA lists the "important products" in two classes, Class I and Class II, and Annex IV lists the "critical products". The class decides which [conformity assessment](#conformity-assessment) routes are available; every product in scope must meet the same essential cybersecurity requirements.

{{< figure src="/images/cra_product_classes.png" alt="CRA products fall into the default category, important products (Class I or Class II), or critical products." >}}


### Important and critical product categories {#product-categories}

**Important products, Class I** (Annex III):

-   Identity management systems and privileged access management software and hardware, including authentication and access control readers and biometric readers
-   Standalone and embedded browsers
-   Password managers
-   Software that searches for, removes, or quarantines malicious software
-   Products with the function of a virtual private network (VPN)
-   Network management systems
-   Security information and event management (SIEM) systems
-   Boot managers
-   Public key infrastructure and digital certificate issuance software
-   Physical and virtual network interfaces
-   Operating systems
-   Routers, modems intended for connection to the internet, and switches
-   Microprocessors with security-related functionalities
-   Microcontrollers with security-related functionalities
-   Application-specific integrated circuits (ASIC) and field-programmable gate arrays (FPGA) with security-related functionalities
-   Smart home general purpose virtual assistants
-   Smart home products with security functionalities, including smart door locks, security cameras, baby monitoring systems and alarm systems
-   Internet-connected toys with social interactive features (such as speaking or filming) or location tracking features
-   Personal wearables with a health monitoring purpose that are not medical devices, and personal wearables intended for children

**Important products, Class II** (Annex III):

-   Hypervisors and container runtime systems
-   Firewalls, intrusion detection and prevention systems
-   Tamper-resistant microprocessors
-   Tamper-resistant microcontrollers

**Critical products** (Annex IV):

-   Hardware devices with security boxes
-   Smart meter gateways and other devices for advanced security purposes, including secure cryptoprocessing
-   Smartcards or similar devices, including secure elements

The [CRA standards tracker]({{< relref "cra-standards" >}}) lists the vertical standards being developed for these categories.


### Technical descriptions {#technical-descriptions}

[Commission Implementing Regulation (EU) 2025/2392](<https://eur-lex.europa.eu/eli/reg_impl/2025/2392/oj/eng>), in force since December 21, 2025, gives a technical description of each category, with examples that are illustrative and not exhaustive. It sets out how to read them:

-   **The product as a whole counts.** A product is important or critical only if the product as a whole has the core functionality of a listed category. Integrating a component that falls into a category does not in itself change the class of the final product (for important products, CRA Article 7(1)). For example, the regulation names Wi-Fi, Bluetooth and Zigbee adapters and controllers as physical network interfaces (Class I), but a connected device that integrates one does not become an important product because of it.
-   **Being able to perform a function is not enough.** A product whose core functionality is different does not meet a category's description, even if it can do what that category does. The regulation's examples: a smartphone is generally not an operating system or a password manager, and security orchestration (SOAR) software is generally not a SIEM.
-   **Extra functions do not take a product out of a category.** An operating system that ships with a calculator or a simple graphics editor is still an operating system.

Some descriptions draw sharper lines than the category names. Tamper-resistant microprocessors and microcontrollers (Class II) are designed for protection at AVA_VAN level 2 or 3 under the Common Criteria, while secure elements (critical) are designed for at least AVA_VAN.4. A toy that only detects the proximity of its user or of other toys does not have location tracking features, and wearables for children cover users under 14.


## Conformity assessment {#conformity-assessment}

Article 32 sets out the available routes for assessing both the product and the manufacturer's processes:

-   **Default products** can use internal control (**module A**), EU-type examination followed by conformity to type (**modules B+C**), or full quality assurance (**module H**). An applicable European cybersecurity certification scheme may also be used where available under Article 27(9).
-   **Important products, Class I** can use module A when the applicable harmonized standards, common specifications, or qualifying European cybersecurity certification schemes are fully applied. If these are unavailable, not applied, or only partly applied, modules B+C or H are required for the requirements not covered. The certification schemes referred to in Article 32(2) must have an assurance level of at least "substantial".
-   **Important products, Class II** require modules B+C or H, or an applicable European cybersecurity certification scheme at an assurance level of at least "substantial", where available under Article 27(9).
-   **Critical products** use a European cybersecurity certification scheme where required under Article 8(1). Where those conditions are not met, the Class II assessment routes apply.

There is a specific exception for **free and open-source software in the important-product categories**: Article 32(5) allows the routes in Article 32(1), including module A, if the required technical documentation is public when the product is placed on the market. This is not a blanket exemption from the CRA and does not extend to critical products.

Modules B+C and H involve a [notified body](<https://single-market-economy.ec.europa.eu/single-market/goods/building-blocks/notified-bodies_en>). Module H assesses the manufacturer's quality system for the products concerned; it is not a general certification that every product the manufacturer makes is CRA-compliant.

Manufacturers remain responsible for compliance, including drawing up the EU declaration of conformity and affixing the CE marking.


## Standards {#standards}

A number of CRA related standards were requested to be developed in the [standardization request](<https://ec.europa.eu/growth/tools-databases/enorm/mandate/606_en>) targeted at [CEN-CENELEC](<https://www.cencenelec.eu/news-events/news/2025/newsletter/ots-62-cra/>) and [ETSI](<https://www.etsi.org/newsroom/press-releases/2545-etsi-leverages-global-technical-expertise-to-support-the-eu-cyber-resilience-act>). This includes three "horizontal" standards addressing process, vulnerabilities handling and catalog of controls plus a number of "vertical" standards requested for each of the important product classes. The [CRA Standards Tracker]({{< relref "cra-standards" >}}) shows the current stage of each one.

These standards serve different roles. [EN 40000-1-2]({{< relref "post/en_40000_1_2_approved" >}}) provides a framework for cybersecurity principles, risk management, and lifecycle activities; it is not intended to provide presumption of conformity. The vulnerability-handling and product-specific standards are being developed to support assessment against the relevant CRA requirements.

Under Article 27, conformity with a harmonized standard provides **presumption of conformity only for the requirements it covers**, and only once its reference has been published in the Official Journal of the European Union. Approval or publication of a standard by a standards body is not enough on its own. Presumption of conformity does not automatically permit self-assessment for every product class; the applicable conformity-assessment rules still apply.


## Product evaluation flow {#product-evaluation-flow}

The first step in the product evaluation is the definition of the **core functionality** of the product. This important step determines the class of the product and what assessment module can be followed but also what specifications can be considered applicable.

After identifying the product class, determine which standards, common specifications, or certification schemes cover the applicable requirements. Their availability and application can affect the assessment route, particularly for Class I products.

The manufacturer of a default-category product can choose from the routes available under Article 32(1). Using a standard is not mandatory, but the manufacturer must demonstrate conformity with all applicable essential cybersecurity requirements.


## Product assessment {#product-assessment}

To demonstrate CRA conformity, the manufacturer needs evidence that the product meets the applicable essential cybersecurity requirements and that its vulnerability-handling processes meet Annex I, Part II. The technical documentation must include the cybersecurity risk assessment and the evidence supporting the chosen assessment route.

The standards being developed by [CEN-CENELEC](<https://www.cencenelec.eu/news-events/news/2025/newsletter/ots-62-cra/>) and [ETSI](<https://www.etsi.org/newsroom/press-releases/2545-etsi-leverages-global-technical-expertise-to-support-the-eu-cyber-resilience-act>) can support that work. Manufacturers still need to check each standard's scope, publication and citation status, and coverage of the requirements relevant to their product. No single standard should be assumed to establish full CRA compliance.


## Relevant links {#relevant-links}

-   [Cyber Resilience Act legal text](<https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>)
-   [Implementing Regulation (EU) 2025/2392: technical descriptions of important and critical products](<https://eur-lex.europa.eu/eli/reg_impl/2025/2392/oj/eng>)
-   [CRA Standardization Request](<https://ec.europa.eu/growth/tools-databases/enorm/mandate/606_en>)
-   [CEN-CENELEC workshop: CRA and the horizontal standards](<https://www.cencenelec.eu/media/CEN-CENELEC/Events/Events/2025/2025-04-08_cyber-resilience-act-and-the-horizontal-standards-workshop.pdf>) (see slide 52 on the process standard)
-   [Notified Bodies](<https://single-market-economy.ec.europa.eu/single-market/goods/building-blocks/notified-bodies_en>)
-   [Blue Guide](<https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=oj:JOC_2022_247_R_0001>)
