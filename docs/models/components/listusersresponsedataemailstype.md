# ListUsersResponseDataEmailsType

Specifies the type of email address, such as 'work' or 'personal'. This helps categorize the email for better organization and context within the CRM system. The value is optional and can be used to filter or sort email addresses based on their type.

## Example Usage

```typescript
import { ListUsersResponseDataEmailsType } from "apideck/models/components";

let value: ListUsersResponseDataEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```