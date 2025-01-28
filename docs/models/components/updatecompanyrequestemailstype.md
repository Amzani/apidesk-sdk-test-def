# UpdateCompanyRequestEmailsType

Defines the role or category of the email address, such as 'primary', 'secondary', or 'billing'. This helps in organizing and prioritizing email communications with the company. It is optional and should be a string that reflects the email's purpose.

## Example Usage

```typescript
import { UpdateCompanyRequestEmailsType } from "apideck/models/components";

let value: UpdateCompanyRequestEmailsType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```