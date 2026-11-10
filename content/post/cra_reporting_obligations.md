+++
title = "Cyber Resilience Act: Reporting Obligations"
author = ["Piotr Polak"]
date = 2026-01-02T00:00:00+01:00
categories = ["Regulations", "Cybersecurity"]
draft = false
description = "CRA reporting obligations from 11 September 2026: what to report, the 24-hour and 72-hour notifications, and the different final-report deadlines for vulnerabilities and severe incidents."
+++

*Update (2 October 2026): the [CRA Single Reporting Platform](<https://portal.cra-srp.enisa.europa.eu/>) is now operational.*

The manufacturer reporting obligations under [Article 14 of the Cyber Resilience Act](<https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>) have applied since 11 September 2026.


## Reporting Process {#reporting-process}

Manufacturers must report ****actively exploited vulnerabilities**** and ****severe incidents**** affecting the security of products already on the EU market.


### Definitions {#definitions}

****Actively exploited vulnerability****
: A flaw that has been reliably proven to be exploited by a malicious actor without the system owner's permission.

****Severe incident****
: An incident that negatively affects—or could negatively affect—the product's ability to protect the availability, authenticity, integrity, or confidentiality of sensitive or important data or functions. An incident is also severe if it has led—or could lead—to the introduction or execution of malicious code in the product or in a user's network and information systems.


### Reporting Deadlines {#reporting-deadlines}

For both actively exploited vulnerabilities and severe incidents, manufacturers must submit:

1.  ****Early warning****: Without undue delay and no later than 24 hours after becoming aware of the vulnerability or incident.
2.  ****Vulnerability or incident notification****: Without undue delay and no later than 72 hours after becoming aware of it, providing the information available at that stage, including any corrective or mitigating measures.

The ****final-report deadline**** depends on what is being reported:

-   ****Actively exploited vulnerability****: No later than 14 days after a corrective or mitigating measure is available—not after users have implemented it.
-   ****Severe incident****: Within one month after submitting the incident notification described above.

The 72-hour notification and final report are required unless the relevant information has already been provided. The coordinating CSIRT may also request an intermediate status report.


### Submission Platform {#submission-platform}

-   Reports are submitted via the [CRA Single Reporting Platform](<https://portal.cra-srp.enisa.europa.eu/>), developed by ENISA
-   Operational since ****11 September 2026****


### Distribution {#distribution}

-   Manufacturers notify the ****CSIRT designated as coordinator**** and ****ENISA**** simultaneously through the platform.
-   Manufacturers with a main establishment in the EU use the endpoint of the coordinating CSIRT in that Member State. Article 14(7) sets out the selection rules for manufacturers without a main establishment in the EU.
-   The coordinating CSIRT handles onward sharing with other relevant coordinating CSIRTs under Article 16, including the rules on delaying dissemination of sensitive notifications.


## Preparing for Reporting Obligations {#preparing-for-reporting-obligations}

Manufacturers should:

****Establish Monitoring and Reporting Capabilities****

-   Implement systems and processes to continuously monitor for product vulnerabilities and product related security incidents.
-   Ensure the team responsible for cybersecurity can quickly detect, document, and escalate relevant events.

****Impact Assessment and Risk Mitigation****

-   Be able to assess the impact of any detected vulnerability or incident on the product and its users.
-   Implement procedures to mitigate risks promptly, including patches, updates, or other corrective measures.

****Prepare Reporting Procedures****

-   Set up processes to submit reports through the [CRA Single Reporting Platform](<https://portal.cra-srp.enisa.europa.eu/>), operational since 11 September 2026.
-   Build the [reporting deadlines](#reporting-deadlines) into your response procedures: early warning within 24 hours and notification within 72 hours of awareness, both without undue delay.
-   Track the final-report trigger separately: availability of a corrective or mitigating measure for vulnerabilities; submission of the incident notification for severe incidents.

****Train Teams and Assign Responsibilities****

-   Assign a dedicated team or individual responsible for compliance with CRA reporting requirements.
-   Train staff on recognizing vulnerabilities, assessing severity, and following reporting protocols.

****Document Everything****

-   Maintain detailed records of detected vulnerabilities, incidents, assessments, and mitigation measures.
-   Documentation will help demonstrate compliance if audited by regulators.


## Relevant links {#relevant-links}

-   [CRA Single Reporting Platform](<https://portal.cra-srp.enisa.europa.eu/>)
-   [Cyber Resilience Act overview]({{< relref "post/cra_overview" >}})
-   [Cyber Resilience Act legal text](<https://eur-lex.europa.eu/eli/reg/2024/2847/oj/eng>)
-   [ENISA](<https://www.enisa.europa.eu/>)
-   [CSIRTs network](<https://csirtsnetwork.eu/>)
