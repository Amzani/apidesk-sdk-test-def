# ListLeadsResponseDataType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in identifying the purpose of the address within the lead's contact information. It is a string value that provides context for how the address is used in CRM operations.

## Example Usage

```typescript
import { ListLeadsResponseDataType } from "apideck/models/components";

let value: ListLeadsResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```