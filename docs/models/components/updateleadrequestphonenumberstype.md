# UpdateLeadRequestPhoneNumbersType

Specifies the category of the phone number, such as 'mobile', 'home', or 'work'. This helps in identifying the context in which the phone number is used, aiding in more personalized communication strategies. The value should be a predefined string that matches one of the accepted phone number types in the CRM system.

## Example Usage

```typescript
import { UpdateLeadRequestPhoneNumbersType } from "apideck/models/components";

let value: UpdateLeadRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```