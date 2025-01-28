# CreateLeadRequestEmailsType

Specifies the type of email address associated with the lead, such as 'work', 'personal', or 'other'. This helps categorize the email for better organization and communication. It is optional and should be a string that clearly identifies the email's purpose.

## Example Usage

```typescript
import { CreateLeadRequestEmailsType } from "apideck/models/components";

let value: CreateLeadRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```