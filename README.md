# CI/CD Pipeline Optimizer (Node.js + GitHub Actions)

This repository demonstrates a baseline CI workflow and then an optimized workflow on GitHub Actions for a tiny Node.js project.

## Project structure
- `src/` — sample code
- `test/` — Jest unit tests
- `.github/workflows/ci.yml` — **baseline** CI
- `templates/ci-optimized.yml` — optimized CI template (copy to `.github/workflows/` later)
- `metrics.md` — place to record baseline vs. optimized timings

## Commands
```bash
npm install
npm run lint
npm test
npm run build
npm start   # runs the built bundle (after build)
```

## How to use
1) Commit & push the baseline to GitHub. The workflow runs automatically.
2) Record the **Total duration** and job times in `metrics.md`.
3) Replace the baseline workflow with `templates/ci-optimized.yml` and push again.
4) Record the new timings in `metrics.md` and summarize improvements.

