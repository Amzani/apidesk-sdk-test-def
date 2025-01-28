# CreateCompanyRequestType

Specifies the type of address, such as 'billing' or 'shipping'. This helps categorize the address for specific business functions and ensures that the correct address is used for the right purpose. It is optional but recommended for clarity.

## Example Usage

```typescript
import { CreateCompanyRequestType } from "apideck/models/components";

let value: CreateCompanyRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```