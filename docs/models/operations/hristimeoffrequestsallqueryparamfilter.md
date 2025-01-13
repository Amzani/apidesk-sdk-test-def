# HrisTimeOffRequestsAllQueryParamFilter

Apply filters

## Example Usage

```typescript
import { HrisTimeOffRequestsAllQueryParamFilter } from "apideck/models/operations";

let value: HrisTimeOffRequestsAllQueryParamFilter = {
  startDate: "2022-04-08",
  endDate: "2022-04-21",
  updatedSince: "2020-09-30T07:43:32.000Z",
  employeeId: "1234",
  timeOffRequestStatus: "approved",
  companyId: "1234",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `startDate`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Start date                                                                         | 2022-04-08                                                                         |
| `endDate`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | End date                                                                           | 2022-04-21                                                                         |
| `updatedSince`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Minimum date the time off request was last created or modified                     | 2020-09-30T07:43:32.000Z                                                           |
| `employeeId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | Employee ID                                                                        | 1234                                                                               |
| `timeOffRequestStatus`                                                             | [operations.TimeOffRequestStatus](../../models/operations/timeoffrequeststatus.md) | :heavy_minus_sign:                                                                 | Time off request status to filter on                                               | requested                                                                          |
| `companyId`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Company ID                                                                         | 1234                                                                               |