# ARC Prize 2026 Paper Track

Goal: build a serious paper-track submission around a reproducible ARC reasoning system, not a one-off notebook.

## Working Thesis

ARC tasks are best attacked as **program synthesis under visual invariants**, but the winning paper should explain *why* the system generalizes. Our bet:

> A small library of typed grid transformations, paired with verifier-guided hypothesis search and natural-language abstraction traces, can outperform raw LLM guessing while producing inspectable reasoning evidence.

## Project Shape

- `docs/`: competition notes, method design, reading notes.
- `src/`: solver/evaluator code.
- `experiments/`: experiment manifests and results.
- `paper/`: paper outline, figures, tables, final draft material.

## Immediate Objective

Within the first working cycle:

1. Confirm official Kaggle rules, deadline, evaluation, and submission format from the logged-in Kaggle page.
2. Verify timeline/rubric/submission details from Kaggle Overview/Evaluation pages.
3. Implement a clean ARC task loader and local evaluator.
4. Build three baselines:
   - identity / color-frequency heuristics,
   - symbolic DSL search,
   - LLM-proposed transform + verifier filter.
5. Produce the first experiment table and failure taxonomy, even if scores are weak.

## Definition Of Done

A paper-track milestone is done only when it creates one of:

- a reproducible result table,
- an ablation that changes a clear variable,
- a failure taxonomy with examples,
- a paper section draft backed by logs,
- a solver improvement that passes local tests.
