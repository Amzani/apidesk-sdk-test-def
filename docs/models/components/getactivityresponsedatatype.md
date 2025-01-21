# GetActivityResponseDataType

Indicates the type of address related to the CRM activity, such as 'billing', 'shipping', or 'home'. This string value helps categorize the address, allowing developers to handle different address types appropriately within their applications.

## Example Usage

```typescript
import { GetActivityResponseDataType } from "apideck/models/components";

let value: GetActivityResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```