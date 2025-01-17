# UserUpdateRequestEmailsType

Specifies the category or role of the email address associated with the user, such as 'work', 'personal', or 'other'. This helps in distinguishing between different types of email addresses for effective communication management within the CRM system. It is not mandatory, but providing this information can enhance the clarity and organization of user contact details.

## Example Usage

```typescript
import { UserUpdateRequestEmailsType } from "apideck/models/components";

let value: UserUpdateRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```