# ListCompaniesResponseDataType

This property specifies the category of the phone number associated with a company, such as 'mobile', 'landline', or 'fax'. It is a string value that helps in identifying the nature of the phone number, facilitating appropriate communication and routing within the CRM system. Understanding the type of phone number is crucial for applications that need to handle different communication channels effectively.

## Example Usage

```typescript
import { ListCompaniesResponseDataType } from "apideck/models/components";

let value: ListCompaniesResponseDataType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "work" | "office" | "mobile" | "assistant" | "fax" | "direct-dial-in" | "personal" | "other"
```