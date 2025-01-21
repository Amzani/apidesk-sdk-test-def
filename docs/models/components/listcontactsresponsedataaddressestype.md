# ListContactsResponseDataAddressesType

Specifies the category or purpose of the address, such as 'home', 'work', or 'billing'. This string helps in identifying the context in which the address is used, aiding in filtering and organizing addresses based on their type.

## Example Usage

```typescript
import { ListContactsResponseDataAddressesType } from "apideck/models/components";

let value: ListContactsResponseDataAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```