# ActivitiesListResponseDataType

Specifies the type of address, such as 'home', 'work', or 'billing'. This classification helps in organizing and retrieving addresses based on their usage context. It is important for applications that need to differentiate between various address types for operations like shipping or invoicing.

## Example Usage

```typescript
import { ActivitiesListResponseDataType } from "apideck/models/components";

let value: ActivitiesListResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```