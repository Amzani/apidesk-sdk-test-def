# OpportunitiesSortBy

Defines the attribute by which the list of opportunities should be sorted. This parameter helps in organizing the data based on specific fields such as 'created_date' or 'amount', facilitating easier data analysis and reporting.

## Example Usage

```typescript
import { OpportunitiesSortBy } from "apideck/models/components";

let value: OpportunitiesSortBy = "created_at";
```

## Values

```typescript
"created_at" | "updated_at" | "title" | "win_probability" | "monetary_amount" | "status"
```