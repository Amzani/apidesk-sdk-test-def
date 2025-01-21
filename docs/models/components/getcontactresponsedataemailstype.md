# GetContactResponseDataEmailsType

Indicates the type of email address, such as 'personal', 'work', or 'other'. This helps in categorizing the email address based on its usage context. The value is a string that describes the type of email address associated with the contact.

## Example Usage

```typescript
import { GetContactResponseDataEmailsType } from "apideck/models/components";

let value: GetContactResponseDataEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```