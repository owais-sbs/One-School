export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  table?: { headers: string[]; rows: string[][] };
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "One School Privacy Policy",
  effectiveDate: "October 20, 2026",
  intro:
    'This Privacy Policy explains how One Path Business Solutions collects, uses, shares and protects personal data when you visit one-school.onepathsolutions.com or use the One School platform, including the admin, teacher and parent dashboards (together, the "Service").',
  sections: [
    {
      title: "1. Who we are",
      paragraphs: [
        'One School is owned and operated by One Path Business Solutions ("OnePath", "we", "us" or "our"), 8-1-21/146, Level 1, Mirza Arcade, Shaikpet Road, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008, India.',
      ],
    },
    {
      title: "2. Our role",
      bullets: [
        "Website visitors, demo requests and school account owners. We decide how this data is used, so we act as the data fiduciary (or controller).",
        "Student, parent and staff data that a school stores in One School. The school decides what to collect and why, so the school is the data fiduciary. We process that data only on the school's instructions, as a data processor. Parents and students should send privacy requests to their school first.",
      ],
      note: "Because One School holds data about children, we also follow the One School Student and Children's Data Policy.",
    },
    {
      title: "3. Information we collect",
      paragraphs: ["Information you give us"],
      bullets: [
        "Demo requests: full name, school name, work email, phone or WhatsApp number, country, number of students, current system and your message.",
        "School account details: admin names, work emails, phone numbers, roles and passwords (stored only in hashed form).",
        "Billing details: school or trust name, billing address, tax or GST number and plan. Payments are handled by our payment partners. We do not store full card numbers.",
        "Newsletter sign ups: email address.",
      ],
    },
    {
      title: "Information schools store in One School",
      bullets: [
        "Student records: name, photo, date of birth, gender, admission number, class and section, roll number, ID card details, address, transport route, library records, attendance, homework, exam marks, report cards and fee records.",
        "Parent and guardian details: names, relationship, phone and WhatsApp numbers, email addresses and fee payment history.",
        "Staff records: name, contact details, subjects, classes, attendance, leave and, on plans with HRMS, payroll details.",
        "Messages and notices: diary entries, announcements, emergency broadcasts and communication between parents and staff.",
        "Transport data: bus routes and, where the school enables GPS tracking, vehicle location during trips. We do not track the location of students' phones.",
      ],
    },
    {
      title: "Information collected automatically",
      paragraphs: [
        "IP address, browser type, device type, operating system, pages viewed, actions taken, timestamps and error logs. See our Cookie Policy.",
      ],
    },
    {
      title: "Information from connected services",
      paragraphs: [
        "WhatsApp delivery and read status for alerts, payment status from payment gateways used for online fee collection, and GPS device data where transport tracking is used.",
      ],
    },
    {
      title: "4. How we use information",
      bullets: [
        "To run the Service: student management, attendance, fees, homework, report cards, transport, library, reports and dashboards, as the school configures them.",
        "To send alerts the school sets up, such as attendance, fee reminders and receipts, exam schedules, results, homework and emergency broadcasts, by WhatsApp, email, SMS or in the app.",
        "To process online fee payments made by parents to the school.",
        "To run AI tools and advanced analytics on Scale plans, only within the school's own data and only for that school.",
        "To verify identity, secure accounts and prevent misuse.",
        "To provide support, bill schools and keep financial records.",
        "To improve the Service using aggregated or de-identified usage data.",
        "To send product news to school contacts, with an unsubscribe link in every email.",
        "To meet legal obligations.",
      ],
      note: "We do not sell personal data. We never use student data for advertising, profiling for marketing, or behavioural monitoring, and we do not use it to train AI models for other customers.",
    },
    {
      title: "5. Legal basis",
      paragraphs: [
        "In India we process personal data under the Digital Personal Data Protection Act, 2023. The school is responsible for giving notice and obtaining verifiable consent from a parent or lawful guardian before processing a child's personal data. Where the GDPR or UK GDPR applies, we rely on performance of a contract, legitimate interests, legal obligations and, where needed, consent.",
      ],
    },
    {
      title: "6. How we share information",
      bullets: [
        "Service providers for hosting, storage, email, SMS and WhatsApp delivery, payment processing, analytics and support, under written contracts.",
        "Payment gateways used for fee collection, which receive the payment details needed to complete a transaction.",
        "People inside the school, according to roles. Parents see only their own child's records.",
        "Authorities, when the law or a valid order requires it, or to protect a child's safety.",
        "A buyer or successor in a merger, acquisition or sale of assets, under this Policy.",
      ],
      note: "A current list of our sub-processors is available on request.",
    },
    {
      title: "7. International transfers",
      paragraphs: [
        "Data may be stored in India or in other countries where our cloud providers run data centres. We use contractual and technical safeguards when data leaves your country.",
      ],
    },
    {
      title: "8. How long we keep data",
      bullets: [
        "School data is kept while the subscription is active.",
        "After cancellation or expiry, the school has 90 days to export its data. We then delete or anonymise it.",
        "Backups are cleared within 30 days of deletion from live systems.",
        "Invoices and payment records are kept as long as tax and accounting laws require.",
        "Demo requests and enquiries are kept for up to 24 months after our last contact.",
      ],
    },
    {
      title: "9. Security",
      paragraphs: [
        "We use encryption in transit, encryption at rest through our hosting providers, role based access, audit logs and regular backups. Only staff who need access to support a school can reach its data. No system is fully secure. If a personal data breach affects school data, we will inform the school without undue delay and help it notify parents, the Data Protection Board of India and other authorities where required.",
      ],
    },
    {
      title: "10. Your rights",
      paragraphs: [
        "Depending on where you live, you may have the right to access, correct, complete or erase your personal data, withdraw consent, nominate someone to act for you, object to or restrict processing, ask for a portable copy and complain to a data protection authority. Parents can use these rights for their child. Email info@onepathsolutions.com, or contact your school directly. We may need to verify your identity.",
      ],
    },
    {
      title: "11. Children",
      paragraphs: [
        "Our website is meant for adults such as school staff and parents. Students' data enters One School only through their school, with the safeguards in the Student and Children's Data Policy.",
      ],
    },
    {
      title: "12. Changes to this Policy",
      paragraphs: [
        "We will post any update here with a new effective date, and notify school admins by email or in the app about important changes.",
      ],
    },
    {
      title: "13. Contact",
      bullets: [
        "One Path Business Solutions",
        "Email: info@onepathsolutions.com",
        "Phone: +91 96523 01382",
        "Address: One Path Business Solutions, 8-1-21/146, Level 1, Mirza Arcade, Shaikpet Road, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008, India",
      ],
      note: "We aim to acknowledge complaints within 2 business days and resolve them within 30 days.",
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "One School Terms of Service",
  effectiveDate: "October 20, 2026",
  intro:
    'These Terms of Service ("Terms") are a contract between One Path Business Solutions ("OnePath", "we", "us" or "our") and the school, trust or educational institution that signs up for One School ("School" or "you"). By creating an account, booking an onboarding or paying for a plan, you accept these Terms. If you accept on behalf of an institution, you confirm that you have authority to bind it.',
  sections: [
    {
      title: "1. The Service",
      paragraphs: [
        'One School is a cloud school management platform with admin, teacher and parent dashboards for student records, admissions, attendance, homework, report cards, fees, accounting, CRM, staff management, transport, library, notifications and analytics, plus HRMS and AI tools on higher plans (the "Service"). Features depend on your plan. We may improve or change features, but we will not materially reduce the core features of a paid plan during a paid term.',
      ],
    },
    {
      title: "2. Accounts and users",
      bullets: [
        "You must give accurate institution, account and billing details and keep them current.",
        "School admins decide who gets access and what each teacher, staff member, parent or student can see. You are responsible for all activity under your account.",
        "Keep passwords confidential and tell us at once at info@onepathsolutions.com if you suspect unauthorised access.",
        "Student numbers must stay within your plan: Starter up to 100 students, Growth up to 300, Scale up to 1,000, or the extra student tiers you buy.",
      ],
    },
    {
      title: "3. Plans, add ons and payment",
      bullets: [
        "Prices are shown on our website or in your quote. Published prices are in US dollars unless your quote says otherwise.",
        "Plans are billed in advance, monthly or yearly. Annual billing gives a 10% discount on the plan and on eligible add ons.",
        "Add ons such as WhatsApp usage, AI credits, extra storage and extra students are charged as shown at purchase. Usage based add ons, such as WhatsApp messages, may be billed in arrears based on actual use.",
        "Taxes such as GST are added where applicable.",
        "Subscriptions renew automatically unless cancelled before the renewal date.",
        "We may change prices with at least 30 days notice. New prices apply from your next renewal.",
        "If an invoice stays unpaid 15 days after we notify you, we may suspend access until it is paid. Your data is not deleted during suspension.",
      ],
    },
    {
      title: "4. Online fee collection",
      paragraphs: [
        "When parents pay school fees through One School, the payment is made to the School through a third party payment gateway. The School is the seller of its educational services and is responsible for its fee structure, receipts, refunds of school fees, concessions and taxes. OnePath is a technology provider only and does not hold or control school fee money. Gateway charges are set by the gateway and are not refunded by OnePath.",
      ],
    },
    {
      title: "5. School data and children's data",
      bullets: [
        'You own all data you put into One School ("School Data").',
        "You give us a limited licence to host and process School Data only to provide and support the Service, as described in our Privacy Policy and Student and Children's Data Policy.",
        "You are responsible for giving notices to parents, staff and students and for obtaining verifiable parental consent before you add a child's personal data, as required by the Digital Personal Data Protection Act, 2023 and other laws that apply to you.",
        "You can export your data while your subscription is active and for 90 days after it ends.",
      ],
    },
    {
      title: "6. Messaging rules",
      paragraphs: [
        "WhatsApp, SMS and email alerts must be sent only to parents, staff and students who have agreed to receive them from the School. You must follow WhatsApp Business policies and local telecom rules. Messages must relate to school activities and must not be used for unrelated marketing.",
      ],
    },
    {
      title: "7. Acceptable use",
      paragraphs: ["You and your users must not:"],
      bullets: [
        "use the Service for anything unlawful, harmful or abusive, including bullying or harassment of students;",
        "upload content that exploits or endangers children, or that you have no right to share;",
        "upload malicious code, or try to bypass security or access other schools' data;",
        "overload, scrape or reverse engineer the Service, except where the law allows;",
        "resell or sublicense the Service without our written approval.",
      ],
      note: "We may suspend users or accounts that break these rules, and we will report content that endangers children to the authorities.",
    },
    {
      title: "8. Third party services",
      paragraphs: [
        "WhatsApp, payment gateways, GPS devices, SMS and email providers are run by third parties under their own terms. We are not responsible for their availability or actions, and we may need to change an integration if a provider changes its service.",
      ],
    },
    {
      title: "9. Availability and support",
      paragraphs: [
        "We work to keep the Service available at all times, apart from planned maintenance, which we try to schedule outside school hours. Support is offered by email on all plans, with priority support on Scale. Any service levels agreed for larger institutions are set out in their quote.",
      ],
    },
    {
      title: "10. Intellectual property",
      paragraphs: [
        "OnePath owns the Service, its software, design, templates, documentation and brand. These Terms do not transfer any of these rights to you. Report card templates and other content you create remain yours. If you send us feedback, we may use it freely.",
      ],
    },
    {
      title: "11. Confidentiality",
      paragraphs: [
        "Each party will protect the other's confidential information with reasonable care and use it only to perform these Terms, except where the information is public, already known, independently developed or must be disclosed by law.",
      ],
    },
    {
      title: "12. Disclaimer",
      paragraphs: [
        'Except as stated in these Terms, the Service is provided "as is" and "as available". Report cards, grades, attendance and fee records are generated from data entered by the School, and the School must check them before relying on them or sharing them.',
      ],
    },
    {
      title: "13. Limitation of liability",
      paragraphs: [
        "To the extent the law allows, neither party is liable for indirect, incidental, special or consequential losses, or for lost profits, revenue, goodwill or data. Our total liability for all claims relating to the Service is limited to the fees you paid us for One School in the 12 months before the event that caused the claim. These limits do not apply to payment obligations, fraud, or liability that cannot be limited by law.",
      ],
    },
    {
      title: "14. Indemnity",
      paragraphs: [
        "You will defend and indemnify OnePath against third party claims arising from School Data, missing parental consents, messages you send, or your breach of these Terms or the law. We will defend and indemnify you against third party claims that the Service, as provided by us, infringes their intellectual property rights.",
      ],
    },
    {
      title: "15. Term and termination",
      bullets: [
        "These Terms apply from sign up until your subscription ends.",
        "You may cancel at any time. Cancellation takes effect at the end of the current billing period.",
        "Either party may end the subscription for a serious breach that is not fixed within 15 days of written notice.",
        "We may suspend access at once where needed to protect children, stop fraud or prevent illegal activity.",
        "After termination, you may export your data for 90 days. We then delete it as described in our Privacy Policy.",
      ],
    },
    {
      title: "16. Governing law and disputes",
      paragraphs: [
        "These Terms are governed by the laws of India. Both parties will first try to settle any dispute through good faith discussion for 30 days. If that fails, the courts of Hyderabad, Telangana have exclusive jurisdiction.",
      ],
    },
    {
      title: "17. Changes to these Terms",
      paragraphs: [
        "We will post updated Terms here and give school admins at least 15 days notice of material changes. Continued use after that date means you accept the updated Terms.",
      ],
    },
    {
      title: "18. General",
      paragraphs: [
        "Neither party is liable for delays caused by events beyond its reasonable control. You may not assign these Terms without our consent, but we may assign them as part of a merger or sale of business. If any part of these Terms is invalid, the rest stays in force. These Terms, any quote and the documents they refer to are the entire agreement between us on this subject.",
      ],
    },
    {
      title: "19. Contact",
      paragraphs: [
        "One Path Business Solutions, 8-1-21/146, Level 1, Mirza Arcade, Shaikpet Road, Surya Nagar, Toli Chowki, Hyderabad, Telangana 500008, India. Email: info@onepathsolutions.com. Phone: +91 96523 01382.",
      ],
    },
  ],
};
