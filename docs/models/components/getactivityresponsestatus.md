# GetActivityResponseStatus

The current status of the attendee in relation to the activity, such as 'confirmed', 'tentative', or 'declined'. This optional field provides insight into the attendee's participation level and is useful for planning and logistics.

## Example Usage

```typescript
import { GetActivityResponseStatus } from "apideck/models/components";

let value: GetActivityResponseStatus = "accepted";
```

## Values

```typescript
"accepted" | "tentative" | "declined"
```