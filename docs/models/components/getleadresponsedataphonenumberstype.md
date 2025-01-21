# GetLeadResponseDataPhoneNumbersType

The classification of the phone number, indicating its purpose such as 'mobile', 'home', or 'work'. This optional field helps in identifying the context in which the number should be used for contacting the lead.

## Example Usage

```typescript
import { GetLeadResponseDataPhoneNumbersType } from "apideck/models/components";

let value: GetLeadResponseDataPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```