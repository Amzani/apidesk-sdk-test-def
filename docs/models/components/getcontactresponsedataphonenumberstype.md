# GetContactResponseDataPhoneNumbersType

Specifies the category of the phone number, such as 'mobile', 'home', or 'work'. This helps in identifying the context in which the phone number is used. The value is a string that describes the type of phone number associated with the contact.

## Example Usage

```typescript
import { GetContactResponseDataPhoneNumbersType } from "apideck/models/components";

let value: GetContactResponseDataPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```