# UpdateCompanyRequestAddressesType

Specifies the type of address, such as 'billing' or 'shipping'. This helps categorize the address within the company's records, allowing for more organized data management and retrieval.

## Example Usage

```typescript
import { UpdateCompanyRequestAddressesType } from "apideck/models/components";

let value: UpdateCompanyRequestAddressesType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "home" | "office" | "shipping" | "billing" | "other"
```