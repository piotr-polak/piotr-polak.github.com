+++
title = "Securing connected products when AI makes finding bugs cheap"
author = ["Piotr Polak"]
date = 2026-11-18
categories = ["Cybersecurity", "AI security"]
draft = true
description = "AI makes the deeper vulnerabilities in connected products cheaper to find. Attacks were automated long before AI, so the answer is not AI against AI but proactive design, automatic containment and careful updates - from risk assessment and protocol security to fleet monitoring and CRA reporting."
images = ["/images/connected_product_security_ai_agents.jpg"]
+++

AI has not given attackers a new class of attack against connected devices, and it did not make attacks automated either.
[Mirai](<https://www.cisa.gov/news-events/alerts/2016/10/14/heightened-ddos-threat-posed-mirai-and-other-botnets>) and its successors have been taking over cameras, routers and recorders automatically since 2016, using little more than default passwords and known flaws.
Memory corruption in a protocol parser, a debug interface left open, a default credential, an unsigned update - these are the same weaknesses we have been fixing for years.
What AI changes is the economics of the deeper ones.
Finding a parser bug or a logic flaw in unfamiliar firmware used to take scarce expertise and time for every device, and that cost spared much of the market from anything beyond the simplest attacks.
That protection is getting thinner.

{{< figure src="/images/connected_product_security_ai_agents.jpg" alt="Attackers, whether script-, AI- or human-driven, probe a hardened connected device with its key in a secure element; the device counts failed authentications and bad frames; a gateway rule isolates it and revokes its key automatically, while the rest of the fleet stays healthy and receives a staged update." >}}


## What changed on the attacker side {#what-changed}

Four developments matter for anyone shipping connected products.

**Vulnerability discovery is getting cheaper.**
[Big Sleep](<https://projectzero.google/2024/10/from-naptime-to-big-sleep.html>), an AI agent built by Google DeepMind and Google Project Zero to search for unknown vulnerabilities, [reported its first batch of 20 vulnerabilities](<https://techcrunch.com/2025/08/04/google-says-its-ai-based-bug-hunter-found-20-security-vulnerabilities/>) in widely used open-source projects such as FFmpeg and ImageMagick in August 2025.
It is not alone: OpenAI's [Codex Security](<https://openai.com/index/codex-security-now-in-research-preview/>) (formerly Aardvark) does the same for customers' code, Anthropic [reports](<https://www.anthropic.com/research/zero-days>) that its Claude models helped find high-severity vulnerabilities, which its researchers then validated and reported, and the finalists of DARPA's [AI Cyber Challenge](<https://archive.aicyberchallenge.com/>) released their autonomous systems for finding and patching vulnerabilities as open source.
Academic work has since moved the same approach onto firmware: [FirmAgent](<https://www.ndss-symposium.org/ndss-paper/firmagent-leveraging-fuzzing-to-assist-llm-agents-with-iot-firmware-vulnerability-discovery/>) combines LLM agents with fuzzing to find vulnerabilities in IoT firmware, and [PANGOLIN](<https://www.usenix.org/conference/usenixsecurity26/presentation/jia-zhipeng>) uses LLM-driven code analysis to fuzz multilingual IoT firmware.

**Reverse engineering needs less specialist skill.**
Tools like Big Sleep work on source code, but most connected products ship only binary firmware, and that barrier is falling too.
Open-source integrations such as [GhidraMCP](<https://github.com/LaurieWired/GhidraMCP>) let an agent drive the Ghidra disassembler directly - decompiling functions and renaming symbols - and research systems such as [FirmHive](<https://arxiv.org/abs/2511.18438>) coordinate many agents to analyze whole firmware images.
The same tools make patch diffing cheap: when you ship a fix, an agent can compare the old and new firmware, work out what you fixed, and turn that into an attack on devices that have not updated yet.

**Agents are starting to run whole operations - so far mostly against IT, not connected devices.**
The documented cases target corporate networks, websites and cloud services.
Anthropic [described](<https://www.anthropic.com/news/disrupting-AI-espionage>) a state-sponsored campaign run largely with Claude Code against roughly 30 organizations; its account was [questioned by security researchers](<https://arstechnica.com/security/2025/11/researchers-question-anthropic-claim-that-ai-assisted-attack-was-90-autonomous/>) for lacking technical detail and [indicators of compromise](<https://www.bleepingcomputer.com/news/security/anthropic-claims-of-claude-ai-automated-cyberattacks-met-with-doubt/>), and by Anthropic's own account Claude often overstated its findings and occasionally fabricated data.
The UK AI Security Institute found that Claude Mythos Preview could take over a small simulated corporate network from start to finish in [3 of 10 attempts](<https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities>), and a later version in [6 of 10](<https://www.aisi.gov.uk/blog/how-fast-is-autonomous-ai-cyber-capability-advancing>), but on networks with no defenders, with initial access already given and up to 100 million tokens per attempt; its advice was the basics.
Of the 154 open-source frameworks in Daniel Miessler's [Offsec Harness Index](<https://offsecharnesses.ai/>) as of November 17, 2026, 14 have been seen in real attacks, recorded alongside other incidents in his [hackingincidents.ai](<https://hackingincidents.ai/>) ledger, and in the reported cases they succeeded mostly through old weaknesses - weak passwords, authentication bypasses and known vulnerabilities.
For connected products this matters in two ways: the cloud services, apps and exposed management interfaces behind a product are exactly what these frameworks probe, and frameworks specialized for firmware, radio protocols or particular device classes are likely to follow.

**The window between disclosure and exploitation is closing.**
Rapid7's [Q3 2026 threat update](<https://www.rapid7.com/blog/post/tr-q3-2026-threat-update-attackers-exploiting-vulnerabilities-within-3-days/>) puts the average time between a high-severity vulnerability becoming public and its exploitation at three days, with 71% of tracked exploitation happening within the first seven.
That trend started before generative AI: Mandiant measured the average time to exploit [falling](<https://cloud.google.com/blog/topics/threat-intelligence/time-to-exploit-trends-2023>) from 63 days in 2018-2019 to 32 days in 2021-2022 and 5 days in 2023.
AI may push it further, since comparing a patched version with the old one is work language models can help with, but that effect has not yet been shown.


## Why connected devices are hit harder {#why-devices}

Most of the industry's response to faster exploitation assumes you can patch in days.
Connected products rarely can.

- **Long lifetimes.** A luminaire, a thermostat or a gateway stays in service for ten years or more, and not every manufacturer is ready or able to provide updates for that long. Fixes often depend on others: if a chipset vendor no longer maintains its SDK, or an open-source project is slow to address a vulnerability, the manufacturer has nothing to ship.
- **Slow update paths.** Updates depend on a gateway, a hub, a phone app, an ecosystem owner or a customer who has to approve them; many devices in the field never receive one.
- **Shared stacks.** A flaw in a widely deployed Zigbee, Bluetooth or TCP/IP stack, or in a chipset vendor's SDK, appears in hundreds of products from different brands at once. Automated discovery makes such shared code an especially attractive target, because one finding pays off many times.
- **Code that anyone in radio range can reach.** Any device within radio range can send frames that the firmware must read before it knows who sent them: advertisements, beacons, join and pairing requests. That code is usually written in C and runs on microcontrollers without memory protection, so a parsing bug can let an attacker crash the device or get around its security without any credentials. [SweynTooth](<https://www.cisa.gov/news-events/ics-alerts/ics-alert-20-063-01>), a family of flaws found in 2020 in the Bluetooth LE SDKs of several chip vendors, included both: crashes and deadlocks triggered by malformed packets, and a bypass of secure pairing.
- **Security through obscurity.** Proprietary protocols, unpublished firmware and even white-box cryptography used to raise the cost of analysis. Once analyzing a firmware image costs little, obscurity no longer buys much time.

Products that were attacked only for their default passwords may now get a closer look at their firmware too, because looking costs less.


## AI inside the product is the bigger concern {#ai-in-the-product}

For most manufacturers, AI inside their own products deserves more attention than AI orchestrating autonomous attacks.
Autonomous attacks are still rare, and as shown above, they mostly succeed through old weaknesses that the defenses below already address.
AI in the product is different: it is new attack surface that the manufacturer ships itself, in every unit, often with the authority to act in the physical world, and there is still no reliable, general defense against prompt injection.
It arrives as voice assistants, natural-language control of buildings and homes, cloud services that interpret sensor data, and agents that act on behalf of the user.
Each of these adds attack surface that classic device threat models do not cover, and under the CRA, securing it is the manufacturer's responsibility.

- **Prompt injection.** Any text the model reads - a device name, a calendar entry, a message, a web page - can carry instructions. A model that can switch off an alarm or unlock a door should never take its orders from data.
- **Excessive authority.** Giving the AI component broad permissions without requiring explicit user confirmation for safety- and security-relevant actions is a recipe for disaster. Give it only the permissions it needs, and let a person confirm anything that unlocks, disarms or switches off.
- **Cloud, app and device dependencies.** An AI feature rarely lives on the device alone: the model may run in the cloud, be driven from a mobile app, or act through a hub, a voice assistant or another device. Each of those links is part of the attack path, and a weakness in any of them reaches the device. Under the CRA, remote data processing developed by the manufacturer, or under its responsibility, whose absence would prevent the product from performing one of its functions, is part of the product. An LLM backend that meets that definition belongs in your risk assessment, not on the list of external services you can ignore.


## Proactive first, reactive last {#proactive-first}

Defenses come in two kinds.
Proactive measures remove a weakness, or limit what it is worth, before anyone attacks: a closed debug port, a key in secure storage, a parser fuzzed before release, a device that cannot speak for others.
Reactive measures detect an attack once it is under way and stop it or limit its damage: monitoring, detection and containment.
Both are needed, but for connected products, at least for now, the emphasis belongs on the first.

For connected products, reacting in time is the hard part.
An attack first has to be noticed, and many devices can barely see it themselves: they have little room for logs, report rarely to save energy, and depend on what their protocol stack exposes.
Once the events reach a gateway or cloud service, someone or something has to recognize them as an attack, decide what to do, and act across the fleet, often through gateways, hubs and ecosystems that the manufacturer does not fully control.
Every step takes time, and an attack, whether automated, scripted or even human-assisted, does not wait for any of them.
A weakness that never shipped, or a compromise that yields nothing useful, does not need to win that race.

Proactive measures also do not depend on predicting what AI attackers will be able to do.
They work the same whether the attacker is a person, a decades-old worm or an agent.
Reactive AI defense, by contrast, is still unproven: there is little evidence yet that defending agents reliably beat attacking ones, and the AI Security Institute cannot say how attacking agents would fare against well-defended systems either.
Marcus Hutchins [makes the case](<https://malwaretech.com/2026/09/machine-speed-is-a-lie-stop-trying-to-fight-ai-with-ai.html>) for enterprise networks that monitoring and response should be the last line of defense, not a substitute for security underneath; for devices with weak logging and mitigation capabilities, that holds even more.

Where AI helps defenders most today is on the proactive side: reviewing code, analyzing firmware and fuzzing protocols before a product ships.
The [Cyber Resilience Act]({{< relref "cra" >}}) points the same way, since most of its essential requirements, such as secure by default, a minimized attack surface and no known exploitable vulnerabilities when a product is placed on the market, are proactive.

The balance may shift.
If defensive agents become reliable at triage and response, or if AI-driven discovery outpaces what careful design can prevent, reactive capabilities will matter more.
Until then, every attack stopped by design is one that monitoring and containment do not have to catch.
The defenses below follow that order: risk assessment and design first, detection and response as the last line.


## Defenses that still work {#defenses}

None of the effective defenses are new.
What is new is that they are no longer optional: cheap discovery gives attackers an incentive to probe far more products, not only the popular ones.

### Risk assessment {#risk-assessment}

Every defense below should follow from a security risk assessment, not from a checklist.
It is the step that decides which controls a product needs, and it is where the effect of AI shows up first.

- **Define the product context.** Intended purpose and reasonably foreseeable use, the environment the product is installed in, who operates it, how it connects, and which services and other devices it depends on.
- **Define the risk acceptance criteria.** Decide up front, and before looking at individual risks, which level of risk is acceptable for this product, who may accept it, and on what basis. Without agreed criteria, every later decision to accept a risk is arbitrary and hard to defend.
- **Inventory the assets that need protection.** Keys and credentials, firmware and configuration, personal data, the functions users rely on, safety-relevant actions, and the networks the product can reach.
- **Identify the threats.** Include the ones this article describes: automated scanning of every exposed interface, agent-assisted reverse engineering of firmware, patch diffing after each update, and prompt injection for products with AI features.
- **Assess the risks.** Combine likelihood and impact for each threat against each asset. Revisit old likelihood ratings: an assumption such as "attacking this requires reverse engineering our proprietary firmware" used to justify a low rating, and with agent-assisted analysis it may no longer hold.
- **Decide on mitigation.** Select controls for every risk that does not meet the acceptance criteria, and record the residual risk you accept and why.

The assessment is not a one-off document.
The [Cyber Resilience Act]({{< relref "cra" >}}) requires manufacturers to document it and to update it as appropriate during the support period, and a threat landscape that changes as quickly as this one is a reason to do so.

### Design {#design}

- **Reduce what is reachable.** Every listening service, debug port and unauthenticated protocol endpoint is something automated scanning will find. Ship with them off.
- **Use the strongest security your protocols offer.** This starts with secure commissioning, the moment a device joins a network and receives its keys: install-code-based joining enforced by the Zigbee trust center instead of well-known link keys, Bluetooth LE Secure Connections with authenticated pairing instead of legacy pairing or Just Works where the product's user interface allows it, and IEEE 802.1X where the network supports it. Matter already makes device attestation and authenticated sessions mandatory, which leaves the manufacturer the parts the protocol cannot enforce: protecting the attestation keys and giving each device its own setup code. It continues with the application-level security that many protocols leave optional: Zigbee APS encryption with link keys for sensitive commands, instead of relying only on the network key that every device in the network shares, and Bluetooth LE characteristics that require an encrypted, authenticated link instead of being open to any device that connects. Optional security that stays switched off protects nothing.
- **Anchor trust in hardware.** A hardware-based root of trust, such as a secure element or a TEE, provides the anchor for secure boot, secure storage of keys, and secure, rollback-protected firmware updates. It does not stop a bug from being exploited, but it limits what the attacker gets: modified firmware does not survive a reboot, keys cannot simply be read out, and an old vulnerable version cannot be easily reinstalled.
- **No default credentials, no shared secrets across a product line.** Discovery at scale makes a single leaked fleet-wide key catastrophic.
- **Assume one device is compromised.** Plan for the attacker who already owns one device, and ask what it gives them. Each device should have its own identity and credentials, the cloud service should check that a device only reads and writes its own data and cannot speak for others, and the network should limit which devices can talk to each other. One compromised device should stay one compromised device.

### Detection and monitoring {#monitoring}

Prevention will not catch everything, and with exploitation measured in days, the question becomes how quickly you notice.
Most connected products today are blind: when an attack happens, the manufacturer learns about it from a researcher, a customer or the press.

Detection is harder than it sounds for constrained devices.
A battery-powered sensor sleeps most of the time, every transmission costs energy budgeted for its actual function, and it has kilobytes of RAM and little flash to spare for a log.
Realistic designs keep the device's share small: count events rather than record each one, report summaries together with regular traffic, and let the gateway or hub, which sees the radio traffic anyway, do most of the observing.

There is also a gap that manufacturers cannot close alone.
Most products are built on a protocol stack and SDK from a silicon vendor, and many security events happen inside that stack: a rejected join, a failed key exchange, a frame that fails its integrity check.
If the stack does not expose those events, the product cannot log them.
Protocol specifications define diagnostics for network health, but few define a common set of security events and a way to report them.
That has to be added to the standards first, and then implemented by SDK and silicon vendors, before it can show up consistently in products.

Within those limits, the priorities are:

- **Log the events that matter.** Failed authentication, commissioning and network join attempts, configuration changes, update outcomes and signature failures, secure boot failures, debug interface use, and unexpected reboots or watchdog resets. A rising rate of malformed protocol frames is often the first visible sign of someone fuzzing a parser.
- **Get the events off the device.** Constrained devices cannot store or analyze much themselves; forward events or event counters through the gateway or cloud service, protect them against tampering, and give them trustworthy timestamps.
- **Monitor the fleet, not the device.** A single crash means little; the same crash on hundreds of devices after the same malformed packet is an attack in progress. Fleet-level telemetry turns isolated events into a pattern you can act on.
- **Contain automatically.** Detection only helps if the response is fast, and for high-confidence signals the response does not need a person or an AI. Decide in advance which events trigger which action, and let the gateway or cloud service carry it out at once: isolate a device that fails attestation or floods the network with malformed frames, close an open commissioning window, slow down repeated join attempts, revoke a credential that is used from two places at once. A device isolated by mistake can be reconnected; a compromised fleet cannot be undone.
- **Let agents help with the rest.** For ambiguous signals, AI agents can help with triage: correlating anomalies across the fleet, matching them against newly published vulnerabilities and your software bill of materials, and preparing a summary for an engineer. They complement the measures above rather than replace them, and they are not instant either. Keep them read-only: an agent may propose an action on the fleet, but a person decides.
- **Treat logs as untrusted input.** Device names, error strings and protocol fields in the logs are attacker-controlled. A monitoring agent that reads them is exposed to prompt injection, so it must not be able to act on what it reads.
- **Collect only what you need.** Security logs from homes and buildings can reveal how people live. Minimize personal data, and give the user the opt-out the CRA expects.

### Process {#process}

- **Make updating fast and boring.** If exploitation follows disclosure in days, your update pipeline - build, sign, test, stage, roll out - has to be measured in days too, including for products whose development team has moved on.
- **Know what you ship.** A current software bill of materials is the only way to answer "are we affected?" within hours when a shared stack is hit.
- **Use the same tools on yourself.** LLM-assisted code review, firmware analysis and protocol fuzzing are available to defenders as well. Running them against your own products before release is cheaper than reading about the result in someone else's report. Test realistic scenarios as well: give a red team one device, its credentials and a foothold on the network, and see how far they get.
- **Prepare your vulnerability intake.** Expect more reports, more duplicates and more low-quality machine-generated ones. Your coordinated vulnerability disclosure process needs the capacity to triage them without missing the real ones. Here AI can help defenders: an agent can check whether a report refers to a product and version you actually ship, match it against your software bill of materials, spot duplicates, and try to reproduce the finding, so that engineers spend their time on the real reports rather than the slop. The decision on each report stays with a person.


## The regulatory clock {#regulation}

The [Cyber Resilience Act]({{< relref "cra" >}}) already assumes this world.
Since September 11, 2026, manufacturers must report actively exploited vulnerabilities in their products: an early warning within 24 hours of becoming aware, a notification within 72 hours, and a final report within 14 days after a corrective or mitigating measure is available.
When exploitation follows disclosure in three days, those deadlines will be tested in practice, not only on paper.
You cannot report within 24 hours an exploitation you do not see; without monitoring, the clock starts when someone else tells you.

The CRA's essential requirements - secure by default, minimized attack surface, protection of confidentiality and integrity, and security updates throughout the support period - read like a list of defenses against cheap, automated discovery.
Where applicable, they also require products to record and monitor relevant internal activity, including access to or modification of data, services or functions, with an opt-out for the user.


## Fast, but not reckless {#patching-under-pressure}

Exploitation within days, the CRA reporting clock and the obligation to remediate vulnerabilities [without delay](<https://cra.orcwg.org/faq/official/manufacturers/vulnerability-handling/>) all push manufacturers to ship fixes faster than ever.
For connected products, speed has a cost that is easy to underestimate.
A faulty update is an incident of its own: firmware that fails to boot, drains batteries, drops devices off the mesh or breaks compatibility with a hub can take lighting, heating or access control offline across an entire installed base.
A device bricked by an update cannot be fixed with the next one.

Devices add constraints of their own.
The fix may have to come from a chipset vendor's SDK first, and it has to be tested across hardware revisions and the hubs and ecosystems the product works with; some changes can also mean repeating protocol certification.
Very often, rolling out also depends on gateways, apps and ecosystem owners outside the manufacturer's control.

The CRA does not ask for a patch at any cost.
Remediation follows the risk, and the 14-day deadline for the final report runs from when a corrective or mitigating measure is available.
That leaves room for a safer sequence:

- **Mitigate first, then patch.** Disabling a vulnerable feature remotely, changing a default, filtering traffic at the gateway or in the cloud, and clear advice to users can cut the risk within hours, while the real fix is built and tested properly.
- **Prepare the pipeline before you need it.** Automated builds, signing and hardware-in-the-loop tests across all supported hardware revisions turn a fix into a release in days instead of weeks, without skipping tests.
- **Keep security fixes small.** Ship them separately from feature releases, so that a security update changes as little as possible.
- **Roll out in stages.** Start with a small group of devices, watch fleet health with the same monitoring used for attack detection, and stop the rollout automatically when crash or disconnect rates rise.
- **Design updates to fail safe.** Dual-bank (A/B) firmware images that fall back to the last working image if the new one does not boot keep a bad update from bricking the fleet.
- **Agree timelines with suppliers.** Your response time depends on how quickly chipset and stack vendors deliver fixes; put expectations in the contract before the next vulnerability, not during it.

Speed comes from preparation, not from skipping tests.


## Conclusion {#conclusion}

AI did not make connected devices less secure.
It makes their deeper weaknesses cheaper to find, at a time when the window between disclosure and exploitation was already shrinking, and where AI enters the product itself, it adds new attack surface.
The answer is not a new category of AI security product but the old discipline, applied consistently and kept up to date.

- **Prevent.** Start from a risk assessment with agreed acceptance criteria, and revisit the likelihood ratings that relied on analysis being expensive. Then reduce the exposed surface, anchor trust in hardware, configure protocols to their strongest modes, and design so that one compromised device stays one compromised device.
- **Detect and contain.** Log the security events that matter, within the limits of constrained devices, monitor the fleet rather than single devices, and contain automatically where the signal is clear. Push for security events to be defined in the protocol standards and exposed by the SDKs, because manufacturers cannot log what their stack hides.
- **Report and respond.** Be ready to meet the CRA reporting deadlines, and build an update process fast enough for shrinking exploitation windows, but careful enough not to cause the outage itself.

AI agents can help defenders too: reviewing code, analyzing firmware and fuzzing protocols before release, and helping engineers make sense of fleet events in the field.
But they are an addition, not the answer.
As Marcus Hutchins [argues](<https://malwaretech.com/2026/09/machine-speed-is-a-lie-stop-trying-to-fight-ai-with-ai.html>) for enterprise networks, fighting AI with AI on a purely reactive basis is a losing game: attacks were automated long before AI, and what stops them has not changed.
A product whose keys cannot be read, whose devices cannot speak for each other and whose fleet contains an attack automatically does not need to win a race against anyone's agents.

{{< callout title="Get in touch" >}}
If you want an independent view of how your connected products hold up against automated discovery, or need help aligning product security with the CRA, [get in touch](mailto:contact@piotrpolak.com).
{{< /callout >}}
