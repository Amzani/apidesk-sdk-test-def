# UserPhoneNumbersType

Specifies the type of phone number, such as 'mobile', 'home', or 'work'. This string helps categorize the phone number for better organization and retrieval within the CRM system. It is optional and may vary based on user input.

## Example Usage

```typescript
import { UserPhoneNumbersType } from "apideck/models/components";

let value: UserPhoneNumbersType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```