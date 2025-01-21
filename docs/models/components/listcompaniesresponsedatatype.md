# ListCompaniesResponseDataType

Specifies the category or purpose of the address, such as 'billing', 'shipping', or 'office'. This helps in identifying the role of the address within the company's operations. The value is a string that aligns with predefined address types in the CRM.

## Example Usage

```typescript
import { ListCompaniesResponseDataType } from "apideck/models/components";

let value: ListCompaniesResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```