# GetLeadResponseDataEmailsType

Specifies the type of email address, such as 'work', 'personal', or 'other'. This helps categorize the email addresses for better organization and is returned as a string. It may not be present if the type is not specified.

## Example Usage

```typescript
import { GetLeadResponseDataEmailsType } from "apideck/models/components";

let value: GetLeadResponseDataEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```