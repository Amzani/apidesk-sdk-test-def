# CreateCompanyRequestEmailsType

Defines the nature of the email address, such as 'personal', 'work', or 'support'. This classification aids in understanding the context and intended use of each email address. It is optional and can be omitted if not applicable.

## Example Usage

```typescript
import { CreateCompanyRequestEmailsType } from "apideck/models/components";

let value: CreateCompanyRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```