# GetCompanyResponseDataType

Indicates the category or purpose of the address, such as 'billing', 'shipping', or 'office'. This helps in identifying the role of the address within the company's operations. The value is expected to be a descriptive string.

## Example Usage

```typescript
import { GetCompanyResponseDataType } from "apideck/models/components";

let value: GetCompanyResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```