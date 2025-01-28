# CreateActivityRequestLocationAddressType

Indicates the type of address being provided, such as 'home', 'work', or 'other'. This optional field helps categorize the address, providing context about its relevance to the activity. It should be a descriptive string that clearly defines the address type.

## Example Usage

```typescript
import { CreateActivityRequestLocationAddressType } from "apideck/models/components";

let value: CreateActivityRequestLocationAddressType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```