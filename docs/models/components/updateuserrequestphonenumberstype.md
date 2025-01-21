# UpdateUserRequestPhoneNumbersType

Specifies the category of the phone number, such as 'mobile', 'home', or 'work'. This helps in identifying the context in which the phone number is used, aiding in better communication management within the CRM system. If provided, it should be a valid string representing the phone type.

## Example Usage

```typescript
import { UpdateUserRequestPhoneNumbersType } from "apideck/models/components";

let value: UpdateUserRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```