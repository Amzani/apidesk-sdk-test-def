# ContactType

Specifies the type or category of the contact, such as 'individual' or 'organization'. This classification helps in organizing contacts and applying specific business logic based on the contact type. The type is represented as a string and may influence how the contact is handled in various CRM processes.

## Example Usage

```typescript
import { ContactType } from "apideck/models/components";

let value: ContactType = "personal";
```

## Values

```typescript
"customer" | "supplier" | "employee" | "personal"
```