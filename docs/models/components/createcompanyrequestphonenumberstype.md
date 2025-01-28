# CreateCompanyRequestPhoneNumbersType

Specifies the category of the phone number, such as 'work', 'home', or 'mobile'. This helps in identifying the context in which the phone number is used within the CRM system. It is optional and can be left out if not applicable.

## Example Usage

```typescript
import { CreateCompanyRequestPhoneNumbersType } from "apideck/models/components";

let value: CreateCompanyRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```