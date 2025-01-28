# ActivityLocationAddressType

Specifies the category or classification of the address, such as 'billing', 'shipping', or 'home'. This helps in identifying the purpose of the address within the CRM activity context.

## Example Usage

```typescript
import { ActivityLocationAddressType } from "apideck/models/components";

let value: ActivityLocationAddressType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```