# UpdateCompanyRequestAddressesType

Specifies the type of address, such as 'billing', 'shipping', or 'office'. This helps categorize the address within the company's records. The value should be a string that matches predefined address types in the CRM system.

## Example Usage

```typescript
import { UpdateCompanyRequestAddressesType } from "apideck/models/components";

let value: UpdateCompanyRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```