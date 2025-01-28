# ListCompaniesResponseType

This property specifies the category or purpose of the address associated with a company, such as 'billing', 'shipping', or 'office'. It helps in identifying the role of the address within the company's operations, ensuring that the correct address is used for the appropriate context. The value is expected to be a string that clearly defines the address type, aiding in the organization and retrieval of company address information.

## Example Usage

```typescript
import { ListCompaniesResponseType } from "apideck/models/components";

let value: ListCompaniesResponseType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```