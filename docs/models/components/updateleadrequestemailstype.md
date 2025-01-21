# UpdateLeadRequestEmailsType

Specifies the category of the email address, such as 'work', 'personal', or 'other'. This helps in organizing and distinguishing between different types of email addresses associated with the lead. It should be a valid string that clearly indicates the email's purpose.

## Example Usage

```typescript
import { UpdateLeadRequestEmailsType } from "apideck/models/components";

let value: UpdateLeadRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```