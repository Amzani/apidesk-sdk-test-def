# CompanyAddressesType

Specifies the category or purpose of the address, such as 'billing', 'shipping', or 'office'. This helps in identifying the role of the address within the company's operations. The value is a string that describes the address type.

## Example Usage

```typescript
import { CompanyAddressesType } from "apideck/models/components";

let value: CompanyAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```