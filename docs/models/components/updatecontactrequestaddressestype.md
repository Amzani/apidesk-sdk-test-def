# UpdateContactRequestAddressesType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in identifying the purpose of the address within the contact's profile. Ensure the type is a valid string that accurately reflects the address's role.

## Example Usage

```typescript
import { UpdateContactRequestAddressesType } from "apideck/models/components";

let value: UpdateContactRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```