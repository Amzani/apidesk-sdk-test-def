# CreateUserRequestType

Specifies the type of address, such as 'home' or 'work', associated with the user. This helps categorize the address within the CRM for better organization and retrieval. Ensure the type is a valid string that accurately represents the address category.

## Example Usage

```typescript
import { CreateUserRequestType } from "apideck/models/components";

let value: CreateUserRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```