# ActivityUpdateRequestStatus

The current status of the attendee in relation to the activity, such as 'confirmed', 'tentative', or 'declined'. This status helps track participation and engagement levels, allowing for better planning and resource allocation. It is essential for real-time updates and ensuring that all stakeholders are informed of the attendee's intentions.

## Example Usage

```typescript
import { ActivityUpdateRequestStatus } from "apideck/models/components";

let value: ActivityUpdateRequestStatus = "accepted";
```

## Values

```typescript
"accepted" | "tentative" | "declined"
```