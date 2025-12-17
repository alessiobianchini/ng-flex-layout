### Continuous Integration (CI) Tools

This repository uses GitHub Actions for CI and releases.

##### Workflows

- `ng-flex-layout - test lib` (`test-lib.yml`): runs install/build/tests on pushes and PRs against `master` (this is also used for the README badge).
- `ci` (`ci.yml`): reusable workflow invoked by `test-lib.yml` (and runnable via `workflow_dispatch`).
- `demo-app - build and deploy to Azure web service`: builds the demo app and deploys it to Azure on release creation (or manually via `workflow_dispatch`).
- `ng-flex-layout - publish package to npmjs`: publishes the package to npm on release creation.
