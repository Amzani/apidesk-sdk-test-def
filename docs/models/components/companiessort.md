# CompaniesSort

## Example Usage

```typescript
import { CompaniesSort } from "apideck/models/components";

let value: CompaniesSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `by`                                                         | [components.By](../../models/components/by.md)               | :heavy_minus_sign:                                           | The field on which to sort the Companies                     | created_at                                                   |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_minus_sign:                                           | The direction in which to sort the results                   |                                                              |