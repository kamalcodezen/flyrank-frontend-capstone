# The Prompt Ladder

## Assignment Information

- Assignment Code: FL-03
- Week: 2
- Track: General AI Fluency

---

# Real Task

Build a responsive portfolio homepage.

---

# Baseline (Weak Prompt)

## Prompt

Build a website.

## Output

Claude did not generate a website immediately.

Instead, it asked for clarification because the prompt was too vague. It wanted to know what kind of website I wanted before proceeding.

## Notes

### What changed in the prompt

None. This was the original weak prompt.

### What improved in the output

Nothing. This is the baseline for comparison.

### What still failed

The prompt was too vague. Claude could not determine the type, purpose, audience, or requirements of the website.

### What I would try

Next, I would make the goal clearer by specifying the type of website I want. Instead of asking to "Build a website," I will specify that I need a responsive portfolio homepage.

---

# Version 1 (Clearer Goal)

## Prompt

Build a responsive portfolio homepage.

## Representative Output

Claude generated a basic portfolio homepage instead of asking for clarification.

The response included:

- Hero section
- About section
- Projects section
- Contact section
- Basic responsive layout

## Notes

### What changed in the prompt

I made the goal clearer by specifying that I wanted a responsive portfolio homepage instead of just "a website."

### What improved in the output

Claude immediately started generating a portfolio instead of asking follow-up questions.

### What still failed

The output was still generic. It did not know who the portfolio was for or what technologies or style to use.

### What I would try next

Next, I will specify the target audience for the portfolio.

# Version 2 (Defined Audience)

## Prompt

Build a responsive portfolio homepage for a frontend developer.

## Representative Output

Claude generated a portfolio specifically tailored for a frontend developer.

The response included:

- Developer-focused hero section
- Skills section highlighting frontend technologies
- Projects showcase
- Contact section
- Modern responsive layout

## Notes

### What changed in the prompt

I defined the audience by specifying that the portfolio is for a frontend developer.

### What improved in the output

The content became more relevant to frontend development. The portfolio focused on technical skills, projects, and professional presentation instead of remaining generic.

### What still failed

The output still made assumptions about the design style and did not know the purpose of the portfolio.

### What I would try next

Next, I will provide real context about why the portfolio is being created.

---

# Version 3 (Real Context)

## Prompt

Build a responsive portfolio homepage for a frontend developer.

This portfolio will be used to apply for frontend developer internships and entry-level jobs.

## Representative Output

Claude generated a portfolio that was more professional and career-focused.

The response included:

- A strong hero section with a professional introduction
- Skills section focused on employable frontend technologies
- Projects presented to highlight practical experience
- A clear call-to-action for recruiters
- A clean and responsive layout

## Notes

### What changed in the prompt

I added real context by explaining that the portfolio would be used for internship and entry-level job applications.

### What improved in the output

The portfolio became more purpose-driven. Instead of being a general portfolio, it focused on presenting skills and projects in a way that would appeal to recruiters.

### What still failed

The response structure was inconsistent. Some sections were detailed while others were brief.

### What I would try next

Next, I will specify the output format so the response is organized consistently.

---

# Version 4 (Specified Output Format)

## Prompt

Build a responsive portfolio homepage for a frontend developer.

This portfolio will be used to apply for frontend developer internships and entry-level jobs.

Present your response using the following structure:

1. Project Overview
2. Page Sections
3. HTML Structure
4. CSS Styling
5. Responsive Features

## Representative Output

Claude organized the response into clearly labeled sections instead of presenting everything as a single block of text.

The response included:

- Project overview
- Well-defined page sections
- Organized HTML structure
- CSS styling suggestions
- Responsive design recommendations

## Notes

### What changed in the prompt

I specified the exact output format I wanted.

### What improved in the output

The response became much easier to read and follow because every part was organized into separate sections.

### What still failed

Although the response was well organized, it still did not define any quality expectations for the final result.

### What I would try next

Next, I will add quality criteria to ensure the portfolio meets professional frontend development standards.

---

# Version 5 (Quality Criteria)

## Prompt

Build a responsive portfolio homepage for a frontend developer.

This portfolio will be used to apply for frontend developer internships and entry-level jobs.

Present your response using the following structure:

1. Project Overview
2. Page Sections
3. HTML Structure
4. CSS Styling
5. Responsive Features

Generate production-quality code that is responsive, accessible, maintainable, and follows frontend best practices.

## Representative Output

Claude generated a more polished solution with cleaner code, accessibility recommendations, and responsive design considerations.

However, the response also became significantly longer and included extra implementation details that were not immediately necessary for a simple portfolio homepage.

## Notes

### What changed in the prompt

I added quality criteria by asking for production-quality, accessible, responsive, and maintainable code.

### What improved in the output

The generated solution became more professional and included better coding practices, accessibility, and responsive design recommendations.

### What still failed

The response became longer than necessary. Some recommendations added extra complexity for a beginner project.

### What I would try next

I would balance quality requirements with simplicity by limiting the scope of the response.

### Honest Observation

Adding more quality requirements improved the code quality, but it also made the response longer and more complex. For a beginner project, this was not entirely helpful because it introduced details that I was not ready to implement immediately.

---

# Final Reusable Prompt

Build a responsive portfolio homepage for a frontend developer.

This portfolio will be used to apply for frontend developer internships and entry-level jobs.

Present the response in the following structure:

1. Project Overview
2. Page Sections
3. HTML Structure
4. CSS Styling
5. Responsive Features

Generate production-quality code that is:

- Responsive
- Accessible
- Maintainable
- Beginner-friendly
- Following frontend best practices

Keep the solution practical and avoid unnecessary complexity.

# Reflection

This assignment taught me how powerful small prompt improvements can be. Instead of changing everything at once, I improved one layer at a time and observed how each change affected the AI's response.

I learned that a clear goal, defined audience, real context, structured output, and quality criteria each solve different problems. I also discovered that adding more requirements does not always produce a better result—sometimes it makes the response longer and more complex.

From now on, I will improve prompts step by step, test each version, and reuse what works best instead of making multiple changes at once.
