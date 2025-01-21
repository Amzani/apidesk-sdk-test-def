# UpdateLeadRequestType

Specifies the category or role of the website associated with the lead, such as 'personal', 'business', or 'portfolio'. This helps in categorizing the website information for better organization and retrieval. Ensure the type is a valid string that accurately reflects the website's purpose.

## Example Usage

```typescript
import { UpdateLeadRequestType } from "apideck/models/components";

let value: UpdateLeadRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```