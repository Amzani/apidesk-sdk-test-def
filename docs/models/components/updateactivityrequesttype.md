# UpdateActivityRequestType

Specifies the category or nature of the activity being updated. This required field helps classify the activity within the CRM, ensuring it is processed and displayed correctly. It must be a valid string that accurately represents the activity type.

## Example Usage

```typescript
import { UpdateActivityRequestType } from "apideck/models/components";

let value: UpdateActivityRequestType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```