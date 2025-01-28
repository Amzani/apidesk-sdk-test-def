# UpdateLeadRequestType

Specifies the category or role of the website associated with the lead. This property helps in distinguishing between different types of websites, such as personal, business, or social media, which can be crucial for targeted communication and marketing strategies. Ensure the type is a valid string that accurately represents the website's purpose.

## Example Usage

```typescript
import { UpdateLeadRequestType } from "apideck/models/components";

let value: UpdateLeadRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "work" | "personal" | "other"
```