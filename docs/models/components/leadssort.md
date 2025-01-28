# LeadsSort

## Example Usage

```typescript
import { LeadsSort } from "apideck/models/components";

let value: LeadsSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `by`                                                                                                                                                | [components.LeadsSortBy](../../models/components/leadssortby.md)                                                                                    | :heavy_minus_sign:                                                                                                                                  | Specify the field by which to sort the leads. This property determines the attribute used for ordering the results, such as 'name' or 'created_at'. | created_at                                                                                                                                          |
| `direction`                                                                                                                                         | [components.LeadsSortDirection](../../models/components/leadssortdirection.md)                                                                      | :heavy_minus_sign:                                                                                                                                  | Define the direction for sorting the results. Use 'asc' for ascending or 'desc' for descending order to control the sequence of the returned leads. |                                                                                                                                                     |