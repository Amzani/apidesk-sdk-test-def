# ActivitiesAllQueryParamSort

Apply sorting

## Example Usage

```typescript
import { ActivitiesAllQueryParamSort } from "apideck/models/operations";

let value: ActivitiesAllQueryParamSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                       | [operations.ActivitiesAllQueryParamBy](../../models/operations/activitiesallqueryparamby.md)               | :heavy_minus_sign:                                                                                         | The field on which to sort the Activities                                                                  | created_at                                                                                                 |
| `direction`                                                                                                | [operations.ActivitiesAllQueryParamDirection](../../models/operations/activitiesallqueryparamdirection.md) | :heavy_minus_sign:                                                                                         | The direction in which to sort the results                                                                 |                                                                                                            |