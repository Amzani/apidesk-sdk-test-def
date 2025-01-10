# QueryParamSort

Apply sorting

## Example Usage

```typescript
import { QueryParamSort } from "apideck/models/operations";

let value: QueryParamSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `by`                                                                             | [operations.QueryParamBy](../../models/operations/queryparamby.md)               | :heavy_minus_sign:                                                               | The field on which to sort the Contacts                                          | created_at                                                                       |
| `direction`                                                                      | [operations.QueryParamDirection](../../models/operations/queryparamdirection.md) | :heavy_minus_sign:                                                               | The direction in which to sort the results                                       |                                                                                  |