# ActivityGetResponseType

The category or classification of the activity, such as 'call', 'meeting', or 'task'. This required field helps in organizing and filtering activities within the CRM, ensuring that users can easily identify and manage different types of interactions. It is crucial for reporting and analytics, as it allows businesses to analyze activity patterns and performance metrics. The type should be selected from predefined categories to maintain consistency across records.

## Example Usage

```typescript
import { ActivityGetResponseType } from "apideck/models/components";

let value: ActivityGetResponseType = "meeting";
```

## Values

```typescript
"call" | "meeting" | "email" | "note" | "task" | "deadline" | "send-letter" | "send-quote" | "other"
```