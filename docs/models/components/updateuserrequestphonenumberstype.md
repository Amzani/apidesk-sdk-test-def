# UpdateUserRequestPhoneNumbersType

Specifies the category of the phone number, such as 'home', 'work', or 'mobile'. This helps in identifying the context in which the phone number is used, ensuring accurate communication channels are maintained. It is optional and can be left blank if the type is not specified.

## Example Usage

```typescript
import { UpdateUserRequestPhoneNumbersType } from "apideck/models/components";

let value: UpdateUserRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```