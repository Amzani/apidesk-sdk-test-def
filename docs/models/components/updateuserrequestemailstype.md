# UpdateUserRequestEmailsType

Defines the type of email address, such as 'work', 'personal', or 'other'. This categorization helps in organizing and prioritizing email communications within the CRM system. If specified, it should be a valid string representing the email type.

## Example Usage

```typescript
import { UpdateUserRequestEmailsType } from "apideck/models/components";

let value: UpdateUserRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```