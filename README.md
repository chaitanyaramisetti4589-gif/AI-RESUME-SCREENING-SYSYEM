# 📄 AI Resume Screening System

An AI-powered Resume Screening System that automates the hiring process by analyzing multiple resumes against a job description, ranking candidates based on their compatibility, and generating a professional recruitment report.

Built using **n8n**, **Groq LLM**, **HTML**, **CSS**, and **JavaScript**, this project demonstrates an end-to-end AI automation workflow for modern recruitment.

---

## 🚀 Features

- 📂 Upload multiple PDF resumes
- 📝 Enter a job description
- 🤖 AI-powered resume analysis
- 📊 Candidate ranking based on compatibility
- 🎯 Skill matching and missing skill detection
- ⭐ AI-generated hiring recommendations
- 📧 Automatic email delivery of the recruitment report
- ⚡ Fully automated n8n workflow
- 💻 Simple and responsive frontend

---

# 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Automation
- n8n

### AI
- Groq LLM

### File Processing
- Extract From File (PDF)

### Email
- Gmail Node

---

# 📁 Project Structure

```
AI-Resume-Screening-System/
│
├── FRONTEND/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── N8N/
│   ├── workflow.json
│   └── workflow.png
│
├── SAMPLE_DATA/
│   ├── Job_Description.txt
│   ├── Resume1.pdf
│   ├── Resume2.pdf
│   └── Resume3.pdf
│
├── screenshots/
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# ⚙️ Workflow

```
Frontend
      │
      ▼
Webhook
      │
      ▼
Receive Multiple PDF Resumes
      │
      ▼
Split Resumes
      │
      ▼
Extract Text from PDF
      │
      ▼
AI Resume Analyzer
      │
      ▼
Parse AI Response
      │
      ▼
Sort Candidates
      │
      ▼
Aggregate Results
      │
      ▼
AI Report Generator
      │
      ▼
Send Email
      │
      ▼
Respond to Webhook
```

---

# 📸 Project Preview

## Home Page

> Add Screenshot

```
screenshots/home.png
```

---

## Resume Upload

> Add Screenshot

```
screenshots/upload.png
```

---

## Generated Recruitment Report

> Add Screenshot

```
screenshots/report.png
```

---

## n8n Workflow

> Add Screenshot

```
screenshots/workflow.png
```

---

# 🤖 How It Works

### Step 1

Upload one or more PDF resumes.

---

### Step 2

Provide the job description.

---

### Step 3

The frontend sends the resumes and job description to the n8n webhook.

---

### Step 4

The workflow extracts text from each resume.

---

### Step 5

The AI compares every resume with the job description.

The AI evaluates:

- Skills
- Experience
- Certifications
- Transferable Skills
- Overall Resume Quality

---

### Step 6

Each candidate receives a compatibility score.

Example:

| Candidate | Score |
|-----------|------:|
| Jason Miller | 92% |
| Robert Cooper | 55% |
| Charly Dolman | 42% |

---

### Step 7

Candidates are automatically ranked.

---

### Step 8

The AI generates a professional recruitment report.

---

### Step 9

The report is emailed automatically to the recruiter.

---

# 📈 Example Output

```
AI Resume Screening Report

🏆 Candidate Rankings

🥇 Jason Miller
Score: 92%
Recommendation:
Highly Recommended

🥈 Robert Cooper
Score: 55%
Recommendation:
Consider

🥉 Charly Dolman
Score: 42%
Recommendation:
Not Recommended
```

---

# 💡 Use Cases

- HR Recruitment
- Resume Screening
- Recruitment Agencies
- Talent Acquisition
- Internal Hiring
- AI Hiring Automation

---

# 🎯 Future Improvements

- Resume score visualization
- Download report as PDF
- Dashboard for recruiters
- Candidate comparison charts
- ATS keyword analysis
- Resume database integration
- Support for DOCX resumes
- Multi-job comparison
- Candidate history tracking

---

# 🖥 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/AI-Resume-Screening-System.git
```

---

## Open Frontend

Simply open

```
FRONTEND/index.html
```

or run using VS Code Live Server.

---

## Import Workflow

Open n8n

Import

```
N8N/workflow.json
```

Configure

- Groq API
- Gmail Credentials

Run the workflow.

---

# 📧 Email Output

After processing, the recruiter receives:

- Candidate Rankings
- Compatibility Scores
- Matching Skills
- Missing Skills
- Hiring Recommendations
- Final Recruitment Report

---

# 🌟 Key Highlights

✅ Multiple Resume Upload

✅ AI Resume Analysis

✅ Skill Matching

✅ Candidate Ranking

✅ Recruitment Report Generation

✅ Email Automation

✅ End-to-End AI Workflow

---

# 📚 Learning Outcomes

This project demonstrates:

- AI Automation
- Prompt Engineering
- PDF Processing
- Workflow Automation
- REST APIs
- n8n Development
- Frontend Integration
- AI Report Generation
- Email Automation

---

# 👨‍💻 Author

**Chaitanya Ramisetti**

AI Automation Developer

GitHub:
https://github.com/chaitanyaramisetti4589-gif

LinkedIn:
(Add your LinkedIn URL)

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and supports future development.

---

## License

This project is licensed under the MIT License.
