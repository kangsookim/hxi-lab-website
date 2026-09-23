export type PubCategory = 'Journal'|'Conference'|'Workshop'|'Poster / EA'|'Book'|'Other';
export type Pub = {year:number; category:PubCategory; subtype:string; title:string; authors:string; venue:string; doi?:string; status?:string; award?:string; image?:string};
export const publications: Pub[] = [
  {
    year: 2026,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Authentication-Driven Personalization for Facial Emotion Recognition Under Head-Mounted Display Occlusion",
    authors: "Myungjun Lee, Chuyang Zhang, Hyeongil Nam, Gouri Ginde, and Kangsoo Kim",
    venue: "Proceedings of the ACM Symposium on Virtual Reality Software and Technology (VRST), 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Lee2026agr.webp"
  },
  {
    year: 2026,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Exploring Cultural Competency in Palliative Nursing Education Using AI-Powered Virtual Agents in VR: A Design-Oriented Pilot Study",
    authors: "Taeyeon Kim, Arjun Chatha, Caitlin Manz, Hyeongil Nam, Kara Sealock, and Kangsoo Kim",
    venue: "Proceedings of the ACM Symposium on Virtual Reality Software and Technology (VRST), 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Kim2026ecc.webp"
  },
  {
    year: 2026,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Investigating the Impact of Personalized Gaze Behaviors on Social Interaction with Virtual Humans in VR: A Study Design",
    authors: "Chuyang Zhang, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of the ACM Symposium on Spatial User Interaction (SUI), 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Zhang2026iti.webp"
  },
  {
    year: 2026,
    category: "Poster / EA",
    subtype: "Poster",
    title: "The Impact of Customizing Pedagogical Agents on Learners’ Intrinsic Motivation and Satisfaction in Augmented Reality",
    authors: "Ahmad A. Fouad, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of the ACM Symposium on Spatial User Interaction (SUI), 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Fouad2026tio.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "User Profiling and Modeling in Extended Reality: A Scoping Review",
    authors: "Chuyang Zhang, Hyeongil Nam, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), 2026.",
    status: "Accepted",
    image: "/assets/publications/Zhang2026upa.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Self-Resemblance and Activity-Aware Responses Shape Relational Openness and Reflection in XR Companion Interaction",
    authors: "Hyeongil Nam, Jeewoo Kim, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), 2026.",
    status: "Accepted",
    image: "/assets/publications/Nam2026sra.webp"
  },
  {
    year: 2026,
    category: "Conference",
    subtype: "Conference Paper",
    title: "The Use of Pedagogical Agents in Virtual and Augmented Reality: A Scoping Review of Motivation through Self-Determination Theory",
    authors: "Ahmad A. Fouad, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR), 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Fouad2026tuo.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "AI Guide Representation as a Design Variable for Resuscitation Team-Leader Training in Virtual Reality: A Work-in-Progress",
    authors: "Myungjun Lee, Hyeongil Nam, Jennifer Davidson, Yiqun Lin, Adam Cheng, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 2nd XRAI-SCA Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Lee2026agr.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "From 2D Analytics to an XR and AI-Enabled Digital Twin of Hydrogen Pipeline Systems: Progress in the SHAPE Project",
    authors: "Muskan Sarvesh, Nanjia Wang, Saadman Rahman, Brody Wells, Taeyeon Kim, Sina Rezvani, Aaditya Ramesh, Bob Brennan, Ron Hugo, Frank Maurer, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 2nd XRAI-SCA Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Sarvesh2026f2a.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Bridging the Distance: A Culturally Situated VR Experience for Inuit Women Relocating for Maternal Care",
    authors: "Ahmad A. Fouad, Tafreed Ahmad, Hyeongil Nam, Mary Ann Forbes, Judy Clark, Gail Baikie, Patricia Johnston, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 2nd XRAI-SCA Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Fouad2026btd.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "AVAGENTs for Tacit Knowledge Transfer in Safe Hydrogen Pipeline Engineering with XR and AI-Enhanced Digital Twins",
    authors: "Hyeongil Nam, Muskan Sarvesh, Taeyeon Kim, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 2nd XRAI-SCA Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Nam2026aft.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Attribution Before Adaptation: Evidence-Calibrated User Profiles for XR",
    authors: "Chuyang Zhang, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 1st Grand Challenges in Adaptive Extended Reality (AXR) Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Zhang2026aba.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Towards Motivation-Adaptive XR: A Self-Determination Theory Framework for Designing Embodied Pedagogical Agents",
    authors: "Ahmad A. Fouad, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 1st Grand Challenges in Adaptive Extended Reality (AXR) Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Fouad2026tma.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Physiological Memories in Extended Reality: A Discussion on Opportunities and Challenges",
    authors: "Chuyang Zhang, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 4th Spatial Memory in XR (XRMemory) Workshop, 2026, pp. –.",
    status: "Accepted",
    image: "/assets/publications/Zhang2026pmi.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Distribution of Visual Attention amongst Clinicians using an Augmented Reality-based Decision Support System during Simulated Cardiac Arrest – A Descriptive Study",
    authors: "Yiqun Lin, Alexandre De Masi, Ryan M. Kang, Sergio Manzano, Johan N. Siebert, Jennifer Davidson, Frederic Ehrler, Delphine S. Courvoisier, Donovan Duncan, Ana Rajic, Sharleen K. Olanka, Marco Generelli, Kangsoo Kim, and Adam Cheng",
    venue: "Resuscitation Plus, p. 101433, 2026.",
    doi: "https://doi.org/10.1016/j.resplu.2026.101433",
    image: "/assets/publications/Lin2026dov.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Effects of Opacity of Peripheral Real Scene and Field of View of Mixed Reality on Motion Sickness",
    authors: "Chae Heon Lim, Kangsoo Kim, Changgu Kang, and Seul Chan Lee",
    venue: "International Journal of Human–Computer Interaction (IJHCI), vol. 42, no. 14, pp. 10997–11014, 2026.",
    doi: "https://doi.org/10.1080/10447318.2025.2588388",
    image: "/assets/publications/Lim2024ete.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Augmented Reality–Guided Decision Support in Simulated Pediatric Cardiac Arrest: A Randomized Clinical Trial",
    authors: "Johan N. Siebert, Adam Cheng, Alexandre De Masi, Ana Rajic, Sharleen Olanka, Marco Generelli, Jennifer Davidson, Ryan M. Kang, Kangsoo Kim, Pierre-Louis Rebours, Marc Ibrahim, Donovan Duncan, Isabelle Jordan, Frederic Ehrler, Delphine S. Courvoisier, Yiqun Lin, and Sergio Manzano",
    venue: "JAMA Network Open, vol. 9, no. 5, p. e2614030, 2026.",
    doi: "https://doi.org/10.1001/jamanetworkopen.2026.14030",
    image: "/assets/publications/Siebert2026arg.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Impact of an augmented reality-based decision support system on teamwork, leadership, provider workload and cognitive load during simulated cardiac arrest – a simulation-based randomized controlled trial",
    authors: "Adam Cheng, Sergio Manzano, Johan N. Siebert, Alexandre De Masi, Jennifer Davidson, Kangsoo Kim, Frederic Ehrler, Delphine S. Courvoisier, Donovan Duncan, Ana Rajic, Sharleen Olanka, Ryan M. Kang, and Yiqun Lin",
    venue: "Advances in Simulation, vol. 11, no. 44, 2026.",
    doi: "https://doi.org/10.1186/s41077-026-00444-9",
    image: "/assets/publications/Cheng2026ioa.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Evaluation of a Mobile App for Guiding Pediatric Cardiac Arrest Resuscitation: Mixed Methods Study",
    authors: "Sharleen Olanka, Ana Rajic, Marco Generelli, Alexandre De Masi, Johan N. Siebert, Adam Cheng, Yiqun Lin, Jennifer Davidson, Donovan Duncan, Kangsoo Kim, Ryan M. Kang, Sergio Manzano, Pierre-Louis Rebours, and Frederic Ehrler",
    venue: "JMIR Human Factors, 2026.",
    doi: "https://doi.org/10.2196/preprints.95190",
    image: "/assets/publications/Olanka2026eoa.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Learning to Lead Under Stress: Designing AI Guidance for In-Hospital Resuscitation Team Leader Training in XR",
    authors: "Myungjun Lee, Hyeongil Nam, Jazeb Zafar, Jennifer Davidson, Yiqun Lin, Adam Cheng, and Kangsoo Kim",
    venue: "Proceedings of the ACM CHI Workshop on XR for Challenging Environments: Enabling Human Performance and Agency under Stress (XR4CE CHI 2026), 2026.",
    image: "/assets/publications/Lee2026ltl.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Agent Personality as Social Augmentation: How AI Traits Shape Human Perception and Decision-Making in XR",
    authors: "Taeyeon Kim, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of the ACM CHI Workshop on Shaping Future Human Connection: Social Augmentation through XR Technologies (SAXR CHI 2026), 2026, pp. 66–71.",
    image: "/assets/publications/Kim2026apa.webp"
  },
  {
    year: 2026,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Who Is There With Me? User Identity, Avatars, and Authenticity in Social XR",
    authors: "Chuyang Zhang, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of the ACM CHI Workshop on Shaping Future Human Connection: Social Augmentation through XR Technologies (SAXR CHI 2026), 2026, pp. 72–77.",
    image: "/assets/publications/Zhang2026wit.webp"
  },
  {
    year: 2026,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Exploring Experiential Differences Between Virtual and Physical Memory-Linked Objects in Extended Reality",
    authors: "Zaid Ahmed, Omar Khan, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of the ACM CHI Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA), 2026, pp. 269:1–5.",
    doi: "https://doi.org/10.1145/3772363.3798977",
    image: "/assets/publications/Ahmed2026eed.webp"
  },
  {
    year: 2026,
    category: "Conference",
    subtype: "Conference Paper",
    title: "The Dominance Effect: How Verbal and Nonverbal Cues of Virtual Agents Influence Decision-Making in VR",
    authors: "Taeyeon Kim, Hyeongil Nam, Sunghun Jung, Ahmad A. Fouad, Kangsoo Kim, and Myungho Lee",
    venue: "Proceedings of the ACM CHI Conference on Human Factors in Computing Systems (CHI), 2026, pp. 1510:1–14.",
    doi: "https://doi.org/10.1145/3772318.3791539",
    image: "/assets/publications/Kim2026tde.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Influence of Avatar Appearance and Target Distance on Locomotion Method Selection in Virtual Reality",
    authors: "Omar Khan, Junyeong Kum, Hyeongil Nam, Myungho Lee, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 32, no. 5, pp. 4668–4677, 2026.",
    doi: "https://doi.org/10.1109/TVCG.2026.3679092",
    image: "/assets/publications/Khan2026ioa.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Streamlined Facial Data Collection based on Utterance and Emotional Data for Avatar Reconstruction in Conversational Contexts",
    authors: "Seoyoung Kang, Seokhwan Yang, Hail Song, Boram Yoon, Jinwook Kim, Kangsoo Kim, and Woontack Woo",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 32, no. 5, pp. 4032–4040, 2026.",
    doi: "https://doi.org/10.1109/TVCG.2026.3679884",
    image: "/assets/publications/Kang2026sfd.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Perceived Usability, User Experience, and Technology Acceptance of Role-Specific Augmented Reality Decision Support Tools for Cardiac Arrest Resuscitation: A Prospective Observational Pilot Study",
    authors: "Ryan M. Kang, Adam Cheng, Yiqun Lin, Hyeongil Nam, Jennifer Davidson, Donovan Duncan, Johan N. Siebert, Sergio Manzano, Alexandre De Masi, Ana Rajic, Sharleen Olanka, Frederic Ehrler, and Kangsoo Kim",
    venue: "JMIR XR and Spatial Computing (JMXR), vol. 3, p. e72013, pp. 1–15, 2026.",
    doi: "https://doi.org/10.2196/72013",
    image: "/assets/publications/Kang2026puu.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Evaluating a Shared Decision Support Tool for Pediatric Cardiopulmonary Arrest: Mixed Methods Usability Study",
    authors: "Ana Rajic, Sharleen Olanka, Marco Generelli, Jennifer Davidson, Yiqun Lin, Ryan M. Kang, Kangsoo Kim, Pierre-Louis Rebours, Marc Ibrahim, Donovan Duncan, Sergio Manzano, Adam Cheng, Alexandre De Masi, Johan N. Siebert, and Frederic Ehrler",
    venue: "JMIR Human Factors, vol. 13, p. e78736, 2026.",
    doi: "https://doi.org/10.2196/78736",
    image: "/assets/publications/Rajic2026eas.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Psychological ownership in shared AR: The roles of partner reality, object reality, controllability, and proximity",
    authors: "Dongyun Han, Donghoon Kim, Hyeongil Nam, Kangsoo Kim, and Isaac Cho",
    venue: "Computers & Graphics, vol. 136, p. 104583, 2026.",
    doi: "https://doi.org/10.1016/j.cag.2026.104583",
    image: "/assets/publications/Han2026poi.webp"
  },
  {
    year: 2026,
    category: "Journal",
    subtype: "Journal Article",
    title: "Overview of a User-Centered, Mixed-Methods Process for Designing InterFACE: An Augmented-Reality Decision Support System for Pediatric Resuscitation",
    authors: "Frederic Ehrler, Ana Rajic, Alexandre De Masi, Sharleen Olanka, Marco Generelli, Jennifer Davidson, Yiqun Lin, Kangsoo Kim, Pierre-Louis Rebours, Marc Ibrahim, Donovan Duncan, Ryan M. Kang, Sergio Manzano, Adam Cheng, and Johan N. Siebert",
    venue: "JMIR Human Factors, vol. 13, p. e78144, 2026.",
    doi: "https://doi.org/10.2196/78144",
    image: "/assets/publications/Ehrler2026ooa.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "Enhancing Perceived Empathy in Empathic Mixed Reality Agents via Context-Aware Adaptation",
    authors: "Zhuang Chang, Dominik Hirschberg, Kunal Gupta, Mehak Sharma, Kangsoo Kim, Huidong Bai, Li Shao, and Mark Billinghurst",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 32, no. 2, pp. 1569–1581, 2025.",
    doi: "https://doi.org/10.1109/TVCG.2025.3646601",
    image: "/assets/publications/Chang2025epe.webp"
  },
  {
    year: 2025,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Joining the Circle: Human Entry Behavior in a Mixed Reality F-Formation with Agent, Avatar, and Human Partners",
    authors: "Junyeong Kum, Sunghun Jung, Hyeongil Nam, Kangsoo Kim, and Myungho Lee",
    venue: "Proceedings of the ACM Symposium on Virtual Reality Software and Technology (VRST), 2025, pp. 75:1–11.",
    doi: "https://doi.org/10.1145/3756884.3766022",
    image: "/assets/publications/Kum2025jtc.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "Cooperative Inference for Real-Time 3D Human Pose Estimation in Multi-Device Edge Networks",
    authors: "Hyun-Ho Choi, Kangsoo Kim, Ki-Ho Lee, and Kisong Lee",
    venue: "IEEE Transactions on Communications (TCOMM), vol. 73, no. 12, pp. 14624–14638, 2025.",
    doi: "https://doi.org/10.1109/TCOMM.2025.3616229",
    image: "/assets/publications/Choi2025cei.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "Effects of AI-Powered Embodied Avatars on Communication Quality and Social Connection in Asynchronous Virtual Meetings",
    authors: "Hyeongil Nam, Muskan Sarvesh, Seoyoung Kang, Woontack Woo, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 11, pp. 10152–10162, 2025.",
    doi: "http://doi.org/10.1109/TVCG.2025.3616761",
    image: "/assets/publications/Nam2025eoa.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "Experiencing Immersive Virtual Nature for Well-Being, Restoration, Performance, and Nature Connectedness: A Scoping Review",
    authors: "Jeewoo Kim, Svara Patel, Hyeongil Nam, Janghee Cho, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 11, pp. 9761–9771, 2025.",
    doi: "http://doi.org/10.1109/TVCG.2025.3616762",
    image: "/assets/publications/Kim2025eiv.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "Impact of Avatar-Locomotion Congruence on User Experience and Identification in Virtual Reality",
    authors: "Omar Khan, Hyeongil Nam, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 11, pp. 9878–9888, 2025.",
    doi: "http://doi.org/10.1109/TVCG.2025.3616836",
    award: "Honorable Mention for Best Paper Award at IEEE ISMAR 2025 (Top 3%)",
    image: "/assets/publications/Khan2025ill.webp"
  },
  {
    year: 2025,
    category: "Conference",
    subtype: "Conference Paper",
    title: "When Senses Collide: Investigating Modality Congruence and Interference Between Task and Notification in Augmented Reality",
    authors: "Mehakdeep Kaur, Hyeongil Nam, Ryan M. Kang, Dongyun Han, DongHoon Kim, Isaac Cho, and Kangsoo Kim",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR), 2025, pp. 1106–1116.",
    doi: "https://doi.org/10.1109/ISMAR67309.2025.00117",
    image: "/assets/publications/Kaur2025wsc.webp"
  },
  {
    year: 2025,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Touching the Virtual Dog: Effects of Active and Passive Haptic Feedback on Social Presence and Emotional Bonding in Virtual Pet Interaction",
    authors: "Ahmad A. Fouad, Hyeongil Nam, Anh Nguyen, Dongyun Han, DongHoon Kim, Isaac Cho, and Kangsoo Kim",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR), 2025, pp. 943–953.",
    doi: "https://doi.org/10.1109/ISMAR67309.2025.00102",
    image: "/assets/publications/Fouad2025ttv.webp"
  },
  {
    year: 2025,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Gender Congruence and Social Context in XR: Effects on Partner Preference, Warmth, Competence, and Uncanniness",
    authors: "Hyeongil Nam, Seoyoung Kang, Anh Nguyen, Isaac Cho, Woontack Woo, and Kangsoo Kim",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR), 2025, pp. 804–814.",
    doi: "https://doi.org/10.1109/ISMAR67309.2025.00089",
    image: "/assets/publications/Nam2025gcs.webp"
  },
  {
    year: 2025,
    category: "Conference",
    subtype: "Conference Paper",
    title: "What if Virtual Agents Had Scents? Users’ Judgments of Virtual Agent Personality and Appeals in Encounters",
    authors: "Dongyun Han, Si-Yeon Bak, So-Hui Kim, Kangsoo Kim, Sun-Jeong Kim, and Isaac Cho",
    venue: "Proceedings of the IEEE International Symposium on Mixed and Augmented Reality (ISMAR), 2025, pp. 153–163.",
    doi: "https://doi.org/10.1109/ISMAR67309.2025.00028",
    image: "/assets/publications/Han2025wiv.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "An Immersive Digital Twin with Virtual Agent Interface for Pipeline Leak Simulation and Monitoring",
    authors: "Mehdi Marzban, Muskan Sarvesh, Charbel Maroun, Brody Wells, Nanjia Wang, Hyeongil Nam, Frank Maurer, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 1st XRAI-SCA Workshop, 2025, pp. 201–204.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00045",
    image: "/assets/publications/Marzban2025aid.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Developing a Palliative Care Simulation for the Hindu Cultural Context Using Interactive Virtual Agents: A Work-in-Progress",
    authors: "Arjun Chatha, Hyeongil Nam, Kara Sealock, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct: 1st XRAI-SCA Workshop, 2025, pp. 178–179.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00039",
    image: "/assets/publications/Chatha2025dap.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Cooperative Edge Inference and Virtual Simulation for Real-Time 3D Human Pose Estimation in Safety-Critical Applications",
    authors: "Hyun-Ho Choi, Kangsoo Kim, Ki-Ho Lee, and Kisong Lee",
    venue: "Proceedings of IEEE ISMAR Adjunct: 1st XRAI-SCA Workshop, 2025, pp. 180–183.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct68609.2025.00040",
    image: "/assets/publications/Choi2025cei.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "The Use of Eye Gaze Data and Personality Traits: A Scoping Review of the Literature",
    authors: "Jan Skala and Kangsoo Kim",
    venue: "Wiley Interdisciplinary Reviews (WIREs) Cognitive Science, vol. 16, no. 3, p. e70008, 2025.",
    doi: "https://doi.org/10.1002/wcs.70008",
    image: "/assets/publications/Skala2025tuo.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "Machine Learning-Enhanced Optimization for High-Throughput Precision in Cellular Droplet Bioprinting",
    authors: "Jaemyung Shin, Ryan M. Kang, Kinam Hyun, Zhangkang Li, Hitendra Kumar, Kangsoo Kim, Simon S. Park, and Keekyoung Kim",
    venue: "Advanced Science, vol. 12, no. 20, p. 2412831, 2025.",
    doi: "https://doi.org/10.1002/advs.202412831",
    image: "/assets/publications/Shin2025mle.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Investigating Visual Guide Cues in VR: Impacts of Virtual Humans and Symbol-Based Navigation on Real-World Performance and Experience",
    authors: "Omar Khan, Anh Nguyen, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 1st International Workshop on Real and Virtual Spaces Influences (ReViSI), 2025, pp. 504–509.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00110",
    image: "/assets/publications/Khan2025ivg.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "AVAGENT: Bridging Asynchronous Communication Through AI-Powered Virtual Avatars",
    authors: "Hyeongil Nam, Seoyoung Kang, Woontack Woo, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 1st International Workshop on Spatial Memory in XR (XRMemory), 2025, pp. 1142–1146.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00226",
    image: "/assets/publications/Nam2025aba.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "TangibleMoments: Embedding XR Memories onto Physical Objects",
    authors: "Omar Khan, Zaid Ahmed, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 1st International Workshop on Spatial Memory in XR (XRMemory), 2025, pp. 1147–1153.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00227",
    image: "/assets/publications/Khan2025tex.webp"
  },
  {
    year: 2025,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "SHAPE: Safe Hydrogen Agile Pipeline Engineering with XR and AI-Enhanced Digital Twins",
    authors: "Nanjia Wang, Bryson Lawton, Muskan Sarvesh, Brody Wells, Ryan M. Kang, Hyeongil Nam, Sina Rezvani, Kangsoo Kim, Ron Hugo, Simon S. Park, Bob Brennan, and Frank Maurer",
    venue: "Proceedings of IEEE VRW: 4th International Workshop on eXtended Reality for Industrial and Occupational Supports (XRIOS), 2025, pp. 1115–1122.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00222",
    award: "Best Presentation Award at XRIOS 2025",
    image: "/assets/publications/Wang2025ssh.webp"
  },
  {
    year: 2025,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Developing an XR-Integrated Digital Twin for Hydrogen Pipeline Monitoring and Navigation",
    authors: "Nanjia Wang, Muskan Sarvesh, Brody Wells, Bryson Lawton, Ryan M. Kang, Kangsoo Kim, and Frank Maurer",
    venue: "Proceedings of IEEE VRW, 2025, pp. 1490–1491.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00391",
    image: "/assets/publications/Wang2025dax.webp"
  },
  {
    year: 2025,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Exploring the Effects of Embodied Agents’ Verbal and Nonverbal Dominance on Decision-Making: A Study Design",
    authors: "Taeyeon Kim, Hyeongil Nam, Ahmad A. Fouad, Kangsoo Kim, and Myungho Lee",
    venue: "Proceedings of IEEE VRW, 2025, pp. 1484–1485.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00388",
    image: "/assets/publications/Kim2025ete.webp"
  },
  {
    year: 2025,
    category: "Poster / EA",
    subtype: "Poster",
    title: "“I look like a gorilla, but don’t move like one!”: Impact of Avatar-Locomotion Congruence in Virtual Reality",
    authors: "Omar Khan, Hyeongil Nam, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW, 2025, pp. 1202–1203.",
    doi: "https://doi.org/10.1109/VRW66409.2025.00247",
    image: "/assets/publications/Khan2025ill.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "AR Fitness Dog: Effects of a User-Mimicking Interactive Virtual Pet on User Experience and Social Presence in Physical Exercise",
    authors: "Hyeongil Nam, Kisub Lee, Jong-Il Park, and Kangsoo Kim",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 5, pp. 2817–2827, 2025.",
    doi: "https://doi.org/10.1109/TVCG.2025.3549858",
    award: "Honorable Mention for Best Paper Award at IEEE VR 2025 (Top 3%)",
    image: "/assets/publications/Nam2025afd.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Article",
    title: "How Collaboration Context and Personality Traits Shape the Social Norms of Human-to-Avatar Identity Representation",
    authors: "Seoyoung Kang, Boram Yoon, Kangsoo Kim, Jonathan Gratch, and Woontack Woo",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 5, pp. 3387–3396, 2025.",
    doi: "https://doi.org/10.1109/TVCG.2025.3549904",
    award: "Best Paper Award at IEEE VR 2025 (Top 1%)",
    image: "/assets/publications/Kang2025hcc.webp"
  },
  {
    year: 2025,
    category: "Journal",
    subtype: "Journal Editorial",
    title: "Foreword to the special section on Recent Advances in Industrial eXtended Reality",
    authors: "Bernardo Marques, Paulo Dias, Kangsoo Kim, and Heejin Jeong",
    venue: "Computers & Graphics, vol. 127, p. 104165, 2025.",
    doi: "https://doi.org/10.1016/j.cag.2025.104165",
    image: "/assets/publications/Marques2025ftt.webp"
  },
  {
    year: 2025,
    category: "Other",
    subtype: "Demo and Presentation",
    title: "Augmented Reality Decision Support System for Cardiopulmonary Arrest",
    authors: "Ryan M. Kang, Adam Cheng, Yiqun Lin, Alexandre De Masi, Ana Rajic, Jennifer Davidson, Jack Fu, Frederic Ehrler, Johan N. Siebert, Sergio Manzano, and Kangsoo Kim",
    venue: "Research Study Development and Presentation Program (DPP) and SimVentors at International Meeting on Simulation in Healthcare (IMSH) 2025, Orlando, FL, USA.",
    image: "/assets/publications/Kang2025ard.webp"
  },
  {
    year: 2024,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Watch Buddy: Evaluating the Impact of an Expressive Virtual Agent on Video Consumption Experience in Augmented Reality",
    authors: "Hyeongil Nam, Kisub Lee, Muskan Sarvesh, Sangwoo Cho, Jong-Il Park, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR, 2024, pp. 816–825.",
    doi: "https://doi.org/10.1109/ISMAR62088.2024.00097",
    image: "/assets/publications/Nam2024wbe.webp"
  },
  {
    year: 2024,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Perceived Empathy in Mixed Reality: Assessing the Impact of Empathic Agents’ Awareness of User Physiological States",
    authors: "Zhuang Chang, Kangsoo Kim, Kunal Gupta, Jamila Abouelenin, Zirui Xiao, Boyang Gu, Huidong Bai, and Mark Billinghurst",
    venue: "Proceedings of IEEE ISMAR, 2024, pp. 406–415.",
    doi: "https://doi.org/10.1109/ISMAR62088.2024.00055",
    image: "/assets/publications/Chang2024pei.webp"
  },
  {
    year: 2024,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Gender Differences in Perceiving Avatar Face and Interpersonal Distance: Exploring Realism and Social Presence in Mixed Reality",
    authors: "Seoyoung Kang, Anh Nguyen, Boram Yoon, Kangsoo Kim, and Woontack Woo",
    venue: "Proceedings of IEEE ISMAR, 2024, pp. 101–110.",
    doi: "https://doi.org/10.1109/ISMAR62088.2024.00024",
    image: "/assets/publications/Kang2024gdi.webp"
  },
  {
    year: 2024,
    category: "Conference",
    subtype: "Conference Paper",
    title: "The Influence of Emotion-based Prioritized Facial Expressions on Social Presence in Avatar-mediated Remote Communication",
    authors: "Seoyoung Kang, Hail Song, Boram Yoon, Kangsoo Kim, and Woontack Woo",
    venue: "Proceedings of IEEE ISMAR, 2024, pp. 1147–1156.",
    doi: "https://doi.org/10.1109/ISMAR62088.2024.00131",
    image: "/assets/publications/Kang2024tio.webp"
  },
  {
    year: 2024,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Extended Reality and Digital Twin in the Oil and Gas Pipeline Industry: A Systematic Review on Applications, Trends, and Future Directions",
    authors: "Muskan Sarvesh, Minseok Kang, Hyeongil Nam, Simon S. Park, Ron Hugo, Frank Maurer, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR, 2024, pp. 710–719.",
    doi: "https://doi.org/10.1109/ISMAR62088.2024.00086",
    image: "/assets/publications/Sarvesh2024era.webp"
  },
  {
    year: 2024,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Exploring the Effects of Field of View and Opacity of Peripheral Real Scene on Virtual Reality Sickness",
    authors: "Chae Heon Lim, Kangsoo Kim, Changgu Kang, and Seul Chan Lee",
    venue: "Proceedings of IEEE ISMAR Adjunct, 2024, pp. 399–400.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00110",
    image: "/assets/publications/Lim2024ete.webp"
  },
  {
    year: 2024,
    category: "Other",
    subtype: "Demo",
    title: "Virtual Dairy Farm: An Interactive Experience for Public Education",
    authors: "Anh Nguyen, Hyeongil Nam, Emma Windfeld, Michael Francis, Guillaume Lhermie, and Kangsoo Kim",
    venue: "Proceedings of IEEE ISMAR Adjunct, 2024, pp. 630–631.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00184",
    image: "/assets/publications/Anh2024vdf.webp"
  },
  {
    year: 2024,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "An Overview of the 3rd International Workshop on eXtended Reality for Industrial and Occupational Supports (XRIOS)",
    authors: "Isaac Cho, Kangsoo Kim, Dongyun Han, Allison Bayro, Heejin Jeong, Hyungil Kim, Hayoun Moon, and Myounghoon Jeon",
    venue: "Proceedings of IEEE VRW: 3rd International Workshop on eXtended Reality for Industrial and Occupational Supports (XRIOS), 2024, pp. 190–195.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00039",
    image: "/assets/publications/Cho2024aoo.webp"
  },
  {
    year: 2024,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Immersive 3D Digital Twin for Collaborative Hydrogen Pipeline Simulation and Visualization: A Project Description",
    authors: "Muskan Sarvesh, Ryan (Minseok) Kang, Mehdi Marzban, Isaac Cho, Simon Park, Ron Hugo, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 3rd XRIOS Workshop, 2024, pp. 294–296.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00058",
    image: "/assets/publications/Sarvesh2024i3d.webp"
  },
  {
    year: 2024,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Exploring the Impact of Vibrotactile Feedback on Boom Lift Safety Training: A Study Design",
    authors: "Minseok Kang, Chae Heon Lim, Seul Chan Lee, Changgu Kang, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 3rd XRIOS Workshop, 2024, pp. 232–234.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00046",
    image: "/assets/publications/Kang2024eti.webp"
  },
  {
    year: 2024,
    category: "Poster / EA",
    subtype: "Poster",
    title: "A Scoping Review on Immersive Technologies in the Oil and Gas Industry",
    authors: "Muskan Sarvesh, Mehdi Marzban, Ryan (Minseok) Kang, Simon Park, Ron Hugo, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW, 2024, pp. 761–762.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00177",
    image: "/assets/publications/Sarvesh2024asr.webp"
  },
  {
    year: 2024,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Investigating the Impact of Virtual Avatars and Owner Gender on Virtual Partner Selection in Avatar-based Interactions",
    authors: "Anh Nguyen, Seoyoung Kang, Woontack Woo, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW, 2024, pp. 885–886.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00239",
    image: "/assets/publications/Anh2024iti.webp"
  },
  {
    year: 2024,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Exploring the Impact of Virtual Human and Symbol-based Guide Cues in Immersive VR on Real-World Navigation Experience",
    authors: "Omar Khan, Anh Nguyen, Michael Francis, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW, 2024, pp. 883–884.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00238",
    image: "/assets/publications/Khan2024eti.webp"
  },
  {
    year: 2024,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Developing a Multimodal Clinical Nursing Simulation with a Virtual Preceptor in AR",
    authors: "Hyeongil Nam, Ji-Young Yeo, Kisub Lee, Kangsoo Kim, and Jong-Il Park",
    venue: "Proceedings of IEEE VRW, 2024, pp. 793–794.",
    doi: "https://doi.org/10.1109/VRW62533.2024.00193",
    image: "/assets/publications/Nam2024dam.webp"
  },
  {
    year: 2024,
    category: "Journal",
    subtype: "Journal Article",
    title: "Visual Feedback and Guided Balance Training in an Immersive Virtual Reality Environment for Lower Extremity Rehabilitation",
    authors: "Sydney Segear, Vuthea Chheang, Lauren Baron, Jicheng Li, Kangsoo Kim, and Roghayeh Barmaki",
    venue: "Computers & Graphics, vol. 119, p. 103880, 2024.",
    doi: "https://doi.org/10.1016/j.cag.2024.01.007",
    image: "/assets/publications/Segear2024vfa.webp"
  },
  {
    year: 2024,
    category: "Conference",
    subtype: "Conference Paper",
    title: "A Large-Scale Feasibility and Ethnography Study of Screen-based AR and 3D Visualization Tools for Anatomy Education: Exploring Gender Perspectives in Learning Experience",
    authors: "Roghayeh Barmaki, Kangsoo Kim, Zhang Guo, Qile Wang, Kevin Yu, Rebecca Pearlman, and Nassir Navab",
    venue: "Proceedings of the IEEE International Conference on Artificial Intelligence & Extended and Virtual Reality (AIxVR), 2024, pp. 205–214.",
    doi: "https://doi.org/10.1109/AIxVR59861.2024.00033",
    image: "/assets/publications/Barmaki2024als.webp"
  },
  {
    year: 2024,
    category: "Journal",
    subtype: "Journal Article",
    title: "Developing an immersive virtual farm simulation for engaging and effective public education about the dairy industry",
    authors: "Anh Nguyen, Michael Francis, Emma Windfeld, Guillaume Lhermie, and Kangsoo Kim",
    venue: "Computers & Graphics, vol. 118, pp. 173–183, 2024.",
    doi: "https://doi.org/10.1016/j.cag.2023.12.011",
    image: "/assets/publications/Nguyen2023dai.webp"
  },
  {
    year: 2023,
    category: "Journal",
    subtype: "Journal Article",
    title: "Contact Part Detection from 3D Human Motion Data Using Manually Labeled Contact Data and Deep Learning",
    authors: "Changgu Kang, Meejin Kim, Kangsoo Kim, and Sukwon Lee",
    venue: "IEEE Access, vol. 11, pp. 127608–127618, 2023.",
    doi: "https://doi.org/10.1109/ACCESS.2023.3331687",
    image: "/assets/publications/Kang2023cpd.webp"
  },
  {
    year: 2023,
    category: "Other",
    subtype: "Patent",
    title: "Spatial Positioning of Targeted Object Magnification",
    authors: "Gerd Bruder, Gregory F. Welch, Kangsoo Kim, and Zubin Choudhary",
    venue: "U.S. Patent US 11,798,127 B2, October 24, 2023.",
    image: "/assets/publications/Bruder2023spo.webp"
  },
  {
    year: 2023,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Effects of Different Facial Blendshape Combinations on Social Presence for Avatar-mediated Mixed Reality Remote Communication",
    authors: "Seoyoung Kang, Hail Song, Boram Yoon, Kangsoo Kim, and Woontack Woo",
    venue: "Proceedings of IEEE ISMAR Adjunct, 2023, pp. 439–440.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct60411.2023.00094",
    image: "/assets/publications/Kang2023eod.webp"
  },
  {
    year: 2023,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Investigating Psychological Ownership in a Shared AR Space: Effects of Human and Object Reality and Object Controllability",
    authors: "Dongyun Han, Donghoon Kim, Kangsoo Kim, and Isaac Cho",
    venue: "Proceedings of IEEE ISMAR, 2023, pp. 869–874.",
    doi: "https://doi.org/10.1109/ISMAR59233.2023.00102",
    image: "/assets/publications/Han2023ipo.webp"
  },
  {
    year: 2023,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Exploring the Effects of VR Activities on Stress Relief: A Comparison of Sitting-in-Silence, VR Meditation, and VR Smash Room",
    authors: "Dongyun Han, Donghoon Kim, Kangsoo Kim, and Isaac Cho",
    venue: "Proceedings of IEEE ISMAR, 2023, pp. 875–884.",
    doi: "https://doi.org/10.1109/ISMAR59233.2023.00103",
    image: "/assets/publications/Han2023acs.webp"
  },
  {
    year: 2023,
    category: "Journal",
    subtype: "Journal Article",
    title: "Physically Plausible Realistic Grip-lift Interaction Based on Hand Kinematics in VR",
    authors: "Hyeongil Nam, Chanhee Kim, Kangsoo Kim, and Jong-Il Park",
    venue: "Electronics, vol. 12, no. 13, pp. 2794:1–17, 2023.",
    doi: "https://doi.org/10.3390/electronics12132794",
    image: "/assets/publications/Nam2023ppr.webp"
  },
  {
    year: 2023,
    category: "Journal",
    subtype: "Journal Article",
    title: "A Scoping Review of the Use of Lab Streaming Layer Framework in Virtual and Augmented Reality Research",
    authors: "Qile Wang, Qinqi Zhang, Weitong Sun, Chadwick Boulay, Kangsoo Kim, and Roghayeh Barmaki",
    venue: "Virtual Reality, 2023.",
    doi: "https://doi.org/10.1007/s10055-023-00799-8",
    image: "/assets/publications/Wang2023asr.webp"
  },
  {
    year: 2023,
    category: "Poster / EA",
    subtype: "Poster",
    title: "A Comparison Study on Stress Relief in VR",
    authors: "Dongyun Han, Donghoon Kim, Kangsoo Kim, and Isaac Cho",
    venue: "Proceedings of IEEE VRW, 2023, pp. 899–900.",
    doi: "https://doi.org/10.1109/VRW58643.2023.00292",
    image: "/assets/publications/Han2023acs.webp"
  },
  {
    year: 2023,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Exploring Industrial Uses of Virtually Altering the Physical World",
    authors: "Yifan Li, Byung-Kuk Seo, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 2nd XRIOS Workshop, 2023, pp. 434–437.",
    doi: "https://doi.org/10.1109/VRW58643.2023.00094",
    image: "/assets/publications/Li2023eiu.webp"
  },
  {
    year: 2023,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "A Virtual Farm Tour for Public Education about Dairy Industry",
    authors: "Anh Nguyen, Emma Windfeld, Michael Francis, Guillaume Lhermie, and Kangsoo Kim",
    venue: "Proceedings of IEEE VRW: 2nd XRIOS Workshop, 2023, pp. 438–441.",
    doi: "https://doi.org/10.1109/VRW58643.2023.00095",
    image: "/assets/publications/Nguyen2023avf.webp"
  },
  {
    year: 2023,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "An Overview of the 2nd International Workshop on eXtended Reality for Industrial and Occupational Supports (XRIOS)",
    authors: "Kangsoo Kim, Bernardo Marques, Heejin Jeong, Samuel Silva, Isaac Cho, Carlos Ferreira, Hyungil Kim, Paulo Dias, Myounghoon Jeon, and Beatriz Sousa Santos",
    venue: "Proceedings of IEEE VRW: 2nd XRIOS Workshop, 2023, pp. 364–369.",
    doi: "https://doi.org/10.1109/VRW58643.2023.00081",
    image: "/assets/publications/Kim2023aoo.webp"
  },
  {
    year: 2023,
    category: "Book",
    subtype: "Book Chapter",
    title: "The Augmented Reality Internet of Things: Opportunities of Embodied Interactions in Transreality",
    authors: "Kangsoo Kim, Nahal Norouzi, Dongsik Jo, Gerd Bruder, and Gregory F. Welch",
    venue: "Springer Handbook of Augmented Reality, A. Y. C. Nee and S. K. Ong, Eds., 2023, pp. 797–829.",
    doi: "https://doi.org/10.1007/978-3-030-67822-7_32",
    image: "/assets/publications/Kim2023tar.webp"
  },
  {
    year: 2022,
    category: "Journal",
    subtype: "Journal Article",
    title: "Virtual Big Heads in Extended Reality: Estimation of Ideal Head Scales and Perceptual Thresholds for Comfort and Facial Cues",
    authors: "Zubin Choudhary, Austin Erickson, Nahal Norouzi, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "ACM Transactions on Applied Perception (TAP), vol. 20, no. 1, pp. 4:1–31, 2022.",
    doi: "https://doi.org/10.1145/3571074",
    image: "/assets/publications/Choudhary2022vbh.webp"
  },
  {
    year: 2022,
    category: "Journal",
    subtype: "Journal Article",
    title: "A Scoping Review of Assistance and Therapy with Head-Mounted Displays for People Who Are Visually Impaired",
    authors: "Yifan Li, Kangsoo Kim, Austin Erickson, Nahal Norouzi, Jonathan Jules, Gerd Bruder, and Gregory F. Welch",
    venue: "ACM Transactions on Accessible Computing (TACCESS), vol. 15, no. 3, pp. 1–28, 2022.",
    doi: "https://doi.org/10.1145/3522693",
    image: "/assets/publications/Li2022asr.webp"
  },
  {
    year: 2022,
    category: "Journal",
    subtype: "Journal Article",
    title: "The Advantages of Virtual Dogs Over Virtual People: Using Augmented Reality to Provide Social Support in Stressful Situations",
    authors: "Nahal Norouzi, Kangsoo Kim, Gerd Bruder, Jeremy N. Bailenson, Pamela J. Wisniewski, and Gregory F. Welch",
    venue: "International Journal of Human-Computer Studies (IJHCS), vol. 165, p. 102838, 2022.",
    doi: "https://doi.org/10.1016/j.ijhcs.2022.102838",
    image: "/assets/publications/Norouzi2022tao.webp"
  },
  {
    year: 2022,
    category: "Conference",
    subtype: "Conference Paper",
    title: "An Emotionally Responsive Virtual Parent for Pediatric Nursing Education: A Framework for Multimodal Momentary and Accumulated Interventions",
    authors: "Hyeongil Nam, Chanhee Kim, Kangsoo Kim, Ji-Young Yeo, and Jong-Il Park",
    venue: "Proceedings of IEEE ISMAR, 2022, pp. 365–374.",
    doi: "https://doi.org/10.1109/ISMAR55827.2022.00052",
    image: "/assets/publications/Nam2022aer.webp"
  },
  {
    year: 2022,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "An Overview of the 1st International Workshop on eXtended Reality for Industrial and Occupational Supports (XRIOS)",
    authors: "Heejin Jeong, Isaac Cho, Kangsoo Kim, Hyungil Kim, and Myounghoon Jeon",
    venue: "Proceedings of IEEE VRW: 1st XRIOS Workshop, 2022, pp. 523–527.",
    doi: "https://doi.org/10.1109/VRW55335.2022.00117",
    image: "/assets/publications/Jeong2022aoa.webp"
  },
  {
    year: 2022,
    category: "Other",
    subtype: "Patent",
    title: "Intelligent Object Magnification for Augmented Reality Displays",
    authors: "Gerd Bruder, Gregory F. Welch, Kangsoo Kim, and Zubin Choudhary",
    venue: "U.S. Patent US 11,410,270 B2, August 9, 2022.",
    award: "Innovation Award at TechConnect World 2021",
    image: "/assets/publications/Bruder2022iom.webp"
  },
  {
    year: 2021,
    category: "Journal",
    subtype: "Journal Article",
    title: "Virtual Animals as Diegetic Attention Guidance Mechanisms in 360-Degree Experiences",
    authors: "Nahal Norouzi, Gerd Bruder, Austin Erickson, Kangsoo Kim, Jeremy N. Bailenson, Pamela J. Wisniewski, Charles E. Hughes, and Gregory F. Welch",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 27, no. 11, pp. 4321–4331, 2021.",
    doi: "https://doi.org/10.1109/tvcg.2021.3106490",
    image: "/assets/publications/Norouzi2021vaa.webp"
  },
  {
    year: 2021,
    category: "Journal",
    subtype: "Journal Article",
    title: "An Extended Analysis on the Benefits of Dark Mode User Interfaces in Optical See-Through Head-Mounted Displays",
    authors: "Austin Erickson, Kangsoo Kim, Alexis Lambert, Gerd Bruder, Michael P. Browne, and Gregory F. Welch",
    venue: "ACM Transactions on Applied Perception (TAP), vol. 18, no. 3, pp. 1–22, 2021.",
    doi: "https://doi.org/10.1145/3456874",
    image: "/assets/publications/Erickson2021aea.webp"
  },
  {
    year: 2021,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Enjoyable Physical Therapy Experience with Interactive Drawing Games in Immersive Virtual Reality",
    authors: "Lauren Baron, Qile Wang, Sydney Segear, Brian Cohn, Kangsoo Kim, and Roghayeh Barmaki",
    venue: "Proceedings of the ACM Symposium on Spatial User Interaction (SUI), 2021, pp. 8:1–8.",
    doi: "https://doi.org/10.1145/3485279.3485285",
    image: "/assets/publications/Baron2021ept.webp"
  },
  {
    year: 2021,
    category: "Conference",
    subtype: "Conference Paper",
    title: "An Automated Mutual Gaze Detection Framework for Social Behavior Assessment in Therapy for Children with Autism",
    authors: "Zhang Guo, Kangsoo Kim, Anjana Bhat, and Roghayeh Barmaki",
    venue: "Proceedings of the ACM International Conference on Multimodal Interaction (ICMI), 2021, pp. 444–452.",
    doi: "https://doi.org/10.1145/3462244.3479882",
    image: "/assets/publications/Guo2021aam.webp"
  },
  {
    year: 2021,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Diegetic Representations for Seamless Cross-Reality Interruptions",
    authors: "Matthew Gottsacker, Nahal Norouzi, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE ISMAR, 2021, pp. 310–319.",
    doi: "https://doi.org/10.1109/ISMAR52148.2021.00047",
    image: "/assets/publications/Gottsacker2021drf.webp"
  },
  {
    year: 2021,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Beyond Visible Light: User and Societal Impacts of Egocentric Multispectral Vision",
    authors: "Austin Erickson, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of International Conference on Virtual, Augmented, and Mixed Reality (VAMR), 2021, pp. 317–335.",
    doi: "https://doi.org/10.1007/978-3-030-77599-5_23",
    image: "/assets/publications/Erickson2021bvl.webp"
  },
  {
    year: 2021,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Revisiting Distance Perception with Scaled Embodied Cues in Social Virtual Reality",
    authors: "Zubin Choudhary, Matthew Gottsacker, Kangsoo Kim, Ryan Schubert, Jeanine Stefanucci, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE VR, 2021, pp. 788–797.",
    doi: "https://doi.org/10.1109/VR50410.2021.00106",
    image: "/assets/publications/Choudhary2021rdp.webp"
  },
  {
    year: 2021,
    category: "Poster / EA",
    subtype: "Extended Abstract",
    title: "Autonomous Vehicle Visual Embodiment for Pedestrian Interactions in Crossing Scenarios",
    authors: "Hiroshi Furuya, Kangsoo Kim, Gerd Bruder, Pamela J. Wisniewski, and Gregory F. Welch",
    venue: "Proceedings of the ACM CHI Conference Extended Abstracts on Human Factors in Computing Systems, 2021, pp. 1–7.",
    doi: "https://doi.org/10.1145/3411763.3451626",
    image: "/assets/publications/Furuya2021avv.webp"
  },
  {
    year: 2021,
    category: "Poster / EA",
    subtype: "Poster",
    title: "An LSL-Middleware Prototype for VR/AR Data Collection",
    authors: "Qile Wang, Vincent Beardsley, Qinqi Zhang, Kangsoo Kim, and Roghayeh Barmaki",
    venue: "Proceedings of the ACM Symposium on Spatial User Interaction (SUI), 2021, pp. 19:1–2.",
    doi: "https://doi.org/10.1145/3485279.3485313",
    image: "/assets/publications/Wang2021alm.webp"
  },
  {
    year: 2020,
    category: "Journal",
    subtype: "Journal Editorial",
    title: "Multimodal interfaces and communication cues for remote collaboration",
    authors: "Seungwon Kim, Mark Billinghurst, and Kangsoo Kim",
    venue: "Journal on Multimodal User Interfaces, vol. 14, no. 4, pp. 313–319, 2020.",
    doi: "https://doi.org/10.1007/s12193-020-00346-8",
    image: "/assets/publications/Kim2020mia.webp"
  },
  {
    year: 2020,
    category: "Journal",
    subtype: "Journal Article",
    title: "Reducing Cognitive Load and Improving Warfighter Problem Solving With Intelligent Virtual Assistants",
    authors: "Celso M. de Melo, Kangsoo Kim, Nahal Norouzi, Gerd Bruder, and Gregory F. Welch",
    venue: "Frontiers in Psychology, vol. 11, no. 554706, pp. 1–12, 2020.",
    doi: "https://doi.org/10.3389/fpsyg.2020.554706",
    image: "/assets/publications/deMelo2020rcl.webp"
  },
  {
    year: 2020,
    category: "Journal",
    subtype: "Journal Article",
    title: "Sharing gaze rays for visual target identification tasks in collaborative augmented reality",
    authors: "Austin Erickson, Nahal Norouzi, Kangsoo Kim, Ryan Schubert, Jonathan Jules, Joseph J. LaViola, Gerd Bruder, and Gregory F. Welch",
    venue: "Journal on Multimodal User Interfaces, vol. 14, no. 4, pp. 353–371, 2020.",
    doi: "https://doi.org/10.1007/s12193-020-00330-2",
    image: "/assets/publications/Erickson2020sgr.webp"
  },
  {
    year: 2020,
    category: "Journal",
    subtype: "Journal Article",
    title: "Effects of Depth Information on Visual Target Identification Task Performance in Shared Gaze Environments",
    authors: "Austin Erickson, Nahal Norouzi, Kangsoo Kim, Joseph J. LaViola, Gerd Bruder, and Gregory F. Welch",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 26, no. 5, pp. 1934–1944, 2020.",
    doi: "https://doi.org/10.1109/TVCG.2020.2973054",
    image: "/assets/publications/Erickson2020eod.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "A Systematic Literature Review of Embodied Augmented Reality Agents in Head-Mounted Display Environments",
    authors: "Nahal Norouzi, Kangsoo Kim, Gerd Bruder, Austin Erickson, Zubin Choudhary, Yifan Li, and Gregory F. Welch",
    venue: "Proceedings of ICAT-EGVE, 2020, pp. 101–111.",
    doi: "https://doi.org/10.2312/egve.20201264",
    image: "/assets/publications/Norouzi2020asl.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "A Review of Visual Perception Research in Optical See-Through Augmented Reality",
    authors: "Austin Erickson, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ICAT-EGVE, 2020, pp. 27–35.",
    doi: "https://doi.org/10.2312/egve.20201256",
    image: "/assets/publications/Erickson2020aro.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Exploring the Limitations of Environment Lighting on Optical See-Through Head-Mounted Displays",
    authors: "Austin Erickson, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of the ACM Symposium on Spatial User Interaction (SUI), 2020, pp. 9:1–8.",
    doi: "https://doi.org/10.1145/3385959.3418445",
    image: "/assets/publications/Erickson2020etl.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Meta-Analysis of Global Activities in Augmented Reality (AR) and Virtual Reality (VR)",
    authors: "Johan Pognon, Jacques Chi, Alexandre Salabert, Kangsoo Kim, and Si Jung Kim",
    venue: "Augmented Reality and Virtual Reality, 2020, pp. 335–347.",
    doi: "http://link.springer.com/10.1007/978-3-030-37869-1_27",
    image: "/assets/publications/Pognon2020mao.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Reducing Task Load with an Embodied Intelligent Virtual Assistant for Improved Performance in Collaborative Decision Making",
    authors: "Kangsoo Kim, Celso M. de Melo, Nahal Norouzi, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE VR, 2020, pp. 529–538.",
    doi: "https://doi.org/10.1109/VR46266.2020.00074",
    image: "/assets/publications/Kim2020rtl.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Virtual Big Heads: Analysis of Human Perception and Comfort of Head Scales in Social Virtual Reality",
    authors: "Zubin Choudhary, Kangsoo Kim, Ryan Schubert, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE VR, 2020, pp. 425–433.",
    doi: "https://doi.org/10.1109/VR46266.2020.00063",
    image: "/assets/publications/Choudhary2020vbh.webp"
  },
  {
    year: 2020,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Effects of Dark Mode Graphics on Visual Acuity and Fatigue with Virtual Reality Head-Mounted Displays",
    authors: "Austin Erickson, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE VR, 2020, pp. 434–442.",
    doi: "https://doi.org/10.1109/VR46266.2020.00064",
    image: "/assets/publications/Erickson2020eodm.webp"
  },
  {
    year: 2020,
    category: "Poster / EA",
    subtype: "Poster",
    title: "An Automated Virtual Receptionist for Recognizing Visitors and Assuring Mask Wearing",
    authors: "Sharare Zehtabian, Siavash Khodadadeh, Kangsoo Kim, Gerd Bruder, Gregory F. Welch, Ladislau Bölöni, and Damla Turgut",
    venue: "Proceedings of ICAT-EGVE, 2020, pp. 9–10.",
    doi: "https://doi.org/10.2312/egve.20201273",
    image: "/assets/publications/Zehtabian2020aav.webp"
  },
  {
    year: 2020,
    category: "Other",
    subtype: "Demo",
    title: "Dark/Light Mode Adaptation for Graphical User Interfaces on Near-Eye Displays",
    authors: "Austin Erickson, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ICAT-EGVE, 2020, pp. 10–11.",
    doi: "https://doi.org/10.2312/egve.20201280",
    image: "/assets/publications/Erickson2020dlm.webp"
  },
  {
    year: 2020,
    category: "Other",
    subtype: "Demo",
    title: "Towards Interactive Virtual Dogs as a Pervasive Social Companion in Augmented Reality",
    authors: "Nahal Norouzi, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ICAT-EGVE, 2020, pp. 29–30.",
    doi: "https://doi.org/10.2312/egve.20201283",
    award: "Best Demo Audience Choice Award",
    image: "/assets/publications/Norouzi2020tiv.webp"
  },
  {
    year: 2020,
    category: "Other",
    subtype: "Tutorial",
    title: "Developing embodied interactive virtual characters for human-subjects studies",
    authors: "Kangsoo Kim, Austin Erickson, and Nahal Norouzi",
    venue: "Proceedings of IEEE VRW, 2020, pp. 1–1.",
    doi: "https://doi.org/10.1109/VRW50115.2020.00291",
    image: "/assets/publications/Kim2020dei.webp"
  },
  {
    year: 2019,
    category: "Journal",
    subtype: "Journal Article",
    title: "Blowing in the wind: Increasing social presence with a virtual human via environmental airflow interaction in mixed reality",
    authors: "Kangsoo Kim, Ryan Schubert, Jason Hochreiter, Gerd Bruder, and Gregory F. Welch",
    venue: "Computers & Graphics, vol. 83, pp. 23–32, 2019.",
    doi: "https://doi.org/10.1016/j.cag.2019.06.006",
    image: "/assets/publications/Kim2019bit.webp"
  },
  {
    year: 2019,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Effects of Patient Care Assistant Embodiment and Computer Mediation on User Experience",
    authors: "Kangsoo Kim, Nahal Norouzi, Tiffany Losekamp, Gerd Bruder, Mindi Anderson, and Gregory F. Welch",
    venue: "Proceedings of IEEE AIVR, 2019, pp. 17–24.",
    doi: "https://doi.org/10.1109/AIVR46125.2019.00013",
    image: "/assets/publications/Kim2019eop.webp"
  },
  {
    year: 2019,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Effects of Dark Mode on Visual Fatigue and Acuity in Optical See-Through Head-Mounted Displays",
    authors: "Kangsoo Kim, Austin Erickson, Alexis Lambert, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ACM SUI, 2019, pp. 9:1–9:9.",
    doi: "https://doi.org/10.1145/3357251.3357584",
    image: "/assets/publications/Kim2019eod.webp"
  },
  {
    year: 2019,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Analysis of Peripheral Vision and Vibrotactile Feedback During Proximal Search Tasks with Dynamic Virtual Entities in Augmented Reality",
    authors: "Kendra Richards, Nikhil Mahalanobis, Kangsoo Kim, Ryan Schubert, Myungho Lee, Salam Daher, Nahal Norouzi, Jason Hochreiter, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ACM SUI, 2019, pp. 3:1–3:9.",
    doi: "https://doi.org/10.1145/3357251.3357585",
    image: "/assets/publications/Richards2019aop.webp"
  },
  {
    year: 2019,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Effects of Shared Gaze Parameters on Visual Target Identification Task Performance in Augmented Reality",
    authors: "Nahal Norouzi, Austin Erickson, Kangsoo Kim, Ryan Schubert, Joseph J. Laviola, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ACM SUI, 2019, pp. 12:1–12:11.",
    doi: "https://doi.org/10.1145/3357251.3357587",
    award: "Best Long Paper Award",
    image: "/assets/publications/Norouzi2019eos.webp"
  },
  {
    year: 2019,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Is It Cold in Here or Is It Just Me? Analysis of Augmented Reality Temperature Visualization for Computer-Mediated Thermoception",
    authors: "Austin Erickson, Kangsoo Kim, Ryan Schubert, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE ISMAR, 2019, pp. 318–327.",
    doi: "https://doi.org/10.1109/ISMAR.2019.000-2",
    image: "/assets/publications/Erickson2019iic.webp"
  },
  {
    year: 2019,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Walking Your Virtual Dog: Analysis of Awareness and Proxemics with Simulated Support Animals in Augmented Reality",
    authors: "Nahal Norouzi, Kangsoo Kim, Myungho Lee, Ryan Schubert, Austin Erickson, Jeremy N. Bailenson, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE ISMAR, 2019, pp. 253–264.",
    doi: "https://doi.org/10.1109/ISMAR.2019.000-8",
    image: "/assets/publications/Norouzi2019wyv.webp"
  },
  {
    year: 2018,
    category: "Journal",
    subtype: "Journal Article",
    title: "Revisiting Trends in Augmented Reality Research: A Review of the 2nd Decade of ISMAR (2008–2017)",
    authors: "Kangsoo Kim, Mark Billinghurst, Gerd Bruder, Henry B.L. Duh, and Gregory F. Welch",
    venue: "IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 24, no. 11, pp. 2947–2962, 2018.",
    doi: "https://doi.org/10.1109/TVCG.2018.2868591",
    image: "/assets/publications/Kim2018rti.webp"
  },
  {
    year: 2018,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Blowing in the Wind: Increasing Copresence with a Virtual Human via Airflow Influence in Augmented Reality",
    authors: "Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ICAT-EGVE, 2018, pp. 183–190.",
    doi: "https://doi.org/10.2312/egve.20181332",
    award: "Honourable Mention Award",
    image: "/assets/publications/Kim2019bit.webp"
  },
  {
    year: 2018,
    category: "Conference",
    subtype: "Conference Paper",
    title: "A Systematic Survey of 15 Years of User Studies Published in the Intelligent Virtual Agents Conference",
    authors: "Nahal Norouzi, Kangsoo Kim, Jason Hochreiter, Myungho Lee, Salam Daher, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of ACM IVA, 2018, pp. 17–22.",
    doi: "https://doi.org/10.1145/3267851.3267901",
    image: "/assets/publications/Norouzi2018ass.webp"
  },
  {
    year: 2018,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Does a Digital Assistant Need a Body? The Influence of Visual Embodiment and Social Behavior on the Perception of Intelligent Virtual Agents in AR",
    authors: "Kangsoo Kim, Luke Boelling, Steffen Haesler, Jeremy N. Bailenson, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE ISMAR, 2018, pp. 105–114.",
    doi: "https://doi.org/10.1109/ISMAR.2018.00039",
    image: "/assets/publications/Kim2018dad.webp"
  },
  {
    year: 2018,
    category: "Poster / EA",
    subtype: "Extended Abstract",
    title: "Improving Social Presence with a Virtual Human via Multimodal Physical–Virtual Interactivity in AR",
    authors: "Kangsoo Kim",
    venue: "Proceedings of the ACM CHI Conference Extended Abstracts on Human Factors in Computing Systems (Student Research Competition), 2018, pp. SRC09:1–6.",
    doi: "https://doi.org/10.1145/3170427.3180291",
    image: "/assets/publications/Kim2018isp.webp"
  },
  {
    year: 2018,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Seeing is Believing: Improving the Perceived Trust in Visually Embodied Alexa in Augmented Reality",
    authors: "Steffen Haesler, Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of IEEE ISMAR Adjunct, 2018, pp. 204–205.",
    doi: "https://doi.org/10.1109/ISMAR-Adjunct.2018.00067",
    image: "/assets/publications/Haesler2018sib.webp"
  },
  {
    year: 2017,
    category: "Journal",
    subtype: "Journal Article",
    title: "A Large-Scale Study of Surrogate Physicality and Gesturing on Human–Surrogate Interactions in a Public Space",
    authors: "Kangsoo Kim, Arjun Nagendran, Jeremy N. Bailenson, Andrew Raij, Gerd Bruder, Myungho Lee, Ryan Schubert, Xin Yan, and Gregory F. Welch",
    venue: "Frontiers in Robotics and AI: Virtual Environments, vol. 4, no. 32, 2017.",
    doi: "https://doi.org/10.3389/frobt.2017.00032",
    image: "/assets/publications/Kim2017als.webp"
  },
  {
    year: 2017,
    category: "Journal",
    subtype: "Journal Article",
    title: "The effects of virtual human’s spatial and behavioral coherence with physical objects on social presence in AR",
    authors: "Kangsoo Kim, Divine Maloney, Gerd Bruder, Jeremy N. Bailenson, and Gregory F. Welch",
    venue: "Computer Animation and Virtual Worlds, vol. 28, no. 3–4, e1771, 2017.",
    doi: "https://doi.org/10.1002/cav.1771",
    image: "/assets/publications/Kim2017teo.webp"
  },
  {
    year: 2017,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Exploring the Effects of Observed Physicality Conflicts on Real–Virtual Human Interaction in Augmented Reality",
    authors: "Kangsoo Kim, Gerd Bruder, and Gregory F. Welch",
    venue: "Proceedings of the 23rd ACM Symposium on Virtual Reality Software and Technology (VRST), 2017, pp. 31:1–7.",
    doi: "https://doi.org/10.1145/3139131.3139151",
    award: "Best Student Paper Award",
    image: "/assets/publications/Kim2017ete.webp"
  },
  {
    year: 2017,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Effects of Social Priming on Social Presence with Intelligent Virtual Agents",
    authors: "Salam Daher, Kangsoo Kim, Myungho Lee, Ryan Schubert, Gerd Bruder, Jeremy N. Bailenson, and Gregory F. Welch",
    venue: "Proceedings of International Conference on Intelligent Virtual Agents (IVA), 2017, LNCS 10498.",
    doi: "https://doi.org/10.1007/978-3-319-67401-8_10",
    image: "/assets/publications/Daher2017eos.webp"
  },
  {
    year: 2017,
    category: "Poster / EA",
    subtype: "Poster",
    title: "The Impact of Avatar-Owner Visual Similarity on Body Ownership in Immersive Virtual Reality",
    authors: "Dongsik Jo, Kangsoo Kim, Gregory F. Welch, Woojin Jeon, Yongwan Kim, Ki-Hong Kim, and Gerard J. Kim",
    venue: "Proceedings of the 23rd ACM Symposium on Virtual Reality Software and Technology (VRST), 2017, pp. 77:1–2.",
    doi: "https://doi.org/10.1145/3139131.3141214",
    image: "/assets/publications/Jo2017tio.webp"
  },
  {
    year: 2017,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Can Social Presence Be Contagious? Effects of Social Presence Priming on Interaction with Virtual Humans",
    authors: "Salam Daher, Kangsoo Kim, Myungho Lee, Gerd Bruder, Ryan Schubert, Jeremy N. Bailenson, and Gregory F. Welch",
    venue: "Proceedings of the IEEE Symposium on 3D User Interfaces (3DUI), 2017, pp. 201–202.",
    doi: "http://doi.org/10.1109/3DUI.2017.7893341",
    image: "/assets/publications/Daher2017csp.webp"
  },
  {
    year: 2016,
    category: "Conference",
    subtype: "Conference Paper",
    title: "The Influence of Real Human Personality on Social Presence with a Virtual Human in Augmented Reality",
    authors: "Kangsoo Kim, Gerd Bruder, Divine Maloney, and Gregory F. Welch",
    venue: "Proceedings of ICAT-EGVE, 2016, pp. 115–122.",
    doi: "https://doi.org/10.2312/egve.20161443",
    image: "/assets/publications/Kim2016tio.webp"
  },
  {
    year: 2016,
    category: "Conference",
    subtype: "Conference Paper",
    title: "The Wobbly Table: Increased Social Presence via Subtle Incidental Movement of a Real-Virtual Table",
    authors: "Myungho Lee, Kangsoo Kim, Salam Daher, Andrew Raij, Ryan Schubert, Jeremy N. Bailenson, and Gregory F. Welch",
    venue: "Proceedings of IEEE VR, 2016, pp. 11–17.",
    doi: "https://doi.org/10.1109/VR.2016.7504683",
    image: "/assets/publications/Lee2016twt.webp"
  },
  {
    year: 2016,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Exploring Social Presence Transfer in Real-Virtual Human Interaction",
    authors: "Salam Daher, Kangsoo Kim, Myungho Lee, Andrew Raij, Ryan Schubert, Jeremy N. Bailenson, and Gregory F. Welch",
    venue: "Proceedings of IEEE VR, 2016, pp. 165–166.",
    doi: "https://doi.org/10.1109/VR.2016.7504705",
    image: "/assets/publications/Daher2016esp.webp"
  },
  {
    year: 2016,
    category: "Poster / EA",
    subtype: "DC - Poster",
    title: "[Doctoral Consortium] The Environment-Aware Agent Framework",
    authors: "Kangsoo Kim",
    venue: "Proceedings of the IEEE Virtual Reality (Doctoral Consortium), 2016.",
    image: "/assets/publications/Kim2016tea.webp"
  },
  {
    year: 2016,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Exploring the Impact of Environmental Effects on Social Presence with a Virtual Human",
    authors: "Kangsoo Kim, Ryan Schubert, and Gregory F. Welch",
    venue: "Proceedings of International Conference on Intelligent Virtual Agents (IVA), 2016, pp. 470–474, LNCS 10011.",
    doi: "https://doi.org/10.1007/978-3-319-47665-0_57",
    image: "/assets/publications/Kim2016eti.webp"
  },
  {
    year: 2016,
    category: "Other",
    subtype: "Demo",
    title: "Continuity of Real-Virtual Environmental Influence during an Interaction with an AR Virtual Human",
    authors: "Kangsoo Kim, Ryan Schubert, and Gregory F. Welch",
    venue: "Proceedings of the International Conference on Intelligent Virtual Agents (IVA), 2016, Los Angeles, CA, USA.",
    image: "/assets/publications/Kim2016eti.webp"
  },
  {
    year: 2015,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Expectancy Violations Related to a Virtual Human’s Joint Gaze Behavior in Real-Virtual Human Interactions",
    authors: "Kangsoo Kim, Arjun Nagendran, Jeremy N. Bailenson, and Gregory F. Welch",
    venue: "Proceedings of the International Conference on Computer Animation and Social Agents (CASA), 2015, pp. 5–8.",
    image: "/assets/publications/Kim2015evr.webp"
  },
  {
    year: 2015,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Maintaining and Enhancing Human-Surrogate Presence in Augmented Reality",
    authors: "Kangsoo Kim and Gregory F. Welch",
    venue: "Proceedings of the IEEE ISMAR Workshop on Human Perception and Psychology in Augmented Reality (ISMARW-HPPAR), 2015, pp. 15–19.",
    doi: "https://doi.org/10.1109/ISMARW.2015.13",
    image: "/assets/publications/Kim2015mae.webp"
  },
  {
    year: 2014,
    category: "Poster / EA",
    subtype: "Extended Abstract",
    title: "Empa Talk: A Physiological Data Incorporated Human-Computer Interactions",
    authors: "Myungho Lee, Kangsoo Kim, Hyunghwan Rho, and Si Jung Kim",
    venue: "Proceedings of the ACM CHI Conference Extended Abstracts on Human Factors in Computing Systems, 2014, pp. 1897–1902.",
    doi: "https://doi.org/10.1145/2559206.2581370",
    image: "/assets/publications/Lee2014eta.webp"
  },
  {
    year: 2012,
    category: "Conference",
    subtype: "Conference Paper",
    title: "Semi-automatic interactive modeling for model-based camera tracking",
    authors: "Eun Joo Rhee, Kangsoo Kim, Byung-Kuk Seo, and Jong-Il Park",
    venue: "Proceedings of the IEEE International Conference on Network Infrastructure and Digital Content (ICNIDC), 2012, pp. 425–428.",
    doi: "https://doi.org/10.1109/ICNIDC.2012.6418788",
    image: "/assets/publications/Rhee2012sai.webp"
  },
  {
    year: 2011,
    category: "Workshop",
    subtype: "Workshop Paper",
    title: "Augmented Reality-Based On-Site Tour Guide: A Study in Gyeongbokgung",
    authors: "Byung-Kuk Seo, Kangsoo Kim, and Jong-Il Park",
    venue: "Asian Conference on Computer Vision 2010 Workshops (ACCV-W), 2011, pp. 276–285, LNCS 6469.",
    doi: "https://doi.org/10.1007/978-3-642-22819-3_28",
    image: "/assets/publications/Seo2010arb.webp"
  },
  {
    year: 2010,
    category: "Conference",
    subtype: "Conference Paper",
    title: "A Tracking Framework for Augmented Reality Tours on Cultural Heritage Sites",
    authors: "Byung-Kuk Seo, Kangsoo Kim, Jungsik Park, and Jong-Il Park",
    venue: "Proceedings of the ACM SIGGRAPH International Conference on Virtual-Reality Continuum and its Applications in Industry (VRCAI), 2010, pp. 169–174.",
    doi: "https://doi.org/10.1145/1900179.1900215",
    image: "/assets/publications/Seo2010aff.webp"
  },
  {
    year: 2009,
    category: "Poster / EA",
    subtype: "Poster",
    title: "Augmented Reality Tour System for Immersive Experience of Cultural Heritage",
    authors: "Kangsoo Kim, Byung-Kuk Seo, Jae-Hyek Han, and Jong-Il Park",
    venue: "Proceedings of the ACM SIGGRAPH Conference on Virtual-Reality Continuum and its Applications in Industry (VRCAI), 2009, pp. 323–324.",
    doi: "https://doi.org/10.1145/1670252.1670325",
    image: "/assets/publications/Kim2009art.webp"
  }
];

export const theses = [
  {
    title: "Enhancing Leak Detection in Oil and Gas Pipelines with Multi-Task LSTM Model",
    author: "Mehdi Marzban",
    degree: "MSc in Electrical and Software Engineering",
    date: "2026/01"
  },
  {
    title: "Augmented Reality-Based Role-Specific Decision Support System for Cardiac Arrest Resuscitation",
    author: "Ryan (Minseok) Kang",
    degree: "MSc in Electrical and Software Engineering",
    date: "2025/07"
  },
  {
    title: "Designing and Evaluating Augmented Reality Systems for Supporting Nonspeaking Individuals in Daily Communication Tasks",
    author: "Michael Francis",
    degree: "MSc in Electrical and Software Engineering",
    date: "2025/01",
    note: "Co-advisor: Dr. Diwakar Krishnamurthy"
  }
];
