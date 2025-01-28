# UserType

Specifies the type of address, such as 'home', 'work', or 'billing'. This helps categorize the address for better organization and retrieval within the CRM system. Understanding the address type is crucial for context-specific operations or communications.

## Example Usage

```typescript
import { UserType } from "apideck/models/components";

let value: UserType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```