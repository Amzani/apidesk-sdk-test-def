# Filter

A query parameter that allows users to apply specific filters to the data retrieval process. It supports deep object style filtering, enabling precise control over the data returned. For example, filtering by company name can be achieved by specifying the desired name in the filter object.

## Example Usage

```typescript
import { Filter } from "apideck/models/operations";

let value: Filter = {
  name: "SpaceX",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `name`                           | *string*                         | :heavy_minus_sign:               | Name of the company to filter on | SpaceX                           |