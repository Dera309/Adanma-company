# Spec-Driven Development Guidelines

To maintain project integrity and ensure all requirements are systematically implemented, follow these guidelines when working with the Adanma project documentation.

## Working with the Task Checklist (`docs/tasks.md`)

### 1. Tracking Progress
- **Mark Completion**: Update a task from `[ ]` to `[x]` immediately upon completion and verification.
- **In-Progress Tasks**: If a task is partially completed or currently under work, you may use `[/]` as a custom notation to indicate "In Progress".

### 2. Modifying Tasks
- **Maintain Phases**: Keep the existing phase-based structure (e.g., Setup → Core UI → Feature Integration). Do not delete completed phases; they serve as a historical record.
- **Adding New Tasks**: If a requirement is expanded or a technical debt item is identified, add a new task to the appropriate phase.
- **Linking Rule**: Every new task MUST include a reference to:
    - `plan.md` plan item number (e.g., `Plan Item: 3`)
    - `requirements.md` requirement ID (e.g., `Requirement: REQ-2`)

### 3. Consistent Formatting
- **Uniformity**: Follow the existing indentation and spacing conventions.
- **Sub-tasks**: Use indented lists for granular sub-items within a main task.

## Documentation Sync
- **Implementation Plan**: If the scope changes significantly, update `docs/plan.md` before adding new tasks to `docs/tasks.md`.
- **Requirements**: Ensure any new feature additions are first documented in `docs/requirements.md` with a corresponding User Story and Acceptance Criteria.

## Technical Execution
- **Design Fidelity**: Always reference the `stitch/` UI design folders and `regal african elegance` logo to ensure high-fidelity implementation.
- **Atomic Commits**: Link your commits to the task numbers where applicable to maintain a clear trail of development.
