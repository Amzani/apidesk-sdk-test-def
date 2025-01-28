# ContactAddressesType

Specifies the type of address, such as 'home', 'work', or 'billing'. This helps categorize the address for better organization and retrieval, ensuring that the correct address type is used for the appropriate context.

## Example Usage

```typescript
import { ContactAddressesType } from "apideck/models/components";

let value: ContactAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```