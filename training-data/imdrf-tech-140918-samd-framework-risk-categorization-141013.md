Title:

## IMDRF

### International Medical

### Device Regulators Forum

Final Document

```
"Software as a Medical Device": Possible Framework for
Risk Categorization and Corresponding Considerations
```
```
Authoring Group: IMDRF Software as a Medical Device (SaMD) Working Group
```
Date: 18 September 2014

# YfhJ!L_

```
Jeffrey Shuren, IMDRF Chair
```
```
This document was produced by the International Medical Device Regulators Forum.
There are no restrictions on the reproduction or use of this document; however,
incorporation of this document, in part or in whole, into another document, or its
translation into languages other than English, does not convey or represent an
endorsement of any kind by the International Medical Device Regulators Forum.
```
```
Co yright © 2014 by the International Medical Device Re ulators Forum.
```

## _____________________________________________________________________________________________

_____________________________________________________________________________________________

- 1.0 Introduction Table of Contents
- 2.0 Scope....................................................................................................................................
- 3.0 Definitions
   - 3.1 SOFTWARE AS A MEDICAL DEVICE
   - 3.2 INTENDED USE / INTENDED PURPOSE
   - 3.3 MEDICAL PURPOSE............................................................................................................
   - 3.4 SAMD CHANGES
- 4.0 SaMD Background and Aspects Influencing Patient Safety..........................................
- 5.0 Factors Important for SaMD Characterization
   - 5.1 SIGNIFICANCE OF INFORMATION PROVIDED BY SAMD TO HEALTHCARE DECISION
   - 5.2 HEALTHCARE SITUATION OR CONDITION
- 6.0 SaMD Definition Statement
- 7.0 SaMD Categorization
   - 7.1 CATEGORIZATION PRINCIPLES
   - 7.2 SAMD CATEGORIES
   - 7.3 CRITERIA FOR DETERMINING SAMD CATEGORY
   - 7.4 EXAMPLES OF SAMD:
- 8.0 General Considerations for SaMD
   - 8.1 DESIGN AND DEVELOPMENT
   - 8.2 CHANGES
- 9.0 Specific Considerations for SaMD
   - 9.1 SOCIO-TECHNICAL ENVIRONMENT CONSIDERATIONS
   - 9.2 TECHNOLOGY AND SYSTEM ENVIRONMENT CONSIDERATIONS.........................................
   - 9.3 INFORMATION SECURITY WITH RESPECT TO SAFETY CONSIDERATIONS
- 10.0 Appendix
   - 10.1 CLARIFYING SAMD DEFINITION
   - 10.2 ANALYSIS OF SAMD FRAMEWORK WITH EXISTING CLASSIFICATIONS
- 11.0 References


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

Preface

The document herein was produced by the International Medical Device Regulators Forum
(IMDRF), a voluntary group of global medical device regulators from around the world. The
document has been subject to consultation throughout its development.

There are no restrictions on the reproduction, distribution or use of this document; however,
incorporation of this document, in part or in whole, into any other document, or its translation
into languages other than English, does not convey or represent an endorsement of any kind by
the International Medical Device Regulators Forum.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

1.0 Introduction

Software is playing an increasingly important and critical role in healthcare with many clinical
and administrative purposes.

Software used in healthcare operates in a complex socio-technical environment—consisting of
software, hardware, networks, and people—and frequently forms part of larger systems that must
operate in a unified manner. This software frequently depends on other commercial off-the-
shelf (COTS) software and on other systems and data repositories for source data.

A subset of software used in healthcare meets the definition of a medical device; globally,
regulatory authorities regulate such software accordingly.

Existing regulations for medical device software are largely focused on medical device software
that is embedded in dedicated hardware medical devices and are focused around physical harm,
transmission of energy and/or substances to or from the body, the degree of invasiveness to the
body, closeness to sensitive organs, duration of use, diseases, processes and public health risk,
competence of user and effect on population due to communicable diseases, etc.

Today, medical device software is often able to attain its intended medical purpose independent
of hardware medical devices. It is increasingly being deployed on general-purpose hardware and
delivered, in diverse care settings, on a multitude of technology platforms (e.g., personal
computers, smart phones, and in the c loud) that are easily accessible. It is also being
increasingly interconnected to other systems and datasets (e.g., via networks and over the
Internet).

The complexity of medical device software, together with the increasing connectedness of
systems, results in emergent behaviors not usually seen in hardware medical devices.

This introduces new and unique challenges. For example:

- Medical device software might behave differently when deployed to different hardware
    platforms.
- Often an update made available by the manufacturer is left to the user of the medical
    device software to install.
- Due to its non-physical nature (key differentiation), medical device software may be
    duplicated in numerous copies and widely spread, often outside the control of the
    manufacturer.

Furthermore, there are lifecycle aspects of medical device software that pose additional
challenges. For instance, software manufacturers often:

- Have rapid development cycles,
- Introduce frequent changes to their software, and
- Deliver updates by mass and rapid distribution.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

This document is focused on a selected subset of medical device software. This software is
called Software as a Medical Device (SaMD) and is defined in IMDRF SaMD WG N10 /
Software as a Medical Device: Key Definitions.

```
Definition: Software as a Medical Device^1
```
```
SaMD is defined as software intended to be used for one or more medical
purposes that perform these purposes without being part of a hardware
medical device.
```
The objective of this document is to introduce a foundational approach, harmonized vocabulary
and general and specific considerations for manufacturers, regulators, and users alike to address
the unique challenges associated with the use of SaMD.

The approach developed in this document is intended only to establish a common understanding
for SaMD and can be used as reference. This document is not intended to replace or modify
existing regulatory classification schemes or requirements. Further efforts are required prior to
the use of this foundational approach for possible regulatory purposes.

## 2.0 Scope....................................................................................................................................

Purpose of the document

The purpose of the document is t o introduce a foundational approach, harmonized vocabulary
and general and specific considerations, for manufacturers, regulators, and users alike to address
the unique challenges associated with the use of SaMD by;

- Establishing common vocabulary and an approach for categorizing SaMD;
- Identifying specific information for describing SaMD in terms of the significance of the
    information provided by the SaMD to the healthcare decision, healthcare situation or
    condition, and core functionality;
- Providing criteria to categorize SaMD based on the combination of the significance of the
    information provided by the SaMD to the healthcare decision and the healthcare situation
    or condition associated with SaMD; and

(^1) See Section 3.0 for full definition including notes.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- Identifying appropriate considerations, during the lifecycle process ( requirements, design,
    development, testing, maintenance and use) of SaMD.

Field of application

- The categorization system in this document applies to SaMD defined in the related
    document, IMDRF SaMD WG N10 / Software as a Medical Device: Key Definitions and
    does not address other types of software.
- Software intended as an accessory to a medical device (i.e., software that does not in
    itself have a medical purpose) is not in the scope of this document.
- This document focuses on the SaMD irrespective of software technology and/or the
    platform (e.g., mobile app, cloud, server).
- This document does not address software that drives or controls a hardware medical
    device.

Relationship to other regulatory classification and standards^2

- This document is not intended to replace or create new risk management practices rather
    it uses risk management principles (e.g., principles in international standards) to identify
    generic risks for SaMD.
- The categorization framework in this document is not a regulatory classification, nor
    implies a convergence of classifications rules. However, it does set a path towards
    common vocabulary and approach. Additional work is required to align existing
    classification rules with this framework.
- The categorization framework is not meant to replace or conflict with the content and/or
    development of technical or process standards related to software risk management
    activities.

(^2) Additional details can be found in Appendix 0.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

## 3.0 Definitions

### 3.1 SOFTWARE AS A MEDICAL DEVICE

The term “Software as a Medical Device” (SaMD) is defined as software intended to be used for
one or more medical purposes that perform these purposes without being part of a hardware
medical device.

NOTES:

- SaMD is a medical device and includes in-vitro diagnostic (IVD) medical device.
- SaMD is capable of running on general purpose (non-medical purpose) computing
    platforms.^3
- “without being part of” means software not necessary for a hardware medical device
    to achieve its intended medical purpose.
- Software does not meet the definition of SaMD if its intended purpose is to drive a
    hardware medical device.
- SaMD may be used in combination (e.g., as a module) with other products including
    medical devices.
- SaMD may be interfaced with other medical devices, including hardware medical
    devices and other SaMD software, as well as general purpose software.
- Mobile apps that meet the definition above are considered SaMD.

### 3.2 INTENDED USE / INTENDED PURPOSE

For SaMD intended use, the definition in GHTF/SG1/N70:2011 “Label and Instructions for Use
for Medical Devices” applies:

The term “intended use / intended purpose” is the objective intent of the manufacturer regarding
the use of a product, process or service as reflected in the specifications, instructions and
information provided by the manufacturer.

### 3.3 MEDICAL PURPOSE............................................................................................................

The following two terms as defined in GHTF/SG1/N71:2012 “Definition of the Terms ‘Medical
Device’ and ‘In Vitro Diagnostic (IVD) Medical Device” (italicized below) identify medical
purpose applicable to SaMD:

3.3.1 Medical Device
‘Medical device’ means any instrument, apparatus, implement, machine, appliance, implant,
reagent for in vitro use, software, material or other similar or related article, intended by the

(^3) “Computing platforms” include hardware and software resources (e.g. operating system, processing hardware,
storage, software libraries, displays, input devices, programming languages etc.).
“Operating systems” that SaMD require may be run on a server, a workstation, a mobile platform, or other general
purpose hardware platform.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

manufacturer to be used, alone or in combination, for human beings, for one or more of the
specific medical purpose(s) of:

- diagnosis, prevention, monitoring, treatment or alleviation of disease,
- diagnosis, monitoring, treatment, alleviation of or compensation for an injury,
- investigation, replacement, modification, or support of the anatomy or of a physiological
    process,
- supporting or sustaining life,
- control of conception,
- disinfection of medical devices,
- providing information by means of in vitro examination of specimens derived from the
    human body;

and does not achieve its primary intended action by pharmacological, immunological or
metabolic means, in or on the human body, but which may be assisted in its intended function by
such means.

Note: Products which may be considered to be medical devices in some jurisdictions but not in
others include:

- disinfection substances,
- aids for persons with disabilities,
- devices incorporating animal and/or human tissues,
- devices for in vitro fertilization or assisted reproduction technologies.

3.3.2 In Vitro Diagnostic (IVD) Medical D evice
‘In Vitro Diagnostic (IVD) medical device’ means a medical device, whether used alone or in
combination, intended by the manufacturer for the in-vitro examination of specimens derived
from the human body solely or principally to provide information for diagnostic, monitoring or
compatibility purposes.

Note 1: IVD medical devices include reagents, calibrators, control materials, specimen
receptacles, software, and related instruments or apparatus or other articles and are used, for
example, for the following test purposes: diagnosis, aid to diagnosis, screening, monitoring,
predisposition, prognosis, prediction, determination of physiological status.

Note2: In some jurisdictions, certain IVD medical devices may be covered by other regulations.

3.3.3 Additional considerations for SaMD

SaMD may also:

- Provide means and suggestions for mitigation of a disease.
- Provide information for determining compatibility, detecting, diagnosing,
    monitoring or treating physiological conditions, states of health, illnesses or
    congenital deformities.
- Aid to diagnosis, screening, monitoring, determination of predisposition;
    prognosis, prediction, determination of physiological status.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

### 3.4 SAMD CHANGES

SaMD c hanges refer to any modifications made throughout the lifecycle of the SaMD including
the maintenance phase.

Software maintenance^4 can include adaptive (e.g. keeps pace with the changing environment),
perfective (e.g. recoding to improve software performance), corrective (e.g., corrects discovered
problems), or preventive (e.g., corrects latent faults in the software product before t hey become
operational faults).

Examples of SaMD changes include, but are not limited to, defect fixes; aesthetic, performance
or usability enhancements; and security patches.

## 4.0 SaMD Background and Aspects Influencing Patient Safety..........................................

There are many aspects in an ever-increasing complex clinical use environment that can raise or
lower the potential to create hazardous situations to patients. Some examples of these aspects
include:

- The type of disease or condition
- Fragility of the patient with respect to the disease or condition
- Progression of the disease or the stage of the disease/condition
- Usability of the application
- Designed towards a specific user type
- Level of dependence or reliance by the user upon the output information
- Ability of the user to detect an erroneous output information
- Transparency of the inputs, outputs and methods to the user
- Level of clinical evidence available and the confidence on the evidence
- The type of output information and the level of influence on the clinical intervention
- Complexity of the clinical model used to derive the output information
- Known specificity of the output information
- Maturity of clinical basis of the software and confidence in the output
- Benefit of the output information vs. baseline

(^4) ISO/IEC 14764:2006 Software Engineering — Software Life Cycle Processes — Maintenance

- adaptive maintenance: the modification of a software product, performed after delivery, to keep a software
    product usable in a changed or changing environment
- perfective maintenance: the modification of a software product after delivery to detect and correct latent
    faults in the software product before they are manifested as failures
- corrective maintenance: the reactive modification of a software product performed after delivery to correct
    discovered problems
- preventive maintenance: the modification of a software product after delivery to detect and correct latent
    faults in the software product before they become operational faults


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- Technological characteristics of the platform the software are intended to operate on
- Method of distribution of the software

Although many of these aspects may affect the importance of the output information from
SaMD, only some of these aspects can be identified by the intended use of SaMD. Generally
these aspects can be grouped into the following two major factors that provide adequate
description of the intended use of SaMD:

```
A. Significance of the information provided by the SaMD to the healthcare decision, and
B. State of the healthcare situation or condition.
```
When these factors are included in the manufacturer’s description of intended use, they can be
used to categorize SaMD.

Section 6.0 provides a structured approach for a SaMD definition statement to describe the
intended use. Section 7.0 provides a method for categorizing SaMD based on the major factors
identified in the definition statement.

Other aspects that are not included in the two major factors (e.g., transparency of the inputs used,
technological characteristics used by particular SaMD, etc.), although still important, do not
influence the determination of the category of SaMD. These other aspects influence the
identification of considerations that are unique to a specific approach/method used by the
manufacturer of a particular category of SaMD. For example, the type of a platform, that is
constantly changing, used in the implementation of SaMD may create considerations that are
unique to that implementation. These considerations can also vary by the capabilities of the
manufacturer or by the process rigor used to implement the SaMD. A ppropriate considerations of
these aspects by the manufacturers, users and other stakeholders can significantly minimize
patient safety risks.

Section 8.0 provides general considerations and section 9.0 provides specific considerations that
when taken into account can promote safety in the creation, implementation and use of SaMD.

## 5.0 Factors Important for SaMD Characterization

### 5.1 SIGNIFICANCE OF INFORMATION PROVIDED BY SAMD TO HEALTHCARE DECISION

The intended use of the information provided by SaMD in clinical management has different
significance on the action taken by the user.

5.1.1 To treat or to diagnose
Treating and diagnosing infers that the information provided by the SaMD will be used to take
an immediate or near term action:

- To treat/prevent or mitigate by connecting to other medical devices, medicinal products,
    general purpose actuators or other means of providing therapy to a human body


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- To diagnose/screen/detect a disease or condition (i.e., using sensors, data, or other
    information from other hardware or software devices, pertaining to a disease or
    condition).

5.1.2 To drive clinical management
Driving clinical management infers that the information provided by the SaMD will be used to
aid in treatment, aid in diagnoses, to triage or identify early signs of a disease or condition will
be used to guide next diagnostics or next treatment interventions:

- To a id in treatment by providing enhanced support to safe and effective use of medicinal
    products or a medical device.
- To a id in diagnosis by analyzing relevant information to help predict risk of a disease or
    condition or as an aid to making a definitive diagnosis.
- To triage or identify early signs of a disease or conditions.

5.1.3 To Inform clinical management
Informing clinical management infers that the information provided by the SaMD will not trigger
an immediate or near term action:

- To inform of options for treating, diagnosing, preventing, or mitigating a disease or
    condition.
- To provide clinical information by aggregating relevant information ( e.g., disease,
    condition, drugs, medical devices, population, etc.)

### 5.2 HEALTHCARE SITUATION OR CONDITION

5.2.1 Critical situation or condition
Situations or conditions where accurate and/or timely diagnosis or treatment action is vital to
avoid death, long-term disability or other serious deterioration of health of an individual patient
or to mitigating impact to public health. SaMD is considered to be used in a critical situation or
condition where:

- The type of disease or condition is:
    o Life-threatening state of health, including incurable states,
    o Requires major therapeutic interventions,
    o Sometimes time critical, depending on the progression of the disease or condition that
       could affect the user’s ability to reflect on the output information.
- Intended target population is fragile with respect to the disease or condition (e.g.,
    pediatrics, high risk population, etc.)
- Intended for specialized trained users.

5.2.2 Serious situation or condition
Situations or conditions where accurate diagnosis or treatment is of vital importance to avoid
unnecessary interventions (e.g., biopsy) or timely interventions are important to mitigate long
term irreversible consequences on an individual patient’s health condition or public health.
SaMD is considered to b e used in a serious situation or condition when:


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- The type of disease or condition is:
    o Moderate in progression, often curable,
    o Does not require major therapeutic interventions,
    o Intervention is normally not expected to be time critical in order to avoid death, long-
       term disability or other serious deterioration of health, whereby providing the user an
       ability to detect erroneous recommendations.
- Intended target population is NOT fragile with respect to the disease or condition.
- Intended for either specialized trained users or lay users.

```
Note: SaMD intended to be used by lay users in a "serious situation or condition" as
described here, without the support from specialized professionals, should be considered
as SaMD used in a "critical situation or condition".
```
5.2.3 Non-Serious situation or condition
Situations or conditions where an accurate diagnosis and treatment is important but not critical
for interventions to mitigate long term irreversible consequences on an individual patient's health
condition or public health. SaMD is considered to be used in a non-serious situation or condition
when:

- The type of disease or condition is:
    o Slow with predictable progression of disease state (may include minor chronic
       illnesses or states),
    o May not be curable; can be managed effectively,
    o Requires only minor therapeutic interventions, and
    o Interventions are normally noninvasive in nature, providing the user the ability to
       detect erroneous recommendations.
- Intended target population is individuals who may not always be patients.
- Intended for use by either specialized trained users or lay users.

## 6.0 SaMD Definition Statement

The intended use of SaMD is normally reflected in various sources such as the manufacturer’s
specifications, instructions, and other information provided by the manufacturer.

The purpose of the SaMD definition statement and the components identified below are to
provide an organized factual framework. Statement “A” and “B” are to help the SaMD developer
determine the SaMD category in the categorizing framework, while statement “C” is to help the
manufacturer manage changes to SaMD that may result in change of the category and to address
considerations specific to SaMD.

The SaMD definition statement should include a clear and strong statement about i ntended use,
including the following:

```
A. The “significance of the information provided by the SaMD to the h ealthcare
decision” which identifies the intended medical purpose of the SaMD. The statement
```

#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

```
should explain how the SaMD meets one or more of the purposes described in the
definition of a medical device^5 , e.g. supplying information for diagnosis, prevention,
monitoring, treatment etc. This statement should be structured in the following terms
as defined in section 5.1.
```
```
o Treat or diagnose
o Drive clinical management
o Inform clinical management
```
```
B. The “state of the h ealthcare situation or condition” that the SaMD is intended for. This
statement should be structured in the following terms as defined in section 5.2.
```
```
o Critical situation or condition
o Serious situation or condition
o Non-serious situation or condition
```
```
C. Description of the SaMD’s core functionality^6 which identifies the critical
features/functions of the SaMD that are essential to the intended significance of the
information provided by the SaMD to the healthcare decision in the intended healthcare
situation or condition. This description should include only the critical features. ( See
applicability of this in section 8.0, 9.0).
```
## 7.0 SaMD Categorization

This section provides an approach to categorize SaMD based on the factors identified in the
SaMD definition statement.

### 7.1 CATEGORIZATION PRINCIPLES

The following are necessary principles important in the categorization approach of SaMD.

- The categorization relies on an accurate and complete SaMD definition statement.
- The determination of the categories is the combination of the significance of the information
    provided by the SaMD to the healthcare decision and the healthcare situation or condition.
- The four categories (I, II, III, IV) are based on the levels of impact on the patient or public
    health where accurate information provided by the SaMD to treat or diagnose, drive or
    inform clinical management is vital to avoid death, long-term disability or other serious
    deterioration of health, mitigating public health.
- The categories are in relative significance to each other. Category IV has the highest level of
    impact, Category I the lowest.

(^5) IMDRF key definitions Final document “medical purposes” also repeated here in Section 3.3.
(^6) These could include specific functionality that is critical to maintain performance and safety profile, attributes
identified by risk management process undertaken by the manufacturer of SaMD.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- When a manufacturer's SaMD definition statement states that the SaMD can be used across
    multiple healthcare situations or conditions it is categorized at the highest category according
    to the information included in the SaMD definition statement.
- When a manufacturer makes changes to SaMD^7 , during the lifecycle that results in the
    change of the definition statement, the categorization of SaMD should be reevaluated
    appropriately. The SaMD is categorized according to the information included in the changed
    (new) SaMD definition statement.
- SaMD will have its own category according to its SaMD definition statement even w hen a
    SaMD is interfaced with other SaMD, other hardware medical devices, or used as a module
    in a larger system.

### 7.2 SAMD CATEGORIES

```
State of Healthcare
situation or condition
```
```
Significance of information provided by SaMD to
healthcare decision
Treat or
diagnose
```
```
Drive clinical
management
```
```
Inform clinical
management
Critical IV III II
Serious III II I
Non-serious II I I
```
### 7.3 CRITERIA FOR DETERMINING SAMD CATEGORY

Criteria for Category IV –

```
i. SaMD that provides information to treat or diagnose a disease or conditions in a critical
situation or condition is a Category IV and is considered to be of very high impact.
```
Criteria for Category III –

```
i. SaMD that provides information to treat or diagnose a disease or conditions in a serious
situation or condition is a Category III and is considered to be of high impact.
```
```
ii. SaMD that provides information to drive clinical management of a disease or conditions
in a critical situation or condition is a Category III and is considered to be of high impact.
```
Criteria for Category II –

```
i. SaMD that provides information to treat or diagnose a disease or conditions in a non-
serious situation or condition is a Category II and is considered to be of medium impact.
```
(^7) “SaMD changes” are defined in section 3.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

```
ii. SaMD that provides information to drive clinical management of a disease or conditions
in a serious situation or condition is a Category II and is considered to be of medium
impact.
```
```
iii. SaMD that provides information to inform clinical management for a disease or
conditions in a critical situation or condition is a Category II and is considered to be of
medium impact.
```
Criteria for Category I –

```
i. SaMD that provides information to drive clinical management of a disease or conditions
in a non-serious situation or condition is a Category I and is considered to be of low
impact.
```
```
ii. SaMD that provides information to inform clinical management for a disease or
conditions in a serious situation or condition is a Category I and is considered to be of
low impact.
```
```
iii. SaMD that provides information to inform clinical management for a disease or
conditions in a non-serious situation or condition is a Category I and is considered to be
of low impact.
```
### 7.4 EXAMPLES OF SAMD:

The examples below are intended to help illustrate the application of the framework and resulting
categories.

Category I V:

- SaMD that performs diagnostic image analysis for making treatment decisions in patients
    with acute stroke, i.e., where fast and accurate differentiation between ischemic and
    hemorrhagic s troke is crucial to choose early initialization of brain-saving intravenous
    thrombolytic therapy or interventional revascularization.

```
This example uses criteria IV.i from Section 7.3 in that the information provided by the
above SaMD is used to treat a fragile patient in a critical condition that is life
threatening, may require major therapeutic intervention, and is time sensitive.
```
- SaMD that calculates the fractal dimension of a lesion and surrounding skin and builds a
    structural map that reveals the different growth patterns to provide diagnosis or identify if
    the lesion is malignant or benign.

```
This example uses criteria IV.i from Section 7.3 in that the information provided by the
above SaMD is used to diagnose a disease that may be life threatening, may require
major therapeutic intervention, and may be time sensitive.
```

#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- SaMD that performs analysis of cerebrospinal fluid spectroscopy data to diagnose
    tuberculosis meningitis or viral meningitis in children.

```
This example uses criteria IV.i from Section 7.3 in that the information provided by the
above SaMD is used to diagnose a disease in a fragile population with possible broader
public health impact that may be life threatening, may require major therapeutic
intervention, and may be time sensitive.
```
- SaMD that combines data from immunoassays to screen for mutable pathogens/pandemic
    outbreak that can be highly communicable through direct contact or other means.

```
This example uses criteria IV.i from Section 7.3 in that the information provided by the
above SaMD is used to screen for a disease or condition with public health impact that
may be life threatening, may require therapeutic intervention and may be time critical.
```
Category III:

- SaMD that uses the microphone of a smart device to detect interrupted breathing during
    sleep and sounds a tone to rouse the sleeper.

```
This example uses criteria III.i from Section 7.3 in that the information provided by the
above SaMD is used to treat a condition where intervention is normally not expected to
be time critical in order to avoid death, long term disability or other serious
deterioration of health.
```
- SaMD that is intended to provide sound therapy to treat, mitigate or reduce effects of
    tinnitus for which minor therapeutic intervention is useful.

```
This example uses criteria III.i from Section 7.3 in that the information provided by the
above SaMD is used to treat a condition that may be moderate in progression, may not
require therapeutic intervention and whose treatment is normally not expected to be time
critical.
```
- SaMD that is intended as a radiation treatment planning system as an aid in treatment by
    using information from a patient and provides specific parameters that are tailored for a
    particular tumor and patient for treatment using a radiation medical device.

```
This example uses criteria III.ii from Section 7.3 in that the information provided by the
above SaMD is used as an aid in treatment by providing enhanced support to the safe
and effective use of a medical device to a patient in a critical condition that may be life
threatening and requires major therapeutic intervention.
```
- SaMD that uses data from individuals for predicting risk score in high-risk population for
    developing preventive intervention strategies for colorectal cancer.

```
This example uses criteria III.ii from Section 7.3 in that the information provided by the
above SaMD is used to detect early signs of a disease to treat a condition that may be
```

#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

```
life-threatening disease impacting high-risk populations, may require therapeutic
intervention and may be time critical.
```
- SaMD that is used to provide information by taking pictures, monitoring the growth or
    other data to supplement other information that a healthcare provider uses to diagnose if a
    skin lesion is malignant or benign.

```
This example uses criteria III.ii from Section 7.3 in that the information provided by the
above SaMD is used as an aid to diagnosing a condition that may be life-threatening,
may require therapeutic intervention and may be time critical by aggregating relevant
information to detect early signs of a disease.
```
Category II:

- SaMD that analyzes heart rate data intended for a clinician as an aid in diagnosis of
    arrhythmia.

```
This example uses criteria from II.ii Section 7.3 in that the information provided by the
above SaMD is used to aid in the diagnosis of a disease of a condition that may be
moderate in progression, may not require therapeutic intervention and whose treatment
is normally not expected to be time critical.
```
- SaMD that interpolates data to provide 3D reconstruction of a patient’s computer
    tomography scan image, to aid in the placement of catheters by visualization of the
    interior of the bronchial tree; in lung tissue; and placement of markers into soft lung
    tissue to guide radiosurgery and thoracic surgery.

```
This example uses criteria II.ii from Section 7.3 in that the information provided by the
above SaMD is used to aid in the next treatment intervention of a patient where the
intervention is not normally expected to be time critical in order to avoid death, long-
term disability, or other serious deterioration of health.
```
- SaMD that uses data from individuals for predicting risk score for developing stroke or
    heart disease for creating prevention or interventional strategies.

```
This example uses criteria II.iii from Section 7.3 in that the information provided by the
above SaMD is used to detect early signs of a disease to treat a condition that is not
normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
- SaMD that integrates and analyzes multiple tests utilizing standardized rules to provide
    recommendations for diagnosis in certain clinical indications, e.g., kidney function,
    cardiac risk, iron and anemia assessment.

```
This example uses criteria II.ii from Section 7.3 in that the information provided by t he
above SaMD is used to detect early signs of a disease to treat a condition that is not
```

#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

```
normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
```
Note: This example includes both serious and potentially non-serious conditions but per
the categorization principle in Section 7.1 when a manufacturer’s SaMD definition
statement states that the SaMD can be used across multiple healthcare situations or
condition it will be categorized at the highest category according to the SaMD definition
statement.
```
- SaMD that helps diabetic patients by calculating bolus insulin dose based on
    carbohydrate intake, pre-meal blood glucose, and anticipated physical activity reported to
    adjust carbohydrate ratio and basal insulin.

```
This example uses criteria II.ii from Section 7.3 in that the information provided by the
above SaMD is used to aid in treatment of a condition not normally expected to be time
critical in order to avoid death, long-term disability, or other serious deterioration of
health.
```
Category I:

- SaMD that sends ECG rate, walking speed, heart rate, elapsed distance, and location for
    an exercise-based cardiac rehabilitation patient to a server for monitoring by a qualified
    professional.

```
This example uses criteria I.ii from Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that is
not normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
- SaMD that collects data from peak-flow meter and symptom diaries to provide
    information to anticipate an occurrence of an asthma episode.

```
This example uses criteria I.ii from Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide best option to mitigate a condition that
is not normally expected to be time critical in order to avoid death, long-term disability,
or other serious deterioration of health.
```
- SaMD that analyzes images, movement of the eye or other information to guide next
    diagnostic action of astigmatism.

```
This example uses criteria I.i from Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that
```

#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

```
even if not curable can be managed effectively and whose interventions are normally
noninvasive in nature.
```
- SaMD that uses data from individuals for predicting risk score (functionality) in healthy
    populations for developing the risk (medical purpose) of migraine (non-serious condition.

```
This example uses criteria I.i from Section 7.3 in that the the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that
even if not curable can be managed effectively and whose interventions are normally
noninvasive in nature.
```
- SaMD that collects output from a ventilator about a patient's carbon dioxide level and
    transmits the information to a central patient data repository for further consideration.

```
This example uses criteria I. ii from Section 7.3 in that the the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that is
not normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
- SaMD that stores historical blood pressure information for a health care provider's later
    review.

```
This example uses criteria I.ii from Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that is
not normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
- SaMD intended for image analysis of body fluid preparations or digital slides to perform
    cell counts and morphology reviews.

```
This example uses criteria I.ii from Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that is
not normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
- SaMD intended for use by elderly patients with multiple chronic conditions that receives
    data from wearable health sensors, transmits data to the monitoring server, and identifies
    higher-level information such as tachycardia and signs of respiratory infections based on
    established medical knowledge and communicates this information to caregivers.

```
This example uses criteria I.ii from Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that is
```

#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

```
not normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
- SaMD that uses hearing sensitivity, speech in noise, and answers to a questionnaire about
    common listening situations to self-assess for hearing loss.

```
This example uses criteria from I.ii Section 7.3 in that the information provided by the
above SaMD is an aggregation of data to provide clinical information that will not
trigger an immediate or near term action for the treatment of a patient condition that is
not normally expected to be time critical in order to avoid death, long-term disability, or
other serious deterioration of health.
```
## 8.0 General Considerations for SaMD

SaMD often forms part of a clinical workflow sequence in order to improve diagnosis, treatment
and patient management. However, issues with the design and/or implementation of SaMD into a
workflow can lead to users making incorrect choices / decisions and can cause delays in
decisions being made - this may lead to adverse consequences for patients.

Developing SaMD that are safe entails identifying risks and establishing measures that give
confidence that the risks are acceptable. It is generally accepted that testing of software is not
sufficient to determine that it is safe in operation. As a consequence, it is recognized that
confidence should be built into software in order to assure its safety.

IEC 62304 is a standard for life-cycle development of medical device software. The standard
specifies a risk-based decision model, defines some testing requirements, and highlights three
major principles that promote safety relevant to SaMD:

- Risk management;
- Quality management; and
- Methodical and systematic systems engineering according to best industry practices.

The combination of these concepts allows SaMD manufacturers to follow a clearly structured
and consistently repeatable decision-making process to promote safety for SaMD.

Further information on these major principles is provided below followed by discussion on some
specific considerations in the areas of:

- Socio-technical environment
- Technology and system environments
- Information security with respect to safety

### 8.1 DESIGN AND DEVELOPMENT

Manufacturers should select and implement an adequate process for the planning, design,
development, deployment, and documenting of robust and dependable software commensurate


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

with risk—as informed by its intended purpose, reasonable foreseeable use, and t he understood
and defined socio-technical environment of use.

```
Safety needs to be addressed early in the design and development process.
```
Development of software in a quality-assured manner should consider the appropriate selection
and implementation of system design and development methods that:

- Include a methodical and systematic development process using models, methods,
    architecture, and design-modelling techniques appropriate for the development
    language(s) and the device’s intended purpose,
- Cover the various software lifecycle stages through the application of software
    development standards, e.g., IEC 62304, and use of software engineering guidebooks,
    e.g., SWEBoK guide, SEBoK guide, and
- Systematically and methodically document the design and development process (using
    tools as appropriate.)

8.1.1 Post Market Surveillance
Software risks can never be totally eliminated so SaMD manufacturers should continually
monitor customer issues to maintain the safety level. A monitoring process should include ways
to capture customer feedback, e.g., through inquiries, complaints, market studies, focus groups,
servicing, etc. The inherent nature of software including SaMD allows for efficient methods to
understand and capture user experiences. It is recommended that SaMD manufacturers utilize
these feedback techniques to understand failure modes and perform analysis to address safety
situations. It is also recommended that SaMD manufacturers extend their monitoring to
automatically detect errors of the software or s ystem, i.e., discover and recover from an error
before a failure can occur.

General considerations associated with the monitoring of SaMD include:

1. Due to its non-physical nature, a SaMD may be duplicated and numerous copies and
    widely spread, often outside the control of the manufacturer.
2. Often an update made available by the manufacturer is left to the user of the SaMD to
    install. Manufacturers should make sure that appropriate mitigations address any risks
    that arise from the existence of different versions of the SaMD on the market.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

3. Incident investigations should consider any specific case or combination of use cases that
    may have contributed to the failure and as appropriate manufacturers should consider
    accident reconstruction principles, e.g., data logging, black box recorder, etc.^8

### 8.2 CHANGES

Manufacturers of SaMD are expected to have an appropriate level of control to manage changes.
Due to the non-physical nature of software, a software change management process needs
specific considerations to achieve the intended result regarding traceability and documentation.

These specific considerations include:

- Socio-technical environment considerations
- Technology and system environment considerations
- Information security with respect to safety considerations

```
SaMD changes may have a significant unforeseeable effect on the healthcare
situation or condition and socio-technical environment of use if not managed
systematically, not only with respect to a design change in itself, but also to
the impact of the changed software after it is installed and implemented.
```
With any product lifecycle, change is inevitable. Failures occur and may be due to errors,
ambiguities, oversights or misinterpretation of the specification that the software is intended to
satisfy, carelessness or incompetence in writing code, inadequate testing, incorrect or unexpected
usage of the software or other unforeseen problems. An SaMD may also fail with changes to the
running environment. Changes to SaMD or its operating environment can affect its safety,
quality and performance.

SaMD changes refer to any modifications made throughout the lifecycle of the SaMD including
the maintenance phase. The nature of software maintenance changes can include adaptive (e.g.
keeps pace with the changing environment), perfective (e.g. recoding to improve software
performance), corrective (e.g. corrects discovered problems), or preventive changes (e.g. corrects
latent faults in the software product before they become operational faults). These changes
should be clearly identified and defined with a method of tracing the change to the specific
affected software.

In order to effectively manage the changes and their impact, manufacturers must perform a risk
assessment to determine if the change(s) affect the SaMD categorization and the core
functionality of the SaMD as outlined in the definition statement.

8 Leveson, N. 2012. Engineering a Safer World: Systems Thinking Applied to Safety. Cambridge, MA, USA: MIT
Press.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

Changes should undergo appropriate verification and validation before being released by the
manufacturer for use.

Examples of software changes (some may be considered significant and others not):

- Modification to an algorithm affecting the diagnosis or therapy delivered;
- A software change that affects the way data is read or interpreted by the user, such that
    the treatment or diagnosis of the patient may be altered when compared to the previous
    version of the software;
- Addition of a new feature to the software that may change the diagnosis or therapy
    delivered to the patient;
- A software change that incorporates a change to the operating system or change to the
    configuration on which the SaMD runs;
- A software change that affects clinical workflow.

## 9.0 Specific Considerations for SaMD

### 9.1 SOCIO-TECHNICAL ENVIRONMENT CONSIDERATIONS

The term socio-technical environment concerns the SaMD's setting of use - often comprising
hardware, networks, software, and people. More formally, it may be characterized into spatial
(e.g., location), activity (e.g., workflow), social (e.g., responsibility), technological (e.g., devices,
systems, data sources, and connections), and physical (e.g., ambient conditions) components^9.

SaMD supplies information and/or a structure for information.

```
The proper and safe functioning of SaMD is highly dependent on a sufficient
and common understanding of the socio-technical environment that includes
the manufacturer and the user.
```
Manufacturers should be aware of the socio-technical environment where inadequate
considerations could lead to incorrect, inaccurate, and/or delayed diagnoses and treatments;

(^9) (Adapted from IEC 62366)


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

and/or additional cognitive workload (which may, over time, make clinicians more susceptible to
making mistakes)^10.

Similarly, users should also be aware of the socio-technical environment as presumed and
designed for (limitations of the SaMD’s capabilities) and by the manufacturer, as not being
aware may lead to overreliance or other inaccurate use of the SaMD.

For example:

- If the user does not have sufficient skills and expertise for correct operation of the SaMD,
    possible inaccurate output data may not be questioned. The same may happen if the user
    becomes habituated and over-reliant on SaMD over time.
- The introduction of SaMD sometimes changes clinical workflows in unanticipated ways;
    these changes may be detrimental to patient safety.
- The user may seek alternate pathways to achieve a particular functionality, otherwise
    called a workaround. When workarounds circumvent built-in safety features of a
    product, patient safety may be compromised.

Considerations for the manufacturer when identifying effects/implications and appropriate
measures to safety and performance of SaMD throughout the product's design, development, and
installation:

- Transparency of information on limitations with algorithms, clinical model, quality of
    data used to build the models, assumptions made, etc. can help users question the
    validity of output of the SaMD and avoid making incorrect or poor decisions;
- Integrating SaMD within real-world clinical workflows (including sufficient involvement
of users from all relevant disciplines) requires attention to in situ use and tasks to ensure
appropriate use of safety features;
- SaMD (and other systems connected to the SaMD) may be configured by the user in
different ways than intended or foreseen by the manufacturer;
- Though not specific to SaMD, design of the user interface including: whether designs are
overly complex (e.g., multiple, complicated screens), the appropriateness of designs for
the target platform (e.g., smart phone screen versus desktop monitor), the dynamic nature
of data (e.g., showing information at appropriate times and for an appropriate duration);

(^10) Leveson, N. 2012. Engineering a Safer World: Systems Thinking Applied to Safety. Cambridge, MA, USA: MIT
Press.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- Though not specific to SaMD, identification of appropriate means to display information
    such that it is understood by the intended user (e.g., usability including regionalization
    parameters, language translation, and selection/display of units);
- Communicating relevant information to the user (based on the activities conducted
    above) for the purpose of:

```
o Enabling the user to decide whether or not the user can use the device in the
organization in terms of available hardware, competence, network, required
quality for data input. And, if he/she decides to do this, information necessary to
do those measures in order to use it: inform users, establish different routines,
obtain necessary hardware.
```
```
o Enabling correct installation and configuration of SaMD for appropriate
integration with clinical workflows.
```
### 9.2 TECHNOLOGY AND SYSTEM ENVIRONMENT CONSIDERATIONS.........................................

Technology and system environment refers to the ecosystem where the SaMD resides, including
installed systems, interconnections, and hardware platform(s). Instructions on how to verify the
appropriateness of installation of and update to SaMD as well as any changes made to the
system environment (e.g., hardware and software) should be provided to the user. Reliance on
hardware over which the manufacturer does not have control (operating systems not designed for
a medical purpose, general-purpose hardware, networks and servers, Internet, links) should be
considered and addressed by the manufacturer during design and development of SaMD (for
instance, by designing robust and resilient SaMD designs).

```
SaMDs are always dependant on a hardware platform and often a connected
environment. SaMD can be affected by cross-link interconnections – both
physical connections and interoperability, i.e., the seamless communication
between devices, technology and people.
```
Disruption in the ecosystem (e.g., resulting from service disruptions, systems maintenance or
upgrades, platform failures) can result in loss of information, delayed, corrupted, or mixed
patient information, or inaccurate information which may lead to incorrect or inaccurate
diagnoses and/or treatments.
For example: an incorrect diagnosis is made after the connection to a clinical dataset was lost
because the patient diagnosis data is not available.

Considerations for the manufacturer when identifying effects/implications to safety and
performance of SaMD:

- Connections to other systems (e.g., reliability of the connection, resilience, quality of
    service, access, security, load capacity of connections to other systems and connection
    methods, system integration)


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- Presenting information to the users and system integrators about the system requirements
    and resultant performance of the SaMD (e.g., the effect that changes to firewall rules
    might have on the operation of the system)
- Hardware platform(s)—such as smart phones, PC, servers—(e.g., reliability,
    dependencies, and interconnections with others hardware and software);
- Operating system(s) platform—such as Windows, GNU/Linux—compatibility; and
- Modifications and changes to the SaMD integration (e.g., platform updates) may have
    effects on SaMD that the manufacturer did not anticipate/foresee.

### 9.3 INFORMATION SECURITY WITH RESPECT TO SAFETY CONSIDERATIONS

```
Information security may be defined as the preservation of confidentiality, integrity and
availability of information^11.
```
```
Incorrect management or transmission of information by an SaMD can lead to
incorrect or delayed diagnosis or treatment.
```
SaMD may be affected by particular factors relating to information security that may affect the
integrity, availability, or accessibility of information output from the SaMD needed for correct
diagnosis or treatment:

- SaMD are typically used by a variety of users with different access needs, e.g., restricted
    access or varying information security requirements
- Platforms where a S aMD is installed typically runs many other software applications.
- SaMD are typically connected to the Internet, networks, databases, or servers with
    varying information security requirements.

Considerations for the manufacturer when identifying implications for safety and performance of
SaMD:

- The SaMD information security and privacy control requirements may need to be
    balanced with the need for timely information availability.

(^11) (From ISO/IEC 27000:2009 - Information technology — Security techniques — Information security
management systems — Overview and vocabulary)


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- Information security requires the identification and implementation of safe (and
    formalized) ways to store, convert and/or transmit data.
- The design should use appropriate control measures to address data integrity when
    common information is accessed by multiple applications and users.
- Manufacturers should make it feasible for users to safely implement information security
    updates.
- The protection of sensitive information requires support for sufficient access control and
    appropriate restriction to system settings and assets for important data.
- The design should address possible adverse system interactions with the inclusion of
    appropriate resilience and robustness measures.
- Instructions for users related to i nformation security should include how to safely:

```
o Install SaMD in appropriate operating environments (e.g., OS, integration of other
software);
```
```
o Manage authentication mechanisms; and
```
```
o Update security software/spyware, operating environments, and other systems and
applications, etc.
```
## 10.0 Appendix

### 10.1 CLARIFYING SAMD DEFINITION

This Appendix provides a representative list of features and functionalities that either meet or
don’t meet the definition of SaMD. This list is not exhaustive; it is only intended to provide
clarity and assistance in identifying when a feature or functionality is considered to be SaMD.

Examples of software that are SaMD:

- Software with a medical purpose that operates on a general purpose computing platform,
    i.e., a computing platform that does not have a medical purpose, is considered SaMD. For
    example, software that is intended for diagnosis of a condition using the tri-axial
    accelerometer that operates on the embedded processor on a consumer digital camera is
    considered a SaMD.
- Software that is connected to a hardware medical device but is not needed by that
    hardware medical device to achieve its intended medical purpose is SaMD and not an
    accessory to the hardware medical device. For example, software that allows a
    commercially available smartphone to view images for diagnostic purposes obtained
    from a magnetic resonance imaging (MRI) medical device is SaMD and not an accessory
    to MRI medical device.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

- The SaMD definition notes states that “SaMD is capable of running on general purpose (non-
    medical purpose) computing platforms.” SaMD running on these g eneral purpose computing
    platform could be located in a hardware medical device, For example, software that
    performs image post-processing for the purpose of aiding in the detection of breast cancer
    (CAD - computer-aided detection software) running on a general purpose computing
    platform located in the image-acquisition hardware medical device is SaMD.
- The SaMD definition notes states that “SaMD may be interfaced with other medical devices,
    including hardware medical devices and other SaMD software, as well as general purpose
    software.” Software that provides parameters that become the input for a different hardware
    medical device or other SaMD is SaMD. For example, treatment planning software that
    supplies information used in a linear accelerator is SaMD.

Examples of software that are not SaMD:

- The SaMD definition states “ SaMD is defined as software intended to be used for one or
    more medical purposes that perform these purposes without being part of a hardware medical
    device”. Examples of software that are considered “part of” include software used to “drive
    or control” the motors and the pumping of medication in an infusion pump; or software used
    in closed loop control in an implantable pacemaker or other types of hardware medical
    devices. These types of software, sometimes referred to as “embedded software”, “firmware”,
    or “micro-code” are, not SaMD”.
- Software required by a hardware medical device to perform the hardware’s medical
    device intended use is not SaMD even if/when sold separately from the hardware medical
    device.
- Software that relies on data from a medical device, but does not have a medical purpose,
    e.g., software that encrypts data for transmission from a medical device is not SaMD.
- Software that enables clinical communication and workflow including patient
    registration, scheduling visits, voice calling, video calling is not SaMD.
- Software that monitors performance or proper functioning of a device for the purpose of
    servicing the device, e.g., software that monitors X -Ray tube performance to anticipate
    the need for replacement; or software that integrates and analyzes laboratory quality
    control data to identify increased random errors or trends in calibration on IVDs is not
    SaMD.
- Software that provides parameters that become the input for SaMD is not SaMD if it does
    not have a medical purpose. For example, a database including search and query
    functions by itself or when used by SaMD is not SaMD.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

### 10.2 ANALYSIS OF SAMD FRAMEWORK WITH EXISTING CLASSIFICATIONS

This Annex is intended to clarify the following:

A – Categorization of SaMD relative to medical device classification

There are different classification schemes for different purposes.

Typically classification is based on a set of parameters/questions that assigns the object of
interest into groups that suit a certain purpose.

Classifications may have the purpose to determine, for example

- Appropriate levels of regulatory oversight such as requirements for
    o Levels of third party intervention
    o Levels of conformity controls
    o Levels of quality system
- Appropriate levels of technical measures, for example
    o Technical protective means, e .g ., for
        Laser protection 1,2 or 3
        electrical isolation, protective earth or double insulated
        ingress of liquids, IP XX

Classification of medical devices is commonly focused on regulatory controls based on risk
classes.

Categorization for SaMD, as in the case of laser protection, is only identifying different
categories of SaMD by level of impact. Categorization in this document by itself does not imply
regulatory controls needed to manage risks. It is only intended to provide guidance for
appropriate considerations for SaMD.

B - Relationship between this document and GHTF documents.

It is important to note the following to understand the relationship between the categorization
framework in this document and the classification principles for medical devices and i n vitro
diagnostic medical devices:

- GHTF classification principles, unlike this document, were intended to build classification
    rules for regulatory control purposes. As explained earlier, this document identifies different
    categories of SaMD by level of impact and does not address corresponding regulatory risk
    classes identified in GHTF documents.
- The high-level principles used for identifying SaMD categories build substantially on the
    principles (rationale) underlying the classification rules established in the GHTF
    classification principles documents. Key factors like individual risks, public health risks, user
    skills, and importance of the information provided are common to both frameworks.


#### _____________________________________________________________________________________________

_____________________________________________________________________________________________

## 11.0 References

IMDRF SaMD WG N10 / Software as a Medical Device: Key Definitions

GHTF/SG1/N70:2011 “Label and Instructions for Use for Medical Devices”

GHTF/SG1/N71:2012 “Definition of the Terms ‘Medical Device’ and ‘In Vitro Diagnostic
(IVD) Medical Device”

IEC 62304:2006 - Medical device software -- Software life cycle processes

ISO/IEC 14764:2006 Software Engineering — Software Life Cycle Processes — Maintenance

Guide to the Software Engineering Body of Knowledge - SWEBOK (2004), pp. 1-202 by Alain
Abran, Pierre Bourque, Robert Dupuis, James W. Moore, Leonard L. Tripp edited by Alain
Abran, Pierre Bourque, Robert Dupuis, James W. Moore, Leonard L. Tripp

[SEBoK] Guide to the Systems Engineering Body of Knowledge (http://www.sebokwiki.org/)

ISO/IEC 27000:2009 - Information technology — Security techniques — Information security
management systems

IEC 62366:2007 Medical devices — Application of usability engineering to medical devices

Leveson, N. ‘Engineering a Safer World: Systems Thinking Applied to Safety, MIT, USA
(2011)


