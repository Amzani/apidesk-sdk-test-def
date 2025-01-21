# CreateLeadRequestEmailsType

Specifies the category of the email address, such as 'work', 'personal', or 'other'. This helps in organizing and distinguishing between different email addresses associated with the lead. If provided, it should be a valid string representing the email type.

## Example Usage

```typescript
import { CreateLeadRequestEmailsType } from "apideck/models/components";

let value: CreateLeadRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```