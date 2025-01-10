# LeadsAddWebsites

## Example Usage

```typescript
import { LeadsAddWebsites } from "apideck/models/operations";

let value: LeadsAddWebsites = {
  id: "12345",
  url: "http://example.com",
  type: "primary",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Unique identifier for the website                                  | 12345                                                              |
| `url`                                                              | *string*                                                           | :heavy_check_mark:                                                 | The website URL                                                    | http://example.com                                                 |
| `type`                                                             | [operations.LeadsAddType](../../models/operations/leadsaddtype.md) | :heavy_minus_sign:                                                 | The type of website                                                | primary                                                            |