# CreateLeadRequestPhoneNumbersType

The type of phone number, indicating its purpose such as 'mobile', 'home', or 'work'. This optional field helps categorize the phone number for better organization and retrieval within the CRM system. Providing this information can assist in tailoring communication strategies based on the lead's preferred contact method.

## Example Usage

```typescript
import { CreateLeadRequestPhoneNumbersType } from "apideck/models/components";

let value: CreateLeadRequestPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```