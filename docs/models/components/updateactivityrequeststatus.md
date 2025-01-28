# UpdateActivityRequestStatus

The current status of the attendee in relation to the activity, such as 'confirmed', 'tentative', or 'cancelled'. This field helps track the attendee's participation status and is important for planning and resource allocation. Ensure the status accurately reflects the attendee's commitment to the activity.

## Example Usage

```typescript
import { UpdateActivityRequestStatus } from "apideck/models/components";

let value: UpdateActivityRequestStatus = "accepted";
```

## Values

```typescript
"accepted" | "tentative" | "declined"
```