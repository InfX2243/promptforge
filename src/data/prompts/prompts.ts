import type { Prompt } from "../../types/prompt";

export const prompts: Prompt[] = [
  {
    id: "professional-email",
    title: "Professional Email Writer",
    description:
      "Create a clear, professional email for workplace, academic, or organizational communication.",
    categoryId: "communication",
    tags: ["email", "professional", "writing", "communication"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Write a professional email based on the information provided.

Recipient: {{RECIPIENT}}
Purpose: {{PURPOSE}}
Key points to include:
{{KEY_POINTS}}

Tone: {{TONE}}

Keep the message clear, concise, and appropriate for the intended recipient.
Include a suitable subject line.`,
    requirements: [
      "Identify the purpose and intended recipient.",
      "Use a professional and respectful tone.",
      "Include all important points provided by the user.",
      "Avoid unnecessary repetition or filler.",
    ],
    variants: [
      {
        name: "Formal",
        instructions:
          "Use a formal and professional tone suitable for official communication.",
      },
      {
        name: "Concise",
        instructions:
          "Keep the email brief while preserving all essential information.",
      },
    ],
    example: {
      input:
        "Recipient: Department Head\nPurpose: Request permission to attend a certification preparation session\nKey points: Need access to the computer lab for one week\nTone: Formal",
      output:
        "A formal permission request email with a clear subject, purpose, justification, and requested duration.",
    },
  },

  {
    id: "event-planning-assistant",
    title: "Event Planning Assistant",
    description:
      "Generate a structured event plan covering logistics, timeline, responsibilities, and requirements.",
    categoryId: "events",
    tags: ["events", "planning", "logistics", "timeline"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Create a structured plan for the following event.

Event name: {{EVENT_NAME}}
Event type: {{EVENT_TYPE}}
Expected audience: {{AUDIENCE}}
Date: {{DATE}}
Duration: {{DURATION}}
Venue: {{VENUE}}
Objectives:
{{OBJECTIVES}}

Create:
1. Event timeline
2. Required resources
3. Team responsibilities
4. Technical requirements
5. Risk considerations
6. Pre-event and post-event tasks

Clearly separate planning stages and prioritize tasks by importance.`,
    requirements: [
      "Create a practical timeline.",
      "Identify resources and responsibilities.",
      "Consider technical and logistical requirements.",
      "Include potential risks and mitigation steps.",
    ],
    variants: [
      {
        name: "Detailed",
        instructions:
          "Provide a comprehensive event plan with detailed responsibilities and timelines.",
      },
      {
        name: "Quick Plan",
        instructions:
          "Produce a concise plan focused only on the most important tasks and deadlines.",
      },
    ],
    example: {
      input:
        "Event name: Cloud Workshop\nEvent type: Technical workshop\nExpected audience: 50 students\nDate: {{DATE}}\nDuration: 2 hours\nVenue: College seminar hall",
      output:
        "A structured workshop plan containing preparation tasks, session timeline, technical setup, volunteer responsibilities, and post-event actions.",
    },
  },

  {
    id: "social-media-post",
    title: "Social Media Post Creator",
    description:
      "Create engaging social media content from an event, achievement, announcement, or project update.",
    categoryId: "content",
    tags: ["social-media", "content", "copywriting", "marketing"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Create a social media post based on the following information.

Platform: {{PLATFORM}}
Topic: {{TOPIC}}
Audience: {{AUDIENCE}}
Key achievement or message:
{{KEY_MESSAGE}}
Important people or organizations to mention:
{{MENTIONS}}
Call to action:
{{CALL_TO_ACTION}}

Use a clear opening, concise body, and appropriate call to action.
Adapt the writing style and length to the specified platform.`,
    requirements: [
      "Match the tone to the specified platform and audience.",
      "Highlight the most important message early.",
      "Avoid unnecessary filler.",
      "Use hashtags only when appropriate.",
    ],
    variants: [
      {
        name: "Professional",
        instructions:
          "Use a polished professional tone suitable for LinkedIn or professional communities.",
      },
      {
        name: "Engaging",
        instructions:
          "Use a more energetic and engaging tone while remaining credible.",
      },
    ],
    example: {
      input:
        "Platform: LinkedIn\nTopic: Student technology event\nAudience: Students and technology professionals\nKey message: Successfully organized a cloud computing workshop",
      output:
        "A concise professional post highlighting the event, its impact, and an appropriate call to action.",
    },
  },

  {
    id: "presentation-outline",
    title: "Presentation Outline Builder",
    description:
      "Turn a topic and audience into a logical presentation structure with slide-by-slide guidance.",
    categoryId: "presentations",
    tags: ["presentation", "slides", "public-speaking", "structure"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Create a structured presentation outline.

Topic: {{TOPIC}}
Audience: {{AUDIENCE}}
Presentation duration: {{DURATION}}
Primary objective: {{OBJECTIVE}}
Knowledge level of audience: {{AUDIENCE_LEVEL}}

Create a slide-by-slide outline.
For each slide provide:
- Slide title
- Main points
- Suggested visual or example
- Speaker emphasis

Ensure the presentation has a logical beginning, middle, and conclusion.`,
    requirements: [
      "Keep the presentation appropriate for the audience.",
      "Respect the specified duration.",
      "Avoid overcrowding individual slides.",
      "Maintain a clear narrative flow.",
    ],
    variants: [
      {
        name: "Teaching",
        instructions:
          "Prioritize explanation, examples, and gradual progression of concepts.",
      },
      {
        name: "Executive",
        instructions:
          "Focus on key findings, decisions, outcomes, and concise supporting information.",
      },
    ],
    example: {
      input:
        "Topic: Introduction to Cloud Computing\nAudience: First-year engineering students\nDuration: 20 minutes",
      output:
        "A concise presentation outline introducing cloud concepts, service models, examples, benefits, and a short conclusion.",
    },
  },

  {
    id: "brainstorm-ideas",
    title: "Creative Idea Generator",
    description:
      "Generate diverse and practical ideas around a topic, problem, project, or campaign.",
    categoryId: "creative",
    tags: ["brainstorming", "ideas", "creativity", "innovation"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Generate creative ideas for the following challenge.

Topic or challenge: {{CHALLENGE}}
Target audience: {{AUDIENCE}}
Goal: {{GOAL}}
Constraints:
{{CONSTRAINTS}}

Generate {{NUMBER_OF_IDEAS}} distinct ideas.

For each idea provide:
- Name
- Short description
- Why it could work
- Implementation difficulty
- Potential improvement or extension

Avoid repeating the same concept with minor variations.`,
    requirements: [
      "Generate genuinely distinct ideas.",
      "Respect the provided constraints.",
      "Balance creativity with practical feasibility.",
      "Explain why each idea could be useful.",
    ],
    variants: [
      {
        name: "Practical",
        instructions:
          "Prioritize ideas that can realistically be implemented with limited resources.",
      },
      {
        name: "Experimental",
        instructions:
          "Prioritize unconventional and innovative ideas, even when implementation is more difficult.",
      },
    ],
  },

  {
    id: "technical-debugging",
    title: "Technical Debugging Assistant",
    description:
      "Analyze a technical problem and provide a structured debugging approach without jumping directly to unsupported conclusions.",
    categoryId: "technical",
    tags: ["debugging", "programming", "software", "technical"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Help diagnose the following technical problem.

Technology or stack: {{TECHNOLOGY}}
Problem description:
{{PROBLEM}}

Error message or logs:
{{ERROR}}

Relevant code or configuration:
{{CODE}}

Expected behavior:
{{EXPECTED_BEHAVIOR}}

Actual behavior:
{{ACTUAL_BEHAVIOR}}

Analyze the problem systematically.

Provide:
1. Most likely causes
2. Evidence supporting each cause
3. Recommended debugging steps
4. Potential fixes
5. Verification steps

Do not assume information that has not been provided.`,
    requirements: [
      "Distinguish confirmed information from assumptions.",
      "Prioritize likely causes.",
      "Provide actionable debugging steps.",
      "Explain how to verify the proposed fix.",
    ],
    variants: [
      {
        name: "Guided",
        instructions:
          "Explain the debugging process step by step for someone learning the technology.",
      },
      {
        name: "Expert",
        instructions:
          "Be concise and prioritize the most technically probable causes and fixes.",
      },
    ],
  },

  {
    id: "project-plan",
    title: "Project Plan Generator",
    description:
      "Turn a project objective into a structured implementation plan with phases, tasks, dependencies, and milestones.",
    categoryId: "planning",
    tags: ["project-management", "planning", "tasks", "milestones"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Create a structured implementation plan for the following project.

Project: {{PROJECT_NAME}}
Objective:
{{OBJECTIVE}}

Expected outcome:
{{OUTCOME}}

Available resources:
{{RESOURCES}}

Deadline: {{DEADLINE}}

Constraints:
{{CONSTRAINTS}}

Break the project into logical phases.

For each phase provide:
- Objective
- Tasks
- Dependencies
- Deliverables
- Milestone

Order the phases according to their dependencies.`,
    requirements: [
      "Break large objectives into actionable tasks.",
      "Identify dependencies between phases.",
      "Define measurable deliverables.",
      "Respect the deadline and constraints.",
    ],
    variants: [
      {
        name: "Detailed",
        instructions:
          "Produce a granular implementation plan with clearly defined tasks and dependencies.",
      },
      {
        name: "High-Level",
        instructions:
          "Focus on phases, major milestones, and critical dependencies.",
      },
    ],
  },

  {
    id: "task-prioritizer",
    title: "Task Prioritization Assistant",
    description:
      "Organize a list of tasks according to urgency, importance, dependencies, and expected impact.",
    categoryId: "productivity",
    tags: ["productivity", "prioritization", "tasks", "organization"],
    supportedLLMs: ["chatgpt", "gemini"],
    instructions: `Prioritize the following tasks.

Tasks:
{{TASKS}}

Deadline or time constraints:
{{DEADLINES}}

Current priorities:
{{PRIORITIES}}

Available time: {{AVAILABLE_TIME}}

For each task determine:
- Priority level
- Reason
- Dependencies
- Suggested order
- Estimated effort

Then provide a recommended execution sequence.

Do not prioritize a task as urgent merely because it appears first in the input.`,
    requirements: [
      "Consider urgency and importance separately.",
      "Account for dependencies.",
      "Consider available time and effort.",
      "Explain the reasoning behind prioritization.",
    ],
    variants: [
      {
        name: "Quick",
        instructions:
          "Return a concise prioritized task list with short reasoning.",
      },
      {
        name: "Detailed",
        instructions:
          "Provide detailed prioritization reasoning, dependencies, and execution order.",
      },
    ],
  },
];
