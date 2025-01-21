# ListActivitiesResponseType

The type of activity being recorded, represented as a string. This field is mandatory and indicates the nature of the activity, such as a call, meeting, or task, providing essential context for understanding the activity's purpose within the CRM.

## Example Usage

```typescript
import { ListActivitiesResponseType } from "apideck/models/components";

let value: ListActivitiesResponseType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```