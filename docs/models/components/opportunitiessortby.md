# OpportunitiesSortBy

Specify the field by which to sort the activities, such as 'date' or 'type'. This determines the order in which the activities are returned.

## Example Usage

```typescript
import { OpportunitiesSortBy } from "apideck/models/components";

let value: OpportunitiesSortBy = "created_at";
```

## Values

```typescript
"created_at" | "updated_at" | "title" | "win_probability" | "monetary_amount" | "status"
```