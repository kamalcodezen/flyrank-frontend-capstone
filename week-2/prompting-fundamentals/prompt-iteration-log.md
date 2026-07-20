# Prompting Fundamentals on Real Tasks v2

## Assignment Information

- Assignment Code: FL-02
- Week: 2
- Track: General AI Fluency

---

# Real Task

Build Front-end Projects

---

# Version 0 (Baseline)

## Prompt

Build a responsive portfolio homepage.

## Output

Claude assumed the portfolio was for a **letterpress designer** and generated a complete concept including:

- Hero section
- About section
- Featured Work
- Testimonials
- Contact section

It also suggested:

- Fraunces, Inter, and IBM Plex Mono fonts
- Paper off-white, near-black, red, and indigo color palette
- Misregistration typography effect
- Responsive grid (3 → 2 → 1 columns)
- Mobile navigation
- Accessibility with `prefers-reduced-motion`

Claude also generated a complete HTML implementation.

## Analysis

The prompt was very short and did not provide enough context. I did not specify who the portfolio was for, what technologies to use, the design style, the target audience, or any project requirements.

Because of this, Claude made its own assumptions and created a portfolio for a letterpress designer instead of a frontend developer.

This demonstrates that vague prompts lead to unpredictable results. Providing clear context and detailed requirements helps AI generate more accurate and relevant outputs.

---

# Version 1 (Role Assignment)

## Prompt

You are an expert Frontend UI/UX Designer and Senior Frontend Developer.

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

## Output

Claude generated the portfolio from the perspective of an experienced Frontend UI/UX Designer and Senior Frontend Developer.

The output included:

- Professional portfolio structure
- Better UI/UX decisions
- Modern typography
- Responsive layout
- Clean HTML, CSS, and JavaScript
- Developer-focused presentation

## Analysis

### Technique Used: Role Assignment

I assigned Claude the role of an expert Frontend UI/UX Designer and Senior Frontend Developer before giving the task.

Compared to the baseline prompt, the AI responded more like an experienced professional instead of making random assumptions. The portfolio became more polished, developer-focused, and aligned with industry practices.

---

# Version 2 (Context & Motivation)

## Prompt

You are an expert Frontend UI/UX Designer and Senior Frontend Developer.

I am creating this portfolio to apply for frontend developer internships and entry-level jobs.

Build a responsive portfolio homepage using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

## Output

Claude generated a portfolio that emphasized professional presentation for job applications.

The output included:

- A strong hero section
- Professional introduction
- Skills and projects focused on employability
- Clean and modern layout
- Responsive design
- Well-organized HTML, CSS, and JavaScript

## Analysis

### Technique Used: Context & Motivation

I explained why I needed the portfolio instead of only describing what to build.

Providing the purpose helped Claude understand the real goal of the project. As a result, the portfolio focused more on showcasing skills, projects, and professionalism for internship and job opportunities.

# Version 3 (Few-shot Examples)

## Prompt

You are an expert Frontend UI/UX Designer and Senior Frontend Developer.

I am creating this portfolio to apply for frontend developer internships and entry-level jobs.

Here are some examples of the design style I want:

Example 1:

- Clean hero section
- Modern typography
- Responsive navigation

Example 2:

- Project cards with hover effects
- Skills displayed using badges
- Professional contact section

Now build a responsive portfolio homepage using HTML, CSS, and JavaScript following a similar style.

## Output

Claude generated a portfolio that closely matched the provided examples.

The output included:

- Clean hero section
- Responsive navigation
- Modern typography
- Interactive project cards
- Skills displayed as badges
- Professional contact section
- Consistent UI throughout the page

## Analysis

### Technique Used: Few-shot Examples

Instead of only describing the task, I provided small examples of the desired design and layout.

These examples helped Claude better understand my expectations. The generated portfolio followed the same style and structure, reducing ambiguity and producing a more consistent result.

# Version 4 (Output Structure)

## Prompt

You are an expert Frontend UI/UX Designer and Senior Frontend Developer.

I am creating this portfolio to apply for frontend developer internships and entry-level jobs.

Here are some examples of the design style I want:

Example 1:

- Clean hero section
- Modern typography
- Responsive navigation

Example 2:

- Project cards with hover effects
- Skills displayed using badges
- Professional contact section

Build a responsive portfolio homepage using HTML, CSS, and JavaScript.

Return the response in the following structure:

1. Project Overview
2. HTML Structure
3. CSS Styling
4. JavaScript Functionality
5. Responsive Design Notes
6. Accessibility Features

## Output

Claude organized the response into clearly defined sections instead of generating one long block of code.

The output included:

- Project overview
- HTML structure
- CSS styling
- JavaScript functionality
- Responsive design notes
- Accessibility recommendations

The response was much easier to understand and follow.

## Analysis

### Technique Used: Output Structure

I explicitly defined how I wanted Claude to organize its response.

Instead of deciding the format on its own, Claude followed the requested structure. This made the output more readable, organized, and easier to implement.

# Version 5 (Step Decomposition)

## Prompt

You are an expert Frontend UI/UX Designer and Senior Frontend Developer.

I am creating this portfolio to apply for frontend developer internships and entry-level jobs.

Build the portfolio step by step.

Follow this order:

Step 1: Plan the page layout.

Step 2: Create the HTML structure.

Step 3: Write responsive CSS.

Step 4: Add JavaScript interactions.

Step 5: Improve accessibility.

Step 6: Optimize for performance.

Step 7: Review the final result and suggest improvements.

## Output

Claude completed the task in a logical sequence instead of generating everything at once.

The response included:

- Layout planning
- HTML structure
- Responsive CSS
- JavaScript functionality
- Accessibility improvements
- Performance optimization
- Final review and recommendations

This made the implementation process much easier to follow.

## Analysis

### Technique Used: Step Decomposition

I broke the task into smaller steps before asking Claude to generate the solution.

Instead of producing one large response, Claude followed each step in order. This resulted in a clearer workflow, better organization, and an output that was easier to understand and implement.

# Claude vs ChatGPT Comparison

| Criteria                 | Claude                                                                     | ChatGPT                                                                                 |
| ------------------------ | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Understanding the Prompt | Followed the prompt accurately and produced a polished frontend portfolio. | Understood the prompt well and generated a structured solution with clear explanations. |
| Creativity               | Produced a visually creative and modern UI with strong design ideas.       | Focused more on practical implementation and maintainable code.                         |
| Code Quality             | Generated clean, organized, and responsive frontend code.                  | Generated clean code with detailed explanations and best practices.                     |
| Ease of Understanding    | Required less explanation but assumed some design decisions.               | Explained decisions more clearly, making it easier for beginners to learn.              |
| Best Use Case            | Best for creative UI generation and rapid prototyping.                     | Best for learning, implementation, debugging, and understanding concepts.               |

## Conclusion

Both Claude and ChatGPT produced high-quality results. Claude was stronger in creative UI generation, while ChatGPT was more effective for learning, explanation, and step-by-step guidance. Using both together provided the best overall workflow.

# Final Reusable Prompt

You are an expert Frontend UI/UX Designer and Senior Frontend Developer.

I am creating a portfolio website to apply for frontend developer internships and entry-level jobs.

Build a responsive portfolio homepage using HTML, CSS, and JavaScript.

Follow these requirements:

- Modern and professional UI
- Hero, About, Skills, Projects, and Contact sections
- Semantic HTML
- Responsive CSS
- Clean and maintainable JavaScript
- Accessible design
- Performance optimization
- Mobile-first responsive layout

Return the response in the following format:

1. Project Overview
2. HTML Structure
3. CSS Styling
4. JavaScript Functionality
5. Accessibility Features
6. Performance Improvements
7. Final Recommendations

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

Include the following sections:

- Hero
- About Me
- Skills
- Projects
- Contact

Use semantic HTML, responsive CSS, and clean, maintainable JavaScript.

The portfolio should be designed for recruiters, hiring managers, and potential clients.

Use a minimal blue and white color palette with subtle animations and plenty of white space.

Ensure the website is fully responsive, accessible, performance optimized, SEO-friendly, and follows frontend development best practices.

---

# Reflection

This assignment helped me understand that prompt engineering is an iterative process. Starting with a simple prompt produced a generic result, but applying techniques such as Role Assignment, Context & Motivation, Few-shot Examples, Output Structure, and Step Decomposition significantly improved the quality of the AI's responses.

I learned that small changes in a prompt can greatly influence the relevance, organization, and professionalism of the output. This exercise also showed me that effective prompting is not just about asking a question—it is about providing the right context, defining expectations clearly, and guiding the AI toward the desired result.

Going forward, I will use these techniques whenever I work with AI tools for software development and problem-solving.
