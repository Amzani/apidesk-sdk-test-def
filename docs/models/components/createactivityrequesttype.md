# CreateActivityRequestType

This required property defines the category or nature of the activity being added. It is crucial for classifying the activity within the CRM system, ensuring that it is processed and displayed correctly according to its type. The value must be a valid string representing the activity's type.

## Example Usage

```typescript
import { CreateActivityRequestType } from "apideck/models/components";

let value: CreateActivityRequestType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```