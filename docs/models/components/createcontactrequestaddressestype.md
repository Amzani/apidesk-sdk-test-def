# CreateContactRequestAddressesType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in organizing and distinguishing between different types of addresses associated with a contact. If provided, it should be a valid string representing the address type.

## Example Usage

```typescript
import { CreateContactRequestAddressesType } from "apideck/models/components";

let value: CreateContactRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```