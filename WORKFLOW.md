# FE-03 AI-Assisted Workflow Comparison

## Overview

For this assignment, I built the same Account Settings page twice using an AI-assisted workflow. The goal was to compare the difference between using a vague prompt and using a detailed prompt with constraints, verification steps, and clear requirements.

## Round 1

In the first round, I used a very simple prompt without providing much context. The generated code worked, but it required more manual review. Some validation logic was basic, accessibility features were limited, and I had to spend extra time checking the output before considering it complete.

## Round 2

For the second round, I started a fresh AI session and used a much more detailed prompt. I clearly specified that HTML, CSS, and JavaScript should remain in separate files. I also requested better accessibility, responsive design, improved validation, cleaner code structure, and asked the AI to verify its own solution before returning the final code.

The generated result was much better. The form included accessible labels, ARIA attributes, better validation messages, a disabled Save button until required fields were valid, responsive layouts, and cleaner comments throughout the project.

## Comparison

The second implementation was significantly better than the first. The code was easier to understand, validation was more reliable, accessibility was improved, and responsive behavior worked across different screen sizes. Although writing a detailed prompt took a little more time, it reduced the overall review and debugging effort.

## AI Mistake I Caught

During manual testing, I verified the generated code by checking form validation, responsive layout, and browser behavior. Instead of trusting the AI output immediately, I tested every required feature and confirmed that everything worked correctly before accepting the final implementation.

## Lessons Learned

This exercise taught me that high-quality prompts produce higher-quality code. Providing clear constraints, expected behavior, accessibility requirements, and verification instructions greatly improves AI-generated results. I will continue using a structured prompting workflow in future projects because it reduces mistakes and makes the development process more efficient.
