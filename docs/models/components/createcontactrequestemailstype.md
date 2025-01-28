# CreateContactRequestEmailsType

Specifies the type of email address, such as 'work' or 'personal'. This optional field helps categorize the email address, allowing for better organization and filtering of contact information within the CRM.

## Example Usage

```typescript
import { CreateContactRequestEmailsType } from "apideck/models/components";

let value: CreateContactRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```