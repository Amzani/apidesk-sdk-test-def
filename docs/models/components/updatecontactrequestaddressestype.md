# UpdateContactRequestAddressesType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in identifying the purpose of the address within the contact's profile. It should be a valid string that clearly indicates the address type.

## Example Usage

```typescript
import { UpdateContactRequestAddressesType } from "apideck/models/components";

let value: UpdateContactRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```