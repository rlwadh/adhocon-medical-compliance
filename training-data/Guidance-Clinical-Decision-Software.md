# Clinical Decision Support Software

# Guidance for Industry and

# Food and Drug Administration Staff

##### Document issued on September 28, 2022.

##### The draft of this document was issued on September 27, 2019.

For questions about this document regarding CDRH-regulated devices, contact the Division of
Digital Health via email at DigitalHealth@fda.hhs.gov. For questions about this document
regarding CBER-regulated devices, contact the Office of Communication, Outreach, and
Development (OCOD) at 1- 800 - 835 - 4709 or 240- 402 - 8010, or by email at ocod@fda.hhs.gov. For
questions about this document regarding CDER-regulated products, contact Center for Drug
Evaluation and Research, Food and Drug Administration, 10903 New Hampshire Ave., Bldg. 51,
Rm. 6158, Silver Spring, MD 20993-0002, 301- 796 - 8936. For questions about this document
regarding combination products, contact the Office of Combination Products at
combination@fda.gov.

```
U.S. Department of Health and Human Services
Food and Drug Administration
Center for Devices and Radiological Health
Center for Biologics Evaluation and Research
Center for Drug Evaluation and Research
Office of Combination Products in the Office of the Commissioner
```

## Preface

### Public Comment

You may submit electronic comments and suggestions at any time for Agency consideration to
https://www.regulations.gov. Submit written comments to the Dockets Management Staff, Food
and Drug Administration, 5630 Fishers Lane, Room 1061, (HFA-305), Rockville, MD 20852.
Identify all comments with the docket number FDA- 2017 - D- 6569. Comments may not be acted
upon by the Agency until the document is next revised or updated.

### Additional Copies

##### CDRH

Additional copies are available from the Internet. You may also send an email request to
CDRH-Guidance@fda.hhs.gov to receive a copy of the guidance. Please include the document
number 1400062 and complete title of the guidance in the request.

##### CBER

Additional copies are available from the Center for Biologics Evaluation and Research (CBER),
Office of Communication, Outreach, and Development (OCOD), 10903 New Hampshire Ave.,
WO71, Room 3128, Silver Spring, MD 20903, or by calling 1- 800 - 835 - 4709 or 240- 402 - 8010,
by email, ocod@fda.hhs.gov, or from the Internet at
https://www.fda.gov/vaccines-blood-biologics/guidance-compliance-regulatory-information-
biologics/biologics-guidances.

##### CDER

Additional copies are available from the Center for Drug Evaluation and Research, Office of
Communications, Division of Drug Information, 10001 New Hampshire Ave., Hillandale Bldg.,
4 th Floor, Silver Spring, MD 20993-0002, or by calling 8 55 - 543 - 3784 or 301- 796 - 3400, or by e-
mail, druginfo@fda.hhs.gov, or from the Internet at https://www.fda.gov/drugs/guidance-
compliance-regulatory-information/guidances-drugs.


### Table of Contents

I. Introduction ............................................................................................................................. 4

II. Background .............................................................................................................................. 5

III. Scope ....................................................................................................................................... 6

IV. Interpretation of Criteria in Section 520(o)(1)(E) of the FD&C Act ...................................... 7

```
(1) Not intended to acquire, process, or analyze a medical image or a signal from an in
vitro diagnostic device or a pattern or signal from a signal acquisition system ..................... 7
(2) Intended for the purpose of displaying, analyzing, or printing medical information
about a patient or other medical information .......................................................................... 9
(3) Intended for the purpose of supporting or providing recommendations to an HCP
about prevention, diagnosis, or treatment of a disease or condition ..................................... 10
(4) Intended for the purpose of enabling an HCP to independently review the basis for the
recommendations that such software presents so that it is not the intent that the HCP rely
primarily on any of such recommendations to make a clinical diagnosis or treatment
decision regarding an individual patient ............................................................................... 13
```
V. Examples ............................................................................................................................... 15

```
A. Examples of Non-Device CDS Software Functions ........................................................ 15
B. Examples of Non-Device CDS Software Functions - Criterion 4 ................................... 19
C. Examples of Device Software Functions......................................................................... 20
```

# Clinical Decision Support Software

# Guidance for Industry and

# Food and Drug Administration Staff

**_This guidance represents the current thinking of the Food and Drug Administration (FDA or
Agency) on this topic. It does not establish any rights for any person and is not binding on
FDA or the public. You can use an alternative approach if it satisfies the requirements of the
applicable statutes and regulations. To discuss an alternative approach, contact the FDA staff
or Office responsible for this guidance as listed on the title page._**

## I. Introduction

The Food and Drug Administration (FDA) has long regulated software that meets the definition
of a device in section 201(h) of the Federal Food, Drug, and Cosmetic Act (FD&C Act),
including software that is intended to provide decision support for the diagnosis, treatment,
prevention, cure, or mitigation of diseases or other conditions (often referred to as clinical
decision support software). This guidance clarifies the scope of FDA’s oversight of clinical
decision support software intended for health care professionals (HCPs) as devices.^1 Not all
clinical decision support software used in healthcare settings are devices and therefore subject to
FDA oversight as a device.

FDA recognizes that the term “clinical decision support” or “CDS” is used broadly and in
different ways, depending on the context.^2 In the Food and Drug Administration Safety and
Innovation Act (FDASIA) Health IT Report of 2014, CDS is described as a variety of tools
including, but not limited to: computerized alerts and reminders for providers and patients;
clinical guidelines; condition-specific order sets; focused patient data reports and summaries;
documentation templates; diagnostic support; and contextually relevant reference information.^3
For the purposes of this guidance, the term “Non-Device CDS” is used to refer to decision
support software functions that do not meet the definition of device in section 201(h) of the
FD&C Act. In accordance with section 201(h) of the FD&C Act, FDA uses criteria from section

(^1) For the purposes of this guidance, the FDA uses the term HCP to mean an individual who is licensed, registered, or
certified by a State, territory, or other governing body, to administer health care, including but not limited to, nurse
practitioner, registered nurse, licensed practical nurse, clinical social worker, dentist, occupational therapist,
pharmacist, physical therapist, physician, physician assistant, psychologist, respiratory therapist, speech-language
pathologist, technologist, or any other practitioner or allied health professional.
(^2) For example, in one context CDS has been described as providing HCPs and patients with knowledge and person-
specific information, intelligently filtered or presented at appropriate times, to enhance health and health care. _See_
Office of the National Coordinator for Health Information Technology, “What is Clinical Decision Support (CDS)?”
at https://www.healthit.gov/topic/safety/clinical-decision-support.
(^3) FDASIA Health IT Report, page 26, April 2014, available at https://www.fda.gov/about-fda/cdrh-reports/fdasia-
health-it-report.


520(o) of the FD&C Act, which was added to the FD&C Act by the 21st Century Cures Act
(Cures Act), to determine if a software function is Non-Device CDS (see Section III). Certain
CDS software functions do not meet the criteria in section 520(o)(1)(E) of the FD&C Act and are
therefore device functions. Furthermore, some multiple function device products may include
both Non-Device CDS software functions and device software functions (CDS or otherwise). In
such situations, FDA would use the approach outlined in FDA’s guidance Multiple Function
Device Products: Policy and Considerations,^4 when assessing the safety and effectiveness of the
device software function, consistent with section 520(o)(2) of the FD&C Act.

The purpose of this guidance is to describe FDA’s regulatory approach to CDS software
functions. The Agency’s approach reflects changes to the FD&C Act made by the Cures Act,
which amended section 520 and excludes certain software functions from the device definition.
The focus of this guidance is to clarify the types of CDS software functions that are excluded
from the definition of device by the criteria in section 520(o)(1)(E) of the FD&C Act. This
guidance further clarifies that FDA’s existing digital health policies continue to apply to software
functions that meet the definition of a device, including those that are intended for use by
patients or caregivers.^5 For example, some decision support software functions may be identified
in other guidance documents as software functions for which, based on our current understanding
of the risks of these software functions, FDA does not intend at this time to enforce compliance
with applicable device requirements of the FD&C Act, including, but not limited to, premarket
clearance and approval requirements.

This guidance provides many examples of how FDA intends to consider different kinds of
software functions, including Non-Device CDS software functions and device software
functions.

In general, FDA’s guidance documents do not establish legally enforceable responsibilities.
Instead, guidances describe the Agency’s current thinking on a topic and should be viewed only
as recommendations, unless specific regulatory or statutory requirements are cited. The use of
the word _should_ in Agency guidances means that something is suggested or recommended, but
not required.

### II. Background

(^4) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/multiple-function-
device-products-policy-and-considerations.
(^5) FDA intends to be consistent with existing policies, including the following guidance documents: Policy for
Device Software Functions and Mobile Medical Applications (https://www.fda.gov/regulatory-information/search-
fda-guidance-documents/policy-device-software-functions-and-mobile-medical-applications), Software as a Medical
Device (SaMD): Clinical Evaluation (https://www.fda.gov/regulatory-information/search-fda-guidance-
documents/software-medical-device-samd-clinical-evaluation), Medical Device Data Systems, Medical Image
Storage Devices, and Medical Image Communications Devices (https://www.fda.gov/regulatory-information/search-
fda-guidance-documents/medical-device-data-systems-medical-image-storage-devices-and-medical-image-
communications-devices), and General Wellness: Policy for Low Risk Devices (https://www.fda.gov/regulatory-
information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices).


Section 3060(a) of the Cures Act amended the FD&C Act to add section 520(o) of the FD&C
Act, which excludes certain software functions from the definition of device in section 201(h) of
the FD&C Act. Certain CDS software functions are excluded from the definition of device by
section 520(o)(1)(E) of the FD&C Act if the software functions meet all of the following four
criteria:

```
(1) not intended to acquire, process, or analyze a medical image or a signal from an in
vitro diagnostic device or a pattern or signal from a signal acquisition system (section
520(o)(1)(E) of the FD&C Act);
```
```
(2) intended for the purpose of displaying, analyzing, or printing medical information
about a patient or other medical information (such as peer-reviewed clinical studies and
clinical practice guidelines) (section 520(o)(1)(E)(i) of the FD&C Act);
```
```
(3) intended for the purpose of supporting or providing recommendations to a health care
professional about prevention, diagnosis, or treatment of a disease or condition (section
520(o)(1)(E)(ii) of the FD&C Act); and
```
```
(4) intended for the purpose of enabling such health care professional to independently
review the basis for such recommendations that such software presents so that it is not the
intent that such health care professional rely primarily on any of such recommendations
to make a clinical diagnosis or treatment decision regarding an individual patient (section
520(o)(1)(E)(iii) of the FD&C Act).^6
```
To explain FDA’s interpretation of section 520(o)(1)(E), in Section IV this guidance discusses
each element of section 520(o)(1)(E) of the FD&C Act.

### III. Scope

This guidance describes CDS software functions that do not meet the device definition (Non-
Device CDS) based on the criteria in section 520(o) of the FD&C Act, which excludes certain
software functions from the device definition, including certain CDS software functions intended
for HCPs.

This guidance presents the Agency’s current thinking on which CDS software functions are
excluded from the definition of device by section 520(o)(1)(E) of the FD&C Act. The guidance
does not address which other FDA statutory or regulatory requirements apply to device software
functions, including which regulatory requirements may apply to a device software function that

(^6) The Cures Act provides that a software function described in section 520(o)(1)(E) of the FD&C Act will not be
excluded from the device definition under section 201(h) if the software meets the criteria under section
513(a)(1)(C) of the FD&C Act or if the software is used in the manufacture and transfusion of blood and blood
components to assist in the prevention of disease in humans (section 520(o)(4)(B) and (C) of the FD&C Act. In
addition, the Cures Act provides that a software function will not be excluded if the Secretary of Health and Human
Services issues a final order, after notification and a period for comment, that the software function would be
reasonably likely to have serious adverse health consequences ( section 520(o)(3) of the FD&C Act).


is part of a combination product, nor does it address labeling requirements for decision support
software disseminated by or on behalf of a drug or biological product sponsor.

### IV. Interpretation of Criteria in Section 520(o)(1)(E) of the 

### FD&C Act 

The following sections explain FDA’s interpretation of each of the four criteria in section
520(o)(1)(E) of the FD&C Act. In order for a software function to be excluded from the device
definition by this provision, it must meet all four criteria. Stated simply, these criteria describe
the types of CDS that are not regulated as devices. Non-Device CDS software functions do not
acquire, process, or analyze images, signals from an in vitro diagnostic device (IVD), or patterns
or signals from a signal acquisition system (Criterion 1). Non-Device CDS software functions
display, analyze, or print medical information (Criterion 2) in order to provide recommendations
about a patient’s care to an HCP user (Criterion 3). Taken together, Criterion 1 and Criterion 2
describe the types of data inputs used in devices (Criterion 1) and the types of data inputs used in
Non-Device CDS (Criterion 2). Non-Device CDS software functions provide sufficient
information about the basis for the recommendations to the HCP user, so that the user does not
rely primarily on any of the recommendations to make a clinical decision about an individual
patient (Criterion 4).

##### (1) Not intended to acquire, process, or analyze a medical image or

##### a signal from an in vitro diagnostic device or a pattern or

##### signal from a signal acquisition system

Under section 520(o)(1)(E), software functions that are intended to acquire, process, or analyze a
medical image, a signal from an IVD, or a pattern or signal from a signal acquisition system and
are intended for a purpose identified in section 201(h) of the FD&C Act remain devices and
therefore are subject to FDA oversight. In other words, if the type of data described in Criterion
1 (i.e., medical image or a signal from an IVD or a pattern/signal from a signal acquisition
system) is used an input, then the software function remains a device within the meaning of
section 201(h). Such products have been regulated as devices for many years.

We generally consider the term _medical image_ to include those images generated by use of
medical imaging systems (e.g., computed tomography (CT), x-ray, ultrasound, magnetic
resonance imaging (MRI)) to view any part(s) of the body or images acquired for a medical
purpose (e.g., pathology, dermatology). Images that were not originally acquired for a medical
purpose but are being processed or analyzed for a medical purpose are also considered medical
images.

We generally consider the term _signal_ to include those signals that typically require use of either:

· An IVD, which can include an electrochemical or photometric response generated by an
assay and instrument that may be further processed by software to generate a clinical test
result; or


· A signal acquisition system that measures a parameter from within, attached to, or external to
the body for a medical purpose and often includes but is not limited to:
o Use of sensors (e.g., electrocardiogram (ECG) leads) along with electronics and
software function that is used for signal generation (e.g., ECG);
o Collections of samples or specimens such as tissue, blood, or other fluids (e.g.,
conducting a pathological study using software such as digital pathology); or
o Use of radiological imaging systems (e.g., computed tomography (CT)) and a
software function for image generation.

FDA interprets the term _pattern_ in this provision to refer to multiple, sequential, or repeated
measurements of a signal or from a signal acquisition system. Examples include:

```
· For ECG, an electrical signal acquired from the body is processed to create an ECG
waveform and QRS complex, which are considered patterns;
· For Next Generation Sequencing (NGS), a fluorescent signal on tagged DNA is
processed by modification or transformation into base pairs and sequences. Genetic
sequences, including datasets of sequence variants that differ from reference sequences
and datasets filtered to represent disease-associated variations (such as variant call format
files or VCFs), are examples of patterns; or
· For continuous glucose monitors (CGM), a photometric or electrochemical signal
generated by an assay and instrument is processed to generate repeated glucose
measurements over time, which is considered a pattern.
```
FDA considers software functions that assess or interpret the clinical implications or clinical
relevance of a signal, pattern, or medical image to be software functions that do not meet
Criterion 1 because they acquire, process, or analyze. Examples include:

```
· Software functions that process or analyze a medical image, such as enhancement,
manipulation, making measurements, identifying normal/abnormal structures,
determining size/shape/location of a suspected nodule, or functions within computer
aided diagnostics (CADx) or computer aided detection (CADe) systems, do not meet
Criterion 1.
· Software functions that process or analyze an ECG waveform or QRS complex, such as
measuring repeated complexes, measuring variation from baseline, or detecting heart
rate, arrhythmias, or structural abnormalities, do not meet Criterion 1.
· Software functions that process or analyze the genetic sequence or patterns from an NGS
analyzer to identify genetic variants or mutations or their clinical implications or
relevance do not meet Criterion 1.
· Software functions that process or analyze an electrochemical or photometric response
generated by an assay and instrument to generate a clinical test result, such as
determining a potassium level, do not meet Criterion 1.
```
Although many signal acquisition systems are intended to monitor signals for medical purposes
and, therefore, are considered medical devices, some are not. For example, activity monitors or
other signal acquisition systems that measure physiological parameters that are not specifically
intended or marketed for a purpose identified in the device definition are not medical devices.


We encourage manufacturers to engage with FDA if a signal acquisition system previously only
considered for a medical purpose is intended to be used for a non-medical purpose. For example,
software functions that use input from sensors and a signal acquisition system to measure
physiological parameters for purposes of biometrics identification, such as retinal image analysis
for secure access to a facility, are not devices within the meaning of section 201(h) of the FD&C
Act.

##### (2) Intended for the purpose of displaying, analyzing, or printing

##### medical information about a patient or other medical

##### information

Section 520(o)(1)(E)(i) of the FD&C Act describes software functions that are intended to
display, analyze, or print^7 medical information about a patient or other medical information (such
as peer-reviewed clinical studies and clinical practice guidelines). In other words, if the type of
data described in Criterion 2 (i.e., medical information) is used as an input, then the software
function is not a device within the meaning of section 201(h) so long as it meets the other three
criteria. FDA interprets Criterion 2 to include software functions that display, analyze, or print
patient-specific information, such as demographic information, symptoms, certain test results,
patient discharge summaries, and/or other medical information (such as clinical practice
guidelines, peer-reviewed clinical studies, textbooks, approved drug or medical device labeling,
and government agency recommendations). Taken together, Criterion 1 and Criterion 2 describe
the types of data inputs used in devices (Criterion 1) and the types of data inputs used in Non-
Device CDS (Criterion 2).

FDA interprets _medical information about a patient_ to be the type of information that normally
is, and generally can be, communicated between HCPs in a clinical conversation or between
HCPs and patients in the context of a clinical decision, meaning that the relevance of the
information to the clinical decision being made is well understood and accepted. If Criterion 1 is
met, data/results from devices (including IVD test(s)), when used in a manner consistent with the
FDA-required labeling,^8 are generally considered “medical information about a patient” within
the meaning of Criterion 2. FDA interprets _other medical information_ to include information
such as peer-reviewed clinical studies, clinical practice guidelines, and information that is
similarly independently verified and validated as accurate, reliable, not omitting material
information, and supported by evidence.

Sampling frequency is also an important consideration when determining if given information is
considered _medical information_ under Criterion 2 or a signal/pattern under Criterion 1. A single,

(^7) Software functions that solely display or print medical information as described in section 520(o)(1)(C) or (D) of
the FD&C Act are not considered CDS.
(^8) For the purposes of this guidance, “used in a manner consistent with the FDA-required labeling” is use consistent
with the FDA approved, cleared, or authorized uses of a product. The term “FDA-required labeling” as used in this
guidance includes the labeling reviewed and approved by FDA as part of the medical product marketing application
review process. For products not subject to premarket approval, but instead subject to premarket notification
(510(k)) requirements or exempt from premarket review, the term FDA-required labeling includes the labeling that
provides adequate directions for use and other information required to appear on the label or in labeling.


discrete test or measurement result^9 that is clinically meaningful (e.g., a blood glucose lab test
result) is _medical information_ , while a more continuous sampling of the same information (e.g.,
continuous glucose monitor readings) is a pattern/signal. As discussed above, a software function
that is intended to acquire, process, or analyze a pattern/signal from a signal acquisition system
fails Criterion 1 and remains a device (see Section IV (1)). FDA recognizes there is a continuum
between a single sample and a continuous sample, and has included examples in Section V for
reference.

The following are examples that describe types of medical information that can be displayed,
analyzed, or printed about a patient:

```
· The report from a radiology study (e.g., “a BIRADS category 4 lesion is present”) or
summary information about the output of legally marketed CAD software (e.g., “twelve
CAD annotations are present”).
· An ECG report annotated by an HCP with a description of an abnormal heart rhythm
(e.g., “the patient shows signs of Atrial Fibrillation”).
· A blood pressure result (e.g., “120/80 mmHg”) from a legally marketed device.
· A lab test result (e.g., “potassium level of 4.0 mmol/L or glucose level of 95 mg/dL”) in
an electronic health record.
```
These software functions are not devices only if they also meet the other three criteria of section
520(o)(1)(E) of the FD&C Act.

##### (3) Intended for the purpose of supporting or providing

##### recommendations to an HCP about prevention, diagnosis, or

##### treatment of a disease or condition

Section 520(o)(1)(E)(ii) describes software functions that are intended to support or provide
recommendations to an HCP about prevention, diagnosis, or treatment of a disease or condition.

FDA interprets Criterion 3 to refer to software that provides condition-, disease-, and/or patient-
specific recommendations to an HCP to enhance, inform and/or influence a health care decision
but is not intended to replace or direct the HCP’s judgment. As discussed below, in time-critical
decision-making and in cases where a software function provides a specific preventive,
diagnostic or treatment output or directive, the software function fails Criterion 3 because it is
not intended for the purpose of supporting or providing recommendations under section
520(o)(1)(E)(ii).

The following are examples of software functions that meet Criterion 3, because they are
intended for the purpose of supporting or providing recommendations to an HCP about

(^9) Software functions that process or analyze patterns or signals from chemical reactions generated by an assay and
an instrument, such as an electrochemical or photometric response, to generate a clinical test result do not meet
Criterion 1.


prevention, diagnosis, or treatment of a disease or condition. Examples of Non-Device CDS
software functions include software functions that provide:

```
· Evidence-based clinician order sets for an HCP to choose from, tailored for a particular
condition, disease, or clinician preference;
· Matching patient-specific medical information from records or reports to reference
information (e.g., clinical guidelines);
· Contextually relevant reference information about a disease or condition;
· Drug-drug interaction and drug-allergy contraindication notifications to avert adverse
drug events;
· Drug formulary guidelines;
· Duplicate testing or prescription product prevention notifications (e.g., medication
reconciliations and test reconciliations);
· Reminders for preventive care or clinician’s orders; and
· Patient data reports and summaries (e.g., discharge papers).
```
Two aspects of software functionality may affect whether a software function is being used to
support or provide recommendations to an HCP: (1) the level of software automation, and (2) the
time-critical nature of the HCP’s decision making. FDA considers both these aspects when
determining whether a software function is being used to enhance, inform and/or influence an
HCP’s decision-making (satisfying Criterion 3) or rather, to substitute, replace, or direct the
HCP’s judgment (failing Criterion 3).

Automation bias is the propensity of humans to over-rely on a suggestion from an automated
system. In the context of CDS, automation bias can result in errors of commission (following
incorrect advice) or omission (failing to act because of not being prompted to do so). Automation
bias may be more likely to occur if software provides a user with a single, specific, selected
output or solution rather than a list of options or complete information for the user to consider. In
the former case, the user is more likely to accept a single output as correct without taking into
account other available information to inform their decision-making.^10

Similarly, decision-making that is time critical may carry similar risks when using decision
support software. In situations that require urgent action, automation bias increases because there
is not sufficient time for the user to adequately consider other information. This understanding of
automation bias informs FDA’s interpretation of “support or provide recommendations” in
Criterion 3, as well as FDA’s interpretation that Non-Device CDS software functions allow an
HCP to independently review the basis for the recommendations presented by the software so
that they do not rely primarily on such recommendations, as described in Criterion 4 (see section
IV (4)).

Consistent with this approach, FDA interprets Criterion 3 to describe software that:

(^10) M.L. Cummings. Automation Bias in Intelligent Time Critical Decision Support Systems.
American Institute of Aeronautics and Astronautics 1st Intelligent Systems Technical Conference, Vol. 2, 2004, pp.
557 - 62.


```
a) Provides condition-, disease-, and/or patient-specific information and options to an HCP
to enhance, inform and/or influence a health care decision;
b) Does not provide a specific preventive, diagnostic, or treatment output or directive;
c) Is not intended to support time-critical decision-making; and
d) Is not intended to replace or direct the HCP’s judgment.
```
Such software provides an HCP with evidence-based tools to support HCP decision-making but
does not replace or direct the judgment of the HCP by directing them to a specific action.
Instead, these functions present recommendations based on an analysis of patient-specific
information to an HCP, who may then incorporate this information into their decision-making
about the care of a patient, along with other information and factors of which the HCP is aware.
For example, a software function that analyzes patient-specific medical information (e.g., atrial
fibrillation (AF) diagnosis from Holter report) and provides the HCP with a prioritized list of
treatment options for AF would meet Criterion 3. This is contrasted with a software function that
provides a specific preventive, diagnostic, or treatment output or directive. FDA interprets this
latter type of software function as failing to meet Criterion 3. In such situations, an HCP may be
susceptible to “automation bias” and may be more likely to accept the identified output as the
best course of action even when it is not, and may be less likely to seek out additional
information to inform their decision-making.

Software functions that provide the following outputs may also be considered “supporting or
providing recommendations to an HCP” and would meet Criterion 3, as long as they were not
intended to support time-critical decision-making and/or replace or direct the HCP’s judgment:

1. List of preventive, diagnostic or treatment options;
2. Prioritized list of preventive, diagnostic or treatment options; or
3. List of follow-up or next-step options for consideration (e.g., after a physician office
    visit, hospitalization, procedure)

The software functions described in this section as satisfying Criterion 3 are not devices only if
they also meet the other three criteria of section 520(o)(1)(E) of the FD&C Act.

In contrast, software that provides a specific preventive, diagnostic, or treatment output or
directive or that addresses a time-critical decision would not satisfy Criterion 3. FDA interprets
the purpose of such software functions as not supporting or providing recommendations to an
HCP, but rather as directing the HCP to take a specific action and substituting for their judgment.
This would include software that:

```
· Provides a specific preventative, diagnostic, or treatment course;
· Provides a specific follow-up directive;
· Provides time-critical alarms or alerts intended to trigger potential clinical intervention to
assure patient safety; or
· Provides a treatment plan for a specific patient’s disease or condition.
```
Note that FDA considers software that provides information that a specific patient “may exhibit
signs” of a disease or condition or identifies a risk probability or risk score for a specific disease


or condition as providing a specific preventive, diagnostic, or treatment output. Therefore, such
software would not satisfy Criterion 3.

Software functions that support or provide recommendations to patients or caregivers – not
HCPs – meet the definition of a device. FDA understands the importance of CDS for patients
and caregivers and supports increased access to innovative, safe, and effective CDS for non-HCP
users. FDA intends to be consistent with existing policies (including the following guidance
documents: Policy for Device Software Functions and Mobile Medical Applications,^11 Software
as a Medical Device (SaMD): Clinical Evaluation,^12 Medical Device Data Systems, Medical
Image Storage Devices, and Medical Image Communications Devices,^13 and General Wellness:
Policy for Low Risk Devices)^14 in the regulation of CDS intended for non-HCPs.Further, FDA
remains committed to providing transparency and will update our existing policies, as
appropriate, with additional examples as CDS for non-HCPs continues to evolve.

For additional information regarding risk categorization and considerations that may apply to
certain software functions, please see theInternational Medical Device Regulators Forum
(IMDRF) document Software as a Medical Device: Possible Framework for Risk Categorization
and Corresponding Considerations.^15

##### (4) Intended for the purpose of enabling an HCP to independently

##### review the basis for the recommendations that such software

##### presents so that it is not the intent that the HCP rely primarily

##### on any of such recommendations to make a clinical diagnosis

##### or treatment decision regarding an individual patient

In order to be excluded from the definition of a device under section 520(o)(1)(E) of the FD&C
Act, the software function must be intended to enable HCPs to independently review the basis
for the recommendations presented by the software so that they do not rely primarily on such
recommendations, but rather on their own judgment, to make clinical decisions for individual
patients.

The software and labeling recommendations in this section are based on FDA’s experience
evaluating device CDS and software functions that are Non-Device CDS. However, sponsors
may use alternative approaches so long as their approach enables an HCP “to independently

(^11) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/policy-device-software-
functions-and-mobile-medical-applications.
(^12) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/software-medical-
device-samd-clinical-evaluation.
(^13) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/medical-device-data-
systems-medical-image-storage-devices-and-medical-image-communications-devices.
(^14) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-
policy-low-risk-devices.
(^15) Available at [http://www.imdrf.org/docs/imdrf/final/technical/imdrf-tech-](http://www.imdrf.org/docs/imdrf/final/technical/imdrf-tech-) 140918 - samd-framework-risk-
categorization-141013.pdf.


review the basis for such recommendations” (s ection 520(o)(1)(E)(iii) (Criterion 4). In order to
satisfy Criterion 4, FDA recommends that:

```
a) The software or labeling include the purpose or intended use of t he product, including the
intended HCP user and intended patient population. FDA does not consider software
functions intended for a crit ical, time-sensitive task or decision to meet Criterion 4,
because an HCP is unlikely to have sufficient time to independently review the basis of
the recommendations. (As described in section IV (3), software fu nctions that are
intended to support time-critical decision-making or intended to replace or direct the
HCP’s judgment would not meet Criterion 3.)
b) The software or labeling identify the r equired input medical information, with plain
language instructions on how the inputs should be obtained, their relevance, and data
quality requirements.
c) The software or labeling provide a plain language description of the underlying algorithm
development and validation that fo rms the basis for the CDS implementation, including:
i. A summary of the logic or methods relied upon to provide the recommendations
(e.g., meta-analysis of clinical studies, expert panel, statistical modeling, AI/ML
techniques);
ii. A description of the data relied upon so that an HCP can assess whether the data is
representative of their patient population (e.g., relevant sub-groups, disease
conditions, collection sites, sex, ethnicity) and assess if best practices were
followed (e.g., independent development an d validation datasets); and
iii. A description of the results from clinical studies conducted to validate the
algorithm/recommendations so that an HCP can assess the potential performance
and limitations when applied to their patients (e.g., sub-populations with untested
or highly variable algorithm performance).
d) The software output provides the HCP user with relevant patient-specific information and
other knowns/unknowns for consideration (e.g., missing, corrupted, or unexpected input
data values) that will enable the HCP to independently review the basis for the
recommendations and apply their judgment when making the final decision.
```
In order to describe the basis for the recommendations, regardless of the complexity of the
software and whether or not it is proprietary, the software output or labeling should provide
adequate background information in plain language on the input(s), algorithm logic or methods,
datasets, and validation. Relevant sources should be identified and available to the intended user
(e.g., clinical practice guidelines with the date or version, published literature, or information that
has been communicated by the CDS developer to the intended user) and understandable by the
intended user (e.g., data points whose meaning is well understood by the intended user). In order
to enable independent evaluation of its basis, the recommendation should be based on
information whose meaning could be expected to be independently understood by the intended
HCP user (e.g., the inputs used to generate the recommendations are identified, the
recommendations are based on inputs that do not omit material information, and the quality and
robustness of the datasets or clinical studies are described).

FDA believes that relevant patient-specific information can also help the HCPs understand the
basis of the recommendations. Beyond the input medical information relied upon, being able to


clearly understand how the logic was applied for the patient (e.g., matching of patient-level data
to criteria in practice guidelines, comparison to a reference/normal database, development and
use of a prioritized schema for recommendation generation) will aid an HCP in understanding
the basis of the recommendations. Providing the recommendations in the context of what is
known/unknown for an individual patient may give HCPs an opportunity to assess the
strength/limitations of the CDS software function recommendations when applying their
judgment to the final decision.

In some cases, developers may need to perform usability testing to evaluate if their
implementation meets Criterion 4.

### V. Examples 

The following sections describe examples of software functions that are Non-Device CDS
software functions (V.A and V.B) and examples of software functions that remain devices (V.C).
This guidance, and these examples, are not intended to include all regulatory requirements for
devices that may or may not apply to an individual software function. For additional information
about applicable regulatory requirements, please see complementary, existing digital health
policies described in the following guidances: Policy for Device Software Functions and Mobile
Medical Applications,^16 Software as a Medical Device (SaMD): Clinical Evaluation,^17 Medical
Device Data Systems, Medical Image Storage Devices, and Medical Image Communications
Devices,^18 andGeneral Wellness: Policy for Low Risk Devices.^19

#### A.Examples of Non­Device CDS Software Functions

The following examples are intended to illustrateFDA’sinterpretation ofthe first three criteria
in section 520(o)(1)(E) of the FD&C Act:software functionsconsidered Non-Device CDS
provided that they also meet Criterion 4.^20 (For examples focused on interpretation of Criterion
4, see section V.B below.)

Examples of non-device CDS software functions include software functions that provide:

1. Evidence-based clinician order sets for an HCP to choose from,tailored for a particular
    condition, disease, or clinician preference:

(^16) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/policy-device-software-
functions-and-mobile-medical-applications.
(^17) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/software-medical-
device-samd-clinical-evaluation.
(^18) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/medical-device-data-
systems-medical-image-storage-devices-and-medical-image-communications-devices.
(^19) Available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-
policy-low-risk-devices.
(^20) To be a non-device CDS software function, the software function would also need to be explained to the HCP user
such that the user can independently review the basis for the recommendations presented by the software, and the
user does not rely primarily on the outputs to make a clinical decision about an individual patient (Criterion 4).


```
a. Software function that provides groupings of standard order sets, consistent with
clinical guidelines, for patient admission to critical care.
b. Software function that provides a list of diagnostic and treatment order options to
an HCP based on clinical guidelines for the care of adult patients presenting with
pneumonia symptoms.
```
2. Matching patient-specific medical information from records or reports to reference
    information (e.g., clinical guidelines) that is routinely used in clinical practice:

```
a. Software function that matches patient-specific medical information (e.g.,
diagnosis, treatments, allergies, signs or symptoms) to reference information
routinely uses in clinical practice (e.g., practice guidelines) to facilitate
assessments of specific patients. For example, a software function that uses a
patient’s diagnosis and other medical information to provide an HCP with current
practice treatment guidelines for common illnesses or conditions such as
influenza, hypertension, and hypercholesterolemia.
b. Software function that matches patient-specific medical information to peer-
reviewed literature publications on related topics.
```
3. Contextually relevant reference information about a disease or condition:
    a. Software function that provides HCPs with recommendations on the use of a
       prescription drug^21 for a disease (as indicated in the patient’s medical record) that
       that are consistent with the current version of drug’s FDA-approved labeling.^22 ,^23
    b. Software function that provides HCPs with available treatment options, including
       drug, device, surgical and/or lifestyle changes for heart failure patients based on
       their disease stage and clinical guidelines.
4. Drug-drug interaction and drug-allergy contraindication notifications to avert adverse drug
    reactions:
       a. Software function that identifies drug-drug interactions and drug-allergy
          contraindications, based on the current version of FDA-approved drug or device
          labeling or other up-to-date and peer-reviewed sources and patient-specific
          information, to attempt to prevent adverse drug reactions.
       b. Software function that enables an HCP to enter multiple drug names and provides
          information regarding known drug-drug interactions.

(^21) Information relied upon by the software should be kept up-to-date while prominently displaying the source of the
information (e.g., FDA-approved labeling), and provide options to users to obtain up-to-date information. (For
example, software that provides alerts for potential drug-drug interactions should provide a link directly to a trusted
and up-to-date source for that information (e.g., DailyMed for drug labeling)).
(^22) Includes prescribing information (also referred to as package insert or physician labeling); patient labeling,
including patient package inserts and Medication Guides; the product’s immediate container label; outer container;
the outside package; and other written, printed, or graphic information that accompanies the product.
(^23) See FDA guidance entitled “Medical Product Communications that are Consistent with FDA-Required Labeling,”
available at https://www.fda.gov/regulatory-information/search-fda-guidance-documents/medical-product-
communications-are-consistent-fda-required-labeling-questions-and-answers.


```
c. Software function that identifies drug-disease interactions and contraindications,
such as notifying an HCP that a patient with asthma should not be prescribed a
non-selective beta-blocking drug.
```
5. Drug formulary guidelines:
    a. Software function that provides HCPs with a list of medications on a formulary
       for a given disease or condition.
    b. Software function that provides alerts to HCPs regarding changes in a formulary
       and recommends alternatives.
6. Duplicate testing or medication error prevention notifications (e.g., medication
    reconciliations and test reconciliations):
       a. Software function that provides an alert to notify an HCP of redundant test orders
          and advise discontinuation of the order.
       b. Software function that flags patient results for an HCP based on specific clinical
          parameters (e.g., out of range test results where the reference ranges are
          predetermined by the lab or HCP) in response to a medication order. Example:
             § Software function that flags low potassium and/or magnesium levels in a
                patient in response to a prescription for digoxin.
7. Reminders for preventive care or clinician’s orders:
    a. Software function that provides an HCP with reminders for preventive care (e.g.,
       breast cancer screening or immunizations) for a patient based on practice
       guidelines using medical information in the patient’s medical record.
    b. Software function that provides an HCP with reminders for orders for
       Hemoglobin A1C tests for diabetic patients using patient-specific medical
       information from the medical record (e.g., the patient’s diagnosis, date of prior
       Hemoglobin A1C test) based on practice guidelines.
8. Patient data reports and summaries (e.g., discharge papers):
    a. Software function that uses medical information from the patient’s medical
       records to provide an HCP with recommended assessments prior to discharge,
       such as a pain assessment.
    b. Software function that aggregates possible post-operative care instructions,
       medication needs, and follow-up instructions to assist an HCP in assembling
       discharge papers for a patient.
9. List of preventive, diagnostic or treatment options:
    a. Software function that provides a list of appropriate cholesterol-lowering drugs to
       HCPs to consider based on a patient’s cholesterol levels and demographics found
       in the electronic health record (EHR).
    b. Software function that analyzes medical information on a patient’s asthma
       diagnosis and demographics from the patient’s medical record and provides an
       HCP with a list of FDA-approved treatment options for asthma.


```
c. Software function that provides to an HCP a list of FDA-approved
chemotherapeutic agents for a cancer type identified through analysis of medical
information on the patient’s diagnosis and pathologist confirmed biopsy result.
d. Software function that analyzes family history, prior mammogram results, and
BRCA1 status from the medical record and recommends that an HCP consider
increased mammography frequency or supplemental breast ultrasound for the
patient.
e. Software function that enables an HCP to input the specific mutation results of an
FDA-authorized Epidermal Growth Factor Receptor Mutation (EGFR) test for a
patient with non-small cell lung cancer (the same clinical condition for which the
FDA-authorized EGFR test was clinically validated) and identifies FDA-approved
treatments for non-small cell lung cancer indicated for use with the FDA-
authorized EGFR test.
```
10.Prioritized list of preventive, diagnostic or treatment options:
a. Software function that analyzes the type of arthritis diagnosis in the patient’s
medical record and identifies prioritized treatment options available for that
condition.
b. Software function that analyzes patient-specific symptoms to provide a prioritized
list of diagnostic tests for the HCP to consider.
c. Software intended for HCPs that analyzes patient-specific medical information to
determine which over-the-counter (OTC) allergy drug class is likely to be most
effective in alleviating the patient’s seasonal allergies and provides a list of
available medications in that drug class.
d. Software function that analyzes information on a patient’s glaucoma diagnosis in
the patient’s med ical record and provides HCP with a list of prioritized treatment
options to consider for that patient.

11.List of follow-up or next-step options for consideration (e.g., after a physician office visit,
hospitalization, procedure):
a. Software function that analyzes a patient’s age, sex, and radiologist’s report for
findings of low bone density and micro cervical fractures in order to provide an
HCP with a list of follow-up options for consideration, such as performance of
periodic bone-densitometry scans, nonpharmacological management (e.g., weight-
bearing exercise), or referral of the patient to a specialist.
b. Software function that tracks and analyzes a chronic obstructive pulmonary
disease (COPD) patient’s age and average number of steps walked per day in
order to provide a list of follow-up options for the HCP to consider (e.g., office
visit, chest CT, spirometry) to evaluate disease progression.
c. Software function that analyzes blood glucose laboratory test results and pre-
diabetes diagnosis from a patient’s medical record and provides an HCP with a
list of next-step options to consider, such as more frequent office visits or referral
to a specialist.
d. Software function that interprets daily results of a basic metabolic panel fo r a
hospitalized patient and recommends several options for IV fluids that may be


```
beneficial to ensure proper hydration and to prevent acidosis. In some cases, this
software function may also provide recommendations for potential follow-up
testing options.
e. Software function that inputs information about a patient’s cancer progression and
treatment history and other medical information from a patient’s medical record
and recommends, in addition to prioritized treatments, that the healthcare
practitioner also consider one or more legally marketed companion diagnostic
tests.
```
#### B. Examples of Non­Device CDS Software Functions ­ Criterion 

The following examples are intended to clarify FDA’s interpretation of the fourth criterion in
section 520(o)(1)(E) of the FD&C Act: software functions considered Non-Device CDS if they
also meet Criteria 1, 2, and 3.

1. Software function that analyzes patient-specific medical information (e.g., end stage renal
    disease (ESRD) diagnosis, lab test results, and patient demographics from the patient’s
    medical record) and provides an HCP with a list of treatment options for ESRD based on
    implementation of practice guidelines. To enable the HCP to independently review the basis
    for the recommendations presented by the software so that they do not rely primarily on such
    recommendations, but rather on their own judgment, the software labeling and function
    provide the following information to the HCP:
       a. The intended use, HCP user, and patient population are clearly identified. The
          intended use is not time-critical, and the intended HCP is expected to have
          sufficient time and training to understand the practice guidelines that are the basis
          of the recommendations;
       b. The input medical information is clearly identified and relevant, with data quality
          requirements to ensure compatibility to enable relevant medical information to be
          extracted from the EHR;
       c. A plain language description of the underlying algorithm development and
          validation that forms the basis for any recommendations is provided. In addition,
          the practice guidelines being implemented are clearly identified to the HCP, and
          the guidelines contain sufficient information on their development and clinical
          studies underlying the recommendations for ESRD treatment options; and
       d. The recommendations are provided to the HCP with relevant patient-specific
          information including a description of how the patient-specific information
          matches the criteria for treatment options in the practice guidelines. The output
          indicates whether any expected input medical information from the medical
          record was missing.
2. Software function that recommends a prioritized list of FDA-approved chemotherapeutic
    agents (approved for the patient’s diagnosed cancer type) to an HCP based on analysis of
    reported outcomes in a database of clinical studies using the patient’s diagnosis and
    demographics from the medical record. To enable HCPs to independently review the basis
    for the recommendations presented by the software so that they do not rely primarily on such


```
recommendations, but rather on their own judgment, the following information is provided to
the HCP:
a. The intended use, HCP user, and patient population are clearly identified. The use
is not time-critical, and the intended HCP is expected to have sufficient time and
training to assess the clinical studies that are the basis of the recommendations;
b. The cancer diagnosis and patient demographics are clearly identified as the inputs
being used in the database search and analysis;
c. Information about how the clinical studies included were selected, the full reports
of the clinical studies being relied upon are clearly identified, with a brief
summary of the strength of each study (e.g., number of patients, outcome metrics,
randomization, comparison arm), and the key elements of the diagnosis or
demographics searched for in the medical record are noted;
d. The prioritized list of FDA-approved chemotherapeutic agents and the basis of the
prioritization is provided to the HCP, and the studies that most closely matched
the patient-specific diagnosis and demographics are identified. Other
considerations, such as the warnings and contraindications from the current
version of the FDA-approved drug labeling, are also provided to the HCP for
consideration prior to making a final decision.
```
3. Software function that analyzes a COPD patient’s age and average number of steps walked
    per day in order to provide a list of follow-up options for the HCP to consider (e.g., office
    visit, chest CT, spirometry) to evaluate disease progression. To enable HCPs to
    independently review the basis for the recommendations presented by the software so that
    they do not rely primarily on such recommendations, but rather on their own judgment, the
    following information is provided to the HCP:
       a. The intended use, HCP user, and patient population are clearly identified. The use
          is not time-critical, and the intended HCP is expected to have sufficient time and
          training to assess the clinical studies that are the basis of the recommendations;
       b. The patient’s age and average number of steps walked per day and the date of the
          measurement are clearly identified as the input information. The software also
          describes how this information is collected;
       c. A plain language summary is provided to the HCP describing how the algorithm
          is analyzing patient age and steps walked to assess activity and any validation
          studies, as appropriate;
       d. The list of follow-up options is provided to the HCP to consider. The average
          metrics of the patient over time are shown in comparison with a subset of subjects
          from the underlying database with similar age, disease severity and demographics.
          The algorithm identifies limitations to consider, such as number of days with
          missing step information or high variability in daily measurements, which could
          impact the analysis or the follow-up recommendation based on the HCP’s
          judgement.

#### C. Examples of Device Software Functions

The following examples illustrate FDA’s interpretation of the criteria in section 520(o)(1)(E) of
the FD&C Act and describe device software functions on which FDA intends to focus its


regulatory oversight. Certain examples focus on the first three criteria in section 520(o)(1)(E).
Others focus on the interpretation of Criterion 4 to demonstrate scenarios where the software
function does not enable the HCP to independently review the basis for the recommendations
presented by the software. If an example does not include a statement reflecting that the software
function fails a specific criterion, then for the purposes of the example, it can be assumed that the
criterion is satisfied.

1. Software function that uses a patient’s image sets (e.g., CT, magnetic resonance (MR)) to
    create an individual treatment plan for review by an HCP for patients undergoing radiation
    therapy treatment with external beam or brachytherapy. This software is a device function. It
    does not meet Criterion 1 because it is intended to analyze a medical image. It does not meet
    Criterion 2 because it is not intended to display, analyze, or print medical information. It does
    not meet Criterion 3 because it generates the treatment plan, which is intended to provide a
    specific treatment directive.
2. Software function that manipulates or analyzes images and other data obtained from a
    radiological device (e.g., CT, bone density, and distance between structures) to create 3D
    models of the region intended to be used in planning orthopedic/dental surgical treatments
    with a device. This software is a device function. It does not meet Criterion 1 because it is
    intended to analyze a medical image. It does not meet Criterion 2 because it is not intended to
    display, analyze, or print medical information. It does not meet Criterion 3 because it
    generates the models for planning treatment, which is intended to provide a specific
    treatment directive.
3. Software function that manipulates or interpolates data from a patient’s CT scan, providing
    3D reconstruction for visualization of the interior of the bronchial tree to aid in the placement
    of catheters in the bronchial tree and placement of markers into soft lung tissue to guide
    radiosurgery and thoracic surgery. This software is a device function. It does not meet
    Criterion 1 because it is intended to analyze a medical image. It does not meet Criterion 2
    because it is not intended to display, analyze, or print medical information. It does not meet
    Criterion 3 because it provides a specific treatment directive.
4. Software function that identifies patients with possible diagnosis of opioid addiction based on
    analysis of patient-specific medical information, family history, prescription patterns, and
    geographical data. This software is a device function. It does not meet Criterion 3 because it
    provides a specific diagnostic or treatment output or directive.
5. Software function that analyzes multiple signals (e.g., perspiration rate, heart rate, eye
    movement, breathing rate) from wearable products to monitor whether a person is having a
    heart attack or narcolepsy episode. The software is a device function. It does not meet
    Criterion 1 because it is intended to analyze signals. It does not meet Criterion 2 because it is
    not intended to display, analyze, or print medical information. It does not meet Criterion 3
    because it provides a specific diagnostic output and supports time-critical decision making.
6. Software function that analyzes near-infrared camera images of a patient intended for use in
    determining or diagnosing brain hematoma. The software is a device function. It does not
    meet Criterion 1 because it is intended to analyze a signal. It does not meet Criterion 2
    because it is not intended to display, analyze, or print medical information. It does not meet
    Criterion 3 because it provides a specific diagnostic output for a disease or condition.


7. Software function that calculates the fractal dimension of a lesion and surrounding skin
    image and builds a structural map to provide diagnosis or identify whether the lesion is
    malignant or benign. This software is a device function. It does not meet Criterion 1 because
    it is intended to analyze a medical image. It does not meet Criterion 2 because it is not
    intended to display, analyze, or print medical information. It does not meet Criterion 3
    because it provides a specific diagnostic output for a disease or condition.
8. Software function that analyzes CT images to compute and/or approximate fractional flow
    reserve. The intended use is to determine the likelihood that the stenosis impedes oxygen
    delivery to the heart muscle (myocardial ischemia). This software is a device function. It
    does not meet Criterion 1 because it is intended to analyze a medical image. It does not meet
    Criterion 2 because it is not intended to display, analyze, or print medical information. It does
    not meet Criterion 3 because it provides a specific diagnostic output for a disease or
    condition.
9. Software function that is intended to perform image analysis for diagnostically differentiating
    between ischemic and hemorrhagic stroke. This software is a device function. It does not
    meet Criterion 1 because it is intended to analyze a medical image. It does not meet Criterion
    2 because it is not intended to display, analyze, or print medical information. It does not meet
    Criterion 3 because it provides a specific diagnostic output for a disease or condition.
10. Software function that analyzes signals from a trans-abdominal electromyography device, a
    fetal heart rate monitor, and an intrauterine pressure catheter to determine timing of a C-
    section intervention for an “at term” pregnant woman. This software is a device function. It
    does not meet Criterion 1 because it is intended to analyze a medical signal. It does not meet
    Criterion 2 because it is not intended to display, analyze, or print medical information. It does
    not meet Criterion 3 because it provides a specific, time-critical treatment output or directive
    for a disease or condition.
11. Software that performs analysis of cerebrospinal fluid (CSF) spectroscopy data to diagnose
    tuberculosis meningitis or viral meningitis in children. This software is a device function. It
    does not meet Criterion 1 because it is intended to analyze a signal. It does not meet Criterion
    2 because it is not intended to display, analyze, or print medical information. It does not meet
    Criterion 3 because it provides a specific diagnostic output for a disease or condition.
12. Software function that analyzes patient-specific medical information to detect a life-
    threatening condition, such as stroke or sepsis, and generate an alarm or an alert to notify an
    HCP. This software is a device function. It does not meet Criterion 3 because it is intended to
    provide a specific diagnostic output or directive, including an alarm which supports time-
    critical decision-making
13. Software function that provides a prioritized list of possible diagnoses of a patient’s
    abnormality based on analysis of its size, shape, appearance, or other functional aspects
    visible in an image. This software is a device function. It does not meet Criterion 1 because it
    is intended to analyze a medical image. It does not meet Criterion 2 because it is not intended
    to display, analyze, or print medical information.
14. Software function that detects and highlights abnormalities (CADe) and assesses associated
    disease severity (CADx) in an image. This software is a device function. It does not meet
    Criterion 1 because it is intended to analyze a medical image. It does not meet Criterion 2


```
because it is not intended to display, analyze, or print medical information. It does not meet
Criterion 3 because it provides a specific diagnostic output or directive for a disease or
condition.
```
15. Software function that analyzes sound waves captured when users cough or recite certain
    sentences to diagnose bronchitis or sinus infection. This software is a device function. It does
    not meet Criterion 1 because it is intended to analyze a signal or pattern. It does not meet
    Criterion 2 because it is not intended to display, analyze, or print medical information. It does
    not meet Criterion 3 because it provides a specific diagnostic output or directive for a disease
    or condition.
16. Software function that analyzes breathing patterns from a sleep apnea monitor to diagnose
    sleep apnea or other conditions in patients. This software is a device function. It does not
    meet Criterion 1 because it is intended to analyze a pattern. It does not meet Criterion 2
    because it is not intended to display, analyze, or print medical information. It does not meet
    Criterion 3 because it provides a specific diagnostic output for a disease or condition.
17. Software function that analyzes images of body fluid preparations or digital slides (digital
    pathology) to perform cell counts and morphology reviews to identify patients with low
    white blood cell counts. This software is a device function. It does not meet Criterion 1
    because it is intended to analyze a medical image. It does not meet Criterion 2 because it is
    not intended to display, analyze, or print medical information. It does not meet Criterion 3
    because it provides a specific diagnostic output for a disease or condition.
18. Software function that uses a variant call format (VCF) file containing patient-specific
    genetic variants and mutations identified from a Next Generation Sequencing (NGS)
    Analyzer and provides recommendations for FDA-approved treatment options based on those
    findings. This software is a device function. It does not meet Criterion 1 because it is
    analyzing a pattern from a signal acquisition system (NGS analyzer). It does not meet
    Criterion 2 because it is not intended to display, analyze, or print medical information.
19. Software function that acquires and analyzes electrical signals from ECG leads to generate an
    ECG waveform. This software is a device function. It does not meet Criterion 1 because it
    acquires, processes, and analyzes a signal. It does not meet Criterion 2 because it is not
    intended to display, analyze, or print medical information.
20. Software function that analyzes an ECG waveform output from an FDA-cleared device to
    detect or diagnose arrhythmias (e.g., atrial fibrillation). This software is a device function. It
    does not meet Criterion 1 because it analyzes a pattern. It does not meet Criterion 2 because
    it is not intended to display, analyze, or print medical information. It does not meet Criterion
    3 because it provides a specific diagnostic output.
21. Software function that analyzes and interprets five sequential RR interval measurements
    from Holter monitor data in a patient medical record to diagnose atrial fibrillation. This
    software is a device function. It does not meet Criterion 1 because it analyzes a pattern (due
    to the sampling frequency of RR interval measurements). It does not meet Criterion 2
    because it is not intended to analyze medical information. It does not meet Criterion 3
    because it provides a specific diagnostic output.
22. Software function that analyzes five sequential RR interval measurements from Holter
    monitor data in a patient medical record to identify a possible heart rhythm irregularity and


```
recommend follow-up testing. This software is a device function. It does not meet Criterion 1
because it analyzes a pattern (due to the sampling frequency of RR interval measurements). It
does not meet Criterion 2 because it is not intended to display, analyze, or print medical
information. It does not meet Criterion 3 because it provides a specific diagnostic output or
directive.
```
23. Software function that analyzes patient-specific measurements (e.g., ST-segment elevation or
    depression as reported on ECG reports and cardiac enzyme laboratory results from the EHR)
    to identify patients potentially experiencing myocardial ischemia or infarction. This software
    is a device function. It does not meet Criterion 3 because it provides a specific diagnostic
    output or directive and supports time-critical decision-making.
24. Software function intended for HCP management of heart failure patients that analyzes
    patient-specific medical information (e.g., daily heart rate, SpO2, blood pressure, or other
    output from wearable product) to predict heart failure hospitalization. This software is a
    device function. It does not meet Criterion 3 because it provides a specific diagnostic output
    or directive and supports time-critical decision making.
25. Software function that analyzes hourly pulse oximetry and heart rate measurements (e.g.,
    from a patient’s EHR) to identify signs of patient deterioration and alert an HCP. This
    software is a device function. It does not meet Criterion 1 because it analyzes a pattern. It
    does not meet Criterion 2 because it is not intended to display, analyze, or print medical
    information. It does not meet Criterion 3 because it provides a specific diagnostic output or
    directive and supports time-critical decision making.
26. Software function that analyzes glucose measurements output from a CGM every 30 minutes
    to detect periods of potential hypoglycemia and notify the patient’s HCP. This software is a
    device function. It does not meet Criterion 1 because it analyzes a pattern. It does not meet
    Criterion 2 because it is not intended to display, analyze, or print medical information. It does
    not meet Criterion 3 because it provides a specific diagnostic output or directive and supports
    time-critical decision making.
27. Software function that analyzes a radiologist’s score/report of regional contrast discrepancies
    measured from a head CT of a suspected stroke patient to identify whether the HCP should
    initiate a specific drug therapy based on a scoring algorithm. This software is a device
    function. It does not meet Criterion 3 because it provides a specific treatment output or
    directive and supports time-critical decision making.
28. Software function that analyzes the radiologist’s reported imaging findings and other patient-
    specific medical information taken by an HCP upon admission as input to a stroke triage
    algorithm that indicates whether to transfer the patient to a major stroke center for an
    intervention. This software is a device function. It does not meet Criterion 3 because it
    provides a specific, time-critical diagnostic or treatment output or directive.
29. Software function that identifies a specific FDA-approved chemotherapeutic agent to an HCP
    based on analysis of patient diagnosis and pathologist confirmed biopsy results. This
    software is a device function. It does not meet Criterion 3 because it provides a specific
    treatment output or directive.
30. Software function that helps a diabetic patient manage their blood sugars by calculating bolus
    insulin dose based on carbohydrate intake, pre-meal blood glucose, and anticipated physical


```
activity reported to adjust carbohydrate ratio and basal insulin. This software is a device
function. It does not meet Criterion 3 because it is not intended for an HCP and because it
provides a specific treatment output or directive, and supports time-critical decision-making.
```
31. Software function that analyzes a patient’s symptoms, prior diagnosis, and serum digoxin
    level from the medical record to assess a patient’s likelihood for digoxin toxicity and
    indicates treatment with digoxin immune antigen binding fragments (digibind) for those at
    high risk. This software is a device function. It does not meet Criterion 3 because it provides
    a specific diagnostic or treatment output or directive and supports time-critical decision-
    making.
32. Software function that analyzes serial cardiac troponin readings over 24 hours to estimate the
    size of a myocardial infarction. This software is a device function. It does not meet Criterion
    1 because it analyzes a pattern. It does not meet Criterion 2 because it is not intended to
    display, analyze, or print medical information. It does not meet Criterion 3 because it
    provides a specific diagnostic output.
33. Software function that analyzes patient-specific medical information found in the medical
    record, including the most recent mammography report findings, in order to provide a list of
    follow-up options for the HCP to consider following a patient’s annual mammogram. The
    software algorithm is trained on a large dataset of 100,000 cases from 10 clinical sites, with
    summary performance based on subsequent cancer detection rates with supplemental
    imaging and biopsy. The product labeling provides information on the purpose of the
    software, the intended user and patient population, and a description of the software outputs.
    The intended use, HCP user, and patient population are clearly identified. The use is not
    time-critical, and the intended HCP is expected to have sufficient time and training to assess
    the studies that are the basis of the recommendations. However, this software is a device
    function since it does not meet Criterion 4 because:
       a. The input medical information is not adequately disclosed to the HCP to be able
          to understand what information is being considered from the patient’s medical
          record or from the radiologist’s report;
       b. While the HCP is informed that an algorithm was trained on a large dataset with
          supplemental imaging and biopsy, specific details on the independence of the
          development and validation datasets, such as the distribution of cases from
          different sites, breast density, ethnicity, or other important factors, are not
          available to the HCP. Without this information, the HCP will not be able to assess
          if the results are generalizable; and
       c. The recommendations are provided to the HCP; however, no additional
          information is available to the HCP to understand the key variables that
          influenced the recommendations.
    Taken together, an HCP is not able to independently review the basis for the
    recommendations that the software function provides. As a result, the software function is a
    device.
34. Software function that provides a prioritized list of FDA-authorized depression treatment
    options to an HCP based on an analysis of reported outcomes in a database of clinical studies
    using medical information (e.g., diagnosis and demographics) from the patient’s medical
    record. The intended use, HCP user, and patient population are clearly identified. The use is


not time critical, and the intended HCP is expected to have sufficient time and training to
assess the studies that are the basis of the recommendations. The medical information from
the patient’s medical record is clearly identified to the HCP to be able to understand what
information is being considered. However, this software is a device function since it does
not meet Criterion 4 because:

```
a. The full report of the clinical studies being relied upon is not made available to
the user; and
b. The prioritized list of FDA-authorized depression treatment options is provided to
the user; however, the software does not identify the studies that most closely
matched the patient-specific diagnosis and demographics and other
considerations, such as the warning/contraindications from the labeling.
```
Taken together, an HCP is not able to independently review the basis for the
recommendations that the software function provides. As a result, the software function is a
device.


