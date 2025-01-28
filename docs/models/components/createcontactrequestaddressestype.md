# CreateContactRequestAddressesType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in organizing and identifying the address type within the CRM system. It is optional and should be a descriptive string that clearly indicates the address's purpose.

## Example Usage

```typescript
import { CreateContactRequestAddressesType } from "apideck/models/components";

let value: CreateContactRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```