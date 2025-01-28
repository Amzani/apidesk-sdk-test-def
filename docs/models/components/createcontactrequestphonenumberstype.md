# CreateContactRequestPhoneNumbersType

The type of phone number, such as 'mobile', 'home', or 'work'. This optional field helps categorize the phone number, aiding in better organization and retrieval of contact information. It should be a descriptive string that accurately represents the phone number's usage context.

## Example Usage

```typescript
import { CreateContactRequestPhoneNumbersType } from "apideck/models/components";

let value: CreateContactRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```