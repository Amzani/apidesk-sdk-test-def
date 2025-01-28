# UpdateContactRequestPhoneNumbersType

Indicates the type of phone number provided, such as 'mobile', 'home', or 'work'. This optional field helps categorize the phone number for better organization and context within the CRM. Ensure the type is specified as a valid string to aid in contact management.

## Example Usage

```typescript
import { UpdateContactRequestPhoneNumbersType } from "apideck/models/components";

let value: UpdateContactRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```