# CreateLeadRequestType

Specifies the category or purpose of the website associated with the lead, such as 'personal', 'business', or 'portfolio'. This helps in categorizing the lead's online presence for better context in CRM records. Ensure the type is a valid string that accurately reflects the website's use.

## Example Usage

```typescript
import { CreateLeadRequestType } from "apideck/models/components";

let value: CreateLeadRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```