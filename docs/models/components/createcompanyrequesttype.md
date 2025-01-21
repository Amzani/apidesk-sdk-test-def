# CreateCompanyRequestType

Specifies the type of address, such as 'billing', 'shipping', or 'office'. This helps categorize the address for specific business functions and should be a predefined string that matches the company's address type categories.

## Example Usage

```typescript
import { CreateCompanyRequestType } from "apideck/models/components";

let value: CreateCompanyRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```