# LeadCreateRequestPhoneNumbersType

The type of phone number, indicating its purpose or usage context, such as 'mobile', 'home', 'work', etc. This classification helps in organizing contact methods and is crucial for determining the best way to reach a user. It is optional but recommended for clarity in communication preferences.

## Example Usage

```typescript
import { LeadCreateRequestPhoneNumbersType } from "apideck/models/components";

let value: LeadCreateRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```