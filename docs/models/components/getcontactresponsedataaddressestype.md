# GetContactResponseDataAddressesType

Specifies the category or purpose of the address, such as 'home', 'work', or 'billing'. This helps in identifying the context in which the address is used and is crucial for applications that need to filter or sort addresses based on their type.

## Example Usage

```typescript
import { GetContactResponseDataAddressesType } from "apideck/models/components";

let value: GetContactResponseDataAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```