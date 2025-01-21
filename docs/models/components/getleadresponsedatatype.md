# GetLeadResponseDataType

Specifies the category or purpose of the address, such as 'home', 'work', or 'billing'. This helps in identifying the context in which the address is used within the lead's profile. The value is a string that represents the type of address associated with the lead.

## Example Usage

```typescript
import { GetLeadResponseDataType } from "apideck/models/components";

let value: GetLeadResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```