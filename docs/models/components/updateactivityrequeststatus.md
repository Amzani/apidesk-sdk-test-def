# UpdateActivityRequestStatus

The current status of the attendee in relation to the activity, such as confirmed, tentative, or declined. This optional field helps track the attendee's participation status, aiding in the management and coordination of the activity within the CRM. Ensure the status is a valid string reflecting the attendee's current state.

## Example Usage

```typescript
import { UpdateActivityRequestStatus } from "apideck/models/components";

let value: UpdateActivityRequestStatus = "accepted";
```

## Values

```typescript
"accepted" | "tentative" | "declined"
```