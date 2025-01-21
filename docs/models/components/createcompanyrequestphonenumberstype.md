# CreateCompanyRequestPhoneNumbersType

Specifies the category of the phone number, such as 'work', 'home', or 'mobile'. This helps in organizing and identifying the purpose of each phone number associated with the company. It is optional and can be left blank if categorization is not needed.

## Example Usage

```typescript
import { CreateCompanyRequestPhoneNumbersType } from "apideck/models/components";

let value: CreateCompanyRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```