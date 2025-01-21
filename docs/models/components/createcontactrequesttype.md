# CreateContactRequestType

Specifies the type of website, such as 'personal' or 'business', to categorize the website's purpose. This optional field helps in organizing and filtering contacts based on their website types within the CRM.

## Example Usage

```typescript
import { CreateContactRequestType } from "apideck/models/components";

let value: CreateContactRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```