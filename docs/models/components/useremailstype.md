# UserEmailsType

Specifies the type of email address provided, such as 'work', 'personal', or 'other'. This helps categorize the email for better organization and retrieval within the CRM system. The value is optional and can be customized based on user needs.

## Example Usage

```typescript
import { UserEmailsType } from "apideck/models/components";

let value: UserEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```