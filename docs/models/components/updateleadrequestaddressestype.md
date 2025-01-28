# UpdateLeadRequestAddressesType

Defines the category or purpose of the address, such as home, work, or billing. This property helps in organizing and utilizing addresses effectively within the CRM system. Ensure the type is a valid string that accurately describes the address's role.

## Example Usage

```typescript
import { UpdateLeadRequestAddressesType } from "apideck/models/components";

let value: UpdateLeadRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```