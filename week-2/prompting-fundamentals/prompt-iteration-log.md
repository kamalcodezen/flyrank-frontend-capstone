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

# Version 1

## Prompt

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript. The design should be modern, clean, and professional.

## Output

Claude generated a frontend developer portfolio instead of assuming an unrelated profession.

The output included:

- Developer-centric portfolio design
- Browser DevTools inspired UI elements
- Browser tab navigation
- Developer profile section
- Modern typography
- Responsive layout
- HTML, CSS, and JavaScript implementation
- Professional color system
- Interactive UI elements

## Analysis

This prompt provided more context than Version 0 by specifying the target user (frontend developer), the technologies (HTML, CSS, JavaScript), and the desired design style (modern, clean, professional).

Because of the additional context, Claude generated a much more relevant portfolio that matched the intended audience and purpose.

---

---

# Version 2

## Prompt

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

Include the following sections:

- Hero
- About Me
- Skills
- Projects
- Contact

Use semantic HTML, responsive CSS, and clean code.

## Output

Claude generated a structured frontend developer portfolio based on the requested requirements.

The output included:

- Hero section
- About Me section
- Skills section
- Projects section
- Contact section
- Semantic HTML structure
- Responsive CSS layout
- Clean and organized code
- Client-side form validation
- Accessibility improvements
- Mobile-friendly navigation

## Analysis

Compared to Version 1, I clearly specified the required sections and coding standards. This reduced ambiguity and helped Claude generate a more structured, organized, and developer-focused portfolio. The output closely matched the requested requirements with less guessing from the AI.

---

# Version 3

## Prompt

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

Include the following sections:

- Hero
- About Me
- Skills
- Projects
- Contact

Use semantic HTML, responsive CSS, and clean code.

The portfolio should be designed to impress recruiters, hiring managers, and potential clients.

## Output

Claude generated a more professional portfolio that focused on presenting skills, projects, and experience in a way suitable for recruiters and potential clients.

The output included:

- Professional hero section
- Strong call-to-action
- Better project presentation
- Organized skills section
- Clean and accessible layout
- Responsive design
- Semantic HTML
- Portfolio content suitable for job applications

## Analysis

In Version 3, I added the target audience to the prompt. This gave Claude more context about who the website was intended for. As a result, the generated portfolio became more professional and focused on highlighting the developer's skills and projects for recruiters, hiring managers, and potential clients.

---

# Version 4

## Prompt

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

Include the following sections:

- Hero
- About Me
- Skills
- Projects
- Contact

Use semantic HTML, responsive CSS, and clean code.

The portfolio should be designed to impress recruiters, hiring managers, and potential clients.

Use a minimal layout with a blue and white color palette, subtle animations, and plenty of white space.

## Output

Claude generated a visually refined portfolio with a cleaner layout, improved spacing, a consistent blue and white color palette, subtle animations, and a more modern user experience.

## Analysis

Adding visual design requirements helped Claude focus on the overall appearance of the portfolio. Compared to Version 3, the design became cleaner, more consistent, and more attractive while maintaining professionalism.

---

# Version 5

## Prompt

Build a responsive portfolio homepage for a frontend developer using HTML, CSS, and JavaScript.

The design should be modern, clean, and professional.

Include the following sections:

- Hero
- About Me
- Skills
- Projects
- Contact

Use semantic HTML, responsive CSS, and clean code.

The portfolio should be designed to impress recruiters, hiring managers, and potential clients.

Use a minimal layout with a blue and white color palette, subtle animations, and plenty of white space.

Write well-commented, maintainable code, follow accessibility best practices, optimize performance, and ensure the website works perfectly on desktop, tablet, and mobile devices.

## Output

Claude generated a production-ready portfolio with clean code, accessibility improvements, responsive layouts, optimized performance, and well-structured components suitable for professional frontend development.

## Analysis

Version 5 added technical quality requirements. This encouraged Claude to generate cleaner, more maintainable, accessible, and production-ready code. The final output closely matched real-world frontend development best practices.

---

# Claude vs ChatGPT Comparison

| Criteria              | Claude                            | ChatGPT                                       |
| --------------------- | --------------------------------- | --------------------------------------------- |
| Understanding Context | Excellent                         | Excellent                                     |
| UI/UX Creativity      | Excellent                         | Very Good                                     |
| Code Quality          | Excellent                         | Excellent                                     |
| Prompt Following      | Excellent                         | Excellent                                     |
| Explanation           | Detailed                          | Clear and Structured                          |
| Overall               | Great for creative frontend ideas | Great for structured development and learning |

---

# Final Reusable Prompt

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

This assignment taught me that prompt quality directly affects AI output quality. Starting with a vague prompt resulted in incorrect assumptions, while gradually adding context, structure, audience, design requirements, and technical constraints produced significantly better results. I learned that effective prompt engineering is an iterative process where each improvement makes the AI output more accurate, relevant, and professional.
