# Type

Specifies the category or role of the contact within the CRM, such as 'customer', 'vendor', or 'lead'. This optional field helps in organizing and filtering contacts based on their relationship to the business. Ensure the type aligns with predefined categories used in the CRM for consistency.

## Example Usage

```typescript
import { Type } from "apideck/models/components";

let value: Type = "personal";
```

## Values

```typescript
"customer" | "supplier" | "employee" | "personal"
```