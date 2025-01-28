# Status

The current status of the attendee in relation to the activity, such as confirmed, tentative, or declined. This optional field helps in tracking the attendee's participation status, which is crucial for planning and resource allocation. It should be a valid status string that reflects the attendee's engagement level.

## Example Usage

```typescript
import { Status } from "apideck/models/components";

let value: Status = "accepted";
```

## Values

```typescript
"accepted" | "tentative" | "declined"
```