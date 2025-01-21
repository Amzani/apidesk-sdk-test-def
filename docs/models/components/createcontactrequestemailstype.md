# CreateContactRequestEmailsType

Specifies the type of email address, such as 'work', 'personal', or 'other'. This helps categorize the email for better organization and retrieval. If provided, it should match predefined categories within the CRM system.

## Example Usage

```typescript
import { CreateContactRequestEmailsType } from "apideck/models/components";

let value: CreateContactRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```