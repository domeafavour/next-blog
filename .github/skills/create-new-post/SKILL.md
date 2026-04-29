---
name: create-new-post
description: "Automate creating a new blog post using pnpm new-post when asked to 'create a post' or similar."
---

## Purpose

Automate and standardize the process of creating a new blog post in this workspace using the `pnpm new-post` command.

## Workflow

1. When the user asks to "create a post" or similar:
   - Run `pnpm new-post` in the project root.
   - Follow the interactive prompts to enter:
     - slug (used in filename)
     - title (defaults to slug if empty)
     - tags (space-separated, optional)
2. If the user requests help or usage info, run `pnpm new-post --help` to display instructions.
3. If a file with the same slug and date exists, confirm with the user before overwriting.

## Decision Points

- If the user provides all required info (slug, title, tags) in the prompt, pass them interactively or pre-fill if possible.
- If the file exists, ask the user to confirm overwriting.

## Quality Criteria

- The new post file is created in `src/pages/posts/` with the correct date and slug.
- The frontmatter includes the provided title and tags.
- The user is notified of the file path and any overwrite actions.

## Example Prompts

- "Create a new post titled 'My Journey' with tags travel adventure."
- "Add a blog post called '2026 Review'."
- "pnpm new-post --help"

## Related Customizations

- Automate filling prompts from a single command.
- Add validation for slug format.
- Extend to support drafts or scheduled posts.
