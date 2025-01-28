# ListUsersResponseDataType

Specifies the type of phone number, such as 'mobile', 'home', or 'work'. This optional field helps categorize the phone number, allowing applications to handle different types of contact numbers appropriately. Understanding the type can be crucial for context-specific communication strategies.

## Example Usage

```typescript
import { ListUsersResponseDataType } from "apideck/models/components";

let value: ListUsersResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```