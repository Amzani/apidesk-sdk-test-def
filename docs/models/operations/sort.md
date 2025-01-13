# Sort

Apply sorting

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
| `by`                                                         | [operations.By](../../models/operations/by.md)               | :heavy_minus_sign:                                           | The field on which to sort the Employees                     | created_at                                                   |
| `direction`                                                  | [operations.Direction](../../models/operations/direction.md) | :heavy_minus_sign:                                           | The direction in which to sort the results                   |                                                              |