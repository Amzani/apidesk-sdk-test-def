# ContactsSortBy

Specifies the field by which to sort the list of contacts. This parameter allows users to organize the returned contact data based on specific attributes, enhancing data retrieval efficiency.

## Example Usage

```typescript
import { ContactsSortBy } from "apideck/models/components";

let value: ContactsSortBy = "created_at";
```

## Values

```typescript
"created_at" | "updated_at" | "name" | "first_name" | "last_name" | "email"
```