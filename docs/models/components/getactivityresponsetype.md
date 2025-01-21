# GetActivityResponseType

The type of the activity, represented as a string. This required field specifies the nature of the activity, such as 'meeting', 'call', or 'task', and is crucial for categorizing and processing activities within the CRM system.

## Example Usage

```typescript
import { GetActivityResponseType } from "apideck/models/components";

let value: GetActivityResponseType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```