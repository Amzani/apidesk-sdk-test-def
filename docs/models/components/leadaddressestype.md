# LeadAddressesType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in identifying the purpose of the address within the lead's contact information. The value is a string that categorizes the address type, aiding in organizing and filtering addresses in the CRM system.

## Example Usage

```typescript
import { LeadAddressesType } from "apideck/models/components";

let value: LeadAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```