# CreateActivityRequestType

Specifies the category or nature of the activity, such as 'call', 'meeting', or 'task'. This field is mandatory and helps in classifying the activity for better organization and retrieval within the CRM. The value must be a valid string representing one of the predefined activity types supported by the system.

## Example Usage

```typescript
import { CreateActivityRequestType } from "apideck/models/components";

let value: CreateActivityRequestType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```