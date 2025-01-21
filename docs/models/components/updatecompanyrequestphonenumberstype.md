# UpdateCompanyRequestPhoneNumbersType

Specifies the category of the phone number, such as 'work', 'home', or 'mobile'. This helps in identifying the context in which the phone number is used within the company's contact information. It is optional and should be a valid string representing the type of phone number.

## Example Usage

```typescript
import { UpdateCompanyRequestPhoneNumbersType } from "apideck/models/components";

let value: UpdateCompanyRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```