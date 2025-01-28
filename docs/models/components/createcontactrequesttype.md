# CreateContactRequestType

Specifies the type of website associated with the contact, such as personal, business, or social media. This field helps categorize the website for better organization and retrieval within the CRM system. Although optional, providing this information can enhance the contact's profile.

## Example Usage

```typescript
import { CreateContactRequestType } from "apideck/models/components";

let value: CreateContactRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```