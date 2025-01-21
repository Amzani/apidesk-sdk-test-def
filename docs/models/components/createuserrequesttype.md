# CreateUserRequestType

Specifies the category or purpose of the address, such as 'home', 'work', or 'billing'. This helps in organizing and retrieving addresses based on their usage context. The value should be a valid string that clearly indicates the address type, though it is optional.

## Example Usage

```typescript
import { CreateUserRequestType } from "apideck/models/components";

let value: CreateUserRequestType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```