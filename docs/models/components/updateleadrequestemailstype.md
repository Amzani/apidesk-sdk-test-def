# UpdateLeadRequestEmailsType

Specifies the category of the email address, such as 'work', 'personal', or 'other'. This helps in identifying the context in which the email is used, ensuring accurate communication with the lead. It is optional and should be a string that clearly defines the email's purpose.

## Example Usage

```typescript
import { UpdateLeadRequestEmailsType } from "apideck/models/components";

let value: UpdateLeadRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```