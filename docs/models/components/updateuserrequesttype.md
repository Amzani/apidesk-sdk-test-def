# UpdateUserRequestType

Specifies the category of the address, such as 'home', 'work', or 'billing'. This helps in organizing and differentiating between multiple addresses associated with a user. The value should be a valid string that matches predefined address types in the CRM.

## Example Usage

```typescript
import { UpdateUserRequestType } from "apideck/models/components";

let value: UpdateUserRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```