# LeadsSortBy

Specify the field by which to sort the activities, such as 'date' or 'type'. This determines the order in which the activities are returned.

## Example Usage

```typescript
import { LeadsSortBy } from "apideck/models/components";

let value: LeadsSortBy = "created_at";
```

## Values

```typescript
"created_at" | "updated_at" | "name" | "first_name" | "last_name" | "email"
```