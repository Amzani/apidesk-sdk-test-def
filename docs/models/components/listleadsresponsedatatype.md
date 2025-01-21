# ListLeadsResponseDataType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in identifying the purpose of the address within the lead's contact information. The value is expected to be a string that matches predefined address types used in the CRM.

## Example Usage

```typescript
import { ListLeadsResponseDataType } from "apideck/models/components";

let value: ListLeadsResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```