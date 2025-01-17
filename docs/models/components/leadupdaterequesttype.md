# LeadUpdateRequestType

The type of website associated with the lead, such as 'personal', 'business', or 'portfolio'. This categorization helps CRM users quickly understand the nature of the website and its relevance to the lead's profile. While not required, specifying the type can enhance data organization and retrieval, aiding in targeted communication strategies.

## Example Usage

```typescript
import { LeadUpdateRequestType } from "apideck/models/components";

let value: LeadUpdateRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```