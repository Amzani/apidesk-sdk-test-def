# ActivityType

This field specifies the type of the CRM activity, indicating the nature or category of the activity being recorded. It is a required field and helps in classifying the activity for better organization and retrieval. The value is a string that describes the activity type, such as 'call', 'meeting', or 'task'.

## Example Usage

```typescript
import { ActivityType } from "apideck/models/components";

let value: ActivityType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```