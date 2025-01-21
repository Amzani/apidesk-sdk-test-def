# Status

The current status of the attendee in relation to the activity, such as 'confirmed', 'tentative', or 'declined'. This optional field helps in tracking participation and should be a valid status string recognized by the CRM system.

## Example Usage

```typescript
import { Status } from "apideck/models/components";

let value: Status = "accepted";
```

## Values

```typescript
"accepted" | "tentative" | "declined"
```