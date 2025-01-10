# CompaniesAllEmails

## Example Usage

```typescript
import { CompaniesAllEmails } from "apideck/models/operations";

let value: CompaniesAllEmails = {
  id: "123",
  email: "elon@musk.com",
  type: "primary",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Unique identifier for the email address                                                                            | 123                                                                                                                |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Email address                                                                                                      | elon@musk.com                                                                                                      |
| `type`                                                                                                             | [operations.CompaniesAllCompaniesResponse200Type](../../models/operations/companiesallcompaniesresponse200type.md) | :heavy_minus_sign:                                                                                                 | Email type                                                                                                         | primary                                                                                                            |