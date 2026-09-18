# **Pre-class brief**

![hero-pic](./assets/unit-2-7-data-orchestration-testing.png)

## Where are we?

Your automated pipelines are running daily. But last Tuesday, a supplier changed their CSV format and your pipeline loaded garbage data into the warehouse — and nobody noticed until the CFO's dashboard showed negative revenue. You need automated *quality gates* that catch bad data before it reaches the dashboards.

## Why this matters

Data quality is the unsexy, career-defining skill. A pipeline that runs successfully but loads wrong data is *worse* than one that fails loudly. Testing is how you build trust in your data platform. When FreshCart's head of marketing asks "can I trust these numbers?" your answer needs to be backed by automated validation, not a verbal assurance.

## Key concepts

**Data Quality Testing with Great Expectations** — Write "expectations" (rules) about your data: this column should never be null, this value should be between 0 and 10,000, this date should not be in the future. These rules run automatically and produce validation reports. An expectation like "order_total must be positive" catches the negative-revenue bug before it hits the dashboard.

**dbt Testing** — dbt's built-in tests cover basics (unique, not_null, accepted_values, relationships). The `dbt_utils` and `dbt-expectations` packages extend this dramatically — range checks, expression validation, cross-column consistency. Testing is integrated into `dbt build`, so every model run includes its quality checks.

**Orchestrating Multi-Tool Pipelines** — In production, your pipeline isn't "run dbt." It's "extract from Postgres, load to BigQuery, run transformations, run tests, alert on failure." Dagster orchestrates this entire chain as a single observable workflow.

📄 [View lesson 2.7 interactive page](https://su-ntu-ctp.github.io/5m-data-2.7-data-orchestration-testing/)
