# CreateActivityRequestLocationAddressType

Defines the category or nature of the address, such as 'business' or 'residential'. This field is optional and helps in classifying the address for better organization and retrieval within the CRM system.

## Example Usage

```typescript
import { CreateActivityRequestLocationAddressType } from "apideck/models/components";

let value: CreateActivityRequestLocationAddressType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```