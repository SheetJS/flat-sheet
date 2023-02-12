# flat-sheet

Example repo for <https://docs.sheetjs.com/docs/demos/hosting/github>

The example action is set to run at midnight and noon using the cron expression

```yaml
on:
  schedule:
    - cron: '0 0,12 * * *'
```

[crontab guru](https://crontab.guru/#0_0,12_*_*_*) describes the expression as

> At minute 0 past hour 0 and 12.

Log retention is set to 1 day.
