# LeadsSortBy

Specify the field by which to sort the leads. This property determines the attribute used for ordering the results, such as 'name' or 'created_at'.

## Example Usage

```typescript
import { LeadsSortBy } from "apideck/models/components";

let value: LeadsSortBy = "created_at";
```

## Values

```typescript
"created_at" | "updated_at" | "name" | "first_name" | "last_name" | "email"
```