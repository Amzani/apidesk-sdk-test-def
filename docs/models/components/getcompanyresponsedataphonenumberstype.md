# GetCompanyResponseDataPhoneNumbersType

This property indicates the type of phone number provided, such as 'mobile', 'landline', or 'fax'. It helps in understanding the nature of the contact method and is optional, allowing flexibility in how phone numbers are categorized in the CRM.

## Example Usage

```typescript
import { GetCompanyResponseDataPhoneNumbersType } from "apideck/models/components";

let value: GetCompanyResponseDataPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```