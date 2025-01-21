# UpdateActivityRequestType

Specifies the category or nature of the activity, such as 'meeting', 'call', or 'task'. This field is mandatory and helps in classifying the activity for better tracking and reporting within the CRM. Ensure the type is a valid string that matches predefined activity types in the system.

## Example Usage

```typescript
import { UpdateActivityRequestType } from "apideck/models/components";

let value: UpdateActivityRequestType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```