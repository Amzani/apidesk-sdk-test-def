# LeadsAllQueryParamSort

Apply sorting

## Example Usage

```typescript
import { LeadsAllQueryParamSort } from "apideck/models/operations";

let value: LeadsAllQueryParamSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `by`                                                                                             | [operations.LeadsAllQueryParamBy](../../models/operations/leadsallqueryparamby.md)               | :heavy_minus_sign:                                                                               | The field on which to sort the Leads                                                             | created_at                                                                                       |
| `direction`                                                                                      | [operations.LeadsAllQueryParamDirection](../../models/operations/leadsallqueryparamdirection.md) | :heavy_minus_sign:                                                                               | The direction in which to sort the results                                                       |                                                                                                  |