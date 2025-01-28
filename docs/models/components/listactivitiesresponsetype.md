# ListActivitiesResponseType

The category or nature of the activity, indicating what type of action or event it represents within the CRM. This property is crucial for understanding the context and purpose of the activity, and it is required for processing and categorizing activities. The format is a string, and it may correspond to predefined activity types within the CRM system.

## Example Usage

```typescript
import { ListActivitiesResponseType } from "apideck/models/components";

let value: ListActivitiesResponseType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```