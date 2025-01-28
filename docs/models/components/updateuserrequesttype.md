# UpdateUserRequestType

Specifies the category of the address, such as 'home' or 'work'. This helps in organizing and differentiating between multiple addresses associated with a user. Ensure the type is a valid string that accurately represents the address's purpose.

## Example Usage

```typescript
import { UpdateUserRequestType } from "apideck/models/components";

let value: UpdateUserRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```