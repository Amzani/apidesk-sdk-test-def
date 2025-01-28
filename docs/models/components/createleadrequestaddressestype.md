# CreateLeadRequestAddressesType

Defines the category or purpose of the address, such as 'home', 'work', or 'billing'. This helps in organizing and utilizing addresses based on their intended use. It should be a clear string that specifies the address type.

## Example Usage

```typescript
import { CreateLeadRequestAddressesType } from "apideck/models/components";

let value: CreateLeadRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```