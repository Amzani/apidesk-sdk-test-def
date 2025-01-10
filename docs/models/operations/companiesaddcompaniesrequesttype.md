# CompaniesAddCompaniesRequestType

Specifies the type of email address, such as 'work', 'personal', or 'support'. This categorization helps in organizing and prioritizing communications based on the context and purpose of the email. While optional, defining the email type can enhance clarity in communication strategies.

## Example Usage

```typescript
import { CompaniesAddCompaniesRequestType } from "apideck/models/operations";

let value: CompaniesAddCompaniesRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "billing" | "other"
```