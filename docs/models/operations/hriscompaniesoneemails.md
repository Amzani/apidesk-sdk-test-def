# HrisCompaniesOneEmails

## Example Usage

```typescript
import { HrisCompaniesOneEmails } from "apideck/models/operations";

let value: HrisCompaniesOneEmails = {
  id: "123",
  email: "elon@musk.com",
  type: "primary",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Unique identifier for the email address                                                                                      | 123                                                                                                                          |
| `email`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Email address                                                                                                                | elon@musk.com                                                                                                                |
| `type`                                                                                                                       | [operations.HrisCompaniesOneHrisCompaniesResponseType](../../models/operations/hriscompaniesonehriscompaniesresponsetype.md) | :heavy_minus_sign:                                                                                                           | Email type                                                                                                                   | primary                                                                                                                      |