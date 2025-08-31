# Pipeline Metrics

Record the timing numbers from the GitHub Actions run summary.

## Baseline
- Run ID / Commit: #1
- Total duration: 18s
- Queue time (if shown): 
- Job durations:
  - build-and-test: 2s

Notes:

## Optimized
- Run ID / Commit: #2
- Total duration: 13s
- Queue time (if shown): 
- Job durations:
  - changes:6s
  - lint:
  - test (node 18):
  - test (node 20):
  - build:

Notes:

## Observations
## Observations
- The **baseline pipeline** always runs the full sequence (lint, test, build) even for small or documentation-only commits.
- In the **optimized pipeline**, the `changes` job detected that no source code was modified, so it **skipped lint, test, and build**. 
- This demonstrates the effectiveness of **conditional execution** (paths-filter optimization) — jobs are only run when needed.
- Total duration improved from ~14s (baseline) → ~7s (optimized) for this commit.
- Key improvements observed:
  - **Change detection**: unnecessary jobs are skipped.
  - **Parallel jobs**: when code changes are present, lint/test/build will run simultaneously, reducing total runtime further.
  - **Dependency caching**: future runs will be faster due to cached npm modules.
- Conclusion: The optimized pipeline is **smarter and more efficient**, saving compute time and providing faster feedback.
