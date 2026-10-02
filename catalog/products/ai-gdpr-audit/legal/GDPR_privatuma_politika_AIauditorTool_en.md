# **PRIVACY POLICY**

**Last Updated:** September 18, 2026

This Privacy Policy (hereinafter referred to as the "Policy") explains how self-employed individual **Ilona Samoviča** (Reg. No. LV07098010209, registered address: Gaismas iela 6, Daugavpils, Latvia) (hereinafter referred to as the "Controller") processes personal data through the **AI GDPR Audit tool** application (hereinafter referred to as the "App").

The App is an automated web tool utilizing artificial intelligence (AI) technology to perform preliminary express analysis and initial screening (preliminary audits) of documents. The analysis relies on a large language model trained to identify patterns, terms, and structural compliance elements related to the General Data Protection Regulation (GDPR) and other data protection legislation within legal texts. The App is **not** a provider of legal services, does **not** substitute for a qualified lawyer or legal counsel, and its output is strictly for informational purposes. The final decision regarding document compliance and any necessary amendments rests solely with the User.  

### GENERAL PROVISIONS

1.1. **Infrastructure:** The App’s infrastructure is built on Next.js (Vercel) and Python/FastAPI technologies. Document analysis is performed using Gemini AI (Google Cloud) API services.  
1.2. **Age Restriction & Professional Use:** The App is intended exclusively for adults (persons who have reached at least 18 years of age) acting within their commercial, professional, or personal capacity. By using this tool, you confirm that you are at least 18 years old. The App does not actively verify User age or business status; Users confirm compliance by continuing to use the service.  
1.3. **Pay-Per-Document Model:** Services are provided on a "pay-per-document" basis, meaning each new document analysis requires a separate payment unless Demo Mode is used or an active monthly subscription is held (see Clause 2.5 and Terms of Service).  
1.4. **User Responsibility for Uploaded Content:** The User is solely responsible for the content of any uploaded documents. The User agrees **not** to upload documents containing special categories of personal data (e.g., health data, racial or ethnic origin, political opinions, religious beliefs) or data relating to criminal convictions, unless a valid legal basis exists to submit such data for analysis. The App is not designed to process special category data, and the Controller disclaims all liability for the incidental processing thereof. Furthermore, Users agree not to upload documents containing national identification numbers (e.g., personal codes, Social Security numbers) without explicit necessity and legal grounds.  

### 2\. DATA PROCESSED AND PURPOSES

The Controller processes only the minimum necessary data to ensure the functionality and security of the App:

- **2.1. Uploaded Document Content:** Processed solely for automated text analysis and the generation of a preliminary GDPR audit report. _Document Limits:_ Accepted formats are PDF or DOCX, limited to a maximum of 15 (fifteen) pages and a file size of 1 MB per audit, unless otherwise specified in the App.
- **2.2. Contact Information:** The User's email address is processed to deliver purchase confirmations (payment receipts), transactional service notifications (including access links to reports and subscription lifecycle updates), and unique magic links to access generated reports.
- **2.3. Session and Payment Metadata:** session_id, email address, payment status (e.g., pending/paid), transaction identifiers, and timestamps of request creation and processing.
- **2.4. Security Data (Abuse Prevention):** IP address and browser digital identifiers (fingerprinting) used strictly to prevent service abuse, control Demo Mode daily limits, and manage API rate limits. Product marketing analytics and ad-tracking cookies are **not** used in this App.
- **2.5. Subscription Metadata (if applicable):** Email address used as an access identifier (without requiring a separate password-based account), subscription status, billing cycle dates, and document usage counters for monthly plans.

### DEMO MODE CONDITIONS

3.1. **Purpose:** Demo Mode is provided solely to allow Users to evaluate the operating principles and quality of analysis before purchasing.  
3.2. **Daily Limits:** To prevent system overload and fraud, free Demo Mode audits are technically restricted to **2 (two) full AI audits per day per User**. Identification is conducted using a combination of the User's email address, IP address, and browser fingerprint (processed strictly for limit control and anti-abuse enforcement). If any indicator hits the daily threshold, initiating a new analysis will require a pay-per-document purchase or active subscription.

### 4\. DATA STORAGE, SECURITY, AND THE "ZERO-RETENTION" PRINCIPLE

4.1. **Zero-Retention of Documents:** Uploaded documents are not stored permanently nor written to the Controller’s long-term databases. Uploaded content is processed transiently; a private temporary copy may exist in encrypted object storage only until analysis is complete or until an unpaid session expires (see Clause 4.3). Once analysis completes successfully, the temporary file is deleted immediately.  
The Controller does not retain full copies of original uploaded files. However, the analysis output (a structured AI audit report containing potential citations or paraphrases of the text) is stored as part of the session metadata for the duration specified in Clause 4.3, after which it is permanently deleted or anonymized.  
4.2. **No AI Model Training:** Under no circumstances is the content of uploaded documents used to train, retrain, or improve artificial intelligence models (including Google Gemini). Content is transmitted strictly via secure API calls in accordance with Google Cloud / Gemini Enterprise policies.  
4.3. **Access Windows & Retention Limits:** Minimal session metadata, payment records, and analysis outputs (including analysis_result JSON, filename, language, and country/jurisdiction codes) are retained to allow Users access to paid reports via their unique link for **up to 45 (forty-five) days** post-payment and to handle technical support inquiries. After 45 days, access links expire, and associated analysis results are deleted. Abandoned/unpaid sessions are purged after **7 (seven) days**. Users are strongly advised to download and store a local copy of their report upon generation.  
4.4. **Summary of Data Retention Schedule:**

- **Demo limit counters (non-identifiable hashes of IP, email, fingerprint):** Retained up to 14 days, then automatically purged.
- **Unpaid sessions (**pending **status):** Deleted after 7 days.
- **Paid reports (**analysis_result **access):** Accessible for up to 45 days. Essential transaction metadata (email, payment ID, filename) is retained beyond 45 days for legal accounting purposes in compliance with the Accounting Law of the Republic of Latvia and for handling potential legal claims.
- **Subscription metadata:** Retained for the duration of the active subscription plus any necessary period for billing and support records.
- **Payment webhook logs:** Minimal event logs stored for technical idempotency without document content.

### 5\. PAYMENT PROCESSING

5.1. **Merchant of Record (MoR):** Payment processing and tax compliance (including VAT/sales tax calculations) are handled on behalf of the Controller by an integrated Merchant of Record (MoR) / payment gateway provider. The Controller reserves the right to switch payment providers without amending this fixed brand name in the Policy.  
5.2. **Payment Data Security:** The Controller does not collect, process, or store credit card details or financial payment methods. Payment details are processed directly by the MoR. The Controller receives only transaction status updates and payment identifiers.  
5.3. **Subscription Payment Issues:** If a subscription payment fails during an active billing cycle, access to paid features may remain available until the end of the paid term while prompting the User to update payment methods via provider self-service portals or transactional email links.

  
**6\. THIRD-PARTY DATA RECIPIENTS (PROCESSORS)**

To deliver functionality, data is shared with the following trusted service providers:

- **6.1. Google Cloud / Gemini AI API:** Receives uploaded document text to perform automated analysis. Data is processed transiently via API and not retained for AI training.
- **6.2. Supabase:** Database provider hosting session metadata, subscription counters, analysis JSON outputs, and temporary encrypted object storage (Storage) for uploaded files prior to processing.
- **6.3. Merchant of Record (MoR):** Receives necessary customer details to process checkout transactions and issue tax invoices.
- **6.4. Email Delivery Provider:** Receives User email addresses to transmit transactional emails (magic access links, receipts, subscription alerts).  
    

**International Data Transfers:** Infrastructure providers such as Google (USA) and Supabase (USA) may process data outside the European Economic Area (EEA). Such transfers are safeguarded in accordance with Chapter V of the GDPR using legal frameworks including the **EU-U.S. Data Privacy Framework (DPF)** or **Standard Contractual Clauses (SCCs)**.

### 7\. LEGAL BASIS AND EU COMPLIANCE  

7.1. **Legal Bases under GDPR:**

- **Performance of a Contract (GDPR Art. 6(1)(b)):** Processing document content, contact details, and session metadata to deliver requested analysis services.
- **Legitimate Interests (GDPR Art. 6(1)(f)):** Processing security data (IP, fingerprinting) to prevent fraud, enforce Demo limits, and safeguard infrastructure. The Controller has balanced these interests against User rights, ensuring data usage is strictly proportional and transient.

  
7.2. **EU AI Act Compliance:** Under the **EU Artificial Intelligence Act**, this App is classified as a **low-risk AI system**. It does not perform autonomous decision-making producing legal or similarly significant effects; it operates strictly as an advisory processing tool under human oversight. It is not intended for use in high-risk categories such as employment screening, credit scoring, or judicial evaluation.

### 8\. USER RIGHTS

8.1. **GDPR Rights:** Users hold the right to request access to their personal data, rectification, erasure, restriction of processing, and data portability, as well as the right to object to processing where applicable by law. If you believe your data protection rights have been violated, you have the right to lodge a complaint with a supervisory authority (in Latvia: _Datu valsts inspekcija_, www.dvi.gov.lv, or your local EEA data protection authority).  
8.2. **File Recovery Limitations:** Original files are deleted immediately after processing and cannot be restored. Generated reports are accessible via magic links during the 45-day retention window, after which they are removed from active servers.  
8.3. **Contact for Rights Requests:** To exercise your data rights, contact us electronically at: **info@prosolvely.com**.

  
**9\. ACKNOWLEDGMENT**

By uploading a document, entering an email address, and proceeding to payment or demo evaluation, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy and the Terms of Service.