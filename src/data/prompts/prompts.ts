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
        name: "chatgpt",
        instructions: `You are an expert professional communication assistant.

Write a clear, professional, and well-structured email based on the information provided below.

Recipient:
{{RECIPIENT}}

Purpose:
{{PURPOSE}}

Key points to include:
{{KEY_POINTS}}

Tone:
{{TONE}}

Requirements:
- Write an appropriate and concise subject line.
- Address the recipient appropriately.
- Clearly communicate the purpose of the email.
- Include all important points provided by the user.
- Maintain the requested tone throughout the email.
- Organize the message into logical paragraphs.
- Keep the language professional, natural, and easy to understand.
- Avoid unnecessary repetition, filler, or overly complicated language.
- Do not invent facts, dates, commitments, or information that were not provided.
- End with an appropriate professional closing.

Return only the completed email, including the subject line.`,
      },
      {
        name: "gemini",
        instructions: `Act as a professional email-writing assistant.

Create a polished email using the information provided below.

Recipient:
{{RECIPIENT}}

Purpose:
{{PURPOSE}}

Key points to include:
{{KEY_POINTS}}

Tone:
{{TONE}}

Follow these instructions:
1. Create a suitable subject line that accurately reflects the purpose of the email.
2. Use an appropriate greeting for the recipient.
3. Clearly explain the purpose of the email.
4. Incorporate every important point supplied by the user.
5. Maintain the requested tone consistently.
6. Keep the email concise while retaining all necessary information.
7. Use professional and natural language.
8. Structure the email so that it is easy to read.
9. Do not add assumptions or information that the user did not provide.
10. Finish with a suitable professional closing.

Return only the completed email with its subject line. Do not explain how the email was written.`,
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
        name: "chatgpt",
        instructions: `You are an experienced event planning and operations assistant.

Create a practical, structured event plan using the information provided below.

Event name:
{{EVENT_NAME}}

Event type:
{{EVENT_TYPE}}

Expected audience:
{{AUDIENCE}}

Date:
{{DATE}}

Duration:
{{DURATION}}

Venue:
{{VENUE}}

Objectives:
{{OBJECTIVES}}

Build the plan around the following areas:
1. Pre-event preparation
2. Event-day timeline
3. Venue and logistics
4. Equipment and technical requirements
5. Team roles and responsibilities
6. Registration or attendee management
7. Risk identification and mitigation
8. Post-event activities

For each major task, identify its purpose, responsible role, and timing where possible.

Prioritize critical dependencies and tasks that must be completed before the event.

Do not invent specific resources, people, budgets, or timings that were not provided. Clearly identify assumptions when necessary.

Return a practical event plan that can be directly used by an organizing team.`,
      },
      {
        name: "gemini",
        instructions: `Act as an event operations strategist.

Using the information below, develop a complete but practical plan for the event.

Event name:
{{EVENT_NAME}}

Event type:
{{EVENT_TYPE}}

Expected audience:
{{AUDIENCE}}

Date:
{{DATE}}

Duration:
{{DURATION}}

Venue:
{{VENUE}}

Objectives:
{{OBJECTIVES}}

Organize the response into:
- Preparation timeline
- Event-day schedule
- Logistics checklist
- Resource requirements
- Team responsibilities
- Technical setup
- Risk and contingency planning
- Post-event follow-up

Highlight high-priority tasks and dependencies.

Keep recommendations realistic for the information provided. Do not fabricate details.

Use tables where they improve clarity.

Return only the event plan.`,
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
        name: "chatgpt",
        instructions: `You are an expert social media content strategist.

Create an engaging and platform-appropriate social media post using the information below.

Platform:
{{PLATFORM}}

Topic:
{{TOPIC}}

Audience:
{{AUDIENCE}}

Key achievement or message:
{{KEY_MESSAGE}}

Important people or organizations to mention:
{{MENTIONS}}

Call to action:
{{CALL_TO_ACTION}}

Requirements:
- Start with an attention-grabbing but natural opening.
- Clearly communicate the main achievement, announcement, or message.
- Adapt the length, tone, formatting, and vocabulary to the specified platform.
- Mention the provided people or organizations naturally.
- Include the call to action when one is provided.
- Keep the post authentic and professional.
- Avoid exaggerated claims and generic marketing language.
- Use emojis only when appropriate for the platform and context.
- Use relevant hashtags sparingly and only when they add value.
- Do not invent facts, statistics, achievements, or details.

Return only the final social media post.`,
      },
      {
        name: "gemini",
        instructions: `Act as a professional social media copywriter.

Write a polished social media post based on the following information.

Platform:
{{PLATFORM}}

Topic:
{{TOPIC}}

Audience:
{{AUDIENCE}}

Key achievement or message:
{{KEY_MESSAGE}}

Important people or organizations to mention:
{{MENTIONS}}

Call to action:
{{CALL_TO_ACTION}}

Create content that:
1. Captures attention quickly.
2. Communicates the central message clearly.
3. Matches the platform and target audience.
4. Maintains a credible and authentic tone.
5. Includes provided mentions naturally.
6. Ends with an appropriate call to action when supplied.
7. Uses formatting, emojis, and hashtags only when appropriate.
8. Does not introduce unsupported facts or claims.

Return only the completed post.`,
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
        name: "chatgpt",
        instructions: `You are an expert presentation strategist and instructional designer.

Create a logical slide-by-slide presentation outline using the information below.

Topic:
{{TOPIC}}

Audience:
{{AUDIENCE}}

Presentation duration:
{{DURATION}}

Primary objective:
{{OBJECTIVE}}

Audience knowledge level:
{{AUDIENCE_LEVEL}}

For every slide provide:
- Slide number
- Slide title
- 2–5 key points
- Suggested visual, diagram, example, or demonstration
- Speaker emphasis

Structure the presentation with:
1. Opening and context
2. Core concepts or information
3. Examples or practical application
4. Key takeaways
5. Conclusion

Keep the number of slides appropriate for the specified duration.

Do not overload slides with text. The slide should support the speaker rather than replace the speaker.

Return a presentation-ready outline.`,
      },
      {
        name: "gemini",
        instructions: `Act as a presentation architect.

Design a clear and engaging presentation structure for the following topic.

Topic:
{{TOPIC}}

Audience:
{{AUDIENCE}}

Presentation duration:
{{DURATION}}

Primary objective:
{{OBJECTIVE}}

Audience knowledge level:
{{AUDIENCE_LEVEL}}

Create a slide-by-slide plan.

For each slide include:
- Title
- Core message
- Supporting points
- Recommended visual or example
- What the presenter should emphasize

Ensure that the presentation progresses logically from introduction to conclusion.

Consider the audience's existing knowledge and the available presentation time.

Prioritize clarity and narrative flow over the number of slides.

Return only the structured presentation outline.`,
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
        name: "chatgpt",
        instructions: `You are a creative strategist and innovation consultant.

Generate {{NUMBER_OF_IDEAS}} genuinely distinct ideas for the following challenge.

Challenge:
{{CHALLENGE}}

Target audience:
{{AUDIENCE}}

Goal:
{{GOAL}}

Constraints:
{{CONSTRAINTS}}

For each idea provide:
- Idea name
- Core concept
- How it works
- Why it could work
- Implementation difficulty: Low / Medium / High
- Potential extension

Rules:
- Do not repeat the same idea using different wording.
- Respect every stated constraint.
- Include a mixture of conventional improvements and creative approaches.
- Prefer ideas that solve the stated problem rather than merely sounding innovative.
- Clearly distinguish high-risk experimental ideas from practical ones.
- Do not assume resources that were not provided.

End with a short comparison identifying the strongest ideas and why.`,
      },
      {
        name: "gemini",
        instructions: `Act as an innovation and brainstorming facilitator.

Explore the following challenge and generate {{NUMBER_OF_IDEAS}} distinct possible solutions.

Challenge:
{{CHALLENGE}}

Target audience:
{{AUDIENCE}}

Goal:
{{GOAL}}

Constraints:
{{CONSTRAINTS}}

For each idea include:
1. Name
2. Description
3. Problem addressed
4. Why it may work
5. Implementation difficulty
6. Possible future extension

Aim for diversity across the ideas. Consider practical, unconventional, technological, process-based, and creative approaches where relevant.

Do not produce superficial variations of the same concept.

After generating the ideas, identify the top three based on usefulness, feasibility, and alignment with the stated goal.`,
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
        name: "chatgpt",
        instructions: `You are an experienced software debugging assistant.

Analyze the technical problem below systematically.

Technology or stack:
{{TECHNOLOGY}}

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

Your analysis must distinguish between:
- Confirmed facts
- Strongly supported conclusions
- Assumptions that require verification

Provide:
1. Problem summary
2. Most likely causes ranked by probability
3. Evidence for each cause
4. Step-by-step debugging procedure
5. Recommended fixes
6. Verification procedure
7. Additional information needed if the diagnosis cannot be confirmed

Do not invent missing configuration, versions, logs, or environmental details.

Prefer the smallest reliable fix over unnecessary architectural changes.

Return a practical debugging analysis.`,
      },
      {
        name: "gemini",
        instructions: `Act as a senior software engineer helping diagnose a technical issue.

Technology or stack:
{{TECHNOLOGY}}

Problem:
{{PROBLEM}}

Error or logs:
{{ERROR}}

Code or configuration:
{{CODE}}

Expected behavior:
{{EXPECTED_BEHAVIOR}}

Actual behavior:
{{ACTUAL_BEHAVIOR}}

Analyze the issue methodically.

First identify the known facts. Then provide:
- Likely root causes
- Supporting evidence
- Tests or checks to confirm each hypothesis
- Recommended fix
- Alternative fix if appropriate
- Verification steps

Do not present assumptions as facts.

If the supplied information is insufficient, clearly state what additional information is required instead of guessing.

Prioritize actionable debugging steps and avoid unrelated recommendations.`,
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

Deadline:
{{DEADLINE}}

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
        name: "chatgpt",
        instructions: `You are an experienced project planning and delivery manager.

Create a realistic implementation plan for the project below.

Project:
{{PROJECT_NAME}}

Objective:
{{OBJECTIVE}}

Expected outcome:
{{OUTCOME}}

Available resources:
{{RESOURCES}}

Deadline:
{{DEADLINE}}

Constraints:
{{CONSTRAINTS}}

Divide the project into logical phases.

For each phase provide:
- Phase objective
- Tasks
- Dependencies
- Deliverables
- Milestone
- Suggested completion point

Also identify:
- Critical dependencies
- Potential bottlenecks
- High-risk areas
- Tasks that can run in parallel
- Final completion criteria

Order the work based on actual dependencies rather than simply listing tasks chronologically.

Keep the plan realistic and do not invent resources or capabilities that were not provided.`,
      },
      {
        name: "gemini",
        instructions: `Act as a project management specialist.

Turn the following project objective into a structured execution plan.

Project:
{{PROJECT_NAME}}

Objective:
{{OBJECTIVE}}

Expected outcome:
{{OUTCOME}}

Available resources:
{{RESOURCES}}

Deadline:
{{DEADLINE}}

Constraints:
{{CONSTRAINTS}}

Create a phased implementation plan.

For each phase include:
1. Objective
2. Tasks
3. Dependencies
4. Deliverables
5. Milestone

Then provide:
- Critical path
- Parallelizable work
- Major risks
- Key checkpoints
- Definition of completion

Ensure that the plan respects the stated deadline and constraints.

Do not fabricate team members, tools, budgets, or resources.

Return a practical plan that a project team could use to begin execution.`,
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

Available time:
{{AVAILABLE_TIME}}

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
        name: "chatgpt",
        instructions: `You are a productivity and task-management assistant.

Analyze and prioritize the following tasks.

Tasks:
{{TASKS}}

Deadlines or time constraints:
{{DEADLINES}}

Current priorities:
{{PRIORITIES}}

Available time:
{{AVAILABLE_TIME}}

Evaluate each task using:
- Urgency
- Importance
- Deadline
- Dependencies
- Expected impact
- Estimated effort

For each task provide:
- Priority: Critical / High / Medium / Low
- Reason
- Dependencies
- Suggested execution position
- Estimated effort

Then provide a recommended execution sequence.

Do not assume that the first task listed is the most important.

If there is insufficient information to confidently prioritize a task, state the uncertainty.

Optimize the sequence for meaningful progress within the available time.`,
      },
      {
        name: "gemini",
        instructions: `Act as a task prioritization and productivity strategist.

Prioritize the following tasks based on their actual urgency, importance, dependencies, effort, and impact.

Tasks:
{{TASKS}}

Deadlines or time constraints:
{{DEADLINES}}

Current priorities:
{{PRIORITIES}}

Available time:
{{AVAILABLE_TIME}}

For each task determine:
1. Priority level
2. Reason for the priority
3. Dependencies
4. Estimated effort
5. Recommended execution position

Then create a final ordered execution plan.

Consider whether tasks can be completed in parallel.

Do not confuse urgency with importance and do not assume that a task is urgent simply because its deadline is unclear.

If the available time is insufficient for all tasks, identify what should be deferred and explain why.`,
      },
    ],
  },
];
