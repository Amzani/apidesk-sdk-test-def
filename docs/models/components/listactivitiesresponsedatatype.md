# ListActivitiesResponseDataType

Specifies the category or classification of the address, such as 'home', 'work', or 'billing'. This helps in organizing and filtering addresses based on their intended use within the CRM activities. The value is expected to be a string that describes the address type.

## Example Usage

```typescript
import { ListActivitiesResponseDataType } from "apideck/models/components";

let value: ListActivitiesResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```