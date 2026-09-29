---
description: "Task list for Entre na Roda Web App implementation"
---

# Tasks: Entre na Roda Web App

**Input**: Design documents from `/specs/001-entre-na-roda-app/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan (`css/`, `js/`, `docs/`)
- [X] T002 [P] Create empty `.nojekyll` file at root for GitHub Pages publication
- [X] T003 [P] Create manual test script in `docs/roteiro-testes.md` covering 360px, 768px, and 1280px viewports

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and data that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Create structured JavaScript content file in `js/conteudo.js` containing all texts from `docs/conteudo-pedagogico.md` verbatim (Etapa 1, Etapa 2, Tela final, orientações)
- [X] T005 [P] Create baseline responsive stylesheet in `css/estilo.css` adhering to WCAG 2.1 AA contrast, minimum font size 18px, touch targets >= 44x44px, and no horizontal scrolling from 360px to 1440px

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Realizar a Etapa 1: Luta ou briga? (Priority: P1) 🎯 MVP

**Goal**: Permit that pairs of students execute the 8 situations in Etapa 1 with explanatory feedback, hints, and second-chance opportunities.

**Independent Test**: Can be tested by opening `index.html`, clicking "Começar", answering the 8 situations in Etapa 1, and verifying feedback, hints, and progress indicators.

### Implementation for User Story 1

- [X] T006 [P] [US1] Implement initial screen layout and main container structure in `index.html`
- [X] T007 [P] [US1] Implement application initialization and volatile session state management (`SessaoProgresso`) in `js/app.js`
- [X] T008 [US1] Implement Etapa 1 navigation and display logic for the 8 situations ("É luta" / "É briga") in `js/app.js` (depends on T004, T007)
- [X] T009 [US1] Implement pedagogical feedback mechanism (correct answer feedback, first-error hint with retry, second-error explanation) in `js/app.js`
- [X] T010 [US1] Implement optional text-to-speech support via Web Speech API (`speechSynthesis`) for instruction read-aloud in `js/app.js`

**Checkpoint**: User Story 1 is fully functional and testable independently (MVP milestone)

---

## Phase 4: User Story 2 - Realizar a Etapa 2: Conheça a roda e consultar a Tela final (Priority: P2)

**Goal**: Answer the 5 multiple-choice challenges about instruments and capoeira in Etapa 2 and view the Final Screen with summary and "Vale rever" section.

**Independent Test**: Can be tested by completing Etapa 1, transitioning to Etapa 2, answering the 5 multiple-choice questions with historical facts ("Você sabia?"), and reaching the Final Screen.

### Implementation for User Story 2

- [X] T011 [P] [US2] Implement Etapa 2 transition and display logic for the 5 multiple-choice challenges with historical facts in `js/app.js`
- [X] T012 [US2] Implement incorrect question tracking and compilation of the "Vale rever" review section for the Final Screen in `js/app.js`
- [X] T013 [US2] Implement Final Screen markup and logic with first-attempt score summary, practical class preparation message, and "Jogar de novo" button in `index.html` and `js/app.js`

**Checkpoint**: User Stories 1 AND 2 both work independently

---

## Phase 5: User Story 3 - Consultar a página de orientação para o professor (Priority: P3)

**Goal**: Provide an informative teacher guidance page detailing BNCC skill EF35EF15 and classroom usage recommendations.

**Independent Test**: Can be tested by clicking the discrete teacher link on the initial screen and verifying the display of BNCC alignment, objectives, and time estimates.

### Implementation for User Story 3

- [X] T014 [P] [US3] Create teacher guidance page containing BNCC skill EF35EF15, objectives, estimated time (15-20 min), and usage tips in `professor.html`
- [X] T015 [US3] Add discrete navigation link to `professor.html` from the initial screen in `index.html`

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Cross-cutting verification, polish, and validation

- [X] T016 [P] Perform visual inspection and responsiveness validation across 360px, 768px, and 1280px viewports per `docs/roteiro-testes.md`
- [X] T017 Execute accessibility review (WCAG 2.1 AA) and verify zero personal data collection / telemetry

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories proceed in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Follows US1 in the linear user flow
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Independent informational page

### Within Each User Story

- Models/content before UI logic
- Core flow before auxiliary features
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel
- US1 UI markup (`index.html`) and app state (`js/app.js`) marked [P] can run in parallel
- US2 and US3 components can be developed independently once foundational data is ready

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently via `index.html`
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
