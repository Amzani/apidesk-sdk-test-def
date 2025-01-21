# UpdateLeadRequestAddressesType

Defines the category of the address, such as 'home', 'work', or 'billing', to clarify its intended use. This categorization aids in managing and utilizing address data effectively within the CRM system. Ensure the type is a valid string that accurately describes the address's purpose.

## Example Usage

```typescript
import { UpdateLeadRequestAddressesType } from "apideck/models/components";

let value: UpdateLeadRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```