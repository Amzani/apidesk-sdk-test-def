# CreateCompanyRequestEmailsType

Defines the type of email address, such as 'work', 'personal', or 'support'. This categorization helps in organizing and managing email communications related to the company. It is optional and can be specified to provide additional context.

## Example Usage

```typescript
import { CreateCompanyRequestEmailsType } from "apideck/models/components";

let value: CreateCompanyRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```