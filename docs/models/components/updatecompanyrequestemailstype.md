# UpdateCompanyRequestEmailsType

Defines the nature of the email address, such as 'work', 'personal', or 'support'. This classification helps in organizing and managing email communications based on their intended use. It is optional and should be a valid string indicating the email type.

## Example Usage

```typescript
import { UpdateCompanyRequestEmailsType } from "apideck/models/components";

let value: UpdateCompanyRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```