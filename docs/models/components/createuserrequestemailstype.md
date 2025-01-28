# CreateUserRequestEmailsType

Defines the nature of the email address, such as 'personal' or 'work'. This classification helps in organizing emails based on their usage context, enhancing user profile management. It is optional and can be omitted if not applicable.

## Example Usage

```typescript
import { CreateUserRequestEmailsType } from "apideck/models/components";

let value: CreateUserRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```