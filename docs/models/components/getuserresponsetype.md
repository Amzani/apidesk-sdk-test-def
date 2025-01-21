# GetUserResponseType

Indicates the type of address, such as 'home', 'work', or 'billing'. This string helps categorize the address for better organization and retrieval within the user's profile.

## Example Usage

```typescript
import { GetUserResponseType } from "apideck/models/components";

let value: GetUserResponseType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```