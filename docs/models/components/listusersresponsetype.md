# ListUsersResponseType

The type of address, such as 'home', 'work', or 'billing'. This string helps categorize the address for better organization and retrieval within the CRM system. Understanding the address type is essential for applications that need to differentiate between various address uses.

## Example Usage

```typescript
import { ListUsersResponseType } from "apideck/models/components";

let value: ListUsersResponseType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```