# Feature: Report issues directly from the website

## Feature Request: In-App GitHub Issue Reporter

### Summary
Allow users to raise GitHub issues against the Bunnter application directly from the website, without needing to navigate to the GitHub repository manually.

### Motivation
Users who encounter bugs (e.g. missing images, broken swipe gestures) currently have no obvious way to report them. Adding a direct feedback mechanism from the UI lowers the barrier to reporting and improves the quality of bug reports.

### Proposed Solution
Add a **"Report a problem"** button or link in the app UI (e.g. in the footer or as a floating button). Clicking it would open a pre-filled GitHub new issue URL in a new tab, like:

```
https://github.com/nkwevliwn/Bunnter/issues/new?template=bug_report.md&title=Bug:+&labels=bug
```

This requires no backend — it's a simple anchor tag with a crafted URL.

### Implementation Steps
1. Add issue templates under `.github/ISSUE_TEMPLATE/` (e.g. `bug_report.md`, `feature_request.md`).
2. Add a "🐛 Report a problem" link/button in the app footer in `src/App.tsx`.
3. The link opens `https://github.com/nkwevliwn/Bunnter/issues/new?template=bug_report.md` in a new tab.

### Acceptance Criteria
- [ ] A visible "Report a problem" link/button exists in the app UI.
- [ ] Clicking it opens the GitHub new issue form in a new tab.
- [ ] The issue form is pre-filled with a useful template.
- [ ] Works on both desktop and mobile.
