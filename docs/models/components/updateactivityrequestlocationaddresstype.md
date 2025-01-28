# UpdateActivityRequestLocationAddressType

Indicates the type of address, such as 'billing' or 'shipping'. This optional field helps categorize the address within the CRM, ensuring that the correct address type is used for the activity.

## Example Usage

```typescript
import { UpdateActivityRequestLocationAddressType } from "apideck/models/components";

let value: UpdateActivityRequestLocationAddressType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```