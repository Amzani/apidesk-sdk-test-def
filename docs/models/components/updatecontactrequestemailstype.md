# UpdateContactRequestEmailsType

Specifies the type of email address being updated, such as 'work' or 'personal'. This field helps categorize the email address within the contact's profile, although it is optional. Providing this information can enhance the organization and retrieval of contact details.

## Example Usage

```typescript
import { UpdateContactRequestEmailsType } from "apideck/models/components";

let value: UpdateContactRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```