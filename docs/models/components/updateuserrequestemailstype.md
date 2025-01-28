# UpdateUserRequestEmailsType

Defines the type of email address, such as 'personal', 'work', or 'other'. This classification helps in organizing and prioritizing email communications based on their intended use. It is optional and can be omitted if the type is not relevant.

## Example Usage

```typescript
import { UpdateUserRequestEmailsType } from "apideck/models/components";

let value: UpdateUserRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```