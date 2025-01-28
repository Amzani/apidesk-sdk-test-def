# CreateLeadRequestPhoneNumbersType

The type of phone number provided for the lead, such as 'mobile', 'home', or 'work'. This field helps categorize the phone number for better contact management and is optional. Ensure the type is a valid string that accurately describes the phone number's usage context.

## Example Usage

```typescript
import { CreateLeadRequestPhoneNumbersType } from "apideck/models/components";

let value: CreateLeadRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```