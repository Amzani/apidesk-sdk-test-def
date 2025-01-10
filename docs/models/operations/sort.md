# Sort

This query parameter enables sorting of the returned company data based on specified fields and directions. It supports deep object style sorting, allowing users to define the field (e.g., 'created_at') and direction ('asc' or 'desc') for sorting. This parameter helps in organizing data according to user preferences.

## Example Usage

```typescript
import { Sort } from "apideck/models/operations";

let value: Sort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `by`                                                         | [operations.By](../../models/operations/by.md)               | :heavy_minus_sign:                                           | The field on which to sort the Companies                     | created_at                                                   |
| `direction`                                                  | [operations.Direction](../../models/operations/direction.md) | :heavy_minus_sign:                                           | The direction in which to sort the results                   |                                                              |