# CreateLeadRequestAddressesType

Defines the category of the address, such as 'home', 'work', or 'billing'. This classification aids in understanding the context and purpose of the address within the lead's profile. Ensure the type is a valid string that represents the address's function.

## Example Usage

```typescript
import { CreateLeadRequestAddressesType } from "apideck/models/components";

let value: CreateLeadRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```