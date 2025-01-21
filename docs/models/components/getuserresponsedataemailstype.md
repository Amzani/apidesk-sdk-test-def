# GetUserResponseDataEmailsType

Specifies the type of email address, such as 'work', 'personal', or 'other'. This field is optional and may not be present if the email type is not specified in the user's profile.

## Example Usage

```typescript
import { GetUserResponseDataEmailsType } from "apideck/models/components";

let value: GetUserResponseDataEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```